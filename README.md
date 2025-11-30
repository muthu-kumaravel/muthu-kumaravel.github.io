# MK Portfolio: A Weekend Project (Pair Coded with Gemini CLI ❤️)  

A high-performance, interactive portfolio website designed with the aesthetic principles of Github + Apple's developer ecosystem. Built for an AI Infrastructure & Machine Learning Architect, it features fluid physics-based animations, glassmorphism, and a responsive bento-grid layout.

## 1. Overview

This project is a Single-Page Application (SPA) that mimics the "illusion" of multiple pages using dynamic state rendering. It separates content (Resume, Skills, Bio) from logic, allowing for easy updates via a JSON configuration object.

**Key Features:**

- **Physics Animations:** Spring-based page transitions using `framer-motion`.
- **Glassmorphism:** Heavy use of `backdrop-blur-xl` for that premium macOS feel.
- **Data-Driven:** All text and experience data are stored in a `content` object, making the site a CMS-lite.
- **Responsive:** Adaptive layouts that switch from stacked (Mobile) to Grid/Bento (Desktop).

## 2. Prerequisites

Before starting, ensure your environment is set up:

- **Node.js** (v18 or higher recommended)
- **Git** (Installed via Homebrew on Mac for best performance)
- **VS Code** (Recommended editor)

## 3. Quick Start (Reproduce using this code)

If you have cloned this repository, follow these steps to get it running locally:

1. **Install Dependencies:**

```
npm install
```

2. **Start Local Development Server:**

```
npm run dev
```

3. **View Site:** Open http://localhost:5173 in your browser.

## 4. Building from Scratch (Step-by-Step)

If you want to recreate this architecture in a fresh folder, follow this exact sequence:

**A. Initialize Project**

```bash
# Create Vite project with React template
npm create vite@latest my-portfolio -- --template react
cd my-portfolio

# Install core dependencies
npm install

# Install Design & Animation libraries
npm install -D tailwindcss postcss autoprefixer
npm install framer-motion lucide-react gh-pages
```

**B. Configure Tailwind**

1. Initialize Tailwind: 

```bash
npx tailwindcss init -p
```

2. Update `tailwind.config.js` (Please create one if the init command did not create the file):

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
```

3. Update `src/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;800&family=JetBrains+Mono:wght@400;500;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom Scrollbar for that "Pro" feel */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #000;
}
::-webkit-scrollbar-thumb {
  background: #333;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
```

**C. Application Logic**

Copy the provided `App.jsx` content into src/App.jsx. This single file contains:

- The **Header** & **Footer** components.
- The **Routing Logic** (State-based switching).
- The **Content Configuration** (JSON data).

## 5. Deployment (GitHub Pages)

This project uses the `gh-pages` package to deploy the `dist` folder to a `gh-pages` branch on GitHub.

**Setup (One-time)**

1. In `package.json`, add:

```json
"homepage": "https://<your-username>.github.io",
```

2. Update `scripts` in `package.json`:

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

3. In `vite.config.js`, set the base path:

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/', 
})
```

### Continuous Update Workflow

Whenever you make changes to the code or content, follow this two-step process to update your live site:

1. **Save Source Code (Git):** It is best practice to commit your changes to your source branch first.

```
git add .
git commit -m "Description of changes"
git push origin portfolio-v2  # or main
```

2. **Publish to Live Site:** Run the deploy script. This rebuilds the application and pushes the new build to the `gh-pages` branch.

```bash
npm run deploy
```

**Note:** This builds the project and pushes it to the gh-pages branch. The live site will update in 2-3 minutes.

## 6. Architecture & Tech Stack

**Frameworks**

- **React 18:** Core UI library.
- **Vite:** Next-generation frontend tooling (Lightning fast builds).
- **Tailwind CSS:** Utility-first CSS framework for rapid styling.
- **Framer Motion:** Production-ready animation library for React.
- **Lucide React:** Consistent, lightweight icon set.

**Code Structure**

- `src/App.jsx`: The Monolith. Contains the state `currentPage`, the `content` data object, and all sub-components (`Header`, `LandingPage`, `ResumePage`).
- `content` Object: A JSON-structure inside `App.jsx` that holds your specific Resume, Bio, and Links. Edit this to change text without touching code.