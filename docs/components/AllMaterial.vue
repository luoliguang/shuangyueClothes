<template>
  <div class="material-container">
    <!-- 搜索区域 -->
    <div class="search-section">
      <div class="search-box">
        <input 
          v-model="searchQuery" 
          type="text" 
          placeholder="搜索素材..."
          @input="handleSearch"
        >
        <div class="search-icon">
          <i class="icon-search"></i>
        </div>
      </div>
    </div>

    <!-- 分类过滤器 -->
    <div class="filter-section">
      <div 
        v-for="category in categories" 
        :key="category.id"
        class="category-group"
      >
        <h3 class="category-title">{{ category.name }}</h3>
        <div class="category-tags">
          <button
            v-for="tag in category.tags"
            :key="tag.id"
            :class="['tag-btn', { active: selectedTags.includes(tag.id) }]"
            @click="toggleTag(tag.id)"
          >
            {{ tag.name }}
            <span v-if="tag.count" class="tag-count">{{ tag.count }}</span>
          </button>
        </div>
      </div>
    </div>

    <!-- 素材展示区域 -->
    <div class="materials-grid" ref="materialsGrid">
      <div 
        v-for="material in filteredMaterials" 
        :key="material.id"
        class="material-card"
        @click="handleMaterialClick(material)"
      >
        <div class="material-image">
          <img 
            :src="material.thumbnail"
            :alt="material.name"
            loading="lazy"
            @error="handleImageError"
          >
          <div class="material-overlay">
            <span class="material-type">{{ material.type }}</span>
          </div>
        </div>
        <div class="material-info">
          <h4>{{ material.name }}</h4>
          <p>{{ material.description }}</p>
        </div>
      </div>

      <!-- 加载更多 -->
      <div 
        v-if="hasMore" 
        class="load-more"
      >
        <div class="loading-spinner"></div>
        加载更多...
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, nextTick, onUnmounted } from 'vue'
import { useDebounceFn } from '@vueuse/core'

// 定义 props
const props = defineProps({
  categories: {
    type: Array,
    required: true,
    validator: (value) => {
      return value.every(category => {
        return typeof category.id === 'number' &&
               typeof category.name === 'string' &&
               Array.isArray(category.tags) &&
               category.tags.every(tag => 
                 typeof tag.id === 'string' &&
                 typeof tag.name === 'string' &&
                 typeof tag.count === 'number'
               )
      })
    }
  },
  materialsList: {
    type: Array,
    required: true,
    validator: (value) => {
      return value.every(material => {
        return typeof material.id === 'number' &&
               typeof material.name === 'string' &&
               typeof material.description === 'string' &&
               typeof material.type === 'string' &&
               typeof material.thumbnail === 'string' &&
               Array.isArray(material.tags)
      })
    }
  }
})

// 状态管理
const searchQuery = ref('')
const selectedTags = ref([])
const materials = ref([...props.materialsList]) // 初始化材料数据
const page = ref(1)
const hasMore = ref(true)
const isLoading = ref(false)

// 处理图片加载错误
const handleImageError = (event) => {
  event.target.src = '/loading/error.gif'
}

// 过滤后的素材
const filteredMaterials = computed(() => {
  return materials.value.filter(material => {
    // 搜索过滤
    const matchesSearch = !searchQuery.value || 
      material.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      material.description.toLowerCase().includes(searchQuery.value.toLowerCase())
    
    // 标签过滤：确保素材包含所有选中的标签
    const matchesTags = selectedTags.value.length === 0 || 
      selectedTags.value.every(selectedTag => material.tags.includes(selectedTag))
    
    // 同时满足搜索和标签条件
    return matchesSearch && matchesTags
  })
})

// 防抖搜索
const handleSearch = useDebounceFn(() => {
  // 重置页码并重新加载
  page.value = 1
  loadMaterials()
}, 300)

// 切换标签
const toggleTag = (tagId) => {
  const index = selectedTags.value.indexOf(tagId)
  if (index === -1) {
    selectedTags.value.push(tagId)
  } else {
    selectedTags.value.splice(index, 1)
  }
  // 重置页码并重新加载
  page.value = 1
  loadMaterials()
}

// 模拟 API 调用
const fetchMaterials = async ({ page, search, tags }) => {
  // 模拟网络延迟
  await new Promise(resolve => setTimeout(resolve, 500))

  // 过滤数据
  let filteredData = [...props.materialsList]

  // 搜索过滤
  if (search) {
    filteredData = filteredData.filter(material => 
      material.name.toLowerCase().includes(search.toLowerCase()) ||
      material.description.toLowerCase().includes(search.toLowerCase())
    )
  }

  // 标签过滤
  if (tags && tags.length > 0) {
    filteredData = filteredData.filter(material =>
      material.tags.some(tag => tags.includes(tag))
    )
  }

  // 分页
  const pageSize = 6
  const start = (page - 1) * pageSize
  const end = start + pageSize
  const paginatedData = filteredData.slice(start, end)

  return {
    data: paginatedData,
    hasMore: end < filteredData.length
  }
}

// 加载素材
const loadMaterials = async () => {
  if (isLoading.value) return
  
  isLoading.value = true
  try {
    // 这里替换为实际的 API 调用
    const response = await fetchMaterials({
      page: page.value,
      search: searchQuery.value,
      tags: selectedTags.value
    })
    
    if (page.value === 1) {
      materials.value = response.data
    } else {
      materials.value = [...materials.value, ...response.data]
    }
    
    hasMore.value = response.hasMore
    page.value++
  } catch (error) {
    console.error('Failed to load materials:', error)
  } finally {
    isLoading.value = false
  }
}

// 点击素材
const handleMaterialClick = (material) => {
  // 处理素材点击事件，可能打开详情页或预览
}

// 创建 Intersection Observer 实例
let observer
onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && hasMore.value && !isLoading.value) {
        loadMaterials()
      }
    })
  }, {
    threshold: 0.5
  })

  // 观察加载更多元素
  const loadMoreEl = document.querySelector('.load-more')
  if (loadMoreEl) {
    observer.observe(loadMoreEl)
  }

  // 初始加载
  loadMaterials()
})

// 在组件卸载时清理 observer
onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
@import './css/allMaterial.css';
</style>