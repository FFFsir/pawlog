# 可部署雏形骨架

## 1. 目标与边界

本 capability 只负责建立「养宠成长记录与社区」产品的在线部署骨架与可迭代架构。它必须证明：

1. 作品已成功部署到公开、固定域名的静态托管；
2. 线上版本可被识别和验证；
3. 后续 change 可以在同一域名下增加页面和功能，而不需要改动部署基础设施。

产品功能、数据模型和完整视觉设计不属于本 capability，由后续 change 在该骨架上扩展。对应验收：A1、A7。

## 2. 技术架构

- 构建工具：Vite。
- 框架：React + TypeScript。
- 路由：react-router-dom，使用 HashRouter。
- 样式：原生 CSS + CSS 变量设计 token，不引入 UI 组件库。
- 部署：GitHub Pages，由 GitHub Actions 在 push 到 `main` 时自动构建和发布。
- 仓库：公开仓库 `pawlog`，固定地址 `https://fffsir.github.io/pawlog/`。

目录结构：

```text
src/
  components/     # 可复用展示组件
  lib/            # 构建信息、常量等无 UI 逻辑
  pages/          # 路由页面，一页一文件
  styles/         # 全局样式与设计 token
  App.tsx         # 路由与布局装配
  main.tsx        # 应用入口
```

新增页面时只需在 `src/pages` 增加文件并在路由表注册，不应修改构建或部署配置。对应验收：A3、A7。

## 3. 应用壳与首页

应用壳包含：

- 顶部品牌栏：产品名「爪记 PawLog」、一句话定位、当前环境标识。
- 主内容区：随路由渲染页面。
- 底部导航：成长、健康、社区、宠友、我的五个入口，当前路由有选中态。

首页展示：

- 部署成功状态卡，明确说明雏形已上线。
- 固定访问地址。
- 构建信息：版本、提交短 SHA、构建时间。
- 下一步迭代说明：功能、视觉、内容将分别在后续 change 中补充。

构建信息值来自构建期环境变量；变量缺失时显示本地开发默认值。构建时间以 ISO 字符串展示或格式化为本地时间。对应验收：A1、A2。

## 4. 路由骨架

路由表：

- `/`：成长首页（当前为部署状态页）。
- `/health`：健康占位页。
- `/community`：社区占位页。
- `/friends`：宠友占位页。
- `/me`：我的占位页。

每个占位页包含标题、该模块的后续规划说明和返回首页入口。所有路由使用 HashRouter，直接访问 `/#/health` 或刷新均能正常渲染。对应验收：A3。

## 5. 构建与部署

### 5.1 Vite 配置

- `base: './'`，确保构建产物在任意子路径下使用相对资源地址。
- 不引入需要运行时服务端配合的插件。

### 5.2 GitHub Actions

工作流 `.github/workflows/deploy.yml` 在 push 到 `main` 和手动触发时运行：

1. 检出代码；
2. 安装 Node 与依赖（`npm ci`）；
3. 注入 `VITE_BUILD_VERSION`、`VITE_COMMIT_SHA`、`VITE_BUILD_TIME`；
4. 执行 `npm run build`；
5. 上传 `dist/` 为 Pages artifact；
6. 使用官方 Pages action 部署。

工作流使用最小权限：`contents: read`、`pages: write`、`id-token: write`，并配置 `github-pages` environment。对应验收：A6。

### 5.3 GitHub Pages 配置

- `public/.nojekyll` 随构建产物发布，避免下划线开头文件被忽略。
- 仓库 Pages 设置为 GitHub Actions 发布来源。
- 固定访问地址为 `https://fffsir.github.io/pawlog/`，后续只更新内容，不更换仓库名或域名。

## 6. 响应式与基础可用性

- 390px 宽度下无横向滚动，底部导航五项不溢出。
- 768px 以上内容居中，最大宽度约 720px。
- 交互元素使用 button/a 语义，图标按钮有 aria-label。
- 键盘可聚焦，焦点样式可见。
- 文案对比度满足正文可读。

对应验收：A8。

## 7. README 与迭代说明

README 必须包含：

- 产品背景与当前阶段说明（当前为部署骨架）。
- 固定访问地址。
- 技术栈与目录结构。
- 本地开发、构建、预览、lint 命令。
- 部署方式与 GitHub Pages 首次配置步骤。
- 如何新增页面、如何新增功能模块、如何调整全局样式的步骤。
- 后续 change 的规划边界（功能、视觉、数据）。

对应验收：A7。

## 8. 非目标

本 capability 不包含宠物档案、健康记录、成长时间线、社区动态、同城宠友、数据持久化、真实登录、后端服务、图片上传、地图、支付或医疗建议。这些内容由后续 change 以独立需求实现。
