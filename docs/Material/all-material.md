---
layout: home
---

<script setup>
import { ref, computed, onMounted,onUnmounted,onBeforeMount } from 'vue'
import { getImagesUrl } from '../components/sever/sever.js'
import { styleTemplates, apiNumbers } from '../components/data/AllMaterial.js' // 素材数据
import { data } from '../components/sever/allMaterial.data.js' // 导入构建时加载的数据
import { processImageData, loadFromCache, saveToCache } from '../components/utils/materialProcessors.js'

const materialCategories = [
  {
    id: 1,
    name: '面料类型',
    tags: [
      { id: '130xfg', name: '130克小方格速干', count: 0 },
      { id: '160pingwenbu', name: '160克平纹布', count: 0 },
      { id: '180bingsi', name: '180克冰丝蝴蝶网', count: 0 },
      { id: '180pingguo', name: '180克苹果网', count: 0 },
      { id: '180xiaomitong', name: '180克小米通速干', count: 0 },
      { id: '200zhudi', name: '200克珠地', count: 0 },
      { id: '220fangmian', name: '220克仿棉', count: 0 },
      { id: '260zhudi', name: '260克珠地', count: 0 },
      { id: '280xiewen', name: '280克斜纹', count: 0 },
      { id: '300jiankangbu', name: '300克健康布', count: 0 },
      { id: '400yinhuru', name: '400克银狐绒', count: 0 },
      { id: 'fuhe', name: '复合', count: 0 },
      { id: 'modaier', name: '莫代尔', count: 0 },
      { id: 'shuimitao', name: '水蜜桃', count: 0 },
      { id: 'simiantan', name: '四面弹', count: 0 },
      { id: 't400', name: 'T400', count: 0 },
      { id: 'AllZhuDi', name: '珠地', count: 0 },
      { id: 'AllSuGan', name: '速干', count: 0 },
    ]
  },
  {
    id: 2,
    name: '款式分类',
    tags: [
      { id: 'Tshirt', name: '圆领短袖', count: 0 },
      { id: 'Polo', name: '翻领短袖', count: 0 },
      { id: 'fengyililing', name: '立领风衣', count: 0 },
      { id: 'fengyilailian', name: '拉链风衣', count: 0 },
      { id: 'majia', name: '马甲', count: 0 },
      { id: 'taotouwei', name: '套头卫衣', count: 0 },
      { id: 'lilingwei', name: '立领卫衣', count: 0 },
      { id: 'lianmaowei', name: '拉链连帽卫衣', count: 0 },
      { id: 'yuanlingwei', name: '圆领卫衣', count: 0 },
      { id: 'UKbangqiufu', name: '棒球服', count: 0 },
      { id: 'kuzi', name: '长裤 短裤', count: 0 },
      { id: 'longSleeved', name: '长袖', count: 0 },
    ]
  },
  {
    id: 3,
    name: '面料细节',
    tags: [
      { id: 'detail', name: '所有面料细节🥳', count: 0 },
    ]
  },
]

const materials = ref([])
const allImages = ref({})
const loading = ref(false)
const error = ref(null)

const loadMaterials = async () => {
  try {
    loading.value = true
    
    // 尝试从缓存加载
    const cachedData = loadFromCache(materialCategories)
    if (cachedData) {
      materials.value = cachedData
      return
    }

    // 获取所有数据
    const results = await Promise.all(
      Object.entries(apiNumbers).map(([key, id]) => 
        getImagesUrl(id).then(res => 
          res.map((item, index) => 
            processImageData(item, index, key, materialCategories, styleTemplates)
          )
        )
      )
    )

    materials.value = results.flat()
    saveToCache(materials.value, materialCategories)
    
  } catch (err) {
    error.value = err
    console.error('加载数据失败:', err)
  } finally {
    loading.value = false
  }
}

// 提供刷新方法
const refreshMaterials = () => {
  localStorage.removeItem(CACHE_KEY)
  return loadMaterials()
}

// 生命周期钩子
onMounted(() => {
  loadMaterials()
})
</script>

<KeepAlive>
  <AllMaterial 
    :categories="materialCategories"
    :materials-list="materials"
    :loading="loading"
    :error="error"
    @refresh="refreshMaterials"
  />
</KeepAlive>