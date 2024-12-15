---
layout: doc
---
## 短袖系列
<!-- 小方格 -->
### 130克小方格翻领短袖<sup>[面料细节](./fabric#130xfg)</sup>  {#130xfg}
<Swiper :imagePaths="xfgPolo" />

### 130克小方格圆领短袖
<Swiper :imagePaths="xfgTshirt" />

<!-- 平纹布 -->
### 160克平纹布翻领短袖<sup>[面料细节](./fabric#160pwb)</sup>  {#160pwb}
<Swiper :imagePaths="pwbPolo" />

### 160克平纹布圆领短袖
<Swiper :imagePaths="pwbTshirt" />

<!-- 160克速干 -->
### 160克速干翻领短袖<sup>[面料细节](./fabric#160sg)</sup>  {#160sg}
<Swiper :imagePaths="suGanPolo" />

### 160克速干圆领短袖
<Swiper :imagePaths="suGanTshirt" />

<!-- 冰丝蝴蝶网 -->
### 180克冰丝蝴蝶网翻领短袖<sup>[面料细节](./fabric#180bsw)</sup>  {#180bsw}
<Swiper :imagePaths="bswPolo" />

### 180克冰丝蝴蝶网圆领短袖
<Swiper :imagePaths="bswTshirt" />

<!-- 180苹果网 -->
### 180克苹果网翻领短袖<sup>[面料细节](./fabric#180apple)</sup>  {#180apple}
<Swiper :imagePaths="applePolo" />

### 180克苹果网圆领短袖
<Swiper :imagePaths="appleTshirt" />

<!-- 180克小米通 -->
### 180克小米通翻领短袖<sup>[面料细节](./fabric#180xmt)</sup>  {#180xmt}
<Swiper :imagePaths="xmtPolo" />

### 180克小米通圆领短袖
<Swiper :imagePaths="xmtTshirt" />

<!-- //200克/260克莫代尔 -->
### 200/260克莫代尔翻领短袖<sup>[面料细节](./fabric#mde)</sup>  {#mde}
<Swiper :imagePaths="mdePolo" />

### 200/260克莫代尔圆领短袖
<Swiper :imagePaths="mdeTshirt" />

<!-- 200珠地 -->
### 200珠地翻领短袖<sup>[面料细节](./fabric#200zd)</sup>  {#200zd}
<Swiper :imagePaths="zdPolo" />

### 200珠地圆领短袖
<Swiper :imagePaths="zdPolo" />

<!-- 210克速干 -->
### 210克速干翻领短袖<sup>[面料细节](./fabric#210sg)</sup>  {#210sg}
<Swiper :imagePaths="SGPolo" />

### 210克速干圆领短袖
<Swiper :imagePaths="SGTshirt" />

<!-- 220克仿棉 -->
### 220克仿棉翻领短袖<sup>[面料细节](./fabric#220fm)</sup>  {#220fm}
<Swiper :imagePaths="fmPolo" />

### 220克仿棉圆领短袖
<Swiper :imagePaths="fmTshirt" />

<!-- 260克珠地 -->
### 260克珠地翻领短袖<sup>[面料细节](./fabric#260zd)</sup>  {#260zd}
<Swiper :imagePaths="ZDPolo" />

### 260克珠地圆领短袖
<Swiper :imagePaths="ZDTshirt" />

## 风衣系列 <sup>[水蜜桃](./fabric#smt){#smt}|[复合](./fabric#fh){#fh}|[T400](./fabric#T400){#T400}</sup>

### 立领风衣
<Swiper :imagePaths="standupCollar" />

### 拉链风衣
<Swiper :imagePaths="zipperCollar" />

## 马甲系列 <sup>[水蜜桃](./fabric#smt){#smt}|[复合](./fabric#fh){#fh}</sup>

### 马甲
<Swiper :imagePaths="waistcoat" />

## 卫衣系列 <sup>[斜纹](./fabric#280xw){#280xw}|[健康布](./fabric#380jkb){#380jkb}|[银狐绒](./fabric#400yhr){#400yhr}</sup>

### 拉链连帽卫衣

<Swiper :imagePaths="ZipperHoodSweater" />

### 立领卫衣

<Swiper :imagePaths="standupSweater" />

### 圆领卫衣

<Swiper :imagePaths="roundSweater" />

<script setup>
import { products } from '../components/data/PhysicalMap.js'
import { getProductImages } from '../components/data/PhysicalMapTC.js'
//小方格
// const xfgPolo = products.xfgPolo
// const xfgTshirt = products.xfgTshirt
const xfgPolo = getProductImages('xfgPOLO')
const xfgTshirt = getProductImages('xfgTshirt')
//平纹布
// const pwbPolo = products.pwbPolo
// const pwbTshirt = products.pwbTshirt
const pwbPolo = getProductImages('pwbPOLO')
const pwbTshirt = getProductImages('pwbTshirt')
//160克速干
// const suGanPolo = products.suGanPolo
// const suGanTshirt = products.suGanTshirt
const suGanPolo = getProductImages('suGanPOLO')
const suGanTshirt = getProductImages('suGanTshirt')
//蝴蝶网
// const bswPolo = products.bswPolo
// const bswTshirt = products.bswTshirt
const bswPolo = getProductImages('bswPOLO')
const bswTshirt = getProductImages('bswTshirt')
//180苹果网
// const applePolo = products.applePolo
// const appleTshirt = products.appleTshirt
const applePolo = getProductImages('applePOLO')
const appleTshirt = getProductImages('appleTshirt')
//小米通
// const xmtPolo = products.xmtPolo
// const xmtTshirt = products.xmtTshirt
const xmtPolo = getProductImages('xmtPOLO')
const xmtTshirt = getProductImages('xmtTshirt')
//200克/260克莫代尔
// const mdePolo = products.mdePolo
// const mdrTshirt = products.mdrTshirt
const mdePolo = getProductImages('mdePOLO')
const mdeTshirt = getProductImages('mdeTshirt')
//200珠地
// const zdPolo = products.zdPolo
// const zdTshirt = products.zdTshirt
const zdPolo = getProductImages('zdPOLO')
const zdTshirt = getProductImages('zdTshirt')
//210克速干
// const SGPolo = products.SGPolo
// const SGTshirt = products.SGTshirt
const SGPolo = getProductImages('SGPOLO')
const SGTshirt = getProductImages('SGTshirt')
//220克仿棉
// const fmPolo = products.fmPolo
// const fmTshirt = products.fmTshirt
const fmPolo = getProductImages('fmPOLO')
const fmTshirt = getProductImages('fmTshirt')
//260克珠地
// const ZDPolo = products.ZDPolo
// const ZDTshirt = products.ZDTshirt
const ZDPolo = getProductImages('ZDPOLO')
const ZDTshirt = getProductImages('ZDTshirt')
//风衣
// const standupCollar = products.standupCollar
// const zipperCollar = products.zipperCollar
const standupCollar = getProductImages('standupCollar') 
const zipperCollar = getProductImages('zipperCollar')
//马甲系列
// const waistcoat = products.waistcoat
const waistcoat = getProductImages('waistcoat')
//卫衣
// const ZipperHoodSweater = products.ZipperHoodSweater
// const standupSweater = products.standupSweater
// const roundSweater = products.roundSweater
const ZipperHoodSweater = getProductImages('ZipperHoodSweater')
const standupSweater = getProductImages('standupSweater')
const roundSweater = getProductImages('roundSweater')
</script>

