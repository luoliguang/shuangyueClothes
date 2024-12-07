## 马甲尺码表
<SizeTable
 title="马甲尺码表"
 :styles="MaJiaStyles"
 :adult-data="MaJiaAdultData"
 :children-data="MaJiaChildrenData"
 :adult-columns="adultColumns"
 :children-columns="childrenColumns"
/>
<img src='/else/尺码表/马甲风衣.png'>

## 风衣尺码表
<img src='/else/尺码表/马甲风衣.png'>

## 篮球服套装尺码表
<img src='/else/尺码表/篮球服套装.png'>

## 卫衣系列尺码表
<img src='/else/尺码表/卫衣系列.png'>

## 衬衫系列尺码表
1. 衬衫短袖
2. 衬衫长袖
3. 衬衫五分袖
<img src='/else/尺码表/衬衫系列.png'>

## 短裤尺码表
1. 排球裤
2. 短裤
<img src='/else/尺码表/短裤.png'>

## 短袖系列尺码表
1. 圆领短袖
2. 翻领短袖
3. V领短袖
4. 假两件短袖
5. 长袖
6. ......
<img src='/else/尺码表/短袖系列.png'>

## 长裤尺码表
<img src='/else/尺码表/长裤.png'>



<script setup>

import { 
  adultColumns,
  childrenColumns,
  MaJia,
  
} from '../components/data/SizeChart.js'

//马甲
const MaJiaAdultData = MaJia.adultData
const MaJiaChildrenData = MaJia.childrenData
const MaJiaStyles = MaJia.styles

</script>

<style scoped>

img {
  text-align: center;
  border-radius:30px;
}
</style>