# 个人在线简历 (Online Resume)

[English](./README.md) | 中文版

这是一个基于 HTML/CSS/JS 构建的、具有 Emacs 风格的个人在线简历项目。

**在线地址：** [https://suxiaogang223.github.io/resume/](https://suxiaogang223.github.io/resume/)

## 🎨 项目特点

- **Emacs 风格设计**：致敬 Emacs 的 UI 设计，包含状态栏（Mode Line）和小型缓冲区（Minibuffer）元素。
- **双语支持**：支持中文和英文切换。
- **主题切换**：内置亮色（Light）和暗色（Dark）两种主题。
- **响应式布局**：完美适配桌面端和移动端阅读。
- **PDF 导出优化**：专门针对打印和导出 PDF 进行了样式优化（按 `Cmd/Ctrl + P` 即可导出）。
- **零框架依赖**：使用纯 HTML、Vanilla CSS 和原生 JavaScript 编写，加载极快。

## 🛠️ 快速开始

如果你想在本地查看或修改这个项目：

### 1. 克隆仓库
```bash
git clone https://github.com/suxiaogang223/resume.git
cd resume
```

### 2. 本地预览
项目根目录提供了一个 `Makefile`，方便快速启动：

```bash
# 启动本地开发服务器 (默认端口 4173)
make serve
```
然后在浏览器访问 `http://localhost:4173`。

### 3. 文件结构
- `site/index.html`: 简历内容（包含中英文文本）。
- `site/assets/style.css`: 样式文件，包含 Emacs 风格的 UI 定义和响应式逻辑。
- `site/assets/ui.js`: 交互逻辑，处理语言切换、主题切换和进度条监听。
- `site/assets/profile.png`: 个人头像。

## 📄 作为模板使用

欢迎 fork 本仓库并将其作为你自己的简历模板！

1. **Fork** 本仓库。
2. 修改 `site/index.html` 中的个人信息。
3. 替换 `site/assets/profile.png` 为你自己的照片。
4. 在仓库设置中开启 **GitHub Pages**（将来源设置为 GitHub Actions）。

## 🚀 部署

项目使用 GitHub Actions 自动部署到 GitHub Pages。

- **触发条件**：推送到 `main` 分支。
- **配置文件**：`.github/workflows/pages.yml`。
- **部署目录**：`site/`。

## 👨‍💻 关于我

- **姓名**：苏艺腾 (Yiteng Su)
- **角色**：数据湖开发工程师 @ SelectDB (Apache Doris)
- **核心领域**：Hive / Iceberg / Paimon / Hudi 数据湖能力建设，数据库内核开发。
- **联系方式**：[suxiaogang223@icloud.com](mailto:suxiaogang223@icloud.com)

---

Enjoy coding in Emacs style! 🚀
