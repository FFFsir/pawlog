import { PlaceholderPage } from '../components/PlaceholderPage'

export function MePage() {
  return (
    <PlaceholderPage
      eyebrow="PROFILE · 我的"
      title="我的与产品说明"
      description="管理宠物档案，查看产品设计思路、数据说明和后续规划。"
      planned={[
        '宠物完整档案与编辑入口',
        '产品目标用户、痛点和核心闭环说明',
        '本地数据管理与重置',
        '部署信息与版本记录',
      ]}
    />
  )
}
