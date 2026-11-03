# Vanshika Rana — Developer Portfolio

A premium, editorial-style personal developer portfolio built with **React + Vite**, **Tailwind CSS**, and **Framer Motion**.

---

## 🚀 Running Locally

```bash
# 1. Navigate to the project directory
cd portfolio

# 2. Install dependencies (only once)
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🔧 Personalisation Checklist

Before deploying, update these items:

### 1. Email address
Open `src/components/Contact.jsx` and replace the `EMAIL` value inside the `CONFIG` object:
```js
const CONFIG = {
  EMAIL: 'your.email@example.com', // ← Replace with your real email
  ...
}
```

### 2. LinkedIn profile
In the same `CONFIG` object, replace the `LINKEDIN` value:
```js
LINKEDIN: 'https://linkedin.com/in/your-linkedin-handle', // ← Replace
```

### 3. Resume (optional)
1. Add your PDF as `public/resume.pdf`
2. In `Contact.jsx`, set `SHOW_RESUME: true`

### 4. Edit-anywhere marker
Every section's content lives in its own component file inside `src/components/`. All copy is plain JSX — easy to find and update.

---

## 📦 Building for Production

```bash
npm run build
```

The output goes to the `dist/` folder. You can preview it locally with:
```bash
npm run preview
```

---

## 🌐 Deploying to Vercel (Recommended)

### Option A — Vercel CLI (fastest)
```bash
# Install the CLI globally (once)
npm install -g vercel

# Inside the project folder
vercel
```
Follow the prompts. Vercel auto-detects Vite and sets the build command and output directory.

### Option B — Vercel Dashboard
1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and click **Add New Project**
3. Import your GitHub repo
4. Vercel auto-detects Vite — just click **Deploy**
5. Your site is live in ~60 seconds

> **Note:** No environment variables are needed for this project.

---

## 🗂️ Project Structure

```
portfolio/
├── index.html                  # HTML entry, SEO meta tags, Google Fonts
├── vite.config.js
├── tailwind.config.js          # Design tokens
├── postcss.config.js
├── public/
│   └── favicon.svg             # VR monogram icon
└── src/
    ├── main.jsx                # React entry
    ├── App.jsx                 # Root component
    ├── index.css               # Global styles + CSS utilities
    └── components/
        ├── Navbar.jsx          # Sticky nav, mobile menu
        ├── Hero.jsx            # Headline, VR illustration, CTAs
        ├── Projects.jsx        # 4 project cards with CSS illustrations
        ├── About.jsx           # First-person narrative, philosophy
        ├── Toolbox.jsx         # Skills by category with honest labels
        ├── Community.jsx       # Learning highlights + coding stats
        ├── Contact.jsx         # Copy-email, GitHub, LinkedIn ← edit here
        └── Footer.jsx          # VR monogram, dynamic year, back-to-top
```

---

## ♿ Accessibility

- Semantic HTML throughout (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`, `<article>`)
- All interactive elements have `aria-label` attributes
- Keyboard focus states are visible
- `prefers-reduced-motion` is respected globally in `index.css`
- Images/illustrations use `aria-hidden="true"` since they are decorative

---

Built by Vanshika Rana · 2025
