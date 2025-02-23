---
layout: doc
---

## 130克小方格速干<sup>[实物图](./physical-map.md#130xfg)</sup> {#130xfg}
<SwiperZoom :imagePaths="xfgDetails" :VideoPath="xfgVideoPath" FabricVideo="130克小方格速干视频"/>

## 160克平纹布<sup>[实物图](./physical-map.md#160pwb)</sup> {#160pwb}
<SwiperZoom :imagePaths="pwbDetails" :VideoPath="pwbVideoPath" FabricVideo="160克平纹布视频"/>

## 160克速干<sup>[实物图](./physical-map.md#160sg)</sup> {#160sg}
<SwiperZoom :imagePaths="suGanDetails" :VideoPath="suGanVideoPath" FabricVideo="160克速干视频"/>

## 180克冰丝蝴蝶网<sup>[实物图](./physical-map.md#180bsw)</sup> {#180bsw}
<SwiperZoom :imagePaths="hdwDetails" :VideoPath="hdwVideoPath" FabricVideo=""/>

## 180克苹果网<sup>[实物图](./physical-map.md#180apple)</sup> {#180apple}
<SwiperZoom :imagePaths="appleDetails" :VideoPath="appleVideoPath" FabricVideo=""/>

## 180克小米通速干<sup>[实物图](./physical-map.md#180xmt)</sup> {#180xmt}
<SwiperZoom :imagePaths="xmtDetails" :VideoPath="xmtVideoPath" FabricVideo="180克小米通速干视频"/>

## 200克珠地<sup>[实物图](./physical-map.md#200zd)</sup> {#200zd}
<SwiperZoom :imagePaths="zdDetails" :VideoPath="zdVideoPath" FabricVideo='200克珠地视频'/>

## 210克速干<sup>[实物图](./physical-map.md#210sg)</sup> {#210sg}
<SwiperZoom :imagePaths="SGDetails" :VideoPath="SGVideoPath" FabricVideo='210克速干视频'/>

## 220克仿棉<sup>[实物图](./physical-map.md#220fm)</sup> {#220fm}
<SwiperZoom :imagePaths="fmDetails" :VideoPath="fmVideoPath" FabricVideo='220克仿棉视频'/>

## 260克珠地<sup>[实物图](./physical-map.md#260zd)</sup> {#260zd}
<SwiperZoom :imagePaths="ZDDetails" :VideoPath="ZDVideoPath" FabricVideo='260克珠地视频'/>

## 280克斜纹<sup>[实物图](./physical-map.md#280xw)</sup> {#280xw}
<SwiperZoom :imagePaths="xwDetails" :VideoPath="xwVideoPath" FabricVideo='280克斜纹视频'/>

## 300克健康布<sup>[实物图](./physical-map.md#380jkb)</sup> {#380jkb}
<SwiperZoom :imagePaths="jkbDetails" :VideoPath="jkbVideoPath" FabricVideo='300克健康布视频'/>

## 400克银狐绒<sup>[实物图](./physical-map.md#400yhr)</sup> {#400yhr}
<SwiperZoom :imagePaths="yhrDetails" :VideoPath="yhrVideoPath" FabricVideo='400克银狐绒视频'/>

## 复合<sup>[实物图](./physical-map.md#fh)</sup> {#fh}
<SwiperZoom :imagePaths="fhDetails" :VideoPath="fhVideoPath" FabricVideo='复合视频'/>

## 莫代尔<sup>[实物图](./physical-map.md#mde)</sup> {#mde}
<SwiperZoom :imagePaths="mdeDetails" :VideoPath="mdeVideoPath" FabricVideo='莫代尔视频'/>

## 水蜜桃<sup>[实物图](./physical-map.md#smt)</sup> {#smt}
<SwiperZoom :imagePaths="smtDetails" :VideoPath="smtVideoPath" FabricVideo='水蜜桃视频'/>

## 四面弹<sup>[实物图](./physical-map.md#SMT)</sup> {#SMT}
<SwiperZoom :imagePaths="SmtDetails" :VideoPath="SmtVideoPath" FabricVideo=''/>

## T400<sup>[实物图](./physical-map.md#T400)</sup> {#T400}
<SwiperZoom :imagePaths="T400Details" :VideoPath="T400VideoPath" FabricVideo=''/>


<script setup>
import { FabricImgs } from '../components/data/PhysicalMap.js'
import { getProductImages, getProductVideo } from '../components/data/PhysicalMapTC.js'

//130克小方格速干
// const xfgDetails = FabricImgs.xfgDetails
const xfgDetails = getProductImages('xfgDetails')
const xfgVideoPath= ['/else/实物图/fabricDetail/130克小方格速干/v.mp4']
//160克平纹布
// const pwbDetails = FabricImgs.pwbDetails
const pwbDetails = getProductImages('pwbDetails')
const pwbVideoPath= ['/else/实物图/fabricDetail/160克平纹布/v.mp4']
//160速干
// const suGanDetails = FabricImgs.suGanDetails
const suGanDetails = getProductImages('suGanDetails')
const suGanVideoPath= ['/else/实物图/fabricDetail/160克速干/v.mp4']
//180克冰丝蝴蝶网
// const hdwDetails = FabricImgs.hdwDetails
const hdwDetails = getProductImages('hdwDetails')
const hdwVideoPath= ['/else/实物图/fabricDetail/180克冰丝蝴蝶网/v.mp4']
//180克苹果网
// const appleDetails = FabricImgs.appleDetails
const appleDetails = getProductImages('appleDetails')
const appleVideoPath= ['/else/实物图/fabricDetail/180克苹果网/v.mp4']
//180克小米通速干
// const xmtDetails = FabricImgs.xmtDetails
const xmtDetails = getProductImages('xmtDetails')
const xmtVideoPath= ['/else/实物图/fabricDetail/180克小米通速干/v.mp4']
//200克珠地
// const zdDetails = FabricImgs.zdDetails
const zdDetails = getProductImages('zdDetails')
const zdVideoPath= ['/else/实物图/fabricDetail/200克珠地/v.mp4']
//210克速干
// const SGDetails = FabricImgs.SGDetails
const SGDetails = getProductImages('SGDetails')
const SGVideoPath= ['/else/实物图/fabricDetail/210克速干/v.mp4']
//220克仿棉
// const fmDetails = FabricImgs.fmDetails
const fmDetails = getProductImages('fmDetails')
const fmVideoPath= ['/else/实物图/fabricDetail/220克仿棉/v.mp4']
//260克珠地
// const ZDDetails = FabricImgs.ZDDetails
const ZDDetails = getProductImages('ZDDetails')
const ZDVideoPath= ['/else/实物图/fabricDetail/260克珠地/v.mp4']
//280克斜纹
// const xwDetails = FabricImgs.xwDetails
const xwDetails = getProductImages('xwDetails')
const xwVideoPath= ['/else/实物图/fabricDetail/280克斜纹/v.mp4']
//300克健康布
// const jkbDetails = FabricImgs.jkbDetails
const jkbDetails = getProductImages('jkbDetails')
const jkbVideoPath= ['/else/实物图/fabricDetail/300克健康布/v.mp4']
//400克银狐绒
// const yhrDetails = FabricImgs.yhrDetails
const yhrDetails = getProductImages('yhrDetails')
const yhrVideoPath= ['/else/实物图/fabricDetail/400克银狐绒/v.mp4']
//复合
// const fhDetails = FabricImgs.fhDetails
const fhDetails = getProductImages('fhDetails')
const fhVideoPath= ['/else/实物图/fabricDetail/复合/v.mp4']
//莫代尔
// const mdeDetails = FabricImgs.mdeDetails
const mdeDetails = getProductImages('mdeDetails')
const mdeVideoPath= ['/else/实物图/fabricDetail/莫代尔/v.mp4']
//水蜜桃
// const smtDetails = FabricImgs.smtDetails
const smtDetails = getProductImages('smtDetails')
const smtVideoPath= ['/else/实物图/fabricDetail/水蜜桃/v.mp4']
//四面弹
// const SmtDetails = FabricImgs.SmtDetails
const SmtDetails = getProductImages('SmtDetails')
const SmtVideoPath= ['/else/实物图/fabricDetail/四面弹/v.mp4']
//T400
// const T400Details = FabricImgs.T400Details
const T400Details = getProductImages('T400Details')
const T400VideoPath= ['/else/实物图/fabricDetail/T400/v.mp4']

</script>

<style scope>
video{
  border-radius:10px;
}
</style>