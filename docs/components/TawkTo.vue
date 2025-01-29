<template>
  <div></div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
  let Tawk_API = window.Tawk_API || {}
  let Tawk_LoadStart = new Date()
  
  const script = document.createElement('script')
  script.async = true
  script.src = 'https://embed.tawk.to/67877cc3825083258e055bc9/1ihkjumuo'
  script.charset = 'UTF-8'
  script.setAttribute('crossorigin', '*')
  
  document.head.appendChild(script)
})

onUnmounted(() => {
  const tawkScript = document.querySelector('script[src*="tawk.to"]')
  if (tawkScript) {
    tawkScript.remove()
  }
})
</script>