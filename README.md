# Software Engineer Portfolio & Showcase

A modern, high-performance developer portfolio built with an Apple-inspired minimalist aesthetic. Designed for speed, responsive typography, subtle micro-interactions, and automated CI/CD static deployment.

 **Live Website:** [kitalikedev.github.io](https://kitalikedev.github.io/)

---

##  Tech Stack & Architecture

- **Core & Runtime:** HTML5, Modern ES6+ JavaScript, Node.js (v20+ / v22 LTS)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (v4 Engine) with custom glassmorphism and continuous squircle curvature
- **Build Tool:** [Vite](https://vite.dev/) (Lightning-fast HMR and optimized asset bundling)
- **Animation & Motion:** [ScrollReveal](https://scrollrevealjs.org/) for viewport-triggered reveals
- **CI/CD & Hosting:** GitHub Actions workflow deploying production artifacts (`dist/`) directly to GitHub Pages

---

## 📂 Project Structure

```text
kitalikedev.github.io/
├── .github/
│   └── workflows/
│       └── static.yml        # Automated build and deploy workflow
├── public/
│   ├── imgs/                 # Static vector assets (SVG icons, brand marks)
│   └── banner.avif           # Visual assets
├── src/
│   ├── css/
│   │   └── style.css         # Tailwind imports and base styles
│   └── scripts/
│       ├── application.js    # Primary client-side controller & modules
│       └── scroll-reveal.js  # Viewport scroll animations
├── dist/                     # Production build output (gitignored)
├── index.html                # Semantic HTML entrypoint
├── package.json              # Dependency manifests and scripts
├── postcss.config.js         # PostCSS plugins setup
├── tailwind.config.js        # Tailwind layout and theme extensions
└── README.md