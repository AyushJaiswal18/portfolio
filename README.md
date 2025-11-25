# Developer Portfolio

A modern, aesthetic portfolio website built with React, TypeScript, and Vite. Features a dark theme with smooth animations and a responsive design.

## Features

- 🎨 Modern dark theme with gradient accents
- 📱 Fully responsive design
- ⚡ Built with Vite for fast development and builds
- 🎭 Smooth scroll animations and transitions
- 🧩 Modular component architecture
- 🚀 Ready for deployment with Docker

## Sections

- **Hero**: Eye-catching introduction with animated background
- **About**: Personal information and technologies
- **Skills**: Interactive skill bars and technology showcase
- **Projects**: Featured projects with links and tech stacks
- **Contact**: Contact form and social media links

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.tsx`):
   - Update name, title, and description
   - Modify the code block content

2. **About Section** (`src/components/About.tsx`):
   - Add your bio and information
   - Update the technologies list
   - Add your photo (replace the placeholder)

3. **Skills Section** (`src/components/Skills.tsx`):
   - Update skill categories and proficiency levels

4. **Projects Section** (`src/components/Projects.tsx`):
   - Add your actual projects
   - Update GitHub and demo links
   - Add project images

5. **Contact Section** (`src/components/Contact.tsx`):
   - Update social media links
   - Configure email address
   - Connect form to your backend/email service

### Styling

The color scheme can be customized in `src/index.css` by modifying the CSS variables:

```css
:root {
  --bg-primary: #0a0a0a;
  --bg-secondary: #111111;
  --accent-primary: #6366f1;
  --accent-secondary: #8b5cf6;
  /* ... */
}
```

## Deployment

This project includes Docker configuration for easy deployment. See the deployment section in the original template README for instructions on using GitHub Actions with Traefik.

### Docker Build

```bash
docker build -t portfolio .
docker run -p 80:80 portfolio
```

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **CSS3** - Styling with custom properties

## License

ISC
