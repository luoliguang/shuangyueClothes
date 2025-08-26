<template>
  <div class="feature-card">
    <div class="icon-wrapper" :style="{ backgroundColor: color }">
      <slot name="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256">
          <path fill="white" d="M128 24a96 96 0 0 0-96 96c0 39.4 23.83 72.38 56.88 87.2a16 16 0 0 0 22.24-15.3V168a48.05 48.05 0 0 1 32-45.21V112a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-24 88a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16Z"/>
        </svg>
      </slot>
    </div>
    <h3 class="card-title">{{ title }}</h3>
    <p class="card-description">{{ description }}</p>
    <a :href="link" class="card-link">
      最新地址
      <span class="arrow">&rarr;</span>
    </a>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

// 定义组件接收的属性 (Props)
defineProps({
  title: {
    type: String,
    required: true,
    default: '默认标题'
  },
  description: {
    type: String,
    required: true,
    default: '这里是服务的详细描述内容，帮助用户快速了解核心价值。'
  },
  // 主题色，用于图标背景
  color: {
    type: String,
    default: '#6366f1' // 一个优雅的默认紫色
  },
  link: {
    type: String,
    default: '#'
  }
});
</script>

<style scoped>
/* 使用 Google Fonts 提升字体质感，您可以在 index.html 中引入 */
/* @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;700&display=swap'); */

.feature-card {
  /* font-family: 'Noto Sans SC', sans-serif; */
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 1rem; /* 更大的圆角 */
  padding: 2.5rem 2rem;
  text-align: left;
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05);
}

/* 悬浮动效 */
.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
}

.icon-wrapper {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  border-radius: 0.75rem;
  margin-bottom: 1.5rem;
}

.card-title {
  font-size: 1.25rem; /* 20px */
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 0.5rem 0;
}

.card-description {
  font-size: 1rem; /* 16px */
  color: #6b7280;
  line-height: 1.6;
  margin: 0 0 1.5rem 0;
}

.card-link {
  color: v-bind(color); /* 链接颜色与主题色保持一致 */
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  transition: color 0.3s ease;
}

.card-link .arrow {
  margin-left: 0.25rem;
  transition: transform 0.3s ease;
}

.card-link:hover .arrow {
  transform: translateX(4px);
}
</style>