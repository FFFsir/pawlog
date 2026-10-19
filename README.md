# 爪记 PawLog

养宠成长记录与同城宠友社区。当前仓库是**部署骨架**：先把公开访问链接、构建链路和可迭代架构跑通，产品功能、数据与完整视觉会在后续 change 中逐步补全。

**固定访问地址：<https://fffsir.github.io/pawlog/>**

> 域名与仓库名固定，后续所有迭代都发布到同一地址，不会更换链接。

## 当前阶段

本阶段只交付基础设施，包含：

- Vite + React + TypeScript 纯静态单页应用
- HashRouter 路由骨架：`/`、`/health`、`/community`、`/friends`、`/me`
- 应用壳：品牌栏、内容区、五项底部导航
- 部署状态页：固定地址、构建版本、提交 SHA、构建时间
- GitHub Actions 自动构建并发布到 GitHub Pages
- 移动优先的临时视觉基线（390px 起可用）
- README 迭代说明

本阶段**不包含**：宠物档案、健康记录、成长时间线、社区动态、同城匹配、数据持久化、登录、后端、图片上传、地图、支付。

## 技术栈

| 层 | 选型 | 说明 |
| --- | --- | --- |
| 构建 | Vite | `base: './'`，适配子路径部署 |
| 框架 | React 19 + TypeScript | 函数组件 |
| 路由 | react-router-dom | HashRouter，静态托管刷新不 404 |
| 样式 | 原生 CSS + CSS 变量 | 不引入 UI 库，避免过早约束视觉 |
| 部署 | GitHub Pages + Actions | push 到 `main` 自动发布 |

## 目录结构

```text
.
├─ .github/workflows/deploy.yml   # push 到 main 自动构建并发布 Pages
├─ public/
│  ├─ .nojekyll                   # 关闭 Jekyll 处理
│  └─ favicon.svg
├─ src/
│  ├─ components/
│  │  ├─ AppShell.tsx             # 品牌栏 + 内容区 + 底部导航
│  │  └─ PlaceholderPage.tsx      # 占位页通用组件
│  ├─ lib/
│  │  ├─ buildInfo.ts             # 构建期注入的版本信息
│  │  └─ navigation.ts            # 导航与路由描述
│  ├─ pages/                      # 一页一文件
│  │  ├─ HomePage.tsx
│  │  ├─ HealthPage.tsx
│  │  ├─ CommunityPage.tsx
│  │  ├─ FriendsPage.tsx
│  │  └─ MePage.tsx
│  ├─ styles/global.css           # 设计 token 与全局样式
│  ├─ App.tsx                     # 路由表
│  └─ main.tsx                    # 应用入口
├─ index.html
└─ vite.config.ts
```

## 本地开发

要求 Node.js 20 及以上。

```bash
npm install
npm run dev       # 本地开发，默认 http://localhost:5173
npm run build     # 类型检查 + 生产构建，输出 dist/
npm run preview   # 预览构建产物
npm run lint      # oxlint 静态检查
```

本地构建没有注入构建变量时，页面会显示 `dev-local` / `local` / `本地开发构建`，这是预期行为。

## 部署

仓库已配置 `.github/workflows/deploy.yml`：

1. push 到 `main`（或在 Actions 页手动触发）
2. Actions 安装依赖并执行 `npm run build`
3. 注入 `VITE_BUILD_VERSION`、`VITE_COMMIT_SHA`、`VITE_BUILD_TIME`
4. 上传 `dist/` 并发布到 GitHub Pages

首次部署需要在仓库 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**。之后每次 push 都会自动更新同一域名下的内容。

固定地址：<https://fffsir.github.io/pawlog/>

### 部署排查

- 页面 404：确认 Pages Source 已设为 GitHub Actions，且 deploy job 成功。
- 资源 404：确认 `vite.config.ts` 的 `base` 为 `'./'`，不要改成绝对路径。
- 刷新子路由 404：确认路由使用 `HashRouter`，地址形如 `/#/health`。
- 页面显示旧版本：查看首页构建信息中的提交 SHA，确认 Actions 已部署最新提交。

## 后续迭代指南

### 新增一个页面

1. 在 `src/pages/` 新建页面组件。
2. 在 `src/App.tsx` 的路由表注册路径。
3. 如需出现在底部导航，在 `src/lib/navigation.ts` 增加条目。
4. 不需要修改构建或部署配置。

### 新增一个功能模块

- 页面级组合放在 `src/pages/`。
- 可复用组件放在 `src/components/`。
- 数据模型、存储、工具函数放在 `src/lib/`。
- 全局样式与设计 token 放在 `src/styles/global.css`；模块样式可拆分到同目录 CSS 文件。

### 引入数据层

建议按以下顺序，避免页面直接操作存储：

1. 在 `src/lib/` 定义类型和存储适配层。
2. 在 `src/lib/` 或后续 `src/store/` 提供读取与写入方法。
3. 页面只调用方法，不直接访问 `localStorage`。
4. 为数据键加版本号，便于后续迁移。

### 调整视觉

当前配色和组件样式是临时基线，统一在 `src/styles/global.css` 的 `:root` token 中调整。后续视觉 change 可以整体替换 token 和组件样式，不影响路由与部署。

## 后续规划

| 方向 | 内容 |
| --- | --- |
| 功能 | 宠物档案、体重/疫苗/驱虫、成长时间线、同城宠友、社区动态 |
| 数据 | 演示数据、本地持久化、数据迁移与重置 |
| 视觉 | 品牌配色、插画、动效、完整移动端交互 |

每个方向以独立 change 增量交付，最终都发布到同一固定域名。
