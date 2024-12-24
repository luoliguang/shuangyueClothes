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

<StartWelcome :imagePaths="imgUrl" :scrollSpeed="0.3"/>
<!-- <Welcome :imagePaths="imgUrl"/> -->

<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { getImages } from '../docs/components/API/api'

// 创建响应式数组
const imgUrl = ref([])

// 获取图片数组的异步函数
const fetchImagesUrl = async () => {
  try {
    const res = await getImages(1485)
    const images = res.data.data.map(item => item.links.url)
    imgUrl.value = images
    // console.log('获取到的图片数组：', images.length)
  } catch (error) {
    console.error('获取图片失败：', error)
  }
}

// 在组件挂载时获取图片
onMounted(() => {
  fetchImagesUrl()
})

// 可以添加一个定时器定期刷新图片
const timer = ref(null)

onMounted(() => {
  fetchImagesUrl()
  // 每5分钟刷新一次图片
  timer.value = setInterval(fetchImagesUrl, 5 * 60 * 1000)
})

onUnmounted(() => {
  if (timer.value) {
    clearInterval(timer.value)
  }
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