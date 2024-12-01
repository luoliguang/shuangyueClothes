---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "想，都是问题"
  text: "   做，才是答案"
  tagline: 无与伦比的服务💁‍♀️
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

features:
  - title: EFFICIENCY🚀
    details: 最具效率的发货速度
  - title: FAVOURABLE💸
    details: 更实惠的价格
  - title: PERFECT👨🏽
    details: 更具专业知识的客服
---

<script setup>

const meme = [
  '/else/首页素材/1.jpg',
  '/else/首页素材/2.jpg',
  '/else/首页素材/3.jpg',
  '/else/首页素材/4.jpg',
  '/else/首页素材/5.jpg',
  '/else/首页素材/6.jpg',
  '/else/首页素材/7.jpg',
  '/else/首页素材/8.jpg',
]

</script>

<style>
.swiper-slide {
  background-position: center;
  background-size: cover;
}
.image-src{
  max-width:80% !important;
}
</style>
<StartWelcome />
<!-- <Welcome :imagePaths="meme"/> -->