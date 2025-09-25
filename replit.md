# Overview

Inviteee is a digital event invitation platform that creates AI-powered wedding and event websites with smart guest management features. The application is built as a full-stack web application with a React frontend and Express.js backend, designed to help users create personalized event websites with RSVP tracking, digital guestbooks, seating arrangements, and other event management tools.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript in SPA (Single Page Application) mode
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design system
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and API interactions
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ESM modules
- **API Design**: RESTful API architecture with structured error handling
- **Development Setup**: Hot reload with Vite integration in development mode
- **Request Logging**: Custom middleware for API request/response logging

## Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Development Storage**: In-memory storage implementation for development/testing
- **Connection**: Neon Database serverless PostgreSQL for production
- **Session Management**: Ready for connect-pg-simple session store integration

## Component Architecture
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Design System**: Consistent theming with CSS custom properties and dark mode support
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints
- **Component Structure**: Modular section-based components for landing page content

## Business Logic Features
- **Contact Form**: Validated contact submissions with email notifications
- **Email Service**: SendGrid integration for transactional emails
- **Event Management**: Support for multiple event types (weddings, corporate, birthdays)
- **Portfolio Showcase**: Dynamic portfolio section with live website previews

# External Dependencies

## Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Router (Wouter)
- **Build Tools**: Vite, TypeScript, ESBuild for production builds
- **Development Tools**: TSX for TypeScript execution, various Replit plugins

## UI and Styling
- **Component Library**: Radix UI primitives for accessible components
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **Icons**: Lucide React for consistent iconography
- **Fonts**: Google Fonts integration (Inter, Fira Code, etc.)

## Database and Validation
- **ORM**: Drizzle ORM with PostgreSQL adapter
- **Database**: Neon Database serverless PostgreSQL
- **Validation**: Zod for runtime type validation and schema definition
- **Session Storage**: connect-pg-simple for PostgreSQL session management

## External Services
- **Email Service**: SendGrid for transactional email delivery
- **Payment Processing**: Stripe integration (React Stripe.js, Stripe.js)
- **Development**: Replit-specific plugins for enhanced development experience

## State Management and Utilities
- **API Client**: TanStack Query for server state and caching
- **Form Handling**: React Hook Form with Hookform Resolvers
- **Utilities**: clsx, class-variance-authority for conditional styling
- **Date Handling**: date-fns for date manipulation and formatting