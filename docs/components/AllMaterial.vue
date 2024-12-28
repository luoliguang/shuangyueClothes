<template>
  <div class="material-container">
    <!-- 搜索区域 -->
    <div class="search-section">
      <div class="search-box">
        <input 
          v-model="searchQuery" 
          type="text" 
          placeholder="搜索素材..."
          @keyup.enter="handleSearch"
        >
        <div class="search-actions">
          <button 
            v-if="searchQuery"
            class="search-btn clear-btn"
            @click="clearSearch"
            title="清空搜索"
          >
          <svg t="1734765103430" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="32094" width="32" height="32"><path d="M748.928 129.792a96 96 0 0 0-117.568 67.84l-24.832 92.8-92.8-24.896a96 96 0 0 0-80.064 171.264c-2.752 8.064-6.272 17.728-10.496 28.544a622.016 622.016 0 0 1-58.112 114.304c-43.2 65.408-134.016 142.592-165.248 168.128a38.464 38.464 0 0 0 14.464 66.944l454.208 121.728c30.08 8.064 63.232-4.608 78.528-33.984 28.928-55.68 94.72-197.568 98.112-349.952a96 96 0 0 0 39.552-187.584l-92.672-24.832 24.832-92.8a96 96 0 0 0-67.84-117.504z m-18.752 193.728l24.832-92.736a32 32 0 1 0-61.824-16.576l-24.832 92.8 61.824 16.512z m-140.224 28.672l-92.736-24.832a32 32 0 0 0-16.576 61.824l340.032 91.072 22.272 6.016 8.64 2.304a32 32 0 0 0 16.576-61.824l-92.8-24.832-30.848-8.32L620.8 360.512l-30.912-8.32zM493.696 458.944l287.552 77.056c1.28 142.08-61.888 280.96-91.008 336.896a3.2 3.2 0 0 1-1.728 1.6 5.44 5.44 0 0 1-3.52 0.128l-64.704-17.344 49.92-186.24c1.792-6.72-6.912-11.136-11.264-5.632l-131.392 167.04-61.824-16.64 35.392-132.16c1.728-6.272-5.952-10.816-10.624-6.272L372.992 791.04l-95.168-25.536c42.752-37.44 104.704-96.192 140.672-150.592 29.504-44.736 50.56-91.264 64.32-126.272 4.352-11.136 7.936-21.12 10.88-29.696z m-307.776-4.864L160 384l-25.92 70.08L64 480l70.08 25.92L160 576l25.92-70.08L256 480l-70.08-25.92zM256 256l17.28 46.72L320 320l-46.72 17.28L256 384l-17.28-46.72L192 320l46.72-17.28L256 256zM145.28 174.72L128 128l-17.28 46.72L64 192l46.72 17.28L128 256l17.28-46.72L192 192l-46.72-17.28z" fill="#1F6FBF" p-id="32095"></path></svg>
          </button>
          <button 
            class="search-btn search-icon"
            @click="handleSearch"
            title="搜索"
          >
          <svg t="1734764877670" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16860" width="32" height="32"><path d="M596.48 728.64a8.032 8.032 0 0 1-5.664-2.336l-92.208-92.208a8.048 8.048 0 0 1 0.784-12.016 233.04 233.04 0 0 0 43.744-43.744 8.032 8.032 0 0 1 12.016-0.784l92.208 92.208a8 8 0 0 1 0 11.312l-45.248 45.248a7.952 7.952 0 0 1-5.632 2.32z m-80.192-99.52l80.208 80.208 33.936-33.936-80.208-80.208a248.256 248.256 0 0 1-33.936 33.936zM688 152.016h-64a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16z" fill="#263238" p-id="16861"></path><path d="M656 184.016a8 8 0 0 1-8-8v-64a8 8 0 0 1 16 0v64a8 8 0 0 1-8 8zM784 232.016h-64a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16z" fill="#263238" p-id="16862"></path><path d="M752 264.016a8 8 0 0 1-8-8v-64a8 8 0 0 1 16 0v64a8 8 0 0 1-8 8z" fill="#263238" p-id="16863"></path><path d="M647.392 669.728l-56.576 56.576a15.984 15.984 0 0 0 0 22.624l158.384 158.384a15.984 15.984 0 0 0 22.624 0l56.576-56.576a15.984 15.984 0 0 0 0-22.624l-158.384-158.384a16 16 0 0 0-22.624 0z" fill="#40C4FF" p-id="16864"></path><path d="M760.528 919.984c-6.144 0-12.288-2.336-16.976-7.008l-158.384-158.4a23.76 23.76 0 0 1-7.024-16.96c0-6.4 2.496-12.448 7.024-16.992l56.56-56.56a24 24 0 0 1 33.952 0l158.384 158.384a24.016 24.016 0 0 1 0 33.936l-56.576 56.576a23.792 23.792 0 0 1-16.96 7.024z m-101.824-246.944a8.016 8.016 0 0 0-5.664 2.336l-56.56 56.56a7.952 7.952 0 0 0 0 11.312l158.384 158.4a8.064 8.064 0 0 0 11.312 0l56.576-56.576a8 8 0 0 0 0-11.328l-158.384-158.384a8 8 0 0 0-5.664-2.32zM358.896 685.792c-136.752 0-248-111.248-248-248s111.248-248 248-248c136.736 0 248 111.248 248 248s-111.248 248-248 248z m0-480c-127.92 0-232 104.08-232 232s104.08 232 232 232 232-104.08 232-232-104.08-232-232-232z" fill="#263238" p-id="16865"></path><path d="M550.896 437.808c0 106.032-85.968 192-192 192s-192-85.968-192-192 85.968-192 192-192c106.048 0 192 85.952 192 192z" fill="#FFD740" p-id="16866"></path><path d="M358.896 637.792c-110.288 0-200-89.712-200-200s89.712-200 200-200c110.272 0 200 89.712 200 200s-89.728 200-200 200z m0-384c-101.456 0-184 82.544-184 184s82.544 184 184 184 184-82.544 184-184-82.544-184-184-184z" fill="#263238" p-id="16867"></path><path d="M502.896 445.792a8 8 0 0 1-8-8c0-74.992-61.008-136-136-136a8 8 0 0 1 0-16c83.808 0 152 68.192 152 152 0 4.432-3.568 8-8 8zM144 780.912H112a8 8 0 0 1 0-16h32a8 8 0 0 1 0 16zM352 780.912H176a8 8 0 0 1 0-16h176a8 8 0 0 1 0 16z" fill="#263238" p-id="16868"></path><path d="M912 540.912h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 0 16z" fill="#263238" p-id="16869"></path><path d="M848 540.912H672a8 8 0 0 1 0-16h176a8 8 0 0 1 0 16z" fill="#263238" p-id="16870"></path></svg>
          </button>
        </div>
      </div>
    </div>
    <div class="filter-header">
        <button 
          v-if="selectedTags.length > 0"
          class="clear-filter-btn"
          @click="clearAllTags">
          快速清空选项
        </button>
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

    <!-- 回到顶部按钮 -->
    <button
      v-show="showBackToTop"
      class="back-to-top"
      @click="scrollToTop"
      title="回到顶部"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path fill="none" d="M0 0h24v24H0z"/>
        <path d="M12 4l8 8h-6v8h-4v-8H4z" fill="currentColor"/>
      </svg>
    </button>

    <!-- 复制成功提示 -->
    <transition-group 
      name="message-fade" 
      tag="div" 
      class="copy-messages-container"
    >
      <div
        v-for="message in copyMessages"
        :key="message.id"
        class="copy-success-toast"
      >
        <svg t="1735410531880" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8692" width="20" height="20">
          <path d="M512 85.333333c235.648 0 426.666667 191.018667 426.666667 426.666667s-191.018667 426.666667-426.666667 426.666667S85.333333 747.648 85.333333 512 276.352 85.333333 512 85.333333z m-74.965333 550.4L346.453333 545.152a42.666667 42.666667 0 1 0-60.330666 60.330667l120.704 120.704a42.666667 42.666667 0 0 0 60.330666 0l301.653334-301.696a42.666667 42.666667 0 1 0-60.288-60.330667l-271.530667 271.488z" fill="#1afa29" p-id="8693"></path>
        </svg>
        {{ message.text }}
      </div>
    </transition-group>
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
        return typeof material.id !== '' &&
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
const loadMoreRef = ref(null)
const copyMessages = ref([])
let messageId = 0
const pageSize = 6 // 每页显示数量

// 回到顶部功能
const showBackToTop = ref(false)

// 监听滚动事件
const handleScroll = () => {
  showBackToTop.value = window.scrollY > 600
}

// 滚动到顶部
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

// 处理图片加载错误
const handleImageError = (event) => {
  event.target.src = '/loading/error.gif'
}

// 过滤后的素材
const filteredMaterials = computed(() => {
  // 在所有材料中进行搜索和过滤
  const allFilteredMaterials = props.materialsList.filter(material => {
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

  // 根据当前页码返回对应的材料
  const start = 0
  const end = page.value * pageSize
  return allFilteredMaterials.slice(start, end)
})

// 加载素材
const loadMaterials = async () => {
  if (isLoading.value) return
  
  isLoading.value = true
  try {
    // 获取所有过滤后的材料
    const allFilteredMaterials = props.materialsList.filter(material => {
      const searchTerms = searchQuery.value
        .toLowerCase()
        .split(/\s+/)
        .filter(term => term.length > 0)

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

      const matchesTags = selectedTags.value.length === 0 || 
        selectedTags.value.every(selectedTag => {
          if (typeof material.tags[0] === 'object') {
            return material.tags.some(tag => tag.id === selectedTag)
          }
          return material.tags.includes(selectedTag)
        })

      return matchesSearch && matchesTags
    })

    // 计算是否还有更多数据
    const start = (page.value - 1) * pageSize
    const end = page.value * pageSize
    const paginatedData = allFilteredMaterials.slice(start, end)
    
    if (page.value === 1) {
      materials.value = paginatedData
    } else {
      materials.value = [...materials.value, ...paginatedData]
    }
    
    hasMore.value = end < allFilteredMaterials.length
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

// 清空搜索
const clearSearch = () => {
  searchQuery.value = ''
  handleSearch()
}

// 清空所有标签
const clearAllTags = () => {
  selectedTags.value = []
  resetLoadState()
  loadMaterials()
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

// 添加消息到队列
const addCopyMessage = (materialName) => {
  const id = messageId++
  const message = {
    id,
    text: `${materialName} 复制成功`,
    timestamp: Date.now()
  }
  copyMessages.value.push(message)
  
  // 1秒后移除该消息
  setTimeout(() => {
    copyMessages.value = copyMessages.value.filter(msg => msg.id !== id)
  }, 1000)
}

// 点击图片复制为图片
const handleMaterialClick = async (material) => {
  try {
    const originalUrl = material.thumbnail
    const proxyUrl = `/image-proxy${new URL(originalUrl).pathname}`
    
    const img = new Image()
    img.crossOrigin = 'anonymous'
    
    await new Promise((resolve, reject) => {
      // 添加超时处理
      const timeout = setTimeout(() => {
        img.src = ''
        reject(new Error('Image load timeout'))
      }, 10000)

      img.onload = () => {
        clearTimeout(timeout)
        const canvas = document.createElement('canvas')
        canvas.width = img.width
        canvas.height = img.height
        
        const ctx = canvas.getContext('2d')
        ctx.drawImage(img, 0, 0)
        
        canvas.toBlob((blob) => {
          if (blob) {
            const data = [new ClipboardItem({ 'image/png': blob })]
            navigator.clipboard.write(data)
              .then(() => {
                addCopyMessage(material.name)
                resolve()
              })
              .catch(error => {
                console.error('Failed to copy to clipboard:', error)
                addCopyMessage(`${material.name} - 复制失败`)
                reject(error)
              })
          } else {
            const error = new Error('Failed to create blob')
            console.error(error)
            addCopyMessage(`${material.name} - 复制失败`)
            reject(error)
          }
        }, 'image/png')
      }
      
      img.onerror = (error) => {
        clearTimeout(timeout)
        console.error('Image load error:', error, 'URL:', proxyUrl)
        addCopyMessage(`${material.name} - 图片加载失败`)
        reject(new Error('Failed to load image'))
      }
      
      img.src = proxyUrl
    })
  } catch (error) {
    console.error('复制失败:', error)
    addCopyMessage(`${material.name} - 复制失败`)
  }
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

  // 组件挂载时添加滚动监听
  window.addEventListener('scroll', handleScroll)
})

// 在组件卸载时清理
onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }

  // 组件卸载时移除滚动监听
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
@import './css/allMaterial.css';
</style>