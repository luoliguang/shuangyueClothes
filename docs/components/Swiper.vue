<template>
  <div class="swiper-container">
    <swiper
      v-bind="swiperConfig"
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
import './css/swiper3d.css'
import loadingGif from '/loading/loading.svg'

// Import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules'
import { swiperConfig } from './config/swiperConfig'

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
    //忽略包含 "Swiper Loop Warning" 的警告
    const originalWarn = console.warn;
    console.warn = (...args) => {
      if (args[0].includes('Swiper Loop Warning')) return;
      originalWarn(...args);
    };

    return {
      modules: [EffectCoverflow, Pagination, Autoplay],
      loadingGif,
      swiperConfig
    }
  },

  methods: {
    onSwiperInit(swiper) {
      this.$nextTick(() => {
        swiper.pagination.init()
        swiper.pagination.update()
      })
    }
  }
}
</script>
