import { Link } from 'react-router-dom'

type PlaceholderPageProps = {
  eyebrow: string
  title: string
  description: string
  planned: string[]
}

export function PlaceholderPage({
  eyebrow,
  title,
  description,
  planned,
}: PlaceholderPageProps) {
  return (
    <article className="placeholder-page">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="lead">{description}</p>

      <section className="panel" aria-labelledby="planned-title">
        <h2 id="planned-title">这个页面将承载</h2>
        <ul className="planned-list">
          {planned.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <p className="notice">
        当前版本是部署骨架，页面内容与交互将在后续 change 中实现。
      </p>

      <Link className="text-link" to="/">
        ← 返回成长首页
      </Link>
    </article>
  )
}
