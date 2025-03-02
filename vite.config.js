// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { NuLazyTeleportRiveCanvas } from '@nolebase/ui-rive-canvas'
import { Layout } from '@rive-app/canvas';


export default defineConfig({
  build: {
    target: 'esnext',
    format: 'esm'
  },
  plugins: [
    vue({
      // 显式包含 node_modules 中的 Vue 文件
      include: [/\.vue$/, /\.md$/], 
    })
  ],
  Layout(){
    return h(DefaultTheme.Layout, null, {
      'layout-top': () => [ 
        h(NuLazyTeleportRiveCanvas) 
      ] 
    })
  },
  envDir: '.',
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag === 'SearchBox'
    }
  }
})