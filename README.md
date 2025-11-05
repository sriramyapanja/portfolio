# Clinical Trial Themed Portfolio - Sri Ramya Panja

A modern, clinical trial-inspired portfolio website showcasing professional experience, skills, education, and projects in a pharmaceutical/clinical research aesthetic.

## 🎨 Design Features

- **Clinical Trial Theme**: Designed with pharmaceutical industry aesthetics
- **Pill-shaped Navigation**: Clinical trial phase-based navigation (Phase I, II, III, IV)
- **Professional Color Scheme**: Clinical blues, medical cyans, and sterile whites
- **Interactive Elements**: Smooth animations, hover effects, and responsive design
- **Medical Icons**: Lab coats, test tubes, pills, and clinical imagery throughout

## 📁 Project Structure

```
portfolio/
├── index.html              # Home page (Protocol)
├── about.html              # Phase I: Background & Eligibility
├── skills-experience.html  # Phase II: Dosage & Methodology
├── education.html          # Phase III: Efficacy & Validation
├── projects.html           # Phase IV: Post-Marketing Surveillance
├── blog.html               # Research Notes
├── css/
│   └── style.css          # Clinical trial themed styling
├── js/
│   ├── main.js            # Interactive features
│   └── skills-interactive.js  # Skills animations
├── assets/
│   ├── images/            # Portfolio images
│   └── documents/         # Resume PDF
└── data/
    └── resume.json        # Resume data structure
```

## 🚀 GitHub Pages Hosting

### Option 1: Quick Setup (Recommended)

1. **Create a GitHub Repository:**
   - Go to [GitHub](https://github.com) and sign in
   - Click the "+" icon → "New repository"
   - Name it: `portfolio` or `sriramyapanja.github.io`
   - Choose **Public** (required for free GitHub Pages)
   - **DO NOT** initialize with README, .gitignore, or license
   - Click "Create repository"

2. **Push Your Code to GitHub:**
   ```bash
   cd /Users/sriramyapanja/PycharmProjects/PythonProject4
   
   # Add your GitHub repository as remote (replace YOUR_USERNAME)
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   
   # Push to GitHub
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click **Settings** tab
   - Scroll down to **Pages** section (left sidebar)
   - Under "Source", select **main** branch
   - Click **Save**
   - Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

### Option 2: Use Your Username Repository (Custom Domain-like)

If you want `https://YOUR_USERNAME.github.io` (no repository name in URL):

1. Create repository named exactly: `YOUR_USERNAME.github.io` (replace YOUR_USERNAME)
2. Push code as above
3. Enable GitHub Pages (same steps)
4. Site will be live at: `https://YOUR_USERNAME.github.io`

## 🌐 Alternative: Netlify (Already Configured)

Your portfolio is already configured for Netlify hosting:

- **Current Netlify URL:** https://sprightly-seahorse-5b568a.netlify.app/
- **netlify.toml** is configured with proper headers and redirects

To redeploy:
1. Drag and drop your project folder to [Netlify Drop](https://app.netlify.com/drop)
2. Or connect your GitHub repository to Netlify for automatic deployments

## 📝 Local Development

```bash
# Start local server
python3 -m http.server 8000

# Open in browser
open http://localhost:8000
```

## 🎯 Pages Overview

1. **Protocol (Home)** - Introduction and contact information
2. **Phase I** - Background & Eligibility (About Me)
3. **Phase II** - Dosage & Methodology (Skills & Experience)
4. **Phase III** - Efficacy & Validation (Education & Certifications)
5. **Phase IV** - Post-Marketing Surveillance (Projects)
6. **Research Notes** - Blog and updates

## 🛠️ Technologies Used

- HTML5
- CSS3 (Custom Clinical Trial Theme)
- JavaScript (Vanilla)
- GitHub Pages / Netlify for hosting

## 📧 Contact

- **LinkedIn:** [linkedin.com/in/sriramyapanja](https://www.linkedin.com/in/sriramyapanja/)
- **GitHub:** [github.com/sriramyapanja](https://github.com/sriramyapanja)
- **Phone:** (551) 260-2365

## 📄 License

© 2024 Portfolio. All rights reserved.
