<template>
  <div class="scroll-container" ref="scrollContainer">
    <div class="scroll-content" ref="scrollContent">
      <img src="/else/首页素材/1.jpg" alt="" class="swiper-slide">
      <img src="/else/首页素材/2.jpg" alt="" class="swiper-slide">
      <img src="/else/首页素材/3.jpg" alt="" class="swiper-slide">
      <img src="/else/首页素材/4.jpg" alt="" class="swiper-slide">
      <img src="/else/首页素材/5.jpg" alt="" class="swiper-slide">
      <img src="/else/首页素材/6.jpg" alt="" class="swiper-slide">
      <img src="/else/首页素材/7.jpg" alt="" class="swiper-slide">
      <img src="/else/首页素材/8.jpg" alt="" class="swiper-slide">
      <img src="/else/首页素材/9.jpg" alt="" class="swiper-slide">
      <img src="/else/首页素材/10.jpg" alt="" class="swiper-slide">
      <img src="/else/首页素材/11.jpg" alt="" class="swiper-slide">
      <img src="/else/首页素材/12.jpg" alt="" class="swiper-slide">
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const container = this.$refs.scrollContainer;
    const content = this.$refs.scrollContent;
    const slides = content.querySelectorAll('.swiper-slide');
    const slideWidth = slides[0].offsetWidth + 10; // 每个幻灯片的宽度
    const totalSlides = slides.length; // 总幻灯片数量
    const containerWidth = container.offsetWidth; // 容器的宽度

    let scrollPosition = 0; // 当前滚动位置
    const scrollSpeed = .5; // 滚动的速度

    // 无限滚动逻辑
    function smoothScroll() {
      // 每次更新滚动位置
      scrollPosition += scrollSpeed;

      // 判断是否滚动到一张幻灯片的边界
      if (scrollPosition >= slideWidth) {
        // 如果滚动位置达到或超过一张幻灯片宽度，移除第一个幻灯片并将其移动到最后
        const firstSlide = content.firstElementChild;
        content.appendChild(firstSlide);

        // 重置滚动位置到0，继续无缝滚动
        scrollPosition = 0;
      }

      // 应用滚动位置
      content.style.transform = `translateX(-${scrollPosition}px)`;

      // 继续执行下一个动画帧
      requestAnimationFrame(smoothScroll);
    }

    // 启动滚动动画
    requestAnimationFrame(smoothScroll);

  }
}
</script>

<style scoped>
.scroll-container {
  margin-top: 20px;
  width: 100%;
  overflow: hidden;
  position: relative;
}

.scroll-content {
  display: flex;
  transition: transform 0s ease-out; /*初始过渡效果*/
}

.swiper-slide {
  flex: 0 0 auto;
  width: 30%; /* 每个幻灯片的宽度 */
  height: 200px; /* 幻灯片的高度 */
  margin-right: 10px;
  background-color: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>