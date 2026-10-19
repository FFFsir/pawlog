import { PlaceholderPage } from '../components/PlaceholderPage'

export function HealthPage() {
  return (
    <PlaceholderPage
      eyebrow="HEALTH · 健康"
      title="健康档案"
      description="把体重、疫苗、驱虫和到期提醒放在一处，让养宠人不再靠记忆管理健康。"
      planned={[
        '宠物档案卡与当前体重概览',
        '体重趋势图与历史记录列表',
        '疫苗、驱虫记录及下次到期提醒',
        '新增记录表单与数据持久化',
      ]}
    />
  )
}
