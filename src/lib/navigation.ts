export type NavItem = {
  to: string
  label: string
  icon: string
  description: string
}

export const navItems: NavItem[] = [
  {
    to: '/',
    label: '成长',
    icon: '🐾',
    description: '宠物档案与成长时间线',
  },
  {
    to: '/health',
    label: '健康',
    icon: '💚',
    description: '体重、疫苗与驱虫记录',
  },
  {
    to: '/community',
    label: '社区',
    icon: '💬',
    description: '分享养宠日常与经验',
  },
  {
    to: '/friends',
    label: '宠友',
    icon: '📍',
    description: '按地域匹配同城宠友',
  },
  {
    to: '/me',
    label: '我的',
    icon: '🙂',
    description: '宠物档案与产品说明',
  },
]
