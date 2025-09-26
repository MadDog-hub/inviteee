import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { randomUUID } from "crypto";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Simple in-memory storage for serverless
class MemStorage {
  constructor() {
    this.contactSubmissions = new Map();
  }

  async createContactSubmission(insertSubmission) {
    const id = randomUUID();
    const submission = {
      ...insertSubmission,
      phone: insertSubmission.phone ?? null,
      id,
      createdAt: new Date(),
    };
    this.contactSubmissions.set(id, submission);
    return submission;
  }

  async getContactSubmissions() {
    return Array.from(this.contactSubmissions.values());
  }
}

const storage = new MemStorage();

// Simple email service for serverless
async function sendEmail(options) {
  // Check if SendGrid is configured
  if (!process.env.SENDGRID_API_KEY) {
    console.warn('SENDGRID_API_KEY not configured, email will be simulated');
    return { success: false, message: 'Email service not configured' };
  }

  try {
    const sgMail = await import('@sendgrid/mail');
    sgMail.default.setApiKey(process.env.SENDGRID_API_KEY);
    
    await sgMail.default.send(options);
    return { success: true, message: 'Email sent successfully' };
  } catch (error) {
    console.error('Email error:', error);
    return { success: false, message: 'Email failed to send' };
  }
}

// Validation schema (simplified for serverless)
function validateContactSubmission(data) {
  const errors = [];
  
  if (!data.name || typeof data.name !== 'string' || data.name.trim().length === 0) {
    errors.push('Name is required');
  }
  
  if (!data.email || typeof data.email !== 'string' || !data.email.includes('@')) {
    errors.push('Valid email is required');
  }
  
  if (!data.eventType || typeof data.eventType !== 'string') {
    errors.push('Event type is required');
  }
  
  if (!data.message || typeof data.message !== 'string' || data.message.trim().length === 0) {
    errors.push('Message is required');
  }
  
  if (errors.length > 0) {
    throw new Error(errors.join(', '));
  }
  
  return {
    name: data.name.trim(),
    email: data.email.trim().toLowerCase(),
    phone: data.phone ? data.phone.trim() : null,
    eventType: data.eventType,
    message: data.message.trim(),
  };
}

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Contact form submission endpoint
app.post("/api/contact", async (req, res) => {
  try {
    const validatedData = validateContactSubmission(req.body);
    
    // Store the submission
    const submission = await storage.createContactSubmission(validatedData);
    
    // Send notification email
    const fromEmail = process.env.SENDGRID_FROM_EMAIL || 'noreply@inviteee.com';
    const toEmail = process.env.CONTACT_EMAIL || 'hello@inviteee.com';
    
    const emailSent = await sendEmail({
      to: toEmail,
      from: fromEmail,
      subject: `New Contact Form Submission - ${validatedData.eventType}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Phone:</strong> ${validatedData.phone || 'Not provided'}</p>
        <p><strong>Event Type:</strong> ${validatedData.eventType}</p>
        <p><strong>Message:</strong></p>
        <p>${validatedData.message}</p>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${validatedData.name}
        Email: ${validatedData.email}
        Phone: ${validatedData.phone || 'Not provided'}
        Event Type: ${validatedData.eventType}
        Message: ${validatedData.message}
      `
    });
    
    // Send confirmation email to user
    await sendEmail({
      to: validatedData.email,
      from: fromEmail,
      subject: 'Thank you for contacting Inviteee!',
      html: `
        <h2>Thank you for your inquiry!</h2>
        <p>Hi ${validatedData.name},</p>
        <p>We've received your message about your ${validatedData.eventType} and will get back to you within 24 hours.</p>
        <p>Our team is excited to help you create an amazing digital invitation experience!</p>
        <br>
        <p>Best regards,<br>The Inviteee Team</p>
      `,
      text: `
        Thank you for your inquiry!
        
        Hi ${validatedData.name},
        
        We've received your message about your ${validatedData.eventType} and will get back to you within 24 hours.
        
        Our team is excited to help you create an amazing digital invitation experience!
        
        Best regards,
        The Inviteee Team
      `
    });
    
    res.json({ 
      success: true, 
      message: "Thank you for your message! We'll get back to you soon.",
      emailSent 
    });
    
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(400).json({ 
      success: false, 
      message: error.message || "Failed to process your request" 
    });
  }
});

// Admin endpoint removed for security - contact submissions should not be publicly accessible

// Handle all other API routes
app.all("*", (req, res) => {
  res.status(404).json({ message: "API endpoint not found" });
});

// Export for Vercel serverless functions - use handler wrapper for maximum compatibility
export default (req, res) => app(req, res);