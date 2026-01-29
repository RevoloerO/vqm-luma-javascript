# LUMA - JavaScript Learning Platform

<div align="center">
  <img src="src/assets/LUMA-logo.png" alt="LUMA Logo" width="150" />

  **Learn | Uncover | Master | Archive**

  A modern, interactive platform for structured JavaScript learning with progress tracking, bookmarks, and hands-on exercises.

  [![React](https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react&logoColor=white)](https://react.dev/)
  [![Vite](https://img.shields.io/badge/Vite-7.0.4-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
  [![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
  [![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-blue?logo=github)](https://revoloero.github.io/vqm-luma-javascript/)

  [Live Demo](https://revoloero.github.io/vqm-luma-javascript/) | [Report Bug](https://github.com/Revoloero/vqm-luma-javascript/issues) | [Request Feature](https://github.com/Revoloero/vqm-luma-javascript/issues)
</div>

---

## Table of Contents

- [About](#about)
- [Features](#features)
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
  - [Build & Deploy](#build--deploy)
- [Project Structure](#project-structure)
- [Content Sections](#content-sections)
- [Keyboard Shortcuts](#keyboard-shortcuts)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

---

## About

**LUMA** (Learn, Uncover, Master, Archive) is a comprehensive JavaScript learning platform designed to provide structured, hands-on learning experiences. Built with React and modern web technologies, it offers an intuitive interface for exploring JavaScript fundamentals, advanced concepts, and interactive coding exercises.

Whether you're a beginner starting your JavaScript journey or an experienced developer looking to reinforce concepts, LUMA provides organized content with visual mind maps, progress tracking, and practical exercises.

---

## Features

### Learning Experience
- **Structured Curriculum** - Organized content covering JavaScript fundamentals to advanced patterns
- **Interactive Exercises** - Three-tier coding challenges with hints and solutions
- **Mind Maps** - Visual representations of topic relationships for better understanding
- **Progress Tracking** - Mark topics as complete and track your learning journey

### User Interface
- **Dark/Light Theme** - Toggle between futuristic dark mode (teal accents) and clean light mode (purple accents)
- **Responsive Design** - Seamless experience across desktop, tablet, and mobile devices
- **Sidebar Navigation** - Expandable topic trees with hierarchical organization
- **Full-Text Search** - Quickly find topics using fuzzy search (powered by Fuse.js)

### Productivity
- **Bookmarks** - Save important topics for quick reference
- **Keyboard Shortcuts** - Quick access to search and navigation
- **Persistent State** - Progress and bookmarks saved locally across sessions
- **Scroll-to-Top** - Easy navigation on long content pages

---

## Screenshots

<details>
<summary>Click to view screenshots</summary>

### Home Page
The landing page with navigation cards to all sections.

### Fundamentals Section
Hierarchical sidebar with expandable topics and mind map visualizations.

### Dark/Light Theme
Toggle between themes for comfortable reading.

### Interactive Exercises
Coding challenges with progressive hint system and solutions.

</details>

---

## Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | React 19.1.0 |
| **Routing** | React Router DOM 7.7.0 |
| **Build Tool** | Vite 7.0.4 |
| **Search** | Fuse.js 7.1.0 |
| **Icons** | Lucide React, Font Awesome 6.4.0 |
| **Styling** | CSS Modules with CSS Variables |
| **Fonts** | Inter (Google Fonts) |
| **Deployment** | GitHub Pages |
| **Linting** | ESLint 9.30.1 |

---

## Getting Started

### Prerequisites

- **Node.js** (v18.0.0 or higher recommended)
- **npm** (v9.0.0 or higher) or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Revoloero/vqm-luma-javascript.git
   cd vqm-luma-javascript
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

### Development

Start the development server with hot reload:

```bash
npm run dev
```

The application will be available at `http://localhost:5173/vqm-luma-javascript/`

### Build & Deploy

| Command | Description |
|---------|-------------|
| `npm run build` | Create production build in `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run deploy` | Deploy to GitHub Pages |
| `npm run lint` | Run ESLint to check code quality |

---

## Project Structure

```
vqm-LUMA-Javascript/
├── src/
│   ├── main.jsx                 # Application entry point
│   ├── App.jsx                  # Main router and theme management
│   ├── App.css                  # Global styles and theme variables
│   ├── HomePage.jsx             # Landing page
│   │
│   ├── components/
│   │   └── SearchBar.jsx        # Full-text search component
│   │
│   ├── contexts/
│   │   ├── ProgressContext.jsx  # Progress tracking state
│   │   └── BookmarkContext.jsx  # Bookmark management state
│   │
│   ├── pages/
│   │   ├── Fundamentals.jsx     # Core JavaScript concepts
│   │   ├── Advanced.jsx         # Advanced patterns
│   │   ├── Exercises.jsx        # Interactive coding challenges
│   │   ├── Bookmarks.jsx        # Saved bookmarks view
│   │   ├── fundamentalsData.js  # Fundamentals content data
│   │   ├── advancedData.js      # Advanced topics data
│   │   └── data.js              # Data aggregator
│   │
│   └── assets/                  # Images and static files
│
├── public/                      # Public static assets
├── dist/                        # Production build output
├── index.html                   # HTML template
├── vite.config.js               # Vite configuration
├── eslint.config.js             # ESLint configuration
└── package.json                 # Project dependencies
```

---

## Content Sections

### Fundamentals
Core JavaScript concepts organized hierarchically:
- Variables & Data Types
- Operators & Expressions
- Control Flow
- Functions
- Arrays & Objects
- DOM Manipulation
- And more...

### Advanced Topics
Complex patterns and best practices:
- Closures & Scope
- Prototypes & Inheritance
- Async/Await & Promises
- Design Patterns
- Performance Optimization
- And more...

### Exercises
Three tiers of coding challenges:
1. **Foundational** - Basic concept reinforcement
2. **Interactive Projects** - Build practical applications (e.g., Pixel Art Maker)
3. **Advanced Projects** - Complex applications (e.g., Weather Dashboard)

Each exercise includes:
- Clear task description
- Step-by-step guidance
- Progressive hints (2 levels)
- Complete solution with explanation

---

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl + K` / `Cmd + K` | Open search modal |
| `Escape` | Close search modal |

---

## Contributing

Contributions are welcome and appreciated! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m "Add amazing feature"
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Contribution Ideas
- Add new JavaScript topics or exercises
- Improve existing content explanations
- Add more mind map visualizations
- Enhance accessibility features
- Fix bugs or improve performance

---

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- [React](https://react.dev/) - UI Framework
- [Vite](https://vitejs.dev/) - Build Tool
- [Fuse.js](https://fusejs.io/) - Fuzzy Search Library
- [Lucide](https://lucide.dev/) - Icon Library
- [Font Awesome](https://fontawesome.com/) - Icon Library
- [Google Fonts](https://fonts.google.com/) - Inter Font

---

<div align="center">
  <p>Made with dedication for JavaScript learners everywhere</p>
  <p>
    <a href="https://revoloero.github.io/vqm-luma-javascript/">View Demo</a>
    ·
    <a href="https://github.com/Revoloero/vqm-luma-javascript/issues">Report Bug</a>
    ·
    <a href="https://github.com/Revoloero/vqm-luma-javascript/issues">Request Feature</a>
  </p>
</div>
