<template>
  <div class="scroll-container" ref="scrollContainer">
    <div class="scroll-content" ref="scrollContent">
      <div v-for="(image, index) in displayImages" 
           :key="index" 
           class="swiper-slide">
        <img :src="image" :alt="`slide-${index}`" loading="lazy">
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

// Props 定义
const props = defineProps({
  imagePaths: {
    type: Array,
    required: true,
    default: () => []
  },
  scrollSpeed: {
    type: Number,
    default: 0.5
  }
})

// 响应式引用
const scrollContainer = ref(null)
const scrollContent = ref(null)
const scrollPosition = ref(0)
const animationFrameId = ref(null)
const images = ref([...props.imagePaths]) // 创建一个本地图片数组的副本

// 为了实现无缝滚动，我们需要复制一些图片
const displayImages = computed(() => {
  return images.value
})

// 滚动动画逻辑
const smoothScroll = () => {
  if (!scrollContent.value) return
  
  scrollPosition.value += props.scrollSpeed
  const slides = scrollContent.value.querySelectorAll('.swiper-slide')
  const slideWidth = slides[0]?.offsetWidth + 10

  // 当第一张图片完全滚出可视区域时
  if (scrollPosition.value >= slideWidth) {
    // 重置滚动位置
    scrollPosition.value -= slideWidth
    // 将第一个元素移动到末尾
    images.value.push(images.value.shift())
  }
  
  scrollContent.value.style.transform = `translateX(-${scrollPosition.value}px)`
  animationFrameId.value = requestAnimationFrame(smoothScroll)
}


// 鼠标悬停控制
const pauseScroll = () => {
  if (animationFrameId.value) {
    cancelAnimationFrame(animationFrameId.value)
  }
}

const resumeScroll = () => {
  animationFrameId.value = requestAnimationFrame(smoothScroll)
}

onMounted(() => {
  if (scrollContainer.value && scrollContent.value) {
    // 启动滚动动画
    animationFrameId.value = requestAnimationFrame(smoothScroll)
    
    // 添加鼠标悬停事件
    scrollContainer.value.addEventListener('mouseenter', pauseScroll)
    scrollContainer.value.addEventListener('mouseleave', resumeScroll)
  }
})

onUnmounted(() => {
  if (animationFrameId.value) {
    cancelAnimationFrame(animationFrameId.value)
  }
  
  // 清理事件监听
  if (scrollContainer.value) {
    scrollContainer.value.removeEventListener('mouseenter', pauseScroll)
    scrollContainer.value.removeEventListener('mouseleave', resumeScroll)
  }
})
</script>

<style scoped>
.scroll-container {
  margin-top: 20px;
  width: 100%;
  overflow: hidden;
  position: relative;
}

.scroll-content {
  display: flex;
  transition: transform 0s ease-out;
}

.swiper-slide {
  flex: 0 0 auto;
  width: 30%;
  height: 200px;
  margin-right: 10px;
  overflow: hidden;
  border-radius: 8px;
}

.swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.swiper-slide:hover img {
  transform: scale(1.1);
}
</style>