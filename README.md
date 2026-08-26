# GlassMax™ - Premium Laboratory Glassware & Scientific Labware

Official web application for **GlassMax** by **N.V. Scientific Glass Industries** (Est. 1976, Ambala Cantt, India).

![GlassMax Logo](/public/assets/logo.webp)

## 🧪 Overview

GlassMax is a modern, high-performance web platform showcasing precision-manufactured borosilicate 3.3 laboratory glassware, distillation units, volumetric flasks, apparatus, and scientific equipment.

### Features
- **Interactive Product Catalog**: Real-time live search, category filtering, and product detail views with 200% focal-point hover zoom.
- **Micro-Interactions & Animations**: Framer Motion hero background slideshow, animated stats counters, infinite running marquee ticker, and review carousel.
- **Enquiry & Contact Integrations**: WhatsApp integration with pre-filled product enquiries, direct phone calls, email, and interactive Google Maps embed.
- **Product Catalogue**: Includes complete 3.35 MB 2026-27 Product Catalogue PDF.
- **Responsive & Accessible**: Fully responsive layout with mobile drawer navigation, custom OKLCH color theme, and glassmorphic UI.

---

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript + Vite
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS + Custom OKLCH Theme
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Cloudflare Pages (`glassmax.in`)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/TattvaAI/glassmax.git
cd glassmax

# Install dependencies
npm install
```

### Development
```bash
# Start local development server with hot-reload
npm run dev
```

### Production Build
```bash
# Typecheck and build optimized static bundle
npm run build

# Preview production build locally
npm run preview
```

### Deployment (Cloudflare Pages)
```bash
# Deploy to Cloudflare Pages via Wrangler
npx wrangler pages deploy dist --project-name glassmax --branch main
```

---

## 📄 License

© 2026 GlassMax™ (N.V. Scientific Glass Industries). All rights reserved.
