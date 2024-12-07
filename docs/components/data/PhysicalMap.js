function genarateImagePaths(basePath, count) {
  const imagePaths = []
  for (let i = 1; i <= count; i++) {
    imagePaths.push(`${basePath}/${i}.jpg`)
  }
  return imagePaths
  
}


// 首页轮播图片
const MainImgs = {
  MainImgs: genarateImagePaths('/else/首页素材/', 12),
}

// 实物图
const products = {
  //小方格
  xfgPolo: genarateImagePaths('/else/实物图/clothes/130克小方格速干翻领', 0),
  xfgTshirt: genarateImagePaths('/else/实物图/clothes/130克小方格速干圆领', 6),
  //平纹布
  pwbPolo: genarateImagePaths('/else/实物图/clothes/160克平纹布翻领', 2),
  pwbTshirt: genarateImagePaths('/else/实物图/clothes/160克平纹布圆领', 2),
  //速干
  suGanPolo: genarateImagePaths('/else/实物图/clothes/160克速干翻领', 10),
  suGanTshirt: genarateImagePaths('/else/实物图/clothes/160克速干圆领', 20),
  //冰丝蝴蝶网
  bswPolo: genarateImagePaths('/else/实物图/clothes/180克冰丝蝴蝶网翻领', 4),
  bswTshirt: genarateImagePaths('/else/实物图/clothes/180克冰丝蝴蝶网圆领', 5),
  //180苹果网
  applePolo: genarateImagePaths('/else/实物图/clothes/180克苹果网翻领', 0),
  appleTshirt: genarateImagePaths('/else/实物图/clothes/180克苹果网圆领', 2),
  //180克小米通
  xmtPolo: genarateImagePaths('/else/实物图/clothes/180克小米通速干翻领', 2),
  xmtTshirt: genarateImagePaths('/else/实物图/clothes/180克小米通速干圆领', 2),
  //200克/260克莫代尔
  mdePolo: genarateImagePaths('/else/实物图/clothes/200克·260克莫代尔翻领', 5),
  mdrTshirt: genarateImagePaths('/else/实物图/clothes/200克·260克莫代尔圆领', 12),
  //200珠地
  zdPolo: genarateImagePaths('/else/实物图/clothes/200克珠地翻领', 9),
  zdPolo: genarateImagePaths('/else/实物图/clothes/200克珠地圆领', 4),
  //210克速干
  SGPolo: genarateImagePaths('/else/实物图/clothes/210克速干翻领', 5),
  SGTshirt: genarateImagePaths('/else/实物图/clothes/210克速干圆领', 4),
  //220克仿棉
  fmPolo: genarateImagePaths('/else/实物图/clothes/220克仿棉翻领', 4),
  fmTshirt: genarateImagePaths('/else/实物图/clothes/220克仿棉圆领', 13),
  //260克珠地
  ZDPolo: genarateImagePaths('/else/实物图/clothes/260克珠地翻领', 6),
  ZDTshirt: genarateImagePaths('/else/实物图/clothes/260克珠地圆领', 5),
  //风衣系列
  standupCollar:genarateImagePaths('/else/实物图/clothes/风衣系列/立领', 10),
  zipperCollar:genarateImagePaths('/else/实物图/clothes/风衣系列/拉链', 4),
  //马甲系列
  waistcoat:genarateImagePaths('/else/实物图/clothes/马甲系列', 6),
  //卫衣系列
  ZipperHoodSweater:genarateImagePaths('/else/实物图/clothes/卫衣系列/拉链连帽', 7),
  standupSweater:genarateImagePaths('/else/实物图/clothes/卫衣系列/立领卫衣', 3),
  roundSweater:genarateImagePaths('/else/实物图/clothes/卫衣系列/圆领卫衣', 4),

}

// 面料细节
const FabricImgs = {
  //小方格
  xfgDetails: genarateImagePaths('/else/实物图/fabricDetail/130克小方格速干',4),
  //160克平纹布
  pwbDetails: genarateImagePaths('/else/实物图/fabricDetail/160克平纹布',3),
  //160速干
  suGanDetails: genarateImagePaths('/else/实物图/fabricDetail/160克速干',3),
  //180克冰丝蝴蝶网
  hdwDetails: genarateImagePaths('/else/实物图/fabricDetail/180克冰丝蝴蝶网',5),
  //180克苹果网
  appleDetails: genarateImagePaths('/else/实物图/fabricDetail/180克苹果网',2),
  //180克小米通速干
  xmtDetails: genarateImagePaths('/else/实物图/fabricDetail/180克小米通速干',2),
  //200克珠地
  zdDetails: genarateImagePaths('/else/实物图/fabricDetail/200克珠地',5),
  //210克速干
  SGDetails: genarateImagePaths('/else/实物图/fabricDetail/210克速干',2),
  //220克仿棉
  fmDetails: genarateImagePaths('/else/实物图/fabricDetail/220克仿棉',5),
  //260克珠地
  ZDDetails: genarateImagePaths('/else/实物图/fabricDetail/260克珠地',4),
  //280克斜纹
  xwDetails: genarateImagePaths('/else/实物图/fabricDetail/280克斜纹',2),
  //300克健康布
  jkbDetails: genarateImagePaths('/else/实物图/fabricDetail/300克健康布',2),
  //400克银狐绒
  yhrDetails: genarateImagePaths('/else/实物图/fabricDetail/400克银狐绒',3),
  //复合
  fhDetails: genarateImagePaths('/else/实物图/fabricDetail/复合',3),
  //莫代尔
  mdeDetails: genarateImagePaths('/else/实物图/fabricDetail/莫代尔',3),
  //水蜜桃
  smtDetails: genarateImagePaths('/else/实物图/fabricDetail/水蜜桃',3),
  //四面弹
  SmtDetails: genarateImagePaths('/else/实物图/fabricDetail/四面弹',3),
  //T400
  T400Details: genarateImagePaths('/else/实物图/fabricDetail/T400',3),
}

export{
  products,
  MainImgs,
  FabricImgs
}