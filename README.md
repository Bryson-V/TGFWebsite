# Todu Guam Foundation — Website Rebuild

A modern, full-stack Next.js rebuild of toduguam.com, migrated off WordPress and Elementor to deliver higher performance, better accessibility, and maintainable custom styling.

---

## 🚀 Getting Started

### Prerequisites
* Node.js: v18.18.0 or newer
* npm: v9.0.0 or newer

### Local Development

1. Install dependencies:
   npm install
   npm install leaflet react-leaflet
   npm install framer-motion
   npm install gray-matter
   npm install three @react-three/fiber @react-three/drei

2. Run the local development server:
   npm run dev
   

3. Open the site:
   Navigate to http://localhost:3000 in your browser. Any changes made to code or content will hot-reload automatically.

### Production Build

To test or generate a production build:

# Build static / optimized assets
npm run build

# Preview the production build locally
npm start

---

## 🛠 Tech Stack

* Framework: Next.js (App Router)
* Styling: CSS Modules (*.module.css) & Global Design Tokens
* Content System: Local Markdown (.md) + JSON data files & Modular Page Layouts
* Language: JavaScript (ES6+ / JSX)

---

## 📁 How the Project is Organized

```text
app/                       # Next.js App Router (Pages & Routes)
├── layout.js              # Root layout: Fonts, Global Providers, <Header>, <Footer>
├── globals.css            # Design tokens (colors, typography, spacing) & CSS resets
├── page.js                # Homepage route
├── about/                 # About Us page route
├── programs/              # Programs & Services route
├── news/                  # News & Announcements (Archive & [slug] dynamic pages)
├── contact/               # Contact page route
└── blog/                  # Blog / Press release pages

components/                # React UI Components
├── layout/                # Persistent site elements (Header, Footer, Navigation)
├── sections/              # Modular section blocks (Composed directly inside page.js files)
└── ui/                    # Reusable low-level UI (Button, Container, Modal, Cards)

content/                   # Data & Words (Separated from Code)
├── site-data/*.json       # Structured datasets (Nav links, impact metrics, team details)
└── news/*.md              # Markdown files for news articles & blog posts

lib/                       # Utility Functions & Helpers
└── content.js             # Filesystem reader (parses Markdown frontmatter & site JSON)

public/                    # Static Assets
└── images/                # Images organized by page and component usage


```

---

## 📄 Managing Site Content

This repository separates site copy and datasets from core application logic so that non-developers can easily update the website:

* Page Structure & Layout: Managed modularly by composing section components inside app/*/page.js files.
* Page Copy & Data: Managed inside .json files in content/site-data/.
* News Articles & Blog Posts: Managed as Markdown files in content/news/.

📘 Detailed Guide: See content/README.md for a step-by-step editor guide on writing and publishing new articles or updating existing site content.

---

## 🎨 Styling Approach

* CSS Modules: Each component uses its own ComponentName.module.css file sitting right next to it. Styles are automatically scoped to that specific component to prevent global style bleeding.
* Global Design Tokens: Brand colors, font stacks, container widths, and spacing rules are defined as CSS variables inside app/globals.css (e.g., var(--color-primary)).

---

## ➕ Adding New Pages & Components

### Adding a New Page
1. Create a folder under app/ matching the desired URL path (e.g., app/about/page.js for /about).
2. Build the page composition modularly by importing and arranging section components inside page.js wrapped in a React fragment. It will automatically inherit the global <Header> and <Footer> layout.
3. Update content/site-data/nav.json to route navigation links to the new internal path.

### Adding Reusable Components & Modules
* Place multi-page shared elements (buttons, cards, inputs) inside components/ui/.
* Place modular section blocks (e.g., specific heroes, feature grids, or content blocks) inside components/sections/ (and subfolders like components/sections/cares/).

---
