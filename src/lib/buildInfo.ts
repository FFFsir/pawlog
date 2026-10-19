export const PUBLIC_URL = 'https://fffsir.github.io/pawlog/'

function formatBuildTime(value: string | undefined): string {
  if (!value) {
    return '本地开发构建'
  }

  const date = new Date(value)
  if (Number.isNaN(date.getTime())) {
    return value
  }

  return new Intl.DateTimeFormat('zh-CN', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'Asia/Shanghai',
  }).format(date)
}

export const buildInfo = {
  version: import.meta.env.VITE_BUILD_VERSION?.trim() || 'dev-local',
  commit: (import.meta.env.VITE_COMMIT_SHA?.trim() || 'local').slice(0, 7),
  buildTime: formatBuildTime(import.meta.env.VITE_BUILD_TIME),
}
