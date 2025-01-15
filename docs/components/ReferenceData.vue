<template>
  <div class="reference-date">
    <img :src="ImageSrc" :alt="alias" class="reference-image" />
    <p class="reference-alias">{{ alias }}</p>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';

// 定义接收的 props
const props = defineProps({
  ImageSrc: {
    type: String,
    required: true, // 必填
  },
  alias: {
    type: String,
    default: 'Image', // 默认值
  },
});

// 在 mounted 钩子中添加 Tawk.to 脚本
onMounted(() => {
  var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
  var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
  s1.async = true;
  s1.src = 'https://embed.tawk.to/67877cc3825083258e055bc9/1ihkjumuo';
  s1.charset = 'UTF-8';
  s1.setAttribute('crossorigin', '*');
  s0.parentNode.insertBefore(s1, s0);
});

// 在卸载时移除 Tawk.to 脚本
onUnmounted(() => {
  const scriptTags = document.querySelectorAll('script[src*="tawk.to"]');
  scriptTags.forEach(script => {
    script.parentNode.removeChild(script);
  });
});
</script>

<style>
/* 样式可以根据需要调整 */
.reference-date {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.reference-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.reference-alias {
  margin-top: 8px;
  font-size: 14px;
  color: #01eaff;
  border-radius: 5px;
  border: 5px solid #005082; 
  padding: 0px 5px;
}

.tawk-text-center {
  display: none !important;
}
</style>
