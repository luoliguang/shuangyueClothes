---
layout: home
---

<script setup>
import { ref, computed, onMounted,onUnmounted,onBeforeMount } from 'vue'
import { getImagesUrl } from '../components/sever/sever.js'
import { styleTemplates, apiNumbers } from '../components/data/AllMaterial.js' // 素材数据


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

Promise.all([
  /**
   * 面料细节
   */
getImagesUrl(apiNumbers.numDetail).then(res => {
  // console.log(res)
  materialCategories[2].tags[0].count += res.length // 面料细节标签计数
  return res.map((item, index) => {
    // 直接处理标签匹配逻辑
    const tags = []
    materialCategories[0].tags.forEach((tag, index) => {
      if (item.name.includes(tag.name.replace(/\d+(克|g)/g, ''))) {
        materialCategories[0].tags[index].count += 1
        tags.push(tag.id)
      }
    })
    tags.push('detail')
    // console.log(tags)

    // 返回处理后的对象
    return {
      id: `fabricDetail-${index + 1}`,
      name: item.name,
      description: styleTemplates['fabricDetail'].description,
      type: styleTemplates['fabricDetail'].type,
      thumbnail: item.url,
      tags: tags
    }
  })
}),
getImagesUrl(apiNumbers.numDetail2).then(res => {
  // console.log(res)
  materialCategories[2].tags[0].count += res.length // 面料细节标签计数
  return res.map((item, index) => {
    // 直接处理标签匹配逻辑
    const tags = []
    materialCategories[0].tags.forEach((tag, index) => {
      if (item.name.includes(tag.name.replace(/\d+(克|g)/g, ''))) {
        materialCategories[0].tags[index].count += 1
        tags.push(tag.id)
      }
    })
    tags.push('detail')
    // console.log(tags)

    // 返回处理后的对象
    return {
      id: `fabricDetail-${index + 1}`,
      name: item.name,
      description: styleTemplates['fabricDetail'].description,
      type: styleTemplates['fabricDetail'].type,
      thumbnail: item.url,
      tags: tags
    }
  })
}),


  /**
   * 短袖系列
   */
  // 处理第一个数组，生成小方格速干的对象数组
  getImagesUrl(apiNumbers.numXfgTshirt).then(res => {
    materialCategories[0].tags[0].count += res.length // 小方格面料标签计数
    materialCategories[1].tags[0].count += res.length // 圆领短袖总数
    return res.map((item, index) => ({
      id: `130xfgTshirt-${index + 1}`,
      name: styleTemplates['130xfgTshirt'].name,
      description: styleTemplates['130xfgTshirt'].description,
      type: styleTemplates['130xfgTshirt'].type,
      thumbnail: item.url,
      tags: styleTemplates['130xfgTshirt'].tags,
    }))
  }),
  getImagesUrl(apiNumbers.numXfgPolo).then(res => {
    materialCategories[0].tags[0].count += res.length // 小方格面料标签计数
    materialCategories[1].tags[1].count += res.length // 翻领短袖总数
    return res.map((item, index) => ({
      id: `130xfgPolo-${index + 1}`,
      name: styleTemplates['130xfgPolo'].name,
      description: styleTemplates['130xfgPolo'].description,
      type: styleTemplates['130xfgPolo'].type,
      thumbnail: item.url,
      tags: styleTemplates['130xfgPolo'].tags,
    }))
  }),
    // 处理第二个数组，生成速干的对象数组
  getImagesUrl(apiNumbers.numPwbTshirt).then(res => {
    materialCategories[0].tags[1].count += res.length // 平纹布面料标签计数
    materialCategories[1].tags[0].count += res.length // 圆领短袖总数
    return res.map((item, index) => ({
      id: `160pingwenbuTshirt-${index + 1}`,
      name: styleTemplates['160pingwenbuTshirt'].name,
      description: styleTemplates['160pingwenbuTshirt'].description,
      type: styleTemplates['160pingwenbuTshirt'].type,
      thumbnail: item.url,
      tags: styleTemplates['160pingwenbuTshirt'].tags,
    }))
  }),
  getImagesUrl(apiNumbers.numPwbPolo).then(res => {
    materialCategories[0].tags[1].count += res.length
    materialCategories[1].tags[1].count += res.length // 翻领短袖总数
    return res.map((item, index) => ({
      id: `160pingwenbuPolo-${index + 1}`,
      name: styleTemplates['160pingwenbuPolo'].name,
      description: styleTemplates['160pingwenbuPolo'].description,
      type: styleTemplates['160pingwenbuPolo'].type,
      thumbnail: item.url,
      tags: styleTemplates['160pingwenbuPolo'].tags,
    }))
  }),
    // 处理第三个数组，生成速干的对象数组
  getImagesUrl(apiNumbers.numSgTshirt).then(res => {
    materialCategories[0].tags[2].count += res.length // 速干面料标签计数
    materialCategories[1].tags[0].count += res.length // 圆领短袖总数
    return res.map((item, index) => ({
      id: `160suganTshirt-${index + 1}`,
      name: styleTemplates['160suganTshirt'].name,
      description: styleTemplates['160suganTshirt'].description,
      type: styleTemplates['160suganTshirt'].type,
      thumbnail: item.url,
      tags: styleTemplates['160suganTshirt'].tags,
    }))
  }),
  getImagesUrl(apiNumbers.numSgPolo).then(res => {
    materialCategories[0].tags[2].count += res.length // 速干面料标签计数
    materialCategories[1].tags[1].count += res.length // 翻领短袖总数
    return res.map((item, index) => ({
      id: `160suganPolo-${index + 1}`,
      name: styleTemplates['160suganPolo'].name,
      description: styleTemplates['160suganPolo'].description,
      type: styleTemplates['160suganPolo'].type,
      thumbnail: item.url,
      tags: styleTemplates['160suganPolo'].tags,
    }))
  }),
    // 处理第4个数组，生成冰丝网的对象数组
  getImagesUrl(apiNumbers.numBswTshirt).then(res => {
    materialCategories[0].tags[3].count += res.length // 冰丝网面料标签计数
    materialCategories[1].tags[0].count += res.length // 圆领短袖总数
    return res.map((item, index) => ({
      id: `180bingsiTshirt-${index + 1}`,
      name: styleTemplates['180bingsiTshirt'].name,
      description: styleTemplates['180bingsiTshirt'].description,
      type: styleTemplates['180bingsiTshirt'].type,
      thumbnail: item.url,
      tags: styleTemplates['180bingsiTshirt'].tags,
    }))
  }),
  getImagesUrl(apiNumbers.numBswPolo).then(res => {
    materialCategories[0].tags[3].count += res.length // 冰丝网面料标签计数
    materialCategories[1].tags[1].count += res.length // 翻领短袖总数
    return res.map((item, index) => ({
      id: `180bingsiPolo-${index + 1}`,
      name: styleTemplates['180bingsiPolo'].name,
      description: styleTemplates['180bingsiPolo'].description,
      type: styleTemplates['180bingsiPolo'].type,
      thumbnail: item.url,
      tags: styleTemplates['180bingsiPolo'].tags,
    }))
  }),
    // 处理第5个数组，生成冰丝网的对象数组
  getImagesUrl(apiNumbers.numPgwTshirt).then(res => {
    materialCategories[0].tags[4].count += res.length // 苹果网面料标签计数
    materialCategories[1].tags[0].count += res.length // 圆领短袖总数
    return res.map((item, index) => ({
      id: `180pingguoTshirt-${index + 1}`,
      name: styleTemplates['180pingguoTshirt'].name,
      description: styleTemplates['180pingguoTshirt'].description,
      type: styleTemplates['180pingguoTshirt'].type,
      thumbnail: item.url,
      tags: styleTemplates['180pingguoTshirt'].tags,
    }))
  }),
  getImagesUrl(apiNumbers.numPgwPolo).then(res => {
    materialCategories[0].tags[4].count += res.length // 苹果网面料标签计数
    materialCategories[1].tags[1].count += res.length // 翻领短袖总数
    return res.map((item, index) => ({
      id: `180pingguoPolo-${index + 1}`,
      name: styleTemplates['180pingguoPolo'].name,
      description: styleTemplates['180pingguoPolo'].description,
      type: styleTemplates['180pingguoPolo'].type,
      thumbnail: item.url,
      tags: styleTemplates['180pingguoPolo'].tags,
    }))
  }),
    // 处理第6个数组，生成小米通的对象数组
  getImagesUrl(apiNumbers.numXmtTshirt).then(res => {
    materialCategories[0].tags[5].count += res.length // 小米通面料标签计数
    materialCategories[1].tags[0].count += res.length // 圆领短袖总数
    return res.map((item, index) => ({
      id: `180xiaomitongTshirt-${index + 1}`,
      name: styleTemplates['180xiaomitongTshirt'].name,
      description: styleTemplates['180xiaomitongTshirt'].description,
      type: styleTemplates['180xiaomitongTshirt'].type,
      thumbnail: item.url,
      tags: styleTemplates['180xiaomitongTshirt'].tags,
    }))
  }),
  getImagesUrl(apiNumbers.numXmtPolo).then(res => {
    materialCategories[0].tags[5].count += res.length // 小米通面料标签计数
    materialCategories[1].tags[1].count += res.length // 翻领短袖总数
    return res.map((item, index) => ({
      id: `180xiaomitongPolo-${index + 1}`,
      name: styleTemplates['180xiaomitongPolo'].name,
      description: styleTemplates['180xiaomitongPolo'].description,
      type: styleTemplates['180xiaomitongPolo'].type,
      thumbnail: item.url,
      tags: styleTemplates['180xiaomitongPolo'].tags,
    }))
  }),
  // 处理第9个数组，生成仿棉的对象数组
  getImagesUrl(apiNumbers.numFmTshirt).then(res => {
    materialCategories[0].tags[8].count += res.length // 仿棉面料标签计数
    materialCategories[1].tags[0].count += res.length // 圆领短袖总数
    return res.map((item, index) => ({
      id: `220fangmianTshirt-${index + 1}`,
      name: styleTemplates['220fangmianTshirt'].name,
      description: styleTemplates['220fangmianTshirt'].description,
      type: styleTemplates['220fangmianTshirt'].type,
      thumbnail: item.url,
      tags: styleTemplates['220fangmianTshirt'].tags,
    }))
  }),
  getImagesUrl(apiNumbers.numFmPolo).then(res => {
    materialCategories[0].tags[8].count += res.length // 仿棉面料标签计数
    materialCategories[1].tags[1].count += res.length // 翻领短袖总数
    return res.map((item, index) => ({
      id: `220fangmianPolo-${index + 1}`,
      name: styleTemplates['220fangmianPolo'].name,
      description: styleTemplates['220fangmianPolo'].description,
      type: styleTemplates['220fangmianPolo'].type,
      thumbnail: item.url,
      tags: styleTemplates['220fangmianPolo'].tags,
    }))
  }),

//速干短袖系列
getImagesUrl(apiNumbers.AllSuGan).then(res => {
  return res.map((item, index) => {
    // 直接处理标签匹配逻辑
    const tags = []
    // 动态获取 type
    const itemKeywords = [] // 用于存储匹配的关键词

    materialCategories[0].tags.forEach((tag, index) => {
      if (item.name.includes(tag.name.replace(/\d+(克|g)/g, ''))) {
        materialCategories[0].tags[index].count += 1
        tags.push(tag.id)
      }
    })
    materialCategories[1].tags.forEach((tag, index) => {
      const keywords = tag.name.split(' ')
      if (keywords.some(keyword => item.name.includes(keyword))) {
        materialCategories[1].tags[index].count += 1
        tags.push(tag.id)
        itemKeywords.push(tag.name) // 添加匹配的关键词
      }
    })

    // 设置 type 为匹配的关键词
    const type = itemKeywords.length > 0 ? itemKeywords.join(', ') : '未匹配'

    // 返回处理后的对象
    return {
      id: `AllSuGan-${index + 1}`,
      name: item.name,
      description: styleTemplates['AllSuGan'].description,
      type: type, // 使用动态获取的 type
      thumbnail: item.url,
      tags: tags
    }
  })
}),
//珠地所有款式珠地
getImagesUrl(apiNumbers.AllZhuDi).then(res => {
  return res.map((item, index) => {
    // 直接处理标签匹配逻辑
    const tags = []
    // 动态获取 type
    const itemKeywords = [] // 用于存储匹配的关键词

    materialCategories[0].tags.forEach((tag, index) => {
      if (item.name.includes(tag.name.replace(/\d+(克|g)/g, ''))) {
        materialCategories[0].tags[index].count += 1
        tags.push(tag.id)
      }
    })
    materialCategories[1].tags.forEach((tag, index) => {
      const keywords = tag.name.split(' ')
      if (keywords.some(keyword => item.name.includes(keyword))) {
        materialCategories[1].tags[index].count += 1
        tags.push(tag.id)
        itemKeywords.push(tag.name) // 添加匹配的关键词
      }
    })
    // 设置 type 为匹配的关键词
    const type = itemKeywords.length > 0 ? itemKeywords.join(', ') : '未匹配'

    // 返回处理后的对象
    return {
      id: `AllZhuDi-${index + 1}`,
      name: item.name,
      description: styleTemplates['AllZhuDi'].description,
      type: type, // 使用动态获取的 type
      thumbnail: item.url,
      tags: tags
    }
  })
}),
  /**
   * 卫衣系列
   */
getImagesUrl(apiNumbers.SweaterSeries).then(res => {
  return res.map((item, index) => {
    // 直接处理标签匹配逻辑
    const tags = []
    materialCategories[0].tags.forEach((tag, index) => {
      if (item.name.includes(tag.name.replace(/\d+(克|g)/g, ''))) {
        materialCategories[0].tags[index].count += 1
        tags.push(tag.id)
      }
    })
    materialCategories[1].tags.forEach((tag, index) => {
      // 将标签名按空格分割成数组
      const keywords = tag.name.split(' ')
      // 如果任何一个关键词匹配，就认为是匹配成功
      if (keywords.some(keyword => item.name.includes(keyword))) {
        materialCategories[1].tags[index].count += 1
        tags.push(tag.id)
      }
    })
    // 返回处理后的对象
    return {
      id: `SweaterSeries-${index + 1}`,
      name: item.name,
      description: styleTemplates['SweaterSeries'].description,
      type: styleTemplates['SweaterSeries'].type,
      thumbnail: item.url,
      tags: tags
    }
  })
}),
/**
 * 风衣系列
 */
getImagesUrl(apiNumbers.windbreakerSeries).then(res => {
  return res.map((item, index) => {
    // 直接处理标签匹配逻辑
    const tags = []
    materialCategories[0].tags.forEach((tag, index) => {
      if (item.name.includes(tag.name.replace(/\d+(克|g)/g, ''))) {
        materialCategories[0].tags[index].count += 1
        tags.push(tag.id)
      }
    })
    materialCategories[1].tags.forEach((tag, index) => {
      // 将标签名按空格分割成数组
      const keywords = tag.name.split(' ')
      // 如果任何一个关键词匹配，就认为是匹配成功
      if (keywords.some(keyword => item.name.includes(keyword))) {
        materialCategories[1].tags[index].count += 1
        tags.push(tag.id)
      }
    })
    // 返回处理后的对象
    return {
      id: `windbreakerSeries-${index + 1}`,
      name: item.name,
      description: styleTemplates['windbreakerSeries'].description,
      type: styleTemplates['windbreakerSeries'].type,
      thumbnail: item.url,
      tags: tags
    }
  })
}),
/**
 * 马甲系列
 */
getImagesUrl(apiNumbers.numMajiSeries).then(res => {
  return res.map((item, index) => {
    // 直接处理标签匹配逻辑
    const tags = []
    materialCategories[0].tags.forEach((tag, index) => {
      if (item.name.includes(tag.name.replace(/\d+(克|g)/g, ''))) {
        materialCategories[0].tags[index].count += 1
        tags.push(tag.id)
      }
    })
    materialCategories[1].tags.forEach((tag, index) => {
      // 将标签名按空格分割成数组
      const keywords = tag.name.split(' ')
      // 如果任何一个关键词匹配，就认为是匹配成功
      if (keywords.some(keyword => item.name.includes(keyword))) {
        materialCategories[1].tags[index].count += 1
        tags.push(tag.id)
      }
    })
    // 返回处理后的对象
    return {
      id: `numMajiSeries-${index + 1}`,
      name: item.name,
      description: styleTemplates['numMajiSeries'].description,
      type: styleTemplates['numMajiSeries'].type,
      thumbnail: item.url,
      tags: tags
    }
  })
}),
/**
 * 莫代尔
 */
getImagesUrl(apiNumbers.numModaierSeries).then(res => {
  return res.map((item, index) => {
    // 直接处理标签匹配逻辑
    const tags = []
    materialCategories[0].tags.forEach((tag, index) => {
      if (item.name.includes(tag.name.replace(/\d+(克|g)/g, ''))) {
        materialCategories[0].tags[index].count += 1
        tags.push(tag.id)
      }
    })
    materialCategories[1].tags.forEach((tag, index) => {
      // 将标签名按空格分割成数组
      const keywords = tag.name.split(' ')
      // 如果任何一个关键词匹配，就认为是匹配成功
      if (keywords.some(keyword => item.name.includes(keyword))) {
        materialCategories[1].tags[index].count += 1
        tags.push(tag.id)
      }
    })
    // 返回处理后的对象
    return {
      id: `numModaierSeries-${index + 1}`,
      name: item.name,
      description: styleTemplates['numModaierSeries'].description,
      type: styleTemplates['numModaierSeries'].type,
      thumbnail: item.url,
      tags: tags
    }
  })
}),
/**
 * 裤子系列
 */
getImagesUrl(apiNumbers.kuziSeries).then(res => {
  return res.map((item, index) => {
    // 直接处理标签匹配逻辑
    const tags = []
    materialCategories[0].tags.forEach((tag, index) => {
      if (item.name.includes(tag.name.replace(/\d+(克|g)/g, ''))) {
        materialCategories[0].tags[index].count += 1
        tags.push(tag.id)
      }
    })
    materialCategories[1].tags.forEach((tag, index) => {
      // 将标签名按空格分割成数组
      const keywords = tag.name.split(' ')
      // 如果任何一个关键词匹配，就认为是匹配成功
      if (keywords.some(keyword => item.name.includes(keyword))) {
        materialCategories[1].tags[index].count += 1
        tags.push(tag.id)
      }
    })
    // 返回处理后的对象
    return {
      id: `kuziSeries-${index + 1}`,
      name: item.name,
      description: styleTemplates['kuziSeries'].description,
      type: styleTemplates['kuziSeries'].type,
      thumbnail: item.url,
      tags: tags
    }
  })
}),
/**
 * 棒球服系列
 */
getImagesUrl(apiNumbers.UKbangqiufuSeries).then(res => {
  return res.map((item, index) => {
    // 直接处理标签匹配逻辑
    const tags = []
    materialCategories[0].tags.forEach((tag, index) => {
      if (item.name.includes(tag.name.replace(/\d+(克|g)/g, ''))) {
        materialCategories[0].tags[index].count += 1
        tags.push(tag.id)
      }
    })
    materialCategories[1].tags.forEach((tag, index) => {
      // 将标签名按空格分割成数组
      const keywords = tag.name.split(' ')
      // 如果任何一个关键词匹配，就认为是匹配成功
      if (keywords.some(keyword => item.name.includes(keyword))) {
        materialCategories[1].tags[index].count += 1
        tags.push(tag.id)
      }
    })
    // 返回处理后的对象
    return {
      id: `UKbangqiufuSeries-${index + 1}`,
      name: item.name,
      description: styleTemplates['UKbangqiufuSeries'].description,
      type: styleTemplates['UKbangqiufuSeries'].type,
      thumbnail: item.url,
      tags: tags
    }
  })
}),
/**
 * 长袖
 */
getImagesUrl(apiNumbers.longSleeved).then(res => {
  return res.map((item, index) => {
    // 直接处理标签匹配逻辑
    const tags = []
    materialCategories[0].tags.forEach((tag, index) => {
      if (item.name.includes(tag.name.replace(/\d+(克|g)/g, ''))) {
        materialCategories[0].tags[index].count += 1
        tags.push(tag.id)
      }
    })
    materialCategories[1].tags.forEach((tag, index) => {
      // 将标签名按空格分割成数组
      const keywords = tag.name.split(' ')
      // 如果任何一个关键词匹配，就认为是匹配成功
      if (keywords.some(keyword => item.name.includes(keyword))) {
        materialCategories[1].tags[index].count += 1
        tags.push(tag.id)
      }
    })
    // 返回处理后的对象
    return {
      id: `longSleeved-${index + 1}`,
      name: item.name,
      description: styleTemplates['longSleeved'].description,
      type: styleTemplates['longSleeved'].type,
      thumbnail: item.url,
      tags: tags
    }
  })
}),




]).then((results) => {
  // results 是一个包含两个数组的数组，使用 flat() 合并
  materials.value = results.flat()
})


</script>

<KeepAlive>
  <AllMaterial 
    :categories="materialCategories"
    :materials-list="materials"
  />
</KeepAlive>