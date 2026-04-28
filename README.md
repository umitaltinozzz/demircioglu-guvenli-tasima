# Demircioglu Guvenli Tasima

**Professional moving and transport company website.**

[![Live Site](https://img.shields.io/badge/Live%20Site-halisdemircioglunakliyat.com-blue?style=for-the-badge&logo=vercel)](https://www.halisdemircioglunakliyat.com/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-Components-000000?style=for-the-badge)](https://ui.shadcn.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

---

## Overview

A modern, responsive corporate website for Demircioglu Guvenli Tasima, a professional moving and transport company. The site focuses on clear service presentation, fast contact paths, strong mobile usability, and production-friendly performance.

Live site: [https://www.halisdemircioglunakliyat.com/](https://www.halisdemircioglunakliyat.com/)

## Features

- **Responsive landing experience** - Polished layout across mobile, tablet, and desktop
- **Service-focused sections** - Hero, services, about, trust reasons, and contact areas
- **Fast contact flow** - Floating WhatsApp button for immediate customer conversion
- **Interactive polish** - Parallax tilt effects, smooth scrolling, and section navigation
- **Reusable UI** - shadcn/ui and Radix primitives for accessible components
- **Production tooling** - Vite build, ESLint, Vercel analytics, and speed insights

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18, Vite 5 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 3, tailwindcss-animate |
| UI | shadcn/ui, Radix UI, lucide-react |
| Routing | React Router 6 |
| State/Data | TanStack Query 5 |
| Forms | react-hook-form, Zod |
| Analytics | Vercel Analytics, Speed Insights |

## Getting Started

```bash
git clone https://github.com/umitaltinozzz/demircioglu-guvenli-tasima.git
cd demircioglu-guvenli-tasima
npm install
npm run dev
```

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build |
| `npm run build:dev` | Build with development mode |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview the production build locally |

## Project Structure

```text
src/
|-- components/
|   |-- ui/                    # shadcn/ui base components
|   |-- Header.tsx
|   |-- HeroSection.tsx
|   |-- ServicesSection.tsx
|   |-- AboutSection.tsx
|   |-- WhyChooseUsSection.tsx
|   |-- ContactSection.tsx
|   |-- FloatingWhatsApp.tsx
|   `-- Footer.tsx
|-- pages/
|   |-- Index.tsx
|   `-- NotFound.tsx
|-- hooks/
|-- lib/
`-- main.tsx
```

## Deployment Notes

The project is suitable for static hosting after `npm run build`. Before publishing, verify the live contact numbers, WhatsApp link, service copy, metadata, and analytics configuration.

## License

[MIT License](./LICENSE)