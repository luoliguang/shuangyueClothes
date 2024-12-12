<template>
  <div class="swiper-container">
    <div v-if="!isClient" class="loading-overlay">
      <img :src="loadingGif" alt="Loading..." />
    </div>

    <swiper
      v-if="isClient"
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
        >
          <source :src="VideoPath[0]" type="video/mp4">
          您的浏览器不支持视频播放
        </video>
      </div>
    </details>
  </div>
</template>

<script>
import { defineAsyncComponent, onMounted, ref } from 'vue'
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
      required: true,
      validator: (value) => {
        return value.every(path => typeof path === 'string' && path.length > 0)
      }
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
    const isClient = ref(false)
    const swiperInstance = ref(null)

    onMounted(() => {
      isClient.value = true
    })

    const onSwiperInit = (swiper) => {
      swiperInstance.value = swiper
      if (isClient.value) {
        swiper.pagination?.el?.children[0]?.classList.add('pager-zoom')
        swiper.navigation?.init()
        swiper.navigation?.update()
        swiper.pagination?.init()
        swiper.pagination?.update()
        swiper.activeIndex = 0
        swiper.emit('slideChange')
      }
    }

    return {
      modules: [Zoom, Navigation, Pagination],
      loadingGif,
      swiperZoomConfig,
      isClient,
      onSwiperInit,
      errorImage: '/loading/error.gif'
    }
  }
}
</script>
