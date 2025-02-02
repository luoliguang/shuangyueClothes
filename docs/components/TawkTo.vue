<template>
  <div></div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
  // 使用 requestIdleCallback 在浏览器空闲时加载脚本
  const loadTawkTo = () => {
    let Tawk_API = window.Tawk_API || {}
    let Tawk_LoadStart = new Date()
    
    const script = document.createElement('script')
    script.async = true
    script.defer = true // 添加 defer 属性
    script.src = 'https://embed.tawk.to/67877cc3825083258e055bc9/1ihkjumuo'
    script.charset = 'UTF-8'
    script.setAttribute('crossorigin', '*')
    
    document.head.appendChild(script)
  }

  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(loadTawkTo)
  } else {
    setTimeout(loadTawkTo, 0)
  }
})

onUnmounted(() => {
  const tawkScript = document.querySelector('script[src*="tawk.to"]')
  if (tawkScript) {
    tawkScript.remove()
  }
})
</script>

<style>
/* 预定义字体样式，减少布局偏移 */
@font-face {
  font-family: 'tawk-font-icon';
  font-display: swap; /* 使用 swap 策略加载字体 */
  src: url('https://embed.tawk.to/_s/v4/assets/fonts/tawk-font-icon-2.woff2') format('woff2');
}
</style>