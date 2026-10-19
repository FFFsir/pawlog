import { Link } from 'react-router-dom'
import { buildInfo, PUBLIC_URL } from '../lib/buildInfo'
import { navItems } from '../lib/navigation'

const nextSteps = [
  {
    title: '功能模块',
    body: '宠物档案、体重/疫苗/驱虫记录、成长时间线、同城宠友与社区动态，将按独立 change 逐个落地。',
  },
  {
    title: '视觉与交互',
    body: '品牌配色、插画、动效和移动端交互会在视觉 change 中统一设计，当前只保留可读的临时基线。',
  },
  {
    title: '数据与内容',
    body: '演示数据、本地持久化和内容模型会与功能一起设计，避免骨架阶段过早锁死字段。',
  },
]

export function HomePage() {
  return (
    <div className="home-page">
      <section className="hero-card">
        <p className="eyebrow">DEPLOYED · 在线雏形</p>
        <h1>爪记 PawLog</h1>
        <p className="tagline">记录每一步成长，遇见同城毛孩子。</p>
        <p className="hero-status">
          <span className="status-dot" aria-hidden="true" />
          部署成功，雏形已上线
        </p>
        <p className="hero-copy">
          当前版本只搭建了公开可访问的部署骨架与可迭代架构。产品功能、数据和完整视觉会在后续
          change 中逐步补全，访问域名保持不变。
        </p>
      </section>

      <section className="panel" aria-labelledby="deploy-title">
        <div className="panel-heading">
          <h2 id="deploy-title">部署信息</h2>
          <span className="status-chip">运行中</span>
        </div>

        <a className="public-url" href={PUBLIC_URL} target="_blank" rel="noreferrer">
          {PUBLIC_URL}
        </a>

        <dl className="build-meta">
          <div>
            <dt>构建版本</dt>
            <dd>{buildInfo.version}</dd>
          </div>
          <div>
            <dt>提交</dt>
            <dd>{buildInfo.commit}</dd>
          </div>
          <div>
            <dt>构建时间（北京时间）</dt>
            <dd>{buildInfo.buildTime}</dd>
          </div>
        </dl>
      </section>

      <section aria-labelledby="routes-title">
        <div className="section-heading">
          <h2 id="routes-title">五个入口，已可访问</h2>
          <p>路由骨架先跑通，后续直接替换页面内容。</p>
        </div>
        <div className="route-grid">
          {navItems.map((item) => (
            <Link key={item.to} className="route-card" to={item.to}>
              <span className="route-icon" aria-hidden="true">
                {item.icon}
              </span>
              <span className="route-copy">
                <strong>{item.label}</strong>
                <small>{item.description}</small>
              </span>
              <span className="route-arrow" aria-hidden="true">
                →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section aria-labelledby="next-title">
        <div className="section-heading">
          <h2 id="next-title">后续迭代方向</h2>
          <p>同一域名、同一仓库，按 change 持续增量交付。</p>
        </div>
        <div className="next-grid">
          {nextSteps.map((step, index) => (
            <article key={step.title} className="next-card">
              <span className="step-index" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
