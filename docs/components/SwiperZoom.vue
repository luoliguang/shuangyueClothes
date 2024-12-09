<template>
  <swiper
    :style="{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff',
    }"
    :zoom="true"
    :loop="true"
    :navigation="true"
    :zoomMax=1
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide class="zoom-slide" v-for="(imgPath, index) in imagePaths" :key="index" >
      <div class="swiper-zoom-container">
        <img class="swiper-room-img" 
          v-lazy="imgPath" 
          alt="Image" />
      </div>
    </swiper-slide>
  </swiper>

  <details v-if="FabricVideo">
    <summary>{{ FabricVideo }}</summary>
    <video :src="VideoPath" controls="controls"></video>
  </details>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css/zoom';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import './css/swiperZoom.css';

  // import required modules
  import { Zoom, Navigation, Pagination } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    //接收一个父组件传参
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
        default: '',
      }

    },

    setup() {

      return {
        modules: [Zoom, Navigation, Pagination],
      };
    },
  };
  
</script>
