# Manikanta Sai Medidi — Portfolio

A modern, dark-themed portfolio built with React + Vite + Tailwind CSS.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation & Run

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open browser at http://localhost:5173
```

### Build for Production

```bash
npm run build
npm run preview
```

---

## 📁 Add Your Files

Place these files in the `/public` folder:

| File | Description |
|------|-------------|
| `profile.jpg` | Your profile photo (recommended: 400×400px square) |
| `resume.pdf` | Your resume (will be downloaded when clicking the button) |

---

## 🎨 Customization

- **Colors**: Edit `tailwind.config.js` → `colors` section
- **Fonts**: Change Google Fonts import in `index.html` and update `tailwind.config.js` → `fontFamily`
- **Content**: Update data directly in each section file in `src/sections/`
- **New projects**: Add to the `projects` array in `src/sections/Projects.jsx`

---

## 📂 Project Structure

```
portfolio/
├── public/
│   ├── profile.jpg       ← Add your photo here
│   └── resume.pdf        ← Add your resume here
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── useScrollAnimate.js
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Certificates.jsx
│   │   ├── Achievements.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

---

## 🌐 Deployment

**Vercel** (recommended — free):
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com) → Import project
3. Deploy (zero config needed for Vite)

**Netlify**:
1. `npm run build`
2. Drag the `dist/` folder to [netlify.com/drop](https://app.netlify.com/drop)
