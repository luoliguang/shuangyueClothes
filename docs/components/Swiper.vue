<template>
      <!-- :autoplay="{
      delay: 5000,
      disableOnInteraction: false,
    }" -->
  <swiper
    :effect="'coverflow'"
    :grabCursor="true"
    :loop="true"
    :centeredSlides="true"
    :slidesPerView="'2'"
    :initialSlide="1"
    :loopFillGroupWithBlank="true"
    :coverflowEffect="{
      rotate: 30,
      stretch: 20,
      depth: 100,
      modifier: 2,
      slideShadows: false,
    }"
    :pagination="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-if="imagePaths.length > 0" class="swiperImg" v-for="(imgPath, index) in imagePaths" :key="index" >
        <img 
        v-lazy="imgPath" 
        :src="loadingGif"
        alt="Loading..." />
    </swiper-slide>
    <swiper-slide v-else class="swiperImg">
      <div class="no-images">正在准备素材中...</div>
    </swiper-slide>
  </swiper>
</template>
<script>
  // Import Swiper Vue.js components
  import { defineAsyncComponent } from 'vue'
  const Swiper = defineAsyncComponent(() => import('swiper/vue').then(m => m.Swiper))
  const SwiperSlide = defineAsyncComponent(() => import('swiper/vue').then(m => m.SwiperSlide))

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/effect-coverflow';
  import 'swiper/css/pagination';
  import './css/swiper.css';
  import loadingGif from '/loading/loading.svg'
  // import required modules
  import { Autoplay, EffectCoverflow, Mousewheel, Pagination } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    //接收一个图片路径数组
    props: {
      stringFClothingName: {
        type: String,
        required: false,
        default: 'Name',
      },
      imagePaths: {
        type: Array,
        required: true,
        default: () => [],
      }
    },

    setup() {
      return {
        modules: [EffectCoverflow, Pagination, Autoplay],
        loadingGif,
      };
    },
  };

  console.warn = () => {};  // 忽略警告
</script>
