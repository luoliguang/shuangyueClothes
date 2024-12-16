## 前言
> 此篇文章主要用于解答客户的问题。  
> 对于衣服是否可以做，可以具体询问客服。  
> 一般笼统的问题都会存放在这里。
## 文档贡献
> 文档并非一个人完成，而是集满了许多人的智慧。每个文档贡献者的右上角都会标识对应的名字缩写，用字母代替。

<!-- 

 关于衣服

 -->
## 衣服系列
### 棒球服用什么扣子？默认几颗？<Badge type="tip" text="文叔" />
> **四合扣**，一般5-6颗，一般做5颗。
### 四合扣是怎么样的？<Badge type="tip" text="文叔" />
> 外面胶的，里面铁的。

<ReferenceData :ImageSrc="Images.SiHeKou.imgPath" :alias="Images.SiHeKou.imgAlias" />

### POLO的扣子默认有几个？
> 3个。
### 怎么理解“插肩款”
<ReferenceData :ImageSrc="Images.ChaJian.imgPath" :alias="Images.ChaJian.imgAlias" />

> 如图。因为正常情况下肩膀和袖子是两部分，如果不做`插肩款`，这个线条是很难对齐的。一般在线条、图案在袖子和肩膀上的时候就可以选择做`插肩款`，根据实际情况而定。

### 为什么做不到纯黑色？<Badge type="tip" text="桃子姐" />
> 单色黑印出来不是纯黑，容易出现横杠。四色黑油墨过多容易渗透，不容易干的情况下容易染到其他地方，所以我们的黑色是没有拉满的。

### 为什么做不了亮色？<Badge type="tip" text="桃子姐" />
> 在同一个文件的情况下，不同厂家的打印机和墨水和排版的软件曲线不一样，出来的效果也是不一样的，正如我们的颜色别家厂也很难做出来。并且`rgb`的一个颜色色域是很广的，我们常用看到的手机显示屏还有电脑显示屏都是`rgb`  。  
> 不管是多么好的机器和多么好的墨水，都无法做到跟显示屏和手机看到的颜色是一样的。
### 水蜜桃、复合、T400有什么区别？<Badge type="tip" text="文叔" />
> 除了价格不一样，最要就是手感。水蜜桃会硬一些；复合软一点；T400摸起来软一点。一般摸到实物才会有深刻的感受。
### 为什么我们的衣服上面会有白色的点点？<Badge type="tip" text="文叔" />
> 因为我们主要是印裁片，裁片是白色的，有时候没有渲染完全，会出现这样的情况，点点是正常，不严重就行。
### 衣服的布料油位为什么这么大？<Badge type="tip" text="文叔" />
> 激光烧花烧出来会有一点点气味的，但是不会有这么大.
### 英式棒球服、美式棒球服区别<Badge type="tip" text="芹姐" />
> 主要看领子部分
<ReferenceData :ImageSrc="Images.BBaseball.imgPath" :alias="Images.BBaseball.imgAlias" />
<ReferenceData :ImageSrc="Images.UsaNaseball.imgPath" :alias="Images.UsaNaseball.imgAlias" />



<!-- 

 关于出货

 -->
## 发货系列
### 打样什么时候可以做好？
> 正常情况第2天。
### 大货什么时候可以做好？
> 正常情况3天内，根据实际情况而定。
### 默认发什么快递？<Badge type="tip" text="军少" />
> 包中通。 有顺丰、德邦、壹米滴答、货拉拉、跨越、京东(客户约)。

<!-- 

 其它

 -->

## 其它
### 箱子规格是多少？
> 60CM X 35CM X 40CM
<ReferenceData :ImageSrc="Images.BoxSpecification.imgPath" :alias="Images.BoxSpecification.imgAlias" />

### 班期默认尺寸
> 4号班旗 144CM X 96CM 默认单面印制

<script setup>

const Images = {
  SiHeKou: {
    imgPath: 'https://bu.dusays.com/2024/12/17/676057610c39f.png',
    imgAlias: '四合扣',
  },
  ChaJian: {
    imgPath: 'https://bu.dusays.com/2024/12/17/67605760d5425.png',
    imgAlias: '插肩款',
  },
  BoxSpecification: {
    imgPath: 'https://bu.dusays.com/2024/12/17/67605761b938d.png',
    imgAlias: '箱子规格',
  },
  BBaseball: {
    imgPath: 'https://bu.dusays.com/2024/12/17/676059757ef48.png',
    imgAlias: '英式棒球服',
  },
  UsaNaseball: {
    imgPath: 'https://bu.dusays.com/2024/12/17/676059759025d.png',
    imgAlias: '美式棒球服',
  },
};


</script>
<style scope>
:root{
  --vp-badge-tip-border: transparent;
  --vp-badge-tip-text: rgb(50,229,0);
  --vp-badge-tip-bg: var(--vp-c-brand-soft);
}

img{
  border-radius:10px;
  margin: 10px 0;
}

sup{
  color: #00e500;
}
</style>