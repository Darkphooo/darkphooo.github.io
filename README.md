# Darkphooo's Blog

个人站点，基于 Vue 3、Vite、Tailwind CSS 4 和 shadcn-vue 主题配置。
仅保留首页，采用单入口 SPA，无需页面路由。
首页展示个人简介、精选公开项目和联系入口，资料来自
[GitHub 个人资料](https://github.com/Darkphooo/Darkphooo) 与对应公开仓库。
内容作为静态快照维护，不依赖运行时 GitHub API 请求；头像使用 GitHub 图片地址并提供加载失败时的文字占位。

## 本地开发

需要 Node.js 22.12+（22 LTS）或 24+，以及 pnpm 10.8.0。

```sh
pnpm install
pnpm dev
```

## 检查和构建

```sh
pnpm test
pnpm build
pnpm preview
```

构建仅生成一个 `index.html`。将 `dist/` 部署到静态服务器即可。

## UI 组件

按照 [shadcn-vue 的 Vite 安装文档](https://www.shadcn-vue.com/docs/installation/vite)
配置 Tailwind Vite 插件、`@` 路径别名及 `components.json`。
首页使用 Button、Card、Badge 和 Avatar；需要时使用官方 CLI 添加组件：

```sh
pnpm dlx shadcn-vue@latest add @shadcn/button
```

公共页脚位于 `src/App.vue`，备案号为苏ICP备2026091781号，链接至工信部备案系统。
