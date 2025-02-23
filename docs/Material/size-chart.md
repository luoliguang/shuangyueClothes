## 马甲尺码表
<SizeTable
 title="马甲尺码表"
 :styles="MaJiaStyles"
 :adult-data="MaJiaAdultData"
 :children-data="MaJiaChildrenData"
 :adult-columns="adultColumns"
 :children-columns="childrenColumns"
/>
<!-- <img src='/else/尺码表/马甲风衣.png'> -->

## 风衣尺码表
<SizeTable
 title="风衣尺码表"
 :styles="FengYiStyles"
 :adult-data="FengYiAdultData"
 :children-data="FengYiChildrenData"
 :adult-columns="adultColumns"
 :children-columns="childrenColumns"
/>
<!-- <img src='/else/尺码表/马甲风衣.png'> -->

## 篮球服套装尺码表
<SizeTable
 title="篮球服套装尺码表"
 :styles="BasketBallStyles"
 :adult-data="BasketBallAdultData"
 :children-data="BasketBallChildrenData"
 :adult-columns="adultColumns"
 :children-columns="childrenColumns"
/>
<!-- <img src='/else/尺码表/篮球服套装.png'> -->

## 卫衣系列尺码表
<SizeTable
 title="卫衣系列尺码表"
 :styles="SweaterStyles"
 :adult-data="SweaterAdultData"
 :children-data="SweaterChildrenData"
 :adult-columns="adultColumns"
 :children-columns="childrenColumns"
/>
<!-- <img src='/else/尺码表/卫衣系列.png'> -->

## 衬衫系列尺码表
<SizeTable
 title="衬衫系列"
 :styles="ShirtStyles"
 :adult-data="ShirtAdultData"
 :children-data="ShirtChildrenData"
 :adult-columns="adultColumns"
 :children-columns="childrenColumns"
/>
<!-- <img src='/else/尺码表/衬衫系列.png'> -->

## 短裤尺码表
<SizeTable
 title="短裤尺码表"
 :styles="ShortsStyles"
 :adult-data="ShortsAdultData"
 :children-data="ShortsChildrenData"
 :adult-columns="ShortsadultColumns"
 :children-columns="ShortschildrenColumns"
/>
<!-- <img src='/else/尺码表/短裤.png'> -->

## 短袖系列尺码表
<SizeTable
 title="短袖系列尺码表"
 :styles="ShortSleeveSeriesStyles"
 :adult-data="ShortSleeveSeriesAdultData"
 :children-data="ShortSleeveSeriesChildrenData"
 :adult-columns="adultColumns"
 :children-columns="childrenColumns"
/>
<!-- <img src='/else/尺码表/短袖系列.png'> -->

## 长裤尺码表
<SizeTable
 title="长裤尺码表"
 :styles="TrousersStyles"
 :adult-data="TrousersAdultData"
 :children-data="TrousersChildrenData"
 :adult-columns="TrousersadultColumns"
 :children-columns="TrouserschildrenColumns"
/>
<!-- <img src='/else/尺码表/长裤.png'> -->



<script setup>

import { 
  adultColumns,
  childrenColumns,
  MaJia,
  FengYi,
  BasketBall,
  Sweater,
  Shirt,
  Shorts,
  ShortSleeveSeries,
  Trousers
} from '../components/data/SizeChart.js'

//马甲
const MaJiaAdultData = MaJia.adultData
const MaJiaChildrenData = MaJia.childrenData
const MaJiaStyles = MaJia.styles
//风衣
const FengYiAdultData = FengYi.adultData
const FengYiChildrenData = FengYi.childrenData
const FengYiStyles = FengYi.styles
//篮球服套装
const BasketBallAdultData = BasketBall.adultData
const BasketBallChildrenData = BasketBall.childrenData
const BasketBallStyles = BasketBall.styles
//卫衣系列
const SweaterAdultData = Sweater.adultData
const SweaterChildrenData = Sweater.childrenData
const SweaterStyles = Sweater.styles
//衬衫
const ShirtAdultData = Shirt.adultData
const ShirtChildrenData = Shirt.childrenData
const ShirtStyles = Shirt.styles
//短裤
const ShortsAdultData = Shorts.adultData
const ShortsChildrenData = Shorts.childrenData
const ShortsStyles = Shorts.styles
const ShortsadultColumns = Shorts.adultColumns
const ShortschildrenColumns = Shorts.childrenColumns
//短袖系列
const ShortSleeveSeriesAdultData = ShortSleeveSeries.adultData
const ShortSleeveSeriesChildrenData = ShortSleeveSeries.childrenData
const ShortSleeveSeriesStyles = ShortSleeveSeries.styles
//长裤
const TrousersAdultData = Trousers.adultData
const TrousersChildrenData = Trousers.childrenData
const TrousersStyles = Trousers.styles
const TrousersadultColumns = Trousers.adultColumns
const TrouserschildrenColumns = Trousers.childrenColumns




</script>

<style scoped>

img {
  text-align: center;
  border-radius:30px;
}
</style>