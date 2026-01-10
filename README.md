# Pranit Manda - Personal Portfolio

A modern, responsive portfolio website built with React showcasing AI/ML engineering projects, professional experience, technical skills, and blog articles.

## 🌐 Live Demo

[https://pranitmanda.com/](https://pranitmanda.com/)

## ✨ Features

- **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- **Dark/Light Theme** - Toggle between dark and light modes with smooth transitions
- **Tech-themed Hero Background** - Animated grid pattern with floating particles
- **Blog/Writing Section** - Markdown-based articles with image support and text wrapping
- **Smooth Animations** - Fade-in effects and micro-interactions throughout
- **Social Sharing** - Share articles on Twitter, LinkedIn, and Facebook
- **Related Posts** - Automatic related article suggestions
- **Contact Section** - Direct links to email, GitHub, and LinkedIn

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | React 19, React Router v7 |
| **Styling** | CSS3, Tailwind CSS |
| **Markdown** | react-markdown, remark-gfm, rehype-raw, gray-matter |
| **Icons** | Lucide React |
| **Build Tool** | Create React App with CRACO |
| **Deployment** | GitHub Pages |

## 📁 Project Structure

```
personal_portfolio/
├── public/
│   ├── content/
│   │   └── writing/           # Markdown blog posts
│   │       ├── images/        # Article images (organized by article)
│   │       │   ├── another-revolution/
│   │       │   ├── internet-for-everybody/
│   │       │   └── ...
│   │       ├── 01-landline-phone.md
│   │       ├── 02-another-revolution.md
│   │       └── ...
│   ├── index.html
│   ├── logo.png
│   └── profile.jpg
├── src/
│   ├── components/
│   │   ├── BlogPost.jsx       # Individual article view
│   │   ├── Contact.jsx        # Contact section
│   │   ├── Education.jsx      # Education section
│   │   ├── Experience.jsx     # Work experience section
│   │   ├── Footer.jsx         # Site footer
│   │   ├── Header.jsx         # Navigation header
│   │   ├── Hero.jsx           # Hero section with animated bg
│   │   ├── Projects.jsx       # Projects showcase
│   │   ├── Skills.jsx         # Technical skills
│   │   └── Writing.jsx        # Blog listing
│   ├── styles/                # Component-specific CSS files
│   ├── App.js                 # Main app component
│   ├── App.css                # Global app styles
│   ├── index.js               # Entry point
│   ├── index.css              # CSS variables & global styles
│   └── mock.js                # Portfolio data (projects, experience, etc.)
├── package.json
├── tailwind.config.js
├── craco.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/hawkeyed-panda/personal_portfolio.git
   cd personal_portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   ```
   http://localhost:3000/personal_portfolio
   ```

### Build for Production

```bash
npm run build
```

## 📝 Adding New Blog Articles

### 1. Create the Markdown File

Create a new `.md` file in `public/content/writing/`:

```markdown
---
title: "Your Article Title"
date: "2024-01-15"
tags: ["Technology", "AI", "Tutorial"]
readTime: "5 min"
summary: "A brief description of your article."
slug: "your-article-slug"
---

Your article content goes here...

## Section Heading

More content with **bold** and *italic* text.
```

### 2. Register in mock.js

Add an entry to the `writingPosts` array in `src/mock.js`:

```javascript
{
  title: "Your Article Title",
  slug: "your-article-slug",
  filePath: "/content/writing/your-article.md"
}
```

### 3. Adding Images to Articles

1. **Create an image folder** for your article:
   ```
   public/content/writing/images/your-article-slug/
   ```

2. **Save images** with descriptive filenames:
   ```
   public/content/writing/images/your-article-slug/main-image.jpg
   ```

3. **Add images in markdown** with HTML for positioning:

   **Float Left (text wraps to the right):**
   ```html
   <img src="/personal_portfolio/content/writing/images/your-article-slug/image.jpg" 
        alt="Description" 
        style="float: left; margin: 0 20px 15px 0; width: 40%; max-width: 300px;" />
   ```

   **Float Right (text wraps to the left):**
   ```html
   <img src="/personal_portfolio/content/writing/images/your-article-slug/image.jpg" 
        alt="Description" 
        style="float: right; margin: 0 0 15px 20px; width: 45%; max-width: 350px;" />
   ```

   **Full Width (centered):**
   ```html
   <img src="/personal_portfolio/content/writing/images/your-article-slug/image.jpg" 
        alt="Description" 
        style="width: 100%; margin: 20px 0;" />
   ```

4. **Clear floats** when needed:
   ```html
   <div style="clear: both;"></div>
   ```

## 🎨 Customization

### Personal Information

Edit `src/mock.js` to update:
- `personalInfo` - Name, title, bio, contact links
- `projects` - Project showcase items
- `experience` - Work history
- `skills` - Technical skills by category
- `education` - Educational background

### Theme Colors

Edit CSS variables in `src/index.css`:

```css
:root[data-theme="dark"] {
  --bg-primary: #000000;
  --brand-primary: #00FFD1;
  /* ... more variables */
}

:root[data-theme="light"] {
  --bg-primary: #FAFAFA;
  --brand-primary: #00D4B0;
  /* ... more variables */
}
```

### Hero Background

The animated tech grid background can be customized in `src/styles/Hero.css`:
- Grid line spacing and opacity
- Floating particle sizes and positions
- Pulsing ring animations
- Radial gradient glows

## 📦 Deployment to GitHub Pages

1. **Update homepage in package.json:**
   ```json
   "homepage": "https://yourusername.github.io/repository-name"
   ```

2. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Add deploy scripts to package.json:**
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

## 📄 Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^19.0.0 | UI framework |
| react-router-dom | ^7.5.1 | Client-side routing |
| react-markdown | ^10.1.0 | Markdown rendering |
| remark-gfm | ^4.0.1 | GitHub Flavored Markdown |
| rehype-raw | ^7.0.0 | HTML in Markdown support |
| gray-matter | ^4.0.3 | Frontmatter parsing |
| lucide-react | ^0.507.0 | Icon library |
| tailwindcss | ^3.4.17 | Utility CSS framework |
| @craco/craco | ^7.1.0 | Create React App config override |

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome for Android)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Pranit Manda**
- GitHub: [@hawkeyed-panda](https://github.com/hawkeyed-panda)
- LinkedIn: [pranitmanda](https://linkedin.com/in/pranitmanda)
- Email: pranitmanda2000@gmail.com

---

⭐ If you found this project helpful, please consider giving it a star!

