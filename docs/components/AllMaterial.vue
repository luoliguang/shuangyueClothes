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
        v-if="hasMore && filteredMaterials.length > 0" 
        class="load-more"
        ref="loadMoreRef"
        @click="loadMore"
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
const loadMoreRef = ref(null) // 添加 ref 引用

// 处理图片加载错误
const handleImageError = (event) => {
  event.target.src = '/loading/error.gif'
}

// 过滤后的素材
const filteredMaterials = computed(() => {
  return materials.value.filter(material => {
    // 搜索过滤：将搜索词按空格分割成数组
    const searchTerms = searchQuery.value
      .toLowerCase()
      .split(/\s+/)
      .filter(term => term.length > 0)

    // 如果没有搜索词，返回true
    const matchesSearch = searchTerms.length === 0 || searchTerms.every(term => {
      const materialName = material.name.toLowerCase()
      const materialDesc = material.description.toLowerCase()
      const materialTags = material.tags.map(tag => 
        typeof tag === 'string' ? tag.toLowerCase() : tag.name.toLowerCase()
      )
      
      return materialName.includes(term) ||
             materialDesc.includes(term) ||
             materialTags.some(tag => tag.includes(term))
    })
    
    // 标签过滤：确保素材包含所有选中的标签
    const matchesTags = selectedTags.value.length === 0 || 
      selectedTags.value.every(selectedTag => {
        // 如果 material.tags 是对象数组，使用 id 匹配
        if (typeof material.tags[0] === 'object') {
          return material.tags.some(tag => tag.id === selectedTag)
        }
        // 如果 material.tags 是字符串数组，直接匹配
        return material.tags.includes(selectedTag)
      })
    
    return matchesSearch && matchesTags
  })
})

// 加载素材
const loadMaterials = async () => {
  if (isLoading.value) return
  
  isLoading.value = true
  try {
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
    if (hasMore.value) {
      page.value++
    }

    // 如果没有更多数据，取消观察
    if (!hasMore.value && observer) {
      observer.disconnect()
    }
  } catch (error) {
    console.error('Failed to load materials:', error)
  } finally {
    isLoading.value = false
  }
}

// 重置加载状态
const resetLoadState = () => {
  page.value = 1
  hasMore.value = true
  materials.value = []
  if (observer && loadMoreRef.value) {
    observer.observe(loadMoreRef.value)
  }
}

// 防抖搜索
const handleSearch = useDebounceFn(() => {
  resetLoadState()
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
  resetLoadState()
  loadMaterials()
}

// 模拟 API 调用
const fetchMaterials = async ({ page, search, tags }) => {
  // 模拟网络延迟
  await new Promise(resolve => setTimeout(resolve, 500))

  // 过滤数据
  let filteredData = [...props.materialsList]

  // 搜索过滤：支持多关键词
  if (search) {
    const searchTerms = search.toLowerCase().split(/\s+/).filter(term => term.length > 0)
    filteredData = filteredData.filter(material => {
      const materialName = material.name.toLowerCase()
      const materialDesc = material.description.toLowerCase()
      const materialTags = material.tags.map(tag => 
        typeof tag === 'string' ? tag.toLowerCase() : tag.name.toLowerCase()
      )
      
      return searchTerms.every(term =>
        materialName.includes(term) ||
        materialDesc.includes(term) ||
        materialTags.some(tag => tag.includes(term))
      )
    })
  }

  // 标签过滤
  if (tags && tags.length > 0) {
    filteredData = filteredData.filter(material =>
      tags.every(selectedTag => {
        // 如果 material.tags 是对象数组，使用 id 匹配
        if (typeof material.tags[0] === 'object') {
          return material.tags.some(tag => tag.id === selectedTag)
        }
        // 如果 material.tags 是字符串数组，直接匹配
        return material.tags.includes(selectedTag)
      })
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

// 点击素材
const handleMaterialClick = (material) => {
  // 处理素材点击事件，可能打开详情页或预览
}
const loadMore = () => {
  loadMaterials()
}

// 创建 Intersection Observer 实例
let observer
onMounted(() => {
  // 确保在客户端环境
  if (typeof window !== 'undefined') {
    observer = new IntersectionObserver((entries) => {
      const target = entries[0]
      if (target.isIntersecting && hasMore.value && !isLoading.value) {
        loadMaterials()
      }
    }, {
      rootMargin: '100px', // 提前 100px 触发加载
      threshold: 0.1 // 降低阈值，使触发更容易
    })

    // 使用 ref 获取元素并观察
    if (loadMoreRef.value) {
      observer.observe(loadMoreRef.value)
    }
  }

  // 初始加载
  loadMaterials()
})

// 在组件卸载时清理
onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
@import './css/allMaterial.css';
</style>