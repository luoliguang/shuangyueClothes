// //130克小方格小方格速干POLO
// const xfgPolo = [
// ];
// const xfgTshirt = [
//   '/else/实物图/clothes/130克小方格圆领/1.jpg',
//   '/else/实物图/clothes/130克小方格圆领/2.jpg',
//   '/else/实物图/clothes/130克小方格圆领/3.jpg',
//   '/else/实物图/clothes/130克小方格圆领/4.jpg',
//   '/else/实物图/clothes/130克小方格圆领/5.jpg',
//   '/else/实物图/clothes/130克小方格圆领/6.jpg',
//   '/else/实物图/clothes/130克小方格圆领/7.jpg',
// ];

// const suGanPolo = [
//   '/else/实物图/clothes/160克速干翻领/1.jpg',
//   '/else/实物图/clothes/160克速干翻领/2.jpg',
//   '/else/实物图/clothes/160克速干翻领/3.jpg',
//   '/else/实物图/clothes/160克速干翻领/4.jpg',
//   '/else/实物图/clothes/160克速干翻领/5.jpg',
//   '/else/实物图/clothes/160克速干翻领/6.jpg',
//   '/else/实物图/clothes/160克速干翻领/7.jpg',
//   '/else/实物图/clothes/160克速干翻领/8.jpg',
//   '/else/实物图/clothes/160克速干翻领/9.jpg',
//   '/else/实物图/clothes/160克速干翻领/10.jpg',
// ];

// const suGanTshirt = [
//   '/else/实物图/clothes/160克速干圆领/1.jpg',
//   '/else/实物图/clothes/160克速干圆领/2.jpg',
//   '/else/实物图/clothes/160克速干圆领/3.jpg',
//   '/else/实物图/clothes/160克速干圆领/4.jpg',
//   '/else/实物图/clothes/160克速干圆领/5.jpg',
//   '/else/实物图/clothes/160克速干圆领/6.jpg',
//   '/else/实物图/clothes/160克速干圆领/7.jpg',
//   '/else/实物图/clothes/160克速干圆领/8.jpg',
//   '/else/实物图/clothes/160克速干圆领/9.jpg',
//   '/else/实物图/clothes/160克速干圆领/10.jpg',

// ];
function genarateImagePaths(basePath, count) {
  const imagePaths = []
  for (let i = 1; i <= count; i++) {
    imagePaths.push(`${basePath}/${i}.jpg`)
  }
  return imagePaths
  
}

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

}

export default products;