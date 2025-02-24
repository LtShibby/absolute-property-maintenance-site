# Absolute Property Maintenance Website
Absolute Property Maintenance Website – A clean, professional business website for Absolute Property Maintenance, built with React + Vite and deployed on Vercel. This site provides service information, contact details, and a strong online presence for client outreach.

## Overview
This is the official website for **Absolute Property Maintenance**, designed to provide potential clients with a clean, modern experience. Built using **React + Vite**, the site is optimized for performance and SEO, with deployment managed through **Vercel**.

## Features
- **Service Pages** – Detailed information about property maintenance services
- **Project Gallery** – Showcase of completed work with before/after images
- **Testimonials** – Client reviews and feedback
- **Contact Form** – Easy-to-use contact system with form validation
- **Service Areas** – Map integration showing coverage areas
- **Responsive Design** – Mobile-friendly and optimized for all devices
- **Fast Deployment** – Hosted on Vercel for smooth CI/CD

## Tech Stack
- **Framework:** React with Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **UI Components:** HeadlessUI
- **Icons:** HeroIcons
- **Maps:** Google Maps API (for service area)
- **Deployment:** Vercel
- **Analytics:** Google Analytics (optional)

## Getting Started

### Prerequisites
Ensure you have the following installed:
- **Node.js** (v18+ recommended)
- **npm** (or `pnpm/yarn`)

### Installation
1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/absolute-property-maintenance-site.git
cd absolute-property-maintenance-site
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure
```
src/
├── components/          # Reusable UI components
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── context/            # React context providers
├── utils/              # Utility functions
├── assets/            
│   ├── images/         # Image assets
│   └── icons/          # Icon assets
└── styles/             # Global styles
```

## Development Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Lint code

## Recommended Next Steps
1. Set up the project structure
2. Create core components (Header, Footer, Home page)
3. Implement responsive navigation
4. Design and implement service pages
5. Create contact form with validation
6. Add image gallery for completed projects
7. Implement SEO best practices
8. Deploy to Vercel

## Contributing
This is a private business website. Please contact the repository owner for contribution guidelines.

## License
This project is private and proprietary. All rights reserved.

## Deployment

This project is configured for deployment on Vercel. To deploy:

1. Fork or clone this repository
2. Create a new project on Vercel
3. Connect your repository to Vercel
4. Add the following environment variables in Vercel:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
5. Deploy!

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel
```

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```
