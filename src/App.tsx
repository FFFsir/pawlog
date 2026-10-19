import { HashRouter, Link, Route, Routes } from 'react-router-dom'
import { AppShell } from './components/AppShell'
import { HomePage } from './pages/HomePage'
import { HealthPage } from './pages/HealthPage'
import { CommunityPage } from './pages/CommunityPage'
import { FriendsPage } from './pages/FriendsPage'
import { MePage } from './pages/MePage'

function NotFoundPage() {
  return (
    <article className="placeholder-page">
      <p className="eyebrow">404</p>
      <h1>这个页面还没长出来</h1>
      <p className="lead">地址可能输错了，或者该页面会在后续 change 中上线。</p>
      <Link className="text-link" to="/">
        ← 返回成长首页
      </Link>
    </article>
  )
}

function App() {
  return (
    <HashRouter>
      <AppShell>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/health" element={<HealthPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/friends" element={<FriendsPage />} />
          <Route path="/me" element={<MePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AppShell>
    </HashRouter>
  )
}

export default App
