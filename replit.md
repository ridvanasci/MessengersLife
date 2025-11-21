# Prophets of Islam Web Application

## Overview

This is an educational web application that explores the lives and teachings of the 25 prophets in Islamic tradition. The application provides an elegant, culturally-sensitive interface for learning about each prophet's biography, key events, teachings, and Quranic mentions. Built as a single-page application with React and TypeScript, it features bilingual content (English and Arabic), search functionality, filtering capabilities, and responsive design optimized for educational purposes.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Routing**
- React 18 with TypeScript for type-safe component development
- Wouter for lightweight client-side routing (two routes: home and prophet detail pages)
- Vite as the build tool and development server with HMR support
- Component-based architecture with reusable UI elements

**UI Component System**
- shadcn/ui component library (New York style variant) with Radix UI primitives
- Tailwind CSS for utility-first styling with custom design tokens
- Custom CSS variables for theming (light/dark mode support)
- Typography system: Playfair Display (headings), Inter (body text), Amiri (Arabic text)

**State Management**
- TanStack Query (React Query) for server state management and caching
- Local component state with React hooks
- No global state management library - data flows through props and context where needed

**Data Layer**
- Static prophet data stored in `shared/prophets-data.ts` as TypeScript interfaces
- Prophet interface includes: biographical info, key events, teachings, and Quran mention counts
- No API calls in current implementation - all data is client-side

**Design System Principles**
- Cultural sensitivity with Islamic geometric patterns and Arabic typography
- Educational clarity with clear information hierarchy
- Accessible navigation with search and filter capabilities
- Responsive grid layouts (3-column desktop, 2-column tablet, 1-column mobile)

### Backend Architecture

**Server Framework**
- Express.js for HTTP server and API routing
- Node.js runtime environment
- Custom Vite integration for serving the React application in development

**Session & Storage**
- In-memory storage implementation (`MemStorage` class) for user data
- Interface-based storage pattern (`IStorage`) allowing easy swap to database
- User schema defined with username and password fields

**Development Features**
- Custom request/response logging middleware
- Vite middleware mode for seamless development experience
- Hot module replacement (HMR) support
- Runtime error overlay for better debugging

**API Structure**
- RESTful API endpoints prefixed with `/api`
- JSON request/response format
- Routes registered through modular `registerRoutes` function
- Currently minimal API surface - storage interface prepared for expansion

### External Dependencies

**UI & Styling**
- **Radix UI**: Comprehensive set of accessible UI primitives (dialogs, dropdowns, tooltips, etc.)
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **class-variance-authority**: Utility for managing component variants
- **Lucide React**: Icon library for consistent iconography

**Data & Forms**
- **React Hook Form**: Form state management and validation
- **Zod**: Runtime type validation and schema definition
- **@hookform/resolvers**: Integration between React Hook Form and Zod
- **TanStack Query**: Async state management and caching

**Database (Configured but Not Actively Used)**
- **Drizzle ORM**: TypeScript ORM for database operations
- **@neondatabase/serverless**: Neon serverless PostgreSQL driver
- **drizzle-zod**: Generate Zod schemas from Drizzle table definitions
- Database schema defined in `shared/schema.ts` with users table
- Migration system configured via `drizzle.config.ts`

**Development Tools**
- **Vite**: Fast development server and optimized production builds
- **TypeScript**: Static type checking across entire codebase
- **ESBuild**: Fast JavaScript bundler for server code
- **TSX**: TypeScript execution for development server

**Note**: While database infrastructure is configured (Drizzle + PostgreSQL), the current implementation uses in-memory storage. The database setup is ready for future expansion when persistent storage is needed.