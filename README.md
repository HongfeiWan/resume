# 万宏飞 | 简历

这是基于 [Hugo Blox Resume](https://github.com/HugoBlox/theme-resume) 的中文个人简历站，内容聚焦具身智能模型训练、自动驾驶强化学习和实验探测数据分析经历。

## 常用文件

- `content/authors/admin/_index.md`：个人简介、教育经历、项目/工作经历和技能。
- `content/_index.md`：首页区块、按钮和显示顺序。
- `config/_default/`：站点标题、语言、菜单、SEO 和主题配置。
- `static/uploads/resume.pdf`：静态 PDF 文件；当前首页按钮已改为 GitHub 项目入口。

## 本地预览

```bash
pnpm install
pnpm dev
```

## 构建

```bash
pnpm build
```

GitHub Actions 使用 Hugo 0.148.2 extended 构建并部署到 GitHub Pages。
