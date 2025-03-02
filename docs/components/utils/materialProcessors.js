// 处理标签匹配的工具函数
export const processTagMatching = (item, materialCategories) => {
  const tags = []
  const itemKeywords = []

  // 匹配面料类型
  materialCategories[0].tags.forEach((tag, index) => {
    if (item.name.includes(tag.name.replace(/\d+(克|g)/g, ''))) {
      materialCategories[0].tags[index].count += 1
      tags.push(tag.id)
    }
  })

  // 匹配款式分类
  materialCategories[1].tags.forEach((tag, index) => {
    const keywords = tag.name.split(' ')
    if (keywords.some(keyword => item.name.includes(keyword))) {
      materialCategories[1].tags[index].count += 1
      tags.push(tag.id)
      itemKeywords.push(tag.name)
    }
  })

  return { tags, itemKeywords }
}

// 处理图片数据的工具函数
export const processImageData = (item, index, seriesKey, materialCategories, styleTemplates) => {
  const { tags, itemKeywords } = processTagMatching(item, materialCategories)
  
  // 处理面料细节标签
  if (item.name.includes('面料细节')) {
    materialCategories[2].tags[0].count += 1
    tags.push('detail')
    // 为面料细节设置正确的类型
    return {
      id: `fabricDetail-${index + 1}`,
      name: item.name,
      description: styleTemplates['fabricDetail']?.description || '',
      type: '面料细节',
      thumbnail: item.url,
      tags: tags
    }
  }

  const type = itemKeywords.length > 0 
    ? itemKeywords.join(', ') 
    : styleTemplates[seriesKey]?.type || '未匹配'

  return {
    id: `${seriesKey}-${index + 1}`,
    name: item.name,
    description: styleTemplates[seriesKey]?.description || '',
    type,
    thumbnail: item.url,
    tags: styleTemplates[seriesKey]?.tags 
      ? [...tags, ...styleTemplates[seriesKey].tags]
      : tags
  }
}

// 修改缓存相关工具函数，添加计数器缓存
const CACHE_KEY = 'materials_data'
const CACHE_CATEGORIES_KEY = 'material_categories' // 新增类别计数缓存键
const CACHE_EXPIRY = 24 * 60 * 60 * 1000 

// 修改缓存函数签名，添加 materialCategories 参数
export const loadFromCache = (materialCategories) => {
  try {
    const cached = localStorage.getItem(CACHE_KEY)
    const cachedCategories = localStorage.getItem(CACHE_CATEGORIES_KEY)
    
    if (cached && cachedCategories) {
      const { data, timestamp } = JSON.parse(cached)
      const { categories, timestamp: catTimestamp } = JSON.parse(cachedCategories)
      
      if (Date.now() - timestamp < CACHE_EXPIRY && 
          Date.now() - catTimestamp < CACHE_EXPIRY) {
        // 恢复类别计数
        categories.forEach((category, i) => {
          category.tags.forEach((tag, j) => {
            materialCategories[i].tags[j].count = tag.count
          })
        })
        return data
      }
    }
  } catch (error) {
    console.error('读取缓存失败:', error)
  }
  return null
}

export const saveToCache = (data, materialCategories) => {
  try {
    // 保存数据
    localStorage.setItem(CACHE_KEY, JSON.stringify({
      data,
      timestamp: Date.now()
    }))
    
    // 保存类别计数
    localStorage.setItem(CACHE_CATEGORIES_KEY, JSON.stringify({
      categories: materialCategories,
      timestamp: Date.now()
    }))
  } catch (error) {
    console.error('保存缓存失败:', error)
  }
}