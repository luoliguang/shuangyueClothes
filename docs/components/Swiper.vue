<template>
  <div class="swiper-container">
    <swiper
      :effect="'coverflow'"
      :grabCursor="true"
      :loop="true"
      :centeredSlides="true"
      :slidesPerView="'auto'"
      :initialSlide="1"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      }"
      :coverflowEffect="{
        rotate: 25,
        stretch: 0,
        depth: 150,
        modifier: 1,
        slideShadows: true,
      }"
      :pagination="{
        clickable: true,
        dynamicBullets: true
      }"
      :modules="modules"
      class="mySwiper"
      @swiper="onSwiperInit"
    >
      <swiper-slide 
        v-for="(imgPath, index) in imagePaths" 
        :key="index" 
        class="swiper-slide"
      >
        <div class="slide-content">
          <img
            v-lazy="{
              src: imgPath,
              error: '/loading/error.gif',
              loading: loadingGif
            }"
            :alt="`${stringFClothingName} ${index + 1}`"
          />
          <div class="slide-overlay">
            <span class="slide-number">{{ index + 1 }} / {{ imagePaths.length }}</span>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide v-if="imagePaths.length === 0" class="swiper-slide-empty">
        <div class="no-images">
          <i class="loading-icon">⌛</i>
          <span>正在准备素材中...</span>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
const Swiper = defineAsyncComponent(() => import('swiper/vue').then(m => m.Swiper))
const SwiperSlide = defineAsyncComponent(() => import('swiper/vue').then(m => m.SwiperSlide))

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import './css/swiper.css'
import loadingGif from '/loading/loading.svg'

// Import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules'

export default {
  name: 'Swiper3D',
  
  components: {
    Swiper,
    SwiperSlide,
  },

  props: {
    stringFClothingName: {
      type: String,
      required: false,
      default: 'Name',
    },
    imagePaths: {
      type: Array,
      required: true,
      validator: (value) => {
        return value.every(path => typeof path === 'string' && path.length > 0)
      }
    }
  },

  setup() {
    return {
      modules: [EffectCoverflow, Pagination, Autoplay],
      loadingGif,
    }
  },

  methods: {
    onSwiperInit(swiper) {
      // 确保分页器在组件挂载后初始化
      this.$nextTick(() => {
        swiper.pagination.init()
        swiper.pagination.update()
      })
    }
  }
}
</script>

<style scoped>
.swiper-container {
  position: relative;
  width: 100%;
  padding: 50px 0;
}

.mySwiper {
  width: 100%;
  padding-top: 30px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 480px;
  height: 270px;
  transition: transform 0.3s ease;
}

.slide-content {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.slide-content:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15);
}

.slide-content img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: var(--vp-c-bg-soft);
  transition: transform 0.3s ease;
}

.slide-content:hover img {
  transform: scale(1.05);
}

.slide-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 15px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.slide-content:hover .slide-overlay {
  opacity: 1;
}

.slide-number {
  font-size: 14px;
  font-weight: 500;
}

.swiper-slide-empty {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
}

.no-images {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  color: var(--vp-c-text-2);
}

.loading-icon {
  font-size: 24px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

:deep(.swiper-pagination) {
  bottom: 20px !important;
}

:deep(.swiper-pagination-bullet) {
  width: 8px;
  height: 8px;
  background: var(--vp-c-brand);
  opacity: 0.5;
  transition: all 0.3s ease;
}

:deep(.swiper-pagination-bullet-active) {
  width: 20px;
  border-radius: 4px;
  opacity: 1;
}

/* 暗色主题适配 */
:root.dark .swiper-slide-empty {
  background: var(--vp-c-bg-mute);
}

@media (max-width: 768px) {
  .swiper-slide {
    width: 320px;
    height: 180px;
  }
  
  .slide-overlay {
    padding: 10px;
  }
  
  .slide-number {
    font-size: 12px;
  }
}
</style>
