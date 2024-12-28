---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "想，都是问题"
  text: "   做，才是答案"
  tagline: 素材与疑问的合集,内容正在完善整理中...
  image:
    src: https://bu.dusays.com/2024/12/17/6760584bcf0e4.png
    alt: OK
  actions:
    - theme: brand
      text: 实物素材
      link: '/Examples/fabric.md'
    - theme: alt
      text: 疑难解答
      link: '/Cooperate/reference-data.md'
    - theme: brand
      text: 素材总览
      link: '/Examples/all-material.md'
    - theme: alt
      text: 团队成员
      link: '/Team/team.md'

features:
  - icon: 🚀
    title: EFFICIENCY
    details: 最具效率的发货速度
  - icon: 💸
    title: FAVOURABLE
    details: 更实惠的价格
  - icon: 👨🏽
    title: PERFECT
    details: 更具专业知识的客服
---
<keep-alive>
<StartWelcome :imagePaths="imgUrl" :scrollSpeed="0.5"/>
</keep-alive>
<!-- <Welcome :imagePaths="imgUrl"/> -->

<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { getImages, getImagesUrl } from '../docs/components/sever/sever.js'

// 创建响应式数组
const imgUrl = ref([])

// 异步获取图片处理结果
getImagesUrl(1485).then(res => {
  imgUrl.value = res.map(item => item.url)
})

// 在组件挂载时获取图片
onMounted(() => {

})

onUnmounted(() => {

})
</script>

<style scope>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe, #41d1ff);
}

.swiper-slide {
  background-position: center;
  background-size: cover;
}
.image-src{
  max-width:80% !important;
}
</style>