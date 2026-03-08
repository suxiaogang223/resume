# Resume (Static HTML + GitHub Pages)

这个仓库直接维护静态 HTML 简历并发布到 GitHub Pages。
项目只负责在线页面，不负责任何 PDF 导出。
如需 PDF，请通过浏览器打印/导出功能完成。

## 目录结构

- `site/index.html`：在线简历页面（唯一维护入口）
- `site/assets/style.css`：页面样式
- `site/assets/profile.png`：简历照片
- `site/.nojekyll`：确保 GitHub Pages 按静态文件直接发布
- `.github/workflows/pages.yml`：GitHub Pages 自动构建与发布
- `resume.org`：历史资料（不参与构建）

## 本地依赖

- `python3`（仅用于本地预览）
- `make`

## 常用命令

```bash
# 本地预览（默认端口 4173）
make serve

# 校验站点必需文件
make check

# 清理产物
make clean
```

## GitHub Pages 自动发布

工作流文件：`.github/workflows/pages.yml`

- 触发条件：`push` 到 `main`，或手动 `workflow_dispatch`
- 流程：校验 `site/` 下关键文件 -> 发布 `site/`

## 维护约定

- 简历内容直接改 `site/index.html`
- 样式直接改 `site/assets/style.css`
- 更换照片时覆盖 `site/assets/profile.png`
- 本仓库不实现 PDF 导出逻辑
