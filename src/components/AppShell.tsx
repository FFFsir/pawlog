import type { ReactNode } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navItems } from '../lib/navigation'

type AppShellProps = {
  children: ReactNode
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="app-frame">
      <header className="topbar">
        <Link className="brand" to="/" aria-label="爪记 PawLog 首页">
          <span className="brand-mark" aria-hidden="true">
            🐾
          </span>
          <span className="brand-text">
            <strong>爪记 PawLog</strong>
            <small>养宠成长记录与社区</small>
          </span>
        </Link>
        <span className="env-badge">在线雏形</span>
      </header>

      <main className="page-content">{children}</main>

      <nav className="bottom-nav" aria-label="主要导航">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) =>
              isActive ? 'nav-item nav-item-active' : 'nav-item'
            }
          >
            <span className="nav-icon" aria-hidden="true">
              {item.icon}
            </span>
            <span className="nav-label">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  )
}
