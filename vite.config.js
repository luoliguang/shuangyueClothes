// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue({
      // 显式包含 node_modules 中的 Vue 文件
      include: [/\.vue$/, /\.md$/], 
    })
  ]
})