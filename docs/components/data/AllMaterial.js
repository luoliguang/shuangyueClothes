// 分类数据
const materialCategories = [
  {
    id: 1,
    name: '面料类型',
    tags: [
      { id: '130xfg', name: '130克小方格速干', count: 42 },
      { id: '160pingwenbu', name: '160克平纹布', count: 28 },
      { id: '160sugan', name: '160克速干', count: 35 },
      { id: '180bingsi', name: '180克冰丝蝴蝶网', count: 56 },
      { id: '180pingguo', name: '180克苹果网', count: 42 },
      { id: '180xiaomitong', name: '180克小米通速干', count: 28 },
      { id: '200zhudi', name: '200克珠地', count: 35 },
      { id: '210suan', name: '210克速干', count: 56 },
      { id: '220fangmian', name: '220克仿棉', count: 56 },
      { id: '260zhudi', name: '260克珠地', count: 42 },
      { id: '280xiewen', name: '280克斜纹', count: 28 },
      { id: '300jiankangbu', name: '300克健康布', count: 35 },
      { id: '400yinhuru', name: '400克银狐绒', count: 56 },
      { id: 'fuhe', name: '复合', count: 28 },
      { id: 'modaier', name: '莫代尔', count: 35 },
      { id: 'shuimitao', name: '水蜜桃', count: 56 },
      { id: 'simiantan', name: '四面弹', count: 35 },
      { id: 't400', name: 'T400', count: 56 },
    ]
  },
  {
    id: 2,
    name: '款式分类',
    tags: [
      { id: 'Tshirt', name: '圆领短袖', count: 89 },
      { id: 'Polo', name: '翻领短袖', count: 45 },
      { id: 'fengyi', name: '立领风衣', count: 67 },
      { id: 'fengyilailian', name: '拉链风衣', count: 34 },
      { id: 'majia', name: '马甲', count: 34 },
      { id: 'lianmaowei', name: '连帽卫衣', count: 67 },
      { id: 'lilingwei', name: '立领卫衣', count: 34 },
      { id: 'yuanlingwei', name: '圆领卫衣', count: 34 },
    ]
  },
  {
    id: 3,
    name: '面料细节',
    tags: [
      { id: 'detail', name: '看看细节👉', count: 10 },
    ]
  },
]

// 素材数据

const materialsList = [
  //小方格速干圆领短袖
  {
    id: 1,
    name: '130克小方格速干圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675db0a1a6b82.jpg',
    tags: ['130xfg', 'Tshirt']
  },
  {
    id: 2,
    name: '130克小方格速干圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675db0a1a6b82.jpg',
    tags: ['130xfg', 'Tshirt']
  },
  {
    id: 3,
    name: '130克小方格速干圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675db0a36446d.jpg',
    tags: ['130xfg', 'Tshirt']
  },
  {
    id: 4,
    name: '130克小方格速干圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675db0a5d7ad7.jpg',
    tags: ['130xfg', 'Tshirt']
  },
  {
    id: 5,
    name: '130克小方格速干圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675db0a61ec46.jpg',
    tags: ['130xfg', 'Tshirt']
  },
  //160克平纹布
  {
    id: 6,
    name: '160克平纹布圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675db87d8942d.jpg',
    tags: ['160pingwenbu', 'Tshirt']
  },
  {
    id: 7,
    name: '160克平纹布圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675db87e317c7.jpg',
    tags: ['160pingwenbu', 'Tshirt']
  },
  {
    id: 8,
    name: '160克平纹布翻领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '翻领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675db84c3b942.jpg',
    tags: ['160pingwenbu', 'Polo']
  },
  //160克速干
  {
    id: 9,
    name: '160克速干翻领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '翻领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675db96d9428c.jpg',
    tags: ['160sugan', 'Polo']
  },
  {
    id: 10,
    name: '160克速干翻领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '翻领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675db96ced633.jpg',
    tags: ['160sugan', 'Polo']
  },
  {
    id: 11,
    name: '160克速干翻领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '翻领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675db96e7424a.jpg',
    tags: ['160sugan', 'Polo']
  },
  {
    id: 12,
    name: '160克速干翻领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '翻领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675db96ce1d3c.jpg',
    tags: ['160sugan', 'Polo']
  },
  {
    id: 13,
    name: '160克速干翻领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '翻领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675db97031835.jpg',
    tags: ['160sugan', 'Polo']
  },
  {
    id: 14,
    name: '160克速干翻领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '翻领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675db96fe2678.jpg',
    tags: ['160sugan', 'Polo']
  },
  {
    id: 15,
    name: '160克速干翻领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '翻领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675db96f04559.jpg',
    tags: ['160sugan', 'Polo']
  },
  {
    id: 16,
    name: '160克速干翻领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '翻领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675db97096a58.jpg',
    tags: ['160sugan', 'Polo']
  },
  {
    id: 17,
    name: '160克速干翻领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '翻领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675db96e7424a.jpg',
    tags: ['160sugan', 'Polo']
  },
  {
    id: 18,
    name: '160克速干翻领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '翻领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675db96d024fd.jpg',
    tags: ['160sugan', 'Polo']
  },
]

export {
  materialCategories,
  materialsList
}
