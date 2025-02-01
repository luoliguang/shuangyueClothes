---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "方度线上平台"
  text: "实物图素材、常见问题"
  tagline: 实物图|效果图素材|常见问题|在线服务，致力于为客户提供极致的服务体验
  image:
    src: https://bu.dusays.com/2024/12/17/6760584bcf0e4.png
    alt: OK
  actions:
    - theme: brand
      text: 面料视频
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

<IndexTravel />

<TawkTo />

<script setup>
import { onMounted, onUnmounted, ref, watchEffect, onBeforeMount } from 'vue'
import { getImages, getImagesUrl } from '../docs/components/sever/sever.js'

// 创建响应式数组
const imgUrl = ref([])

//使用localStorage缓存
const CACHE_KEY = 'home_page_images_cache'
const CACHE_EXPIRY = 24 * 60 * 60 * 1000 // 24小时的毫秒数

const getImagesData = async () => {
  try {
    const res = await getImagesUrl(1485)
    const cachedData = {
      data: res,
      timestamp: Date.now()
    }
    localStorage.setItem(CACHE_KEY, JSON.stringify(cachedData))
    return res
  } catch (error) {
    console.error('获取主页图片失败:', error)
    return []
  }
}

onMounted(async ()=> {
  // 尝试从缓存获取数据
  const cachedData = localStorage.getItem(CACHE_KEY)

  if (cachedData) {
    const { data, timestamp } = JSON.parse(cachedData)
    const isExpired = Date.now() - timestamp > CACHE_EXPIRY
    if (!isExpired) {
      // 使用缓存数据
      imgUrl.value = data.map(item => item.url)
      return
    }
  }
  
  // 缓存不存在或已过期，重新获取数据
  const newData = await getImagesData()
  imgUrl.value = newData.map(item => item.url)
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