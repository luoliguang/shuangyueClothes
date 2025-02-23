<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="isVisible" class="image-preview-overlay" @click="closePreview" @wheel.prevent>
        <div class="image-preview-content" @click.stop>
          <!-- 关闭按钮 -->
          <button class="close-button" @click="closePreview" aria-label="关闭预览">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          </button>

          <!-- 导航按钮 -->
          <button 
            v-if="showNavigation" 
            class="nav-button prev" 
            @click="prevImage"
            aria-label="上一张"
          >
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
          </button>
          <button 
            v-if="showNavigation" 
            class="nav-button next" 
            @click="nextImage"
            aria-label="下一张"
          >
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
            </svg>
          </button>

          <!-- 图片 -->
          <img 
            :src="imageUrl" 
            :alt="altText" 
            class="preview-image"
            @load="handleImageLoad"
          />

          <!-- 图片描述 -->
          <div v-if="description" class="image-description">
            {{ description }}
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const props = defineProps({
  isVisible: Boolean,
  imageUrl: String,
  altText: String,
  description: String,
  showNavigation: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['close', 'prev', 'next']);

const closePreview = () => {
  emit('close');
};

const prevImage = () => {
  emit('prev');
};

const nextImage = () => {
  emit('next');
};

const handleImageLoad = (event) => {
  // 可以在这里添加图片加载完成后的处理
};

const handleEscKey = (event) => {
  if (event.key === 'Escape' && props.isVisible) {
    closePreview();
  }
};

const handleKeyNav = (event) => {
  if (!props.isVisible || !props.showNavigation) return;
  
  if (event.key === 'ArrowLeft') {
    prevImage();
  } else if (event.key === 'ArrowRight') {
    nextImage();
  }
};

onMounted(() => {
  document.addEventListener('keydown', handleEscKey);
  document.addEventListener('keydown', handleKeyNav);
  if (props.isVisible) {
    document.body.style.overflow = 'hidden';
  }
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscKey);
  document.removeEventListener('keydown', handleKeyNav);
  document.body.style.overflow = '';
});
</script>

<style scoped>
.image-preview-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.image-preview-content {
  position: relative;
  max-width: 90%;
  max-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.preview-image {
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
  cursor: zoom-out;
}

.close-button,
.nav-button {
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.close-button {
  top: -50px;
  right: -50px;
}

.close-button svg {
  fill: white;
}

.nav-button {
  top: 50%;
  transform: translateY(-50%);
}

.nav-button.prev {
  left: -60px;
}

.nav-button.next {
  right: -60px;
}

.nav-button svg {
  fill: white;
}

.close-button:hover,
.nav-button:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}

.nav-button:hover {
  transform: translateY(-50%) scale(1.1);
}

.image-description {
  position: absolute;
  bottom: -40px;
  left: 0;
  right: 0;
  text-align: center;
  color: white;
  font-size: 14px;
  padding: 8px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 4px;
}

/* 动画效果 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .close-button {
    top: 20px;
    right: 20px;
  }

  .nav-button {
    width: 36px;
    height: 36px;
  }

  .nav-button.prev {
    left: 20px;
  }

  .nav-button.next {
    right: 20px;
  }

  .image-description {
    bottom: 20px;
    font-size: 12px;
  }
}
</style> 