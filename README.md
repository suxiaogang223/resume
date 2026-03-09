# Online Resume

English | [中文版](./README_zh.md)

An Emacs-style personal online resume project built with pure HTML/CSS/JS.

**Live Demo:** [https://suxiaogang223.github.io/resume/](https://suxiaogang223.github.io/resume/)

## 🎨 Features

- **Emacs-Style Design**: Tribute to Emacs UI, featuring Mode Line and Minibuffer elements.
- **Bilingual Support**: Toggle between Chinese and English effortlessly.
- **Theme Switching**: Built-in Light and Dark themes.
- **Responsive Layout**: Optimized for both desktop and mobile viewing.
- **PDF Export Optimized**: Custom print styles for high-quality PDF export (simply press `Cmd/Ctrl + P`).
- **Zero Dependencies**: Written in pure HTML, Vanilla CSS, and native JavaScript for blazing-fast load times.

## 🛠️ Quick Start

To view or modify this project locally:

### 1. Clone the repository
```bash
git clone https://github.com/suxiaogang223/resume.git
cd resume
```

### 2. Local Preview
A `Makefile` is provided for quick setup:

```bash
# Start a local development server (default port 4173)
make serve
```
Then visit `http://localhost:4173` in your browser.

### 3. Project Structure
- `site/index.html`: Resume content (including both EN/ZH text).
- `site/assets/style.css`: Stylesheet with Emacs UI definitions and responsive logic.
- `site/assets/ui.js`: Interactive logic for language/theme switching and scroll progress.
- `site/assets/profile.png`: Profile photo.

## 📄 Use as a Template

Feel free to fork this repository and use it as a template for your own resume!

1. **Fork** this repository.
2. Modify `site/index.html` with your personal information.
3. Replace `site/assets/profile.png` with your own photo.
4. Enable **GitHub Pages** in your repository settings (set source to GitHub Actions).

## 🚀 Deployment

Automated deployment to GitHub Pages via GitHub Actions.

- **Trigger**: Push to the `main` branch.
- **Workflow**: `.github/workflows/pages.yml`.
- **Deploy Directory**: `site/`.

## 👨‍💻 About Me

- **Name**: Yiteng Su (苏艺腾)
- **Role**: Data Lake Development Engineer @ SelectDB (Apache Doris)
- **Core Focus**: Hive / Iceberg / Paimon / Hudi data lake integration and database kernel development.
- **Contact**: [suxiaogang223@icloud.com](mailto:suxiaogang223@icloud.com)

---

Enjoy coding in Emacs style! 🚀
