<template>
  <div></div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
  const script = document.createElement('script')
  script.async = true
  script.src = 'https://embed.tawk.to/67877cc3825083258e055bc9/1ihkjumuo'
  script.charset = 'UTF-8'
  script.setAttribute('crossorigin', '*')
  document.head.appendChild(script)
})

onUnmounted(() => {
  const script = document.querySelector('script[src*="tawk.to"]')
  if (script) {
    script.remove()
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