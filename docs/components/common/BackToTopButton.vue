<template>
  <button
    v-show="show"
    class="back-to-top"
    @click="scrollToTop"
    title="回到顶部"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
      <path fill="none" d="M0 0h24v24H0z"/>
      <path d="M12 4l8 8h-6v8h-4v-8H4z" fill="currentColor"/>
    </svg>
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  show: {
    type: Boolean,
    required: true
  }
});

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
</script>

<style scoped>
/* 回到顶部按钮样式 */
.back-to-top {
  position: fixed;
  right: 30px;
  bottom: 115px;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background: var(--vp-c-brand);
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 100;
  opacity: 0.8;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  /* 添加初始变换 */
  transform: translateY(0);
}

.back-to-top:hover {
  opacity: 1;
  transform: translateY(-5px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

/* 添加进入和离开动画 */
.back-to-top {
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 0.8;
    transform: translateY(0);
  }
}

/* 深色模式适配 */
:root.dark .back-to-top {
  background: var(--vp-c-brand-dark);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

:root.dark .back-to-top:hover {
  background: var(--vp-c-brand);
}

/* 移动端适配 */
@media (max-width: 768px) {
  .back-to-top {
    right: 20px;
    bottom: 100px;
    width: 40px;
    height: 40px;
  }
  
  .back-to-top svg {
    width: 20px;
    height: 20px;
  }
}
</style>