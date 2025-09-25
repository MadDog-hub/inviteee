import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { sendEmail } from "./services/sendgrid";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      
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
      
    } catch (error: any) {
      console.error('Contact form error:', error);
      res.status(400).json({ 
        success: false, 
        message: error.message || "Failed to process your request" 
      });
    }
  });

  // Get all contact submissions (for admin purposes)
  app.get("/api/contact", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
