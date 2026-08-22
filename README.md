# Muthu Kumaravel — Portfolio

An Apple-grade, high-performance portfolio website built for a **GenAI & Machine Learning Architect**. Designed with the visual fidelity of Apple's product sites and GitHub's dark aesthetic, featuring an interactive bento grid of expertise, career timeline with deep-dive specs, filterable project directory, technical case studies with empirical training logs, and an optical photography gallery.

---

## 1. Key Features

- **Apple Product Site Aesthetics:**
  - SF Pro / Inter typography scale, gradient mask headlines, frosted glass floating pill dock (`backdrop-blur-2xl`).
  - Specular edge highlights, ambient glow meshes, and smooth spring physics transitions.
- **Architectural Pillars Bento Grid:**
  - Mouse-tracking radial cursor lighting across 5 core areas: AI Infrastructure & Distributed Training, GenAI & Autonomous Agents, High-Throughput Computer Vision, HPC & Kernel Optimization, and Technical Pre-Sales & Strategy.
- **Interactive Career Timeline:**
  - Experience timeline featuring Google (GCP), Quantiphi, MulticoreWare, and ValueLabs with modal deep-dives.
- **Filterable Systems & Deployments Directory:**
  - Categorized projects catalog with live category filter pills (GenAI & Agents, Computer Vision, HPC & Kernel, Cloud Strategy, RecSys & Sim, Pre-Sales & Strategy).
- **Technical Case Studies & Engineering Logs:**
  - Technical reports with empirical training benchmark tables and architectural post-mortems.
- **Optical & Sensory Gallery (Photography):**
  - Responsive masonry grid with hover EXIF camera HUD (Camera, Lens, Aperture, Shutter, ISO) and swipe-enabled Lightbox.
- **Spotlight Command Palette (`⌘K`):**
  - Instant keyboard search across sections, projects, case studies, and technical skills.
- **GitHub Pages Ready:**
  - Client-side static build with resilient relative asset paths for custom domains and subpaths.

---

## 2. Tech Stack

- **Framework:** React 19 + Vite
- **Styling:** Tailwind CSS (Custom Apple dark design tokens)
- **Motion & Interactions:** Framer Motion (spring physics, layout transitions, exit animations)
- **Icons:** Lucide React
- **Deployment:** `gh-pages` / GitHub Actions

---

## 3. Quick Start

### Installation
```bash
# Clone the repository
git clone https://github.com/muthu-kumaravel/muthu-kumaravel.github.io.git
cd muthu-kumaravel.github.io

# Install dependencies
npm install
```

### Local Development
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### Production Build & Linting
```bash
npm run lint
npm run build
npm run preview
```

---

## 4. Deployment to GitHub Pages

This project is configured to deploy directly to GitHub Pages:

```bash
npm run deploy
```

This runs `vite build` and deploys the generated `dist/` directory to the `gh-pages` branch.