<template>
  <div class="swiper-container">
    <div v-if="loading" class="loading-overlay">
      <img :src="loadingGif" alt="Loading..." />
    </div>

    <swiper
      :style="{
        '--swiper-navigation-color': 'var(--vp-c-brand)',
        '--swiper-pagination-color': 'var(--vp-c-brand)',
      }"
      :zoom="true"
      :loop="true"
      :navigation="true"
      :pagination="{
        type: 'fraction',
        clickable: true,
      }"
      :modules="modules"
      :slides-per-view="1"
      :space-between="30"
      class="mySwiper"
      @swiper="onSwiperInit"
    >
      <swiper-slide 
        class="zoom-slide" 
        v-for="(imgPath, index) in imagePaths" 
        :key="index"
      >
        <div class="swiper-zoom-container">
          <img
            class="swiper-room-img"
            v-lazy="{
              src: imgPath,
              error: errorImage,
              loading: loadingGif
            }"
            @error="handleImageError(index)"
            :alt="`Image ${index + 1}`"
          />
        </div>
      </swiper-slide>

      <div v-if="imagePaths.length === 0" class="no-images">
        暂无图片
      </div>
    </swiper>

    <!-- 自定义分页器 -->

    <details v-if="FabricVideo && VideoPath?.length" class="video-details">
      <summary class="video-summary">
        <span class="video-title">{{ FabricVideo }}</span>
        <span class="video-icon">▶</span>
      </summary>
      <div class="video-wrapper">
        <video 
          :src="VideoPath[0]" 
          controls
          preload="metadata"
          @error="handleVideoError"
        >
          <source :src="VideoPath[0]" type="video/mp4">
          您的浏览器不支持视频播放
        </video>
      </div>
    </details>
  </div>
</template>

<script>
  // Import Swiper Vue.js components
  import { defineAsyncComponent } from 'vue'
  const Swiper = defineAsyncComponent(() => import('swiper/vue').then(m => m.Swiper))
  const SwiperSlide = defineAsyncComponent(() => import('swiper/vue').then(m => m.SwiperSlide))

  // Import Swiper styles
  import 'swiper/css/zoom';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import './css/swiperZoom.css';
  import loadingGif from '/loading/loading.svg'

  // import required modules
  import { Zoom, Navigation, Pagination, } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    //接收个父组件传参
    props: {
      imagePaths: {
        type: Array,
        required: false,
        default: () => [],
      },
      VideoPath: {
        type: Array,
        required: false,
        default: () => [],
      },
      FabricVideo: {
        type: String,
        required: false,
        default: ''
      },
      zoomOptions: {
        type: Object,
        default: () => ({
          maxRatio: 3,
          minRatio: 1,
          toggle: true
        })
      }
    },

    setup() {

      return {
        modules: [Zoom, Navigation, Pagination],
        loadingGif,
      };
    },

    data() {
      return {
        loading: true,
        errorImage: '/loading/error.gif',
        errors: [],
        currentSlide: 1,
        totalSlides: 0,
        swiperInstance: null
      }
    },

    methods: {
      onSwiperInit(swiper) {
        this.loading = false;
        this.swiperInstance = swiper;
        this.totalSlides = this.imagePaths.length;
        
        // 监听滑动事件
        swiper.on('slideChange', () => {
          this.currentSlide = swiper.realIndex + 1;
        });

        // 初始化页码
        this.currentSlide = swiper.realIndex + 1;

        // 确保导航按钮可用
        this.$nextTick(() => {
          swiper.navigation.init();
          swiper.navigation.update();
          swiper.pagination.init();
          swiper.pagination.update();
        });
      },

      handleError(error) {
        console.error('Swiper error:', error)
        this.errors.push(error)
      },

      handleImageError(index) {
        console.error(`Failed to load image at index ${index}`)
      },

      handleVideoError(error) {
        console.error('Video error:', error.target.error)
      }
    }
  };
  
</script>

<style scoped>
.swiper-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.8);
  z-index: 1;
}

.no-images {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  background: #f5f5f5;
  color: #666;
}

.video-details {
  margin-top: 1rem;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
}

.video-summary {
  cursor: pointer;
  padding: 0.8rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;
  color: var(--vp-c-text-1);
  transition: background-color 0.2s;
}

.video-summary:hover {
  background: var(--vp-c-bg-mute);
}

.video-title {
  font-weight: 500;
}

.video-icon {
  font-size: 0.9em;
  transition: transform 0.2s;
}

details[open] .video-icon {
  transform: rotate(90deg);
}

.video-wrapper {
  padding: 1rem;
  background: var(--vp-c-bg);
}

.video-wrapper video {
  width: 100%;
  max-height: 80vh;
  border-radius: 4px;
  background: var(--vp-c-bg-soft);
  object-fit: contain;
}

/* 确保视频控件在暗色主题下可见 */
.video-wrapper video::-webkit-media-controls-panel {
  background-image: linear-gradient(transparent, var(--vp-c-bg-soft));
}

/* 移动端适配 */
@media (max-width: 768px) {
  .video-summary {
    padding: 0.6rem 0.8rem;
  }
  
  .video-wrapper {
    padding: 0.8rem;
  }
}

.swiper-zoom-container {
  cursor: zoom-in;
}

.swiper-zoom-container.zoomed {
  cursor: zoom-out;
}

:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  width: 44px !important;
  height: 44px !important;
  background-color: var(--vp-c-bg-soft);
  border-radius: 50%;
  opacity: 0.9 !important;
  transition: all 0.3s ease;
}

:deep(.swiper-button-prev:hover),
:deep(.swiper-button-next:hover) {
  background-color: var(--vp-c-brand);
  color: white !important;
  opacity: 1 !important;
  transform: scale(1.1);
}

:deep(.swiper-button-prev:after),
:deep(.swiper-button-next:after) {
  font-size: 20px;
  font-weight: bold;
}
.swiper-pagination-fraction{
  /* width: auto; */
}
:deep(.swiper-pagination) {
  position: absolute;
  bottom: 20px;
  left: 50% !important;
  transform: translateX(-50%);
  background: var(--vp-c-bg-soft);
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 14px;
  color: var(--vp-c-text-1);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

.custom-pagination {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--vp-c-bg-soft);
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 14px;
  color: var(--vp-c-text-1);
  z-index: 10;
  user-select: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  opacity: 1 !important;
  pointer-events: auto !important;
  color: var(--vp-c-brand) !important;
  transition: transform 0.3s ease;
}

:deep(.swiper-button-prev:hover),
:deep(.swiper-button-next:hover) {
  transform: scale(1.1);
}

:deep(.swiper-button-disabled) {
  opacity: 0.35 !important;
  cursor: not-allowed;
  pointer-events: none !important;
}
</style>
