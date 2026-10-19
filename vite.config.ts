import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// 相对 base 让构建产物可以部署在 GitHub Pages 的 /pawlog/ 子路径下。
export default defineConfig({
  base: './',
  plugins: [react()],
})
