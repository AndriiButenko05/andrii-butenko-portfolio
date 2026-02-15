# Portfolio Website - Andrii Butenko

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)

> A modern, responsive portfolio website showcasing my projects and skills as a Fullstack Developer

## 🎯 About

This is my personal portfolio website built with Next.js, featuring a bold modern design with a khaki green color scheme. The site showcases my journey as a Fullstack Developer, highlighting projects, skills, and professional experience.

**Live Demo:** [Your deployed URL here]

## 👨‍💻 About Me

I'm a **Fullstack Developer** with a strong foundation in the JavaScript ecosystem, specializing in React, Next.js, TypeScript, and Node.js. Currently based in **Wrocław, Poland**, studying Cloud Application Development at Uniwersytet WSB Merito Wrocław and recently completed the GoIT Fullstack Development Program.

### 🎓 Education
- **Uniwersytet WSB Merito Wrocław** (2023-2026) - Bachelor's Degree, Cloud Application Developer
- **IT School GoIT** (February-November 2025) - Fullstack Developer

### 🌍 Languages
- 🇬🇧 English - Upper-intermediate
- 🇵🇱 Polish - Intermediate
- 🇺🇦 Ukrainian - Native
- 🇷🇺 Russian - Fluent

## ✨ Features

- 🎨 **Bold Modern Design** with custom khaki green color palette
- 📱 **Fully Responsive** with 3 breakpoints (Mobile, Tablet, Desktop)
- ⚡ **Smooth Animations** throughout all sections
- 🔗 **Dynamic Projects Section** loading from JSON with "Load More" functionality
- 📧 **Contact Form** with form validation
- 🎯 **Social Links Section** (CV, GitHub, LinkedIn, Email)
- 🌐 **SEO Optimized** with proper meta tags
- ⚙️ **Performance Optimized** with Next.js features

## 🛠️ Tech Stack

### Frontend
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** CSS Modules with custom animations
- **Fonts:** Google Fonts (Pathway Extreme, JetBrains Mono)

### Core Skills Displayed
- HTML5/CSS3/SASS
- JavaScript/TypeScript
- React/Next.js
- Node.js/Express
- REST API
- Tailwind CSS
- Responsive/Adaptive Design
- Git/GitHub

## 📂 Project Structure

```
portfolio-website/
├── app/
│   ├── components/
│   │   └── ProjectsSection.jsx    # Dynamic projects component
│   ├── page.jsx                   # Main page component
│   ├── layout.jsx                 # Root layout
│   └── globals.css                # Global styles with animations
├── public/
│   └── data/
│       └── projects.json          # Projects data
└── README.md
```

## 🚀 Featured Projects

### Fullstack Projects

**[Clothica Shop](https://github.com/netkatya/clothica-shop)**
- Modern e-commerce storefront with clean, visually appealing layout
- **Tech:** Next.js, CSS Modules, TypeScript
- **Role:** Built Goods page, footer, and "Popular Goods" section
- **Team Project**

**[Online Shop](https://github.com/netkatya/online-shop)**
- E-commerce website with authentication and backend integration
- **Tech:** Next.js, TypeScript, Tailwind, Node.js, Express
- **Role:** Implemented Goods page, Login/Registration, and backend API
- **Team Project**

### Frontend Projects

**[NoteHub](https://github.com/AndriiButenko05/09-auth)**
- Authentication system with protected routes and session management
- **Tech:** Next.js, TypeScript, API
- **Role:** Backend-integrated login logic, custom middleware, UI components
- **Individual Project**

**[JS Game - A.R.I.](https://github.com/netkatya/js-game)**
- Interactive JavaScript learning game with code execution
- **Tech:** Next.js, TypeScript, Tailwind
- **Role:** Developed levels logic, results page, and local storage
- **Team Project**

**[Movie Gallery](https://github.com/AndriiButenko05/movie-gallery-project)**
- Movie browsing platform powered by TheMovieDB API
- **Tech:** React, TypeScript, CSS, React Query
- **Role:** Solo Developer
- **Individual Project**

## 🎨 Design Features

### Color Palette
- **Primary:** Khaki Green (#8B8D5A)
- **Accents:** Burnt Orange (#D95D39), Steel Blue (#4A5A6A)
- **Background:** Deep Black (#0F0F0F), Warm Black (#1A1A18)
- **Text:** Cream (#F5F4EE)

### Responsive Breakpoints
- **Mobile:** max-width 767px
- **Tablet:** 768px - 1023px
- **Desktop:** 1024px+

### Animation Types
- Fade-in and slide-up effects
- Staggered delays for cascading appearance
- Smooth hover transitions
- GPU-accelerated transforms

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/AndriiButenko05/portfolio-website.git
cd portfolio-website
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open in browser**
```
http://localhost:3000
```

## 📝 Customization

### Update Personal Information

1. **Social Links** (`app/page.jsx`):
```jsx
// Update these URLs
href="/path-to-your-cv.pdf"
href="https://github.com/AndriiButenko05"
href="https://linkedin.com/in/andrii-butenko-5190a6371"
href="mailto:andrejbutik@gmail.com"
```

2. **Projects Data** (`public/data/projects.json`):
```json
{
  "id": 1,
  "title": "Your Project Name",
  "description": "Project description...",
  "tags": ["React", "TypeScript"],
  "link": "https://github.com/yourusername/project",
  "icon": "</>",
  "gradientColors": ["#6B6D42", "#4A5A6A"]
}
```

3. **About Section** (`app/page.jsx`):
- Update bio text
- Modify skills
- Change education details

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy
4. Your site will be live at `your-project.vercel.app`

### Other Platforms
- **Netlify:** Follow Next.js deployment guide
- **Railway:** Connect GitHub repo and deploy
- **Custom Server:** Build with `npm run build` and serve

## 📧 Contact

- **Email:** [andrejbutik@gmail.com](mailto:andrejbutik@gmail.com)
- **Phone:** +48 734 766 886
- **Telegram:** [@AndriiButenko05](https://t.me/AndriiButenko05)
- **GitHub:** [@AndriiButenko05](https://github.com/AndriiButenko05)
- **LinkedIn:** [Andrii Butenko](https://www.linkedin.com/in/andrii-butenko-5190a6371/)
- **Location:** Wrocław, Poland

## 💼 Professional Skills

### Technical Skills
- HTML5/CSS3/SASS
- JavaScript/TypeScript
- React/Next.js
- Node.js/Express
- REST API
- Tailwind CSS
- Responsive/Adaptive Design
- Git/GitHub

### Soft Skills
- Team work
- Attention to detail
- Good communication
- Cooperative
- Strong adaptation skills

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Fonts from Google Fonts
- Icons and graphics created with CSS
- Built with passion and dedication to clean code

---

**Made with ❤️ by Andrii Butenko**

*Fullstack Developer | Clean Code Enthusiast | UI/UX Admirer*

---

### 🌟 Show Your Support

If you like this project, please give it a ⭐ on GitHub!

---

**Last Updated:** February 2026
