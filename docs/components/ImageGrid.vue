<template>
  <div class="image-gallery">
    <div class="image-item" v-for="(img, index) in images" :key="index">
      <img :src="img" @click="handlePreview(img)" alt="预览图片">
    </div>
  </div>

  <div class="preview-overlay" v-if="isPreview" @click="closePreview">
    <img :src="currentImg" @click.stop="handlePreview(currentImg)" alt="大图预览" class="preview-image">
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    required: true,
    default: () => []
  }
})

const isPreview = ref(false)
const currentImg = ref('')

const handlePreview = (imgUrl) => {
  // 如果当前已经在预览这张图片，则关闭预览
  if (isPreview.value && currentImg.value === imgUrl) {
    closePreview()
    return
  }
  // 否则打开预览
  currentImg.value = imgUrl
  isPreview.value = true
  document.body.style.overflow = 'hidden'; // 禁用背景滚动
}

const closePreview = () => {
  isPreview.value = false
  currentImg.value = ''
  document.body.style.overflow = ''; // 恢复背景滚动
}


</script>

<style scoped>
.image-grid {
    font-family: 'tawk-font-icon', sans-serif; /* 确保使用了预加载的字体 */
}

.image-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
}

.image-item {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.image-item:hover {
  transform: translateY(-5px);
}

.image-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  transition: filter 0.3s ease;
}

.image-item:hover img {
  filter: brightness(1.05);
}

.preview-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  cursor: pointer;
  animation: fadeIn 0.3s ease;
}

.preview-image {
  max-width: 90%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
  cursor: default;
  animation: scaleIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes scaleIn {
  from { 
    transform: scale(0.9);
    opacity: 0;
  }
  to { 
    transform: scale(1);
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .image-gallery {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 15px;
    padding: 15px;
  }
}
</style>