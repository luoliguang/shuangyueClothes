<template>
    <div ref="scrollContainer" class="scroll-container">
      <div ref="scrollContent" class="scroll-content">
        <!-- 第一组图片 -->
        <div v-for="(image, index) in displayImages" 
           :key="index" 
           class="swiper-slide">
        <img 
          :src="image"
          :alt="`slide-${index}`"
          loading="lazy">
      </div>
      <!-- 复制一组相同的图片实现无缝效果 -->
      <div v-for="(image, index) in displayImages" 
           :key="`repeat-${index}`" 
           class="swiper-slide">
        <img 
          :src="image"
          :alt="`slide-repeat-${index}`"
          loading="lazy">
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'

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
const images = ref([]) // 本地图片数组

// 监听 props.imagePaths 的变化
watch(() => props.imagePaths, (newImages) => {
  if (newImages && newImages.length > 0) {
    images.value = [...newImages]
    // 确保动画只启动一次
    if (!animationFrameId.value) {
      startAnimation()
    }
  }
}, { immediate: true })

// 计算属性，用于显示图片
const displayImages = computed(() => {
  return images.value.length > 0 ? images.value : []
})

// 启动动画
const startAnimation = () => {
  if (!scrollContent.value || images.value.length === 0) return
  
  // 重置位置
  scrollPosition.value = 0
  scrollContent.value.style.transform = `translateX(0px)`
  
  // 启动滚动动画
  animationFrameId.value = requestAnimationFrame(smoothScroll)
}

// 滚动动画逻辑
const smoothScroll = () => {
  if (!scrollContent.value || images.value.length === 0) return
  
  scrollPosition.value += props.scrollSpeed
  const contentWidth = scrollContent.value.scrollWidth / 2 // 因为我们复制了一组图片
  
  // 当滚动到第一组图片的末尾时，重置位置到开始处
  if (scrollPosition.value >= contentWidth) {
    scrollPosition.value = 0
  }
  
  scrollContent.value.style.transform = `translateX(-${scrollPosition.value}px)`
  animationFrameId.value = requestAnimationFrame(smoothScroll)
}

// 鼠标悬停控制
const pauseScroll = () => {
  if (animationFrameId.value) {
    cancelAnimationFrame(animationFrameId.value)
    animationFrameId.value = null
  }
}

const resumeScroll = () => {
  if (!animationFrameId.value) {
    animationFrameId.value = requestAnimationFrame(smoothScroll)
  }
}

onMounted(() => {
  if (scrollContainer.value && scrollContent.value) {
    // 确保图片加载完成后再启动动画
    if (images.value.length > 0) {
      startAnimation()
    }
    
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
  will-change: transform;
}

.swiper-slide {
  flex: 0 0 auto;
  width: 30%;
  max-height: 200px;
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

@media screen and (max-width: 600px) {
  .swiper-slide {
    max-height: 100px;
  }
}
</style>