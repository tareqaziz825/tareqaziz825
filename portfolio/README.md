# Mohammod Tareq Aziz — Personal Portfolio

A minimalist, modern personal portfolio website built with **Next.js** and designed for deployment on **Vercel**.

## ✨ Features

- 5 pages: About, Projects, Education, Skills, Experience
- Dark / Light mode toggle with localStorage persistence
- Responsive layout (mobile-first)
- Smooth fade-in animations using IntersectionObserver
- No external CSS frameworks — pure CSS custom properties
- Distinctive typography: DM Serif Display + DM Mono + Syne

## 🗂 Project Structure

```
portfolio/
├── components/
│   ├── Layout.js       # Nav, footer, theme toggle
│   ├── FadeIn.js       # Scroll-triggered fade animations
│   └── Connect.js      # Shared social/contact section

├── pages/
│   ├──blog/
|   |   └── [slug].js
│   ├── _app.js
│   ├── _document.js
│   ├── index.js        # About / Hero
│   ├── projects.js
│   ├── education.js
│   ├── skills.js
│   |── experience.js
│   └── blog.js

├── public/
│   ├── profile.jpg
│   ├── 400img.jpg
│   ├── 424img.jpg
│   ├── 425img.png
│   ├── 427img.png
│   ├── BRACU.svg
│   ├── DPSchool.png
│   ├── JESCollege.png
│   └── MMCollege.png

├── styles/
│   └── globals.css
├── next.config.js
└── package.json
```

## 🚀 Deploying to Vercel

### Step 1 — Push to GitHub

1. Create a new GitHub repository (e.g., `portfolio`)
2. Run in your terminal:

```bash
cd portfolio
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### Step 2 — Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Vercel auto-detects Next.js — no configuration needed
5. Click **Deploy** ✅

Your site will be live at `https://your-project.vercel.app`

### Optional: Custom Domain

In Vercel dashboard → Project → Settings → Domains → Add your custom domain.

## 🛠 Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📝 Customization

- Edit content directly in each page file under `pages/`
- Replace images in `public/` with your own
- Update social links and contact info in `components/Connect.js`
- Adjust colors and fonts in `styles/globals.css` (CSS variables at the top)
