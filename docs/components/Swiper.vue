<template>
  <!-- <h1 class="fabricName">{{ stringFClothingName }}</h1> -->
  <swiper
    :effect="'coverflow'"
    :grabCursor="true"
    :centeredSlides="true"
    :slidesPerView="'auto'"
    :initialSlide="1"
    :coverflowEffect="{
      rotate: 30,
      stretch: 20,
      depth: 60,
      modifier: 2,
      slideShadows: true,
    }"
    :pagination="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="(imgPath, index) in imagePaths" :key="index" >
        <img :src="imgPath" alt="Image" />
    </swiper-slide>
  </swiper>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/effect-coverflow';
  import 'swiper/css/pagination';
  import './css/swiper.css';

  // import required modules
  import { EffectCoverflow, Pagination, } from 'swiper/modules';

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
        modules: [EffectCoverflow, Pagination],
      };
    },
  };

</script>
