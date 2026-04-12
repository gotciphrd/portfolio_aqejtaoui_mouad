# Portfolio – Mouad AQEJTAOUI

React + Tailwind CSS portfolio website built from a Figma design.

## Tech Stack
- **React 18** – UI framework
- **Vite** – build tool & dev server
- **Tailwind CSS v3** – utility-first styling
- **Google Fonts** – Share Tech Mono (monospace display font)

## Project Structure

```
portfolio/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── src/
    ├── main.jsx          # Entry point
    ├── App.jsx           # Root component
    ├── index.css         # Tailwind + global styles
    └── components/
        ├── Navbar.jsx        # Fixed nav with scroll effect
        ├── Hero.jsx          # Hero / landing section
        ├── Projects.jsx      # Projects grid
        ├── About.jsx         # About me + tools
        ├── Contact.jsx       # Contact links + commission CTA
        └── CustomCursor.jsx  # Custom cursor effect
```

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start dev server
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for production
```bash
npm run build
```

Output goes to `dist/` — deploy to Vercel, Netlify, or any static host.

## Customization

- **Projects**: Edit the `projects` array in `src/components/Projects.jsx`
- **Tools**: Edit the `tools` array in `src/components/About.jsx`
- **Colors**: Adjust in `tailwind.config.js` under `theme.extend.colors`
- **Bio text**: Edit directly in `src/components/About.jsx` and `Hero.jsx`
- **Contact links**: Edit the `contacts` array in `src/components/Contact.jsx`

## Features
- ✅ Custom animated cursor
- ✅ Typing effect on hero title
- ✅ Scroll-triggered fade-in animations
- ✅ Pixel-style CTA buttons with fill animation
- ✅ Sticky navbar with blur on scroll
- ✅ Responsive grid layout
- ✅ Floating dot-grid decorations
- ✅ Smooth scroll navigation
