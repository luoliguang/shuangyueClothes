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
      { id: '210sugan', name: '210克速干', count: 56 },
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
      { id: 'fengyililing', name: '立领风衣', count: 67 },
      { id: 'fengyilailian', name: '拉链风衣', count: 34 },
      { id: 'majia', name: '马甲', count: 34 },
      { id: 'taotouwei', name: '套头卫衣', count: 67 },
      { id: 'lilingwei', name: '立领卫衣', count: 34 },
      { id: 'lianmaowei', name: '拉链连帽卫衣', count: 34 },
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
  {
    id: 19,
    name: '160克速干圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675db9853d91d.jpg',
    tags: ['160sugan', 'Tshirt']
  },
  {
    id: 20,
    name: '160克速干圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675db984a5d04.jpg',
    tags: ['160sugan', 'Tshirt']
  },
  {
    id: 21,
    name: '160克速干圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675db989785f9.jpg',
    tags: ['160sugan', 'Tshirt']
  },
  {
    id: 22,
    name: '160克速干圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675db9891687a.jpg',
    tags: ['160sugan', 'Tshirt']
  },
  {
    id: 23,
    name: '160克速干圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675db99c5193a.jpg',
    tags: ['160sugan', 'Tshirt']
  },
  {
    id: 24,
    name: '160克速干圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675db985b3309.jpg',
    tags: ['160sugan', 'Tshirt']
  },
  {
    id: 25,
    name: '160克速干圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675db99c56821.jpg',
    tags: ['160sugan', 'Tshirt']
  },
  {
    id: 26,
    name: '160克速干圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675db98748a77.jpg',
    tags: ['160sugan', 'Tshirt']
  },
  {
    id: 27,
    name: '160克速干圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675db99f402a3.jpg',
    tags: ['160sugan', 'Tshirt']
  },
  {
    id: 28,
    name: '160克速干圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675db99e2b115.jpg',
    tags: ['160sugan', 'Tshirt']
  },
  {
    id: 29,
    name: '160克速干圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675db99dc6336.jpg',
    tags: ['160sugan', 'Tshirt']
  },
  {
    id: 30,
    name: '160克速干圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675db99d39d7e.jpg',
    tags: ['160sugan', 'Tshirt']
  },
  {
    id: 31,
    name: '160克速干圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675db99f5b5cb.jpg',
    tags: ['160sugan', 'Tshirt']
  },
  {
    id: 32,
    name: '160克速干圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675db99c5ce6a.jpg',
    tags: ['160sugan', 'Tshirt']
  },
  {
    id: 33,
    name: '160克速干圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675db987e4fbc.jpg',
    tags: ['160sugan', 'Tshirt']
  },
  {
    id: 34,
    name: '160克速干圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675db98457bde.jpg',
    tags: ['160sugan', 'Tshirt']
  },
  {
    id: 35,
    name: '160克速干圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675db9a07605a.jpg',
    tags: ['160sugan', 'Tshirt']
  },
  {
    id: 36,
    name: '160克速干圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675db99ca4a44.jpg',
    tags: ['160sugan', 'Tshirt']
  },
  {
    id: 37,
    name: '160克速干圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675db9883eba0.jpg',
    tags: ['160sugan', 'Tshirt']
  },
  {
    id: 38,
    name: '160克速干圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675db98464248.jpg',
    tags: ['160sugan', 'Tshirt']
  },
  //180克冰丝蝴蝶网
  {
    id: 39,
    name: '180克冰丝蝴蝶网翻领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '翻领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dbc01814d9.jpg',
    tags: ['180bingsi', 'Polo']
  },
  {
    id: 40,
    name: '180克冰丝蝴蝶网圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '翻领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dbc023128e.jpg',
    tags: ['180bingsi', 'Polo']
  },
  {
    id: 41,
    name: '180克冰丝蝴蝶网圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '翻领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dbc0310e40.jpg',
    tags: ['180bingsi', 'Polo']
  },
  {
    id: 42,
    name: '180克冰丝蝴蝶网圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '翻领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dbc0407a2b.jpg',
    tags: ['180bingsi', 'Polo']
  },
  {
    id: 43,
    name: '180克冰丝蝴蝶网圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dbc1b3a691.jpg',
    tags: ['180bingsi', 'Tshirt']
  },
  {
    id: 44,
    name: '180克冰丝蝴蝶网圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dbc1b15340.jpg',
    tags: ['180bingsi', 'Tshirt']
  },
  {
    id: 45,
    name: '180克冰丝蝴蝶网圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dbc1c0cd4a.jpg',
    tags: ['180bingsi', 'Tshirt']
  },
  {
    id: 46,
    name: '180克冰丝蝴蝶网圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dbc1dc6861.jpg',
    tags: ['180bingsi', 'Tshirt']
  },
  {
    id: 47,
    name: '180克冰丝蝴蝶网圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dbc1de9c83.jpg',
    tags: ['180bingsi', 'Tshirt']
  },
  //180克冰丝蝴蝶网
  {
    id: 48,
    name: '180克苹果网圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dbd4258c14.jpg',
    tags: ['180pingguo', 'Tshirt']
  },
  {
    id: 49,
    name: '180克苹果网圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dbd42a238f.jpg',
    tags: ['180pingguo', 'Tshirt']
  },
  //180克小米通速干
  {
    id: 50,
    name: '180克小米通速干翻领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '翻领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dbd5a3ef64.jpg',
    tags: ['180xiaomitong', 'Polo']
  },
  {
    id: 51,
    name: '180克小米通速干圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dbd5b672fb.jpg',
    tags: ['180xiaomitong', 'Tshirt']
  },
  {
    id: 52,
    name: '180克小米通速干圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dbd73b046d.jpg',
    tags: ['180xiaomitong', 'Tshirt']
  },
  {
    id: 53,
    name: '180克小米通速干圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dbd7402bed.jpg',
    tags: ['180xiaomitong', 'Tshirt']
  },
  //莫代尔
  {
    id: 54,
    name: '莫代尔翻领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '翻领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dbeb5168ac.jpg',
    tags: ['modaier', 'Polo']
  },
  {
    id: 55,
    name: '莫代尔翻领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '翻领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dbeb5dee26.jpg',
    tags: ['modaier', 'Polo']
  },
  {
    id: 56,
    name: '莫代尔翻领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '翻领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dbeb6d7785.jpg',
    tags: ['modaier', 'Polo']
  },
  {
    id: 57,
    name: '莫代尔翻领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '翻领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dbeb8abbbb.jpg',
    tags: ['modaier', 'Polo']
  },
  {
    id: 58,
    name: '莫代尔翻领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '翻领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dbeb8b4697.jpg',
    tags: ['modaier', 'Polo']
  },
  {
    id: 59,
    name: '莫代尔圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dbee78d13b.jpg',
    tags: ['modaier', 'Tshirt']
  },
  {
    id: 60,
    name: '莫代尔圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dbee90aa16.jpg',
    tags: ['modaier', 'Tshirt']
  },
  {
    id: 61,
    name: '莫代尔圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dbee9aada4.jpg',
    tags: ['modaier', 'Tshirt']
  },
  {
    id: 62,
    name: '莫代尔圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dbef7d8b0e.jpg',
    tags: ['modaier', 'Tshirt']
  },
  {
    id: 63,
    name: '莫代尔圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dbef78ae99.jpg',
    tags: ['modaier', 'Tshirt']
  },
  {
    id: 64,
    name: '莫代尔圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dbef684634.jpg',
    tags: ['modaier', 'Tshirt']
  },
  {
    id: 65,
    name: '莫代尔圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dbef44e8ef.jpg',
    tags: ['modaier', 'Tshirt']
  },
  {
    id: 66,
    name: '莫代尔圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dbeeda1eaa.jpg',
    tags: ['modaier', 'Tshirt']
  },
  {
    id: 67,
    name: '莫代尔圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dbef986ba7.jpg',
    tags: ['modaier', 'Tshirt']
  },
  {
    id: 68,
    name: '莫代尔圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dbeee969c7.jpg',
    tags: ['modaier', 'Tshirt']
  },
  {
    id: 69,
    name: '莫代尔圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dbef9d8a9c.jpg',
    tags: ['modaier', 'Tshirt']
  },
  {
    id: 70,
    name: '莫代尔圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dbef20ee19.jpg',
    tags: ['modaier', 'Tshirt']
  },
  //200克珠地翻领短袖
  {
    id: 71,
    name: '200克珠地翻领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '翻领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dbf6e390a7.jpg',
    tags: ['200zhudi', 'Polo']
  },
  {
    id: 72,
    name: '200克珠地翻领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '翻领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dbf623b8ec.jpg',
    tags: ['200zhudi', 'Polo']
  },
  {
    id: 73,
    name: '200克珠地翻领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '翻领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dbf73a3992.jpg',
    tags: ['200zhudi', 'Polo']
  },
  {
    id: 74,
    name: '200克珠地翻领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '翻领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dbf63789b9.jpg',
    tags: ['200zhudi', 'Polo']
  },
  {
    id: 75,
    name: '200克珠地翻领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '翻领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dbf749a0ca.jpg',
    tags: ['200zhudi', 'Polo']
  },
  {
    id: 76,
    name: '200克珠地翻领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '翻领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dbf6de4ef1.jpg',
    tags: ['200zhudi', 'Polo']
  },
  {
    id: 77,
    name: '200克珠地翻领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '翻领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dbf720b3c0.jpg',
    tags: ['200zhudi', 'Polo']
  },
  {
    id: 78,
    name: '200克珠地翻领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '翻领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dbf71dfb96.jpg',
    tags: ['200zhudi', 'Polo']
  },
  {
    id: 79,
    name: '200克珠地翻领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '翻领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dbf6e390a7.jpg',
    tags: ['200zhudi', 'Polo']
  },
  {
    id: 80,
    name: '200克珠地翻领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '翻领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dbf623b8ec.jpg',
    tags: ['200zhudi', 'Polo']
  },
  {
    id: 81,
    name: '200克珠地圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dbf9f1bbb8.jpg',
    tags: ['200zhudi', 'Tshirt']
  },
  {
    id: 82,
    name: '200克珠地圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dbf9f63af3.jpg',
    tags: ['200zhudi', 'Tshirt']
  },
  {
    id: 83,
    name: '200克珠地圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dbf9fa6dcd.jpg',
    tags: ['200zhudi', 'Tshirt']
  },
  {
    id: 84,
    name: '200克珠地圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dbfa077256.jpg',
    tags: ['200zhudi', 'Tshirt']
  },
  //210克速干
  {
    id: 85,
    name: '210克速干翻领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '翻领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dbfcf10abf.jpg',
    tags: ['210suigan', 'Polo']
  },
  {
    id: 86,
    name: '210克速干翻领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '翻领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dbfcf5bb78.jpg',
    tags: ['210suigan', 'Polo']
  },
  {
    id: 87,
    name: '210克速干翻领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '翻领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dbfd033430.jpg',
    tags: ['210suigan', 'Polo']
  },
  {
    id: 88,
    name: '210克速干翻领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '翻领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dbfd157504.jpg',
    tags: ['210suigan', 'Polo']
  },
  {
    id: 89,
    name: '210克速干翻领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '翻领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dbfcf5bb78.jpg',
    tags: ['210suigan', 'Polo']
  },
  {
    id: 90,
    name: '210克速干圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dbff735746.jpg',
    tags: ['210suigan', 'Tshirt']
  },
  {
    id: 91,
    name: '210克速干圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dbff73d051.jpg',
    tags: ['210suigan', 'Tshirt']
  },
  {
    id: 92,
    name: '210克速干圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dbff7c73f9.jpg',
    tags: ['210suigan', 'Tshirt']
  },
  {
    id: 93,
    name: '210克速干圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dbff95d078.jpg',
    tags: ['210suigan', 'Tshirt']
  },
  //220克仿棉
  {
    id: 94,
    name: '220克仿棉翻领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '翻领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc01d51ae8.jpg',
    tags: ['220fangmian', 'Polo']
  },
  {
    id: 95,
    name: '220克仿棉翻领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '翻领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc01dc6e7d.jpg',
    tags: ['220fangmian', 'Polo']
  },
  {
    id: 96,
    name: '220克仿棉翻领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '翻领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc01f2640c.jpg',
    tags: ['220fangmian', 'Polo']
  },
  {
    id: 97,
    name: '220克仿棉翻领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '翻领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc01fe5174.jpg',
    tags: ['220fangmian', 'Polo']
  },
  {
    id: 98,
    name: '220克仿棉圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc0535fa6a.jpg',
    tags: ['220fangmian', 'Tshirt']
  },
  {
    id: 99,
    name: '220克仿棉圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc053bc17b.jpg',
    tags: ['220fangmian', 'Tshirt']
  },
  {
    id: 100,
    name: '220克仿棉圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc056d26a0.jpg',
    tags: ['220fangmian', 'Tshirt']
  },
  {
    id: 101,
    name: '220克仿棉圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc0581d4b1.jpg',
    tags: ['220fangmian', 'Tshirt']
  },
  {
    id: 102,
    name: '220克仿棉圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc05ee7569.jpg',
    tags: ['220fangmian', 'Tshirt']
  },
  {
    id: 103,
    name: '220克仿棉圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc06a5aa81.jpg',
    tags: ['220fangmian', 'Tshirt']
  },
  {
    id: 104,
    name: '220克仿棉圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc069b940f.jpg',
    tags: ['220fangmian', 'Tshirt']
  },
  {
    id: 105,
    name: '220克仿棉圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc067f0607.jpg',
    tags: ['220fangmian', 'Tshirt']
  },
  {
    id: 106,
    name: '220克仿棉圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc06643a73.jpg',
    tags: ['220fangmian', 'Tshirt']
  },
  {
    id: 107,
    name: '220克仿棉圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc06adf5ca.jpg',
    tags: ['220fangmian', 'Tshirt']
  },
  {
    id: 108,
    name: '220克仿棉圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc0620108f.jpg',
    tags: ['220fangmian', 'Tshirt']
  },
  {
    id: 109,
    name: '220克仿棉圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc06b75f48.jpg',
    tags: ['220fangmian', 'Tshirt']
  },
  {
    id: 110,
    name: '220克仿棉圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc065df3e3.jpg',
    tags: ['220fangmian', 'Tshirt']
  },
  //260克珠地
  {
    id: 111,
    name: '260克珠地翻领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '翻领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dbf71dfb96.jpg',
    tags: ['260zhudi', 'Polo']
  },
  {
    id: 112,
    name: '260克珠地翻领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '翻领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dbf623b8ec.jpg',
    tags: ['260zhudi', 'Polo']
  },
  {
    id: 113,
    name: '260克珠地翻领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '翻领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dbf6de4ef1.jpg',
    tags: ['260zhudi', 'Polo']
  },
  {
    id: 114,
    name: '260克珠地翻领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '翻领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dbf6e390a7.jpg',
    tags: ['260zhudi', 'Polo']
  },
  {
    id: 115,
    name: '260克珠地翻领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '翻领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc0b3cb620.jpg',
    tags: ['260zhudi', 'Polo']
  },
  {
    id: 116,
    name: '260克珠地翻领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '翻领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dbf73a3992.jpg',
    tags: ['260zhudi', 'Polo']
  },
  //260克珠地圆领短袖
  {
    id: 117,
    name: '260克珠地圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc0d4d5d02.jpg',
    tags: ['260zhudi', 'Tshirt']
  },
  {
    id: 118,
    name: '260克珠地圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc0d4cc867.jpg',
    tags: ['260zhudi', 'Tshirt']
  },
  {
    id: 119,
    name: '260克珠地圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc0d526c5a.jpg',
    tags: ['260zhudi', 'Tshirt']
  },
  {
    id: 120,
    name: '260克珠地圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc0d5eff48.jpg',
    tags: ['260zhudi', 'Tshirt']
  },
  {
    id: 121,
    name: '260克珠地圆领短袖',
    description: '轻薄透气，适合夏季穿着',
    type: '圆领短袖',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc0d6e849e.jpg',
    tags: ['260zhudi', 'Tshirt']
  },
  //拉链风衣
  {
    id: 122,
    name: '拉链风衣',
    description: '水蜜桃/复合/T400 可选',
    type: '风衣',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc1cc2eb9d.jpg',
    tags: ['fuhe', 'shuimitao','t400','fengyilailian']
  },
  {
    id: 123,
    name: '拉链风衣',
    description: '水蜜桃/复合/T400 可选',
    type: '风衣',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc1cc3772e.jpg',
    tags: ['fuhe', 'shuimitao','t400','fengyilailian']
  },
  {
    id: 124,
    name: '拉链风衣',
    description: '水蜜桃/复合/T400 可选',
    type: '风衣',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc1cd756b3.jpg',
    tags: ['fuhe', 'shuimitao','t400','fengyilailian']
  },
  {
    id: 125,
    name: '拉链风衣',
    description: '水蜜桃/复合/T400 可选',
    type: '风衣',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc1cf22427.jpg',
    tags: ['fuhe', 'shuimitao','t400','fengyilailian']
  },
  //立领风衣
  {
    id: 126,
    name: '立领风衣',
    description: '水蜜桃/复合/T400 可选',
    type: '风衣',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc24798ad1.jpg',
    tags: ['fuhe', 'shuimitao','t400','fengyililing']
  },
  {
    id: 127,
    name: '立领风衣',
    description: '水蜜桃/复合/T400 可选',
    type: '风衣',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc24712515.jpg',
    tags: ['fuhe', 'shuimitao','t400','fengyililing']
  },
  {
    id: 128,
    name: '立领风衣',
    description: '水蜜桃/复合/T400 可选',
    type: '风衣',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc2441b608.jpg',
    tags: ['fuhe', 'shuimitao','t400','fengyililing']
  },
  {
    id: 129,
    name: '立领风衣',
    description: '水蜜桃/复合/T400 可选',
    type: '风衣',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc24aaff1c.jpg',
    tags: ['fuhe', 'shuimitao','t400','fengyililing']
  },
  {
    id: 131,
    name: '立领风衣',
    description: '水蜜桃/复合/T400 可选',
    type: '风衣',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc23f15de3.jpg',
    tags: ['fuhe', 'shuimitao','t400','fengyililing']
  },
  {
    id: 132,
    name: '立领风衣',
    description: '水蜜桃/复合/T400 可选',
    type: '风衣',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc23f5fef4.jpg',
    tags: ['fuhe', 'shuimitao','t400','fengyililing']
  },
  {
    id: 134,
    name: '立领风衣',
    description: '水蜜桃/复合/T400 可选',
    type: '风衣',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc23fb5ccf.jpg',
    tags: ['fuhe', 'shuimitao','t400','fengyililing']
  },
  {
    id: 135,
    name: '立领风衣',
    description: '水蜜桃/复合/T400 可选',
    type: '风衣',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc24083c57.jpg',
    tags: ['fuhe', 'shuimitao','t400','fengyililing']
  },
  //马甲系列
  {
    id: 136,
    name: '马甲',
    description: '水蜜桃/复合 可选',
    type: '马甲',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc27d99879.jpg',
    tags: ['fuhe', 'shuimitao','majia']
  },
  {
    id: 137,
    name: '马甲',
    description: '水蜜桃/复合 可选',
    type: '马甲',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc27c4656e.jpg',
    tags: ['fuhe', 'shuimitao','majia']
  },
  {
    id: 138,
    name: '马甲',
    description: '水蜜桃/复合 可选',
    type: '马甲',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc27c02798.jpg',
    tags: ['fuhe', 'shuimitao','majia']
  },
  {
    id: 139,
    name: '马甲',
    description: '水蜜桃/复合 可选',
    type: '马甲',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc28142163.jpg',
    tags: ['fuhe', 'shuimitao','majia']
  },
  {
    id: 140,
    name: '马甲',
    description: '水蜜桃/复合 可选',
    type: '马甲',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc2825c575.jpg',
    tags: ['fuhe', 'shuimitao','majia']
  },
  {
    id: 141,
    name: '马甲',
    description: '水蜜桃/复合 可选',
    type: '马甲',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc2840506f.jpg',
    tags: ['fuhe', 'shuimitao','majia']
  },
  //卫衣系列
  {
    id: 142,
    name: '拉链连帽卫衣',
    description: '斜纹/健康布/银狐绒 可选',
    type: '卫衣',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc2b344853.jpg',
    tags: ['280xiewen', '300jiankangbu','400yinhuru','lianmaowei']
  },
  {
    id: 143,
    name: '拉链连帽卫衣',
    description: '斜纹/健康布/银狐绒 可选',
    type: '卫衣',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc2b222d84.jpg',
    tags: ['280xiewen', '300jiankangbu','400yinhuru','lianmaowei']
  },
  {
    id: 144,
    name: '拉链连帽卫衣',
    description: '斜纹/健康布/银狐绒 可选',
    type: '卫衣',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc2b166273.jpg',
    tags: ['280xiewen', '300jiankangbu','400yinhuru','lianmaowei']
  },
  {
    id: 145,
    name: '拉链连帽卫衣',
    description: '斜纹/健康布/银狐绒 可选',
    type: '卫衣',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc2b15e22b.jpg',
    tags: ['280xiewen', '300jiankangbu','400yinhuru','lianmaowei']
  },
  {
    id: 146,
    name: '拉链连帽卫衣',
    description: '斜纹/健康布/银狐绒 可选',
    type: '卫衣',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc2b64bccc.jpg',
    tags: ['280xiewen', '300jiankangbu','400yinhuru','lianmaowei']
  },
  {
    id: 147,
    name: '拉链连帽卫衣',
    description: '斜纹/健康布/银狐绒 可选',
    type: '卫衣',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc2b72ef4d.jpg',
    tags: ['280xiewen', '300jiankangbu','400yinhuru','lianmaowei']
  },
  {
    id: 148,
    name: '拉链连帽卫衣',
    description: '斜纹/健康布/银狐绒 可选',
    type: '卫衣',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc2b832725.jpg',
    tags: ['280xiewen', '300jiankangbu','400yinhuru','lianmaowei']
  },
  //立领卫衣
  {
    id: 149,
    name: '立领卫衣',
    description: '斜纹/健康布/银狐绒 可选',
    type: '卫衣',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc2dc3b7f4.jpg',
    tags: ['280xiewen', '300jiankangbu','400yinhuru','lilingwei']
  },
  {
    id: 150,
    name: '立领卫衣',
    description: '斜纹/健康布/银狐绒 可选',
    type: '卫衣',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc2dd7cce9.jpg',
    tags: ['280xiewen', '300jiankangbu','400yinhuru','lilingwei']
  },
  {
    id: 151,
    name: '立领卫衣',
    description: '斜纹/健康布/银狐绒 可选',
    type: '卫衣',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc2deee8c2.jpg',
    tags: ['280xiewen', '300jiankangbu','400yinhuru','lilingwei']
  },
  //圆领卫衣
  {
    id: 152,
    name: '圆领卫衣',
    description: '斜纹/健康布/银狐绒 可选',
    type: '卫衣',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc2f8a55a2.jpg',
    tags: ['280xiewen', '300jiankangbu','400yinhuru','yuanlingwei']
  },
  {
    id: 153,
    name: '圆领卫衣',
    description: '斜纹/健康布/银狐绒 可选',
    type: '卫衣',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc2f837ffd.jpg',
    tags: ['280xiewen', '300jiankangbu','400yinhuru','yuanlingwei']
  },
  {
    id: 154,
    name: '圆领卫衣',
    description: '斜纹/健康布/银狐绒 可选',
    type: '卫衣',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc2f9d3517.jpg',
    tags: ['280xiewen', '300jiankangbu','400yinhuru','yuanlingwei']
  },
  {
    id: 155,
    name: '圆领卫衣',
    description: '斜纹/健康布/银狐绒 可选',
    type: '卫衣',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc2fa18bf7.jpg',
    tags: ['280xiewen', '300jiankangbu','400yinhuru','yuanlingwei']
  },

  /*
  
  
  面料细节
  
  */

  {
    id: 156,
    name: '130克小方格速干面料细节',
    description: '面料细节',
    type: '面料细节',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc484e2d14.jpg',
    tags: ['detail','130xfg']
  },
  {
    id: 157,
    name: '130克小方格速干面料细节',
    description: '面料细节',
    type: '面料细节',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc4892b52e.jpg',
    tags: ['detail','130xfg']
  },
  {
    id: 158,
    name: '130克小方格速干面料细节',
    description: '面料细节',
    type: '面料细节',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc48c00321.jpg',
    tags: ['detail','130xfg']
  },
  {
    id: 159,
    name: '130克小方格速干面料细节',
    description: '面料细节',
    type: '面料细节',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc4a190e9a.jpg',
    tags: ['detail','130xfg']
  },
  //160克平纹布面料细节
  {
    id: 160,
    name: '160克平纹布面料细节',
    description: '面料细节',
    type: '面料细节',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc5494a625.jpg',
    tags: ['detail','160pingwenbu']
  },
  {
    id: 161,
    name: '160克平纹布面料细节',
    description: '面料细节',
    type: '面料细节',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc5cb9ae3c.jpg',
    tags: ['detail','160pingwenbu']
  },
  {
    id: 162,
    name: '160克平纹布面料细节',
    description: '面料细节',
    type: '面料细节',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc5e0938ed.jpg',
    tags: ['detail','160pingwenbu']
  },
  //160克速干面料细节
  {
    id: 163,
    name: '160克速干面料细节',
    description: '面料细节',
    type: '面料细节',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc62621879.jpg',
    tags: ['detail','160sugan']
  },
  {
    id: 164,
    name: '160克速干面料细节',
    description: '面料细节',
    type: '面料细节',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc626ebbf9.jpg',
    tags: ['detail','160sugan']
  },
  {
    id: 165,
    name: '160克速干面料细节',
    description: '面料细节',
    type: '面料细节',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc62b027b6.jpg',
    tags: ['detail','160sugan']
  },
  //180克冰丝蝴蝶网面料细节
  {
    id: 166,
    name: '180克冰丝蝴蝶网面料细节',
    description: '面料细节',
    type: '面料细节',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc67aa8f5f.jpg',
    tags: ['detail','180bingsi']
  },
  {
    id: 167,
    name: '180克冰丝蝴蝶网面料细节',
    description: '面料细节',
    type: '面料细节',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc67ea277c.jpg',
    tags: ['detail','180bingsi']
  },
  {
    id: 168,
    name: '180克冰丝蝴蝶网面料细节',
    description: '面料细节',
    type: '面料细节',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc67fe4297.jpg',
    tags: ['detail','180bingsi']
  },
  {
    id: 169,
    name: '180克冰丝蝴蝶网面料细节',
    description: '面料细节',
    type: '面料细节',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc6808d86b.jpg',
    tags: ['detail','180bingsi']
  },
  {
    id: 170,
    name: '180克冰丝蝴蝶网面料细节',
    description: '面料细节',
    type: '面料细节',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc684bf248.jpg',
    tags: ['detail','180bingsi']
  },
  //180克苹果网面料细节
  {
    id: 171,
    name: '180克苹果网面料细节',
    description: '面料细节',
    type: '面料细节',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc6c86fa0a.jpg',
    tags: ['detail','180pingguo']
  },
  {
    id: 172,
    name: '180克苹果网面料细节',
    description: '面料细节',
    type: '面料细节',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675dc6c9910e6.jpg',
    tags: ['detail','180pingguo']
  },
  //180克小米通速干面料细节
  {
    id: 173,
    name: '180克小米通速干面料细节',
    description: '面料细节',
    type: '面料细节',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675e333c22bc8.jpg',
    tags: ['detail','180xiaomitong']
  },
  {
    id: 174,
    name: '180克小米通速干面料细节',
    description: '面料细节',
    type: '面料细节',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675e333d3660b.jpg',
    tags: ['detail','180xiaomitong']
  },
  //200克珠地面料细节
  {
    id: 175,
    name: '200克珠地面料细节',
    description: '面料细节',
    type: '面料细节',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675e337fc8110.jpg',
    tags: ['detail','200zhudi']
  },
  {
    id: 176,
    name: '200克珠地面料细节',
    description: '面料细节',
    type: '面料细节',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675e337fce8f0.jpg',
    tags: ['detail','200zhudi']
  },
  {
    id: 177,
    name: '200克珠地面料细节',
    description: '面料细节',
    type: '面料细节',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675e338084e8e.jpg',
    tags: ['detail','200zhudi']
  },
  {
    id: 178,
    name: '200克珠地面料细节',
    description: '面料细节',
    type: '面料细节',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675e33810d77c.jpg',
    tags: ['detail','200zhudi']
  },
  {
    id: 179,
    name: '200克珠地面料细节',
    description: '面料细节',
    type: '面料细节',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675e33822d5f8.jpg',
    tags: ['detail','200zhudi']
  },
  //210克速干面料细节
  {
    id: 180,
    name: '210克速干面料细节',
    description: '面料细节',
    type: '面料细节',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675e33e6d1c8e.jpg',
    tags: ['detail','210sugan']
  },
  {
    id: 181,
    name: '210克速干面料细节',
    description: '面料细节',
    type: '面料细节',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675e33e948ed3.jpg',
    tags: ['detail','210sugan']
  },
  //220克仿棉面料细节
  {
    id: 182,
    name: '220克仿棉面料细节',
    description: '面料细节',
    type: '面料细节',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675e3411e2a64.jpg',
    tags: ['detail','220fangmian']
  },
  {
    id: 183,
    name: '220克仿棉面料细节',
    description: '面料细节',
    type: '面料细节',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675e3411e737f.jpg',
    tags: ['detail','220fangmian']
  },
  {
    id: 184,
    name: '220克仿棉面料细节',
    description: '面料细节',
    type: '面料细节',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675e3412d70f7.jpg',
    tags: ['detail','220fangmian']
  },
  {
    id: 185,
    name: '220克仿棉面料细节',
    description: '面料细节',
    type: '面料细节',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675e3414e0c23.jpg',
    tags: ['detail','220fangmian']
  },
  {
    id: 186,
    name: '220克仿棉面料细节',
    description: '面料细节',
    type: '面料细节',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675e34168c30b.jpg',
    tags: ['detail','220fangmian']
  },
  //260克珠地面料细节
  {
    id: 187,
    name: '260克珠地面料细节',
    description: '面料细节',
    type: '面料细节',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675e343abf9dc.jpg',
    tags: ['detail','260zhudi']
  },
  {
    id: 188,
    name: '260克珠地面料细节',
    description: '面料细节',
    type: '面料细节',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675e343b10d49.jpg',
    tags: ['detail','260zhudi']
  },
  {
    id: 189,
    name: '260克珠地面料细节',
    description: '面料细节',
    type: '面料细节',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675e343cb1e6c.jpg',
    tags: ['detail','260zhudi']
  },
  {
    id: 190,
    name: '260克珠地面料细节',
    description: '面料细节',
    type: '面料细节',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675e343d99aa0.jpg',
    tags: ['detail','260zhudi']
  },
  //280克斜纹布面料细节 
  {
    id: 192,
    name: '280克斜纹布面料细节',
    description: '面料细节',
    type: '面料细节',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675e345d8cab7.jpg',
    tags: ['detail','280xiewen']
  },
  //300克健康布面料细节
  {
    id: 193,
    name: '300克健康布面料细节',
    description: '面料细节',
    type: '面料细节',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675e36d352ad3.jpg',
    tags: ['detail','300jiankangbu']
  },
  {
    id: 194,
    name: '300克健康布面料细节',
    description: '面料细节',
    type: '面料细节',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675e36d473af9.jpg',
    tags: ['detail','300jiankangbu']
  },
  //400克银狐绒面料细节
  {
    id: 195,
    name: '400克银狐绒面料细节',
    description: '面料细节',
    type: '面料细节',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675e37423d052.jpg',
    tags: ['detail','400yinhuru']
  },
  {
    id: 196,
    name: '400克银狐绒面料细节',
    description: '面料细节',
    type: '面料细节',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675e374461d34.jpg',
    tags: ['detail','400yinhuru']
  },
  //复合面料细节
  {
    id: 197,
    name: '复合面料细节',
    description: '面料细节',
    type: '面料细节',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675e37c58eb49.jpg',
    tags: ['detail','fuhe']
  },
  {
    id: 198,
    name: '复合面料细节',
    description: '面料细节',
    type: '面料细节',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675e37c5a1f9a.jpg',
    tags: ['detail','fuhe']
  },
  {
    id: 199,
    name: '复合面料细节',
    description: '面料细节',
    type: '面料细节',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675e37c6d6fe6.jpg',
    tags: ['detail','fuhe']
  },
  //莫代尔面料细节  
  {
    id: 200,
    name: '莫代尔面料细节',
    description: '面料细节',
    type: '面料细节',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675e37e7b8a4c.jpg',
    tags: ['detail','modaier']
  },
  {
    id: 201,
    name: '莫代尔面料细节',
    description: '面料细节',
    type: '面料细节',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675e37e7d3a87.jpg',
    tags: ['detail','modaier']
  },
  {
    id: 202,
    name: '莫代尔面料细节',
    description: '面料细节',
    type: '面料细节',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675e37e7e31ec.jpg',
    tags: ['detail','modaier']
  },
  //水蜜桃
  {
    id: 203,
    name: '水蜜桃面料细节',
    description: '面料细节',
    type: '面料细节',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675e3805954e6.jpg',
    tags: ['detail','shuimitao']
  },
  {
    id: 204,
    name: '水蜜桃面料细节',
    description: '面料细节',
    type: '面料细节',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675e3805b5edd.jpg',
    tags: ['detail','shuimitao']
  },
  //四面弹
  {
    id: 205,
    name: '四面弹面料细节',
    description: '面料细节',
    type: '面料细节',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675e382e8995b.jpg',
    tags: ['detail','simiantan']
  },
  {
    id: 206,
    name: '四面弹面料细节',
    description: '面料细节',
    type: '面料细节',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675e382ec35e1.jpg',
    tags: ['detail','simiantan']
  },
  {
    id: 207,
    name: '四面弹面料细节',
    description: '面料细节',
    type: '面料细节',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675e382eea635.jpg',
    tags: ['detail','simiantan']
  },
  //T400
  {
    id: 208,
    name: 'T400面料细节',
    description: '面料细节',
    type: '面料细节',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675e39c3b71ea.jpg',
    tags: ['detail','t400']
  },
  {
    id: 209,
    name: 'T400面料细节',
    description: '面料细节',
    type: '面料细节',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675e39c3b71e7.jpg',
    tags: ['detail','t400']
  },
  {
    id: 210,
    name: 'T400面料细节',
    description: '面料细节',
    type: '面料细节',
    thumbnail: 'https://bu.dusays.com/2024/12/15/675e39c3de2f6.jpg',
    tags: ['detail','t400']
  },
]

export {
  materialCategories,
  materialsList
}
