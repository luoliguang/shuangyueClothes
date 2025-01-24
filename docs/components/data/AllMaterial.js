// 定义不同款式的基础信息模板
const styleTemplates = {
  // 面料细节
  'fabricDetail': {
    id: '',
    name: '',
    description: '',
    type: '面料细节',
    thumbnail: '',
    tags: ['detail'],
  },
  // 短袖系列
  '130xfgTshirt': {
    id: '',
    name: '130克小方格速干圆领短袖',
    description: '#夏季',
    type: '圆领短袖',
    thumbnail: '',
    tags: ['130xfg', 'Tshirt']
  },
  '130xfgPolo': {
    id: '',
    name: '130克小方格速干翻领短袖',
    description: '#夏季',
    type: '翻领短袖',
    thumbnail: '',
    tags: ['130xfg', 'Polo']
  },
  
  '160pingwenbuTshirt': {
    id: '',
    name: '160克平纹布圆领短袖',
    description: '#夏季',
    type: '圆领短袖',
    thumbnail: '',
    tags: ['160pingwenbu', 'Tshirt']
  },
  '160pingwenbuPolo': {
    id: '',
    name: '160克平纹布翻领短袖',
    description: '#夏季',
    type: '翻领短袖',
    thumbnail: '',
    tags: ['160pingwenbu', 'Polo']
  },
  
  '160suganTshirt': {
    id: '',
    name: '160克速干圆领短袖',
    description: '舒适透气，适合运动穿着',
    type: '圆领短袖',
    thumbnail: '',
    tags: ['160sugan', 'Tshirt']
  },
  '160suganPolo': {
    id: '',
    name: '160克速干翻领短袖',
    description: '舒适透气，适合运动穿着',
    type: '翻领短袖',
    thumbnail: '',
    tags: ['160sugan', 'Polo']
  },

  '180bingsiTshirt': {
    id: '',
    name: '180克冰丝蝴蝶网圆领短袖',
    description: '舒适透气，适合运动穿着',
    type: '圆领短袖',
    thumbnail: '',
    tags: ['180bingsi', 'Tshirt']
  },
  '180bingsiPolo': {
    id: '',
    name: '180克冰丝蝴蝶网翻领短袖',
    description: '舒适透气，适合运动穿着',
    type: '翻领短袖',
    thumbnail: '',
    tags: ['180bingsi', 'Polo']
  },

  '180pingguoTshirt': {
    id: '',
    name: '180克苹果网圆领短袖',
    description: '舒适透气，适合运动穿着',
    type: '圆领短袖',
    thumbnail: '',
    tags: ['180pingguo', 'Tshirt']
  },
  '180pingguoPolo': {
    id: '',
    name: '180克苹果网翻领短袖',
    description: '舒适透气，适合运动穿着',
    type: '翻领短袖',
    thumbnail: '',
    tags: ['180pingguo', 'Polo']
  },
  

  '180xiaomitongTshirt': {
    id: '',
    name: '180克小米通速干圆领短袖',
    description: '舒适透气，适合运动穿着',
    type: '圆领短袖',
    thumbnail: '',
    tags: ['180xiaomitong', 'Tshirt']
  },
  '180xiaomitongPolo': {
    id: '',
    name: '180克小米通速干翻领短袖',
    description: '舒适透气，适合运动穿着',
    type: '翻领短袖',
    thumbnail: '',
    tags: ['180xiaomitong', 'Polo']
  },

  '200zhudiTshirt': {
    id: '',
    name: '200克珠地圆领短袖',
    description: '舒适透气，适合运动穿着',
    type: '圆领短袖',
    thumbnail: '',
    tags: ['200zhudi', 'Tshirt']
  },
  '200zhudiPolo': {
    id: '',
    name: '200克珠地翻领短袖',
    description: '舒适透气，适合运动穿着',
    type: '翻领短袖',
    thumbnail: '',
    tags: ['200zhudi', 'Polo']
  },

  '210suganTshirt': {
    id: '',
    name: '210克速干圆领短袖',
    description: '舒适透气，适合运动穿着',
    type: '圆领短袖',
    thumbnail: '',
    tags: ['210sugan', 'Tshirt']
  },
  '210suganPolo': {
    id: '',
    name: '210克速干翻领短袖',
    description: '舒适透气，适合运动穿着',
    type: '翻领短袖',
    thumbnail: '',
    tags: ['210sugan', 'Polo']
  },

  '220fangmianTshirt': {
    id: '',
    name: '220克仿棉圆领短袖',
    description: '舒适透气，适合运动穿着',
    type: '圆领短袖',
    thumbnail: '',
    tags: ['220fangmian', 'Tshirt']
  },
  '220fangmianPolo': {
    id: '',
    name: '220克仿棉翻领短袖',
    description: '舒适透气，适合运动穿着',
    type: '翻领短袖',
    thumbnail: '',
    tags: ['220fangmian', 'Polo']
  },

  '260zhudiTshirt': {
    id: '',
    name: '260克珠地圆领短袖',
    description: '舒适透气，适合运动穿着',
    type: '圆领短袖',
    thumbnail: '',
    tags: ['260zhudi', 'Tshirt']
  },
  '260zhudiPolo': {
    id: '',
    name: '260克珠地翻领短袖',
    description: '舒适透气，适合运动穿着',
    type: '翻领短袖',
    thumbnail: '',
    tags: ['260zhudi', 'Polo']
  },

  /**
   * 卫衣系列
   */

  'SweaterSeries': {
    id: '',
    name: '',
    description: '天冷加衣',
    type: '卫衣系列',
    thumbnail: '',
    tags: []
  },

  /*
   * 风衣系列
   */
  'windbreakerSeries': {
    id: '',
    name: '',
    description: '风衣系列',
    type: '风衣系列',
    thumbnail: '',
    tags: []
  },

  /**
 * 马甲系列
 */
  'numMajiSeries': {
    id: '',
    name: '',
    description: '马甲系列',
    type: '马甲系列',
    thumbnail: '',
    tags: []
  },

  /**
   * 莫代尔
   */
  'numModaierSeries': {
    id: '',
    name: '',
    description: '莫代尔',
    type: '莫代尔',
    thumbnail: '',
    tags: []
  },

  /**
   * 裤子
   */
  'kuziSeries': {
    id: '',
    name: '',
    description: '#长裤 #短裤',
    type: '长裤短裤',
    thumbnail: '',
    tags: []
  },

  /** 
   * 棒球服系列
   */
  'UKbangqiufuSeries': {
    id: '',
    name: '',
    description: '棒球服系列',
    type: '棒球服系列',
    thumbnail: '',
    tags: []
  }
}


// 素材的api
const apiNumbers = {
  // 面料细节
  'numDetail': 1497, // 面料细节
  'numDetail2': 1521, // 面料细节
  // 短袖系列
  'numXfgTshirt': 1491, // 小方格速干
  'numXfgPolo': 1436, // 小方格速干
  'numPwbTshirt': 1438, // 平纹布
  'numPwbPolo': 1437, // 平纹布
  'numSgTshirt': 1440, // 速干
  'numSgPolo': 1439, // 速干
  'numBswTshirt': 1442, // 冰丝网
  'numBswPolo': 1441, // 冰丝网
  'numPgwTshirt': 1444, // 苹果网
  'numPgwPolo': 1443, // 苹果网
  'numXmtTshirt': 1446, // 小米通
  'numXmtPolo': 1445, // 小米通
  'numZdTshirt': 1450, // 珠地
  'numZdPolo': 1449, // 珠地
  'numSGTshirt': 1452, // 210克速干
  'numSGPolo': 1453, // 210克速干
  'numFmTshirt': 1454, // 仿棉
  'numFmPolo': 1453, // 仿棉
  'numZd260Tshirt': 1456, // 珠地
  'numZd260Polo': 1455, // 珠地

  // 卫衣系列
  'SweaterSeries': 1499, // 卫衣系列
  // 风衣系列
  'windbreakerSeries': 1501, // 风衣系列
  // 马甲系列
  'numMajiSeries': 1500, // 马甲
  // 莫代尔
  'numModaierSeries': 1502, // 莫代尔
  // 裤子
  'kuziSeries': 1503, // 裤子
  // 棒球服系列
  'UKbangqiufuSeries': 1492, // 棒球服
}

export { styleTemplates, apiNumbers }