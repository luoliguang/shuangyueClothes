---
layout: home
title: 双月服饰 - 专业的服装定制供应商
description: 我们始终致力于通过技术创新重构服装产业价值链，以智能制造基础设施为依托，持续为客户创造超越行业基准的协同价值。
head:
  - - meta
    - name: keywords
      content: 班服定制,校服定制,服装面料,面料供应,服装设计,智能制造,服装产业
  - - meta
    - name: giluoo
      content: 双月服饰

hero:
  name: "方度在线平台"
  text: "实物图素材、常见问题"
  tagline: 我们始终致力于通过技术创新重构服装产业价值链，以智能制造基础设施为依托，持续为客户创造超越行业基准的协同价值。
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
      text: 实物图素材
      link: '/Examples/all-material.md'
    - theme: alt
      text: 团队成员
      link: '/Team/team.md'

features:
  - icon: <span class="rive-canvas" data-rive-canvas="true" data-rive-src="/icons/rocket-emoji-animated.riv"></span>
    title: 高效稳定的发货体系
    details: 采用智能仓储管理系统，所有订单24小时内完成分拣打包，依托覆盖全国的7大仓储中心，确保85%地区72小时内送达（新疆、西藏等偏远地区5日内达）。严格实施三级质检流程，将发货准确率提升至99.6%，支持在线实时物流追踪，让您随时掌握货品动态。
  - icon: <span class="rive-canvas" data-rive-canvas="true" data-rive-src="/icons/crystall-ball-emoji-animated.riv"></span>
    title: 高性价比的透明价格
    details: 通过自有工厂与原料直供渠道的深度协同，优化中间环节成本，相同品质产品价格比传统采购渠道低20%-30%。每月根据市场行情调整300+核心单品的供应价，特别为长期合作伙伴保留5%弹性议价空间，在保证100%纯涤/混纺面料品质的前提下，真正实现质价双优。
  - icon: <span class="rive-canvas" data-rive-canvas="true" data-rive-src="/icons/star-emoji-animated.riv"></span>
    title: 专业效率的客服团队
    details: 客服部成员均经过6个月岗前实训，平均5年以上服装行业从业背景，可精准理解您的业务需求。不仅能快速处理订单咨询（平均响应时间2分钟内），更能提供实用的行业建议：从当季爆款面料选择到区域市场尺码偏好分析，我们像专业买手一样与您沟通，助您把握生意机会。
  - icon: <span class="rive-canvas" data-rive-canvas="true" data-rive-src="/icons/easter-island-statue-emoji-animated.riv"></span>
    title: 专业效率的设计师团队
    details: 我们组建了平均从业5年以上的服装设计团队，成员兼具专业院校背景与市场实战经验，专注提供高性价比的设计解决方案。过去3年已为420+中小商家提供设计支持，首稿采纳率达79%。我们不做天马行空的概念设计，只交付能快速投产、精准触达目标客群的实用方案。
---

<StartWelcome :imagePaths="imgUrl" :scrollSpeed="0.5"/>

<IndexTravel />

<TawkTo />


<script setup>
import { onMounted, onUnmounted, ref, watchEffect, onBeforeMount } from 'vue'
import { getImages, getImagesUrl } from '../docs/components/sever/sever.js'
import { fetchFileList,getAccessToken } from '../docs/components/sever/api.js'


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

// onMounted(async () => {
//   //123云盘
//     try {
//       // 获取 token
//       const accessToken = await getAccessToken();
//       console.log('-----')
//       // 使用 token 获取文件列表
//       //123云盘轮播图id
//       const parentFileId = 'yk6baz03t0n000d6xujp03e2mbxpf9gbDIYPDqQPDIUOAGx1AdU0'
//       const fileList = await fetchFileList(
//         accessToken,
//         20,  // 每页20条
//         parentFileId,
//         '',  // 根目录
//         null,
//         null,
//         null
//       );
      
//       // 处理文件列表
//       console.log('获取到的文件列表:', fileList);
//     } catch (error) {
//       console.error('操作失败:', error);
//     }
// })


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