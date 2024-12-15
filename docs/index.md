---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "想，都是问题"
  text: "   做，才是答案"
  tagline: 素材与疑问的合集,内容正在完善整理中...
  image:
    src: /icon/favicon.ico2.png
    alt: OK
  actions:
    - theme: brand
      text: 实物素材
      link: '/Examples/fabric.md'
    - theme: alt
      text: 团队成员
      link: '/Team/team.md'
    - theme: alt
      text: 疑难解答
      link: '/Cooperate/reference-data.md'

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

<script setup>

//图片生成组件
// import { MainImgs } from './components/data/PhysicalMap.js'
import { getProductImages } from './components/data/PhysicalMapTC.js'


// const meme = MainImgs.MainImgs
const meme = getProductImages('MainImgs')
</script>

<style scope>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe, #41d1ff);
  --vp-layout-max-width: 100%;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
}
.image-src{
  max-width:80% !important;
}
</style>
<StartWelcome :imagePaths="meme" :scrollSpeed="0.3"/>
<!-- <Welcome :imagePaths="meme"/> -->