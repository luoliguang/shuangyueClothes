<template>
  <swiper
    :loop="true"
    :modules="modules"
    :pagination="false"
    :slidesPerView="3"
    :spaceBetween="30"
    :autoplay='{
      delay: 0,
      disableOnInteraction: false,
    }'
    class="mySwiper"
  >
    <swiper-slide v-for="(imgPath, index) in imagePaths" :key="index" >
          <img 
          v-lazy="imgPath" 
          alt="Image" />
    </swiper-slide>
  </swiper>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  // Import Swiper styles  :modules="modules"
  import 'swiper/css';
  import 'swiper/css/pagination';
  import './css/welcome.css';
  // import required modules
  /*
  这里可以用来显示下面的圆点 并且是否可以能够点击
   :pagination="{
       clickable: true,
     }" 
  */
  import { Pagination,Autoplay } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },

    props: {
      imagePaths: {
        type: Array,
        required: true,
        default: () => [],
      }
    },

    setup() {
      return {
        modules: [Pagination]
      };
    },
  };
</script>
