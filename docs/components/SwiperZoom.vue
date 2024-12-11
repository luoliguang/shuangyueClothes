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
      v-bind="swiperZoomConfig"
      :modules="modules"
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
import { defineAsyncComponent } from 'vue'
const Swiper = defineAsyncComponent(() => import('swiper/vue').then(m => m.Swiper))
const SwiperSlide = defineAsyncComponent(() => import('swiper/vue').then(m => m.SwiperSlide))

import 'swiper/css'
import 'swiper/css/zoom'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './css/swiperZoom.css'
import loadingGif from '/loading/loading.svg'

import { Zoom, Navigation, Pagination } from 'swiper/modules'
import { swiperZoomConfig } from './config/swiperConfig'

export default {
  name: 'SwiperZoom',
  
  components: {
    Swiper,
    SwiperSlide,
  },

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
    }
  },

  setup() {
    return {
      modules: [Zoom, Navigation, Pagination],
      loadingGif,
      swiperZoomConfig
    }
  },

  data() {
    return {
      loading: true,
      errorImage: '/loading/error.gif',
      errors: []
    }
  },

  methods: {
    onSwiperInit(swiper) {
      this.loading = false
      this.$nextTick(() => {
        swiper.navigation.init()
        swiper.navigation.update()
        swiper.pagination.init()
        swiper.pagination.update()
      })
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
}</script>
