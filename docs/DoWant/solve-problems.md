---
layout: doc
---

# 记录问题
<br />

## 2024年

::: timeline 2024-11-19 不知何时开始
> 其实已经忘记是什么时候开始想要做这个东西了,或许很久之前就有💡.只是迟迟没有去实现,但想到一点东西是,如果我一直这样拖下去的话,我永远也不可能编辑出这样的东西.**`想,都是问题;做,才是答案`**
:::

::: timeline 2024-11-21
### vitepress实现团队功能
- 想哭，搭建了两天了却还不知道这个是什么原因，好在功夫不在有心人，我去看了下人家的案例，又看了下源代码，居然是这样子的意思！终于，今天将团队功能搭建好了，不得不佩服我解决问题的能力。原来这个就是`Vue`的语法，怪我当时学习`Vue`甚少（好吧其实是学不懂），懂得也少，看来以后还是需要多了解了解。感谢这位优秀的学长[vitepress实现团队功能](https://dlvug.github.io/)，汗颜呐，果然优秀的人在哪里都很厉害。
:::

::: timeline 2024-11-22
### 自定义全局组件
- [如何使用CodeGroup 自定义全局组件](https://www.cnblogs.com/Megasu/p/16495251.html)
> 这里只能进行全局单组件的定义，有点麻烦，但我想可以多注册几个全局的组件。尽管现在能够实现这样的功能，实话而言，我还是知其然不知其所以然。
:::

::: timeline 2024-11-23
- 在我完成以上的东西后有一个一个新的想法，我是否可以将我解决问题的过程记录下来呢？答案是肯定的，现在市面上可以记录笔记的软件这么多，我也开了好多的会员，但我想应该是有一个形式在里面的。我想要更直观一点。便想到了时间线这个东西。嘿嘿，还是和我的想法一样，如现在一样。🙏谢谢[马珩](https://github.com/HanochMa/vitepress-markdown-timeline)
:::

::: timeline 2024-11-24
- 真的有点好笑,今天居然睡不着,昨晚两点多才睡,今天七点多就起来了,我不会猝死了吧?不过能解决问题真的是让人很满足的.可能是因为昨天关于`Swiper`我还不知道如何去使用吧,后面学习了一下,才发现原来是因为我的细节上出现了问题.我明明已经将组件弄好了,想着为什么没有显示,原来是因为我没有将`components`里面的组件导出来,所以一直没有起作用.🤦‍♂️感谢[我的ai老师](https://chatgpt.com/)
![ai老师帮我解决问题](/else/problems/ai组件.jpg)
- 买菜的时候居然忘记了买大蒜!我真的😅.
### 在Markdown中使用锚点功能
  ```html
  ## 标题1 <span id="JumpTo-name"></span>  

  可以通过以下链接直接跳转到`标题1`  

  [直接跳转到标题 1](#JumpTo-name)
  ```
### 修改生成的目录标题
```javascript
export default {
  themeConfig: {
    outline: {
      level: [2, 3], // 显示的标题层级，默认是 [2, 3]
      label: '目录', // 自定义 "On This Page" 的标题
    },
  },
};
```
- 无语，我左边的导航栏不见了！！什么情况！
:::

::: timeline 24-11-25
- 解决了在`markdown`文档中插入视频不能播放的问题。[教程链接](https://gist.github.com/798886844/b2606cc6d163943c65664e067a9b2125)
- `markdown`折叠功能在html去进行实现
```html
<details>

<summary>demo</summary>

</details>
```
### Github 生成SSH秘钥（详细教程）<sup>[教程](https://www.cnblogs.com/yuqiliu/p/12551258.html)</sup>
- 此情况在自身使用了`vpn`的情况下，因为不能远程提交到仓库的解决办法

:::

::: timeline 24-11-26 

昨晚因为解决bug太晚的原因，就睡觉了，时间差不多是在两点多。除了在读书时候自学东西弄到这么久以外，在上班期间还是蛮少见的。昨晚就是一个例子，但幸好在于，我成功的部署了我的网站。问题太多了，我已经不知道如何来表达。
### Git推送到仓库失败
1. [解决Git连接失败：Failed to connect to github.com port 443 after 21090 ms: Couldn‘t connect to server ‍](https://cloud.tencent.com/developer/article/2405656)   
学到：这是在使用`git`进行远程推送时会出现的错误，因为我使用VPN的原因，所以有时候推送不能正确去找到我的端口，通过这样的设置解决这个问题.  

### Markdown 使用 <sup>上</sup> <sub>下</sub> 标
[上下标写法](https://blog.csdn.net/lewky_liu/article/details/84980336) [表格写法](https://markdown.com.cn/extended-syntax/tables.html)
|标签|写法|效果|
|:----:|:----:|:----:|
|上标|`罗<sup>洋洋</sup>`|罗<sup>洋洋</sup>|
|下表|`罗<sub>洋洋</sub>`|罗<sub>洋洋</sub>|
### [如何部署Vercel](https://docs.tangly1024.com/article/vercel-domain#c7b213564fdb40ffb43b51ae31c08963)
> 主要是网站托管服务，相当于你有一个静态网站，然后给`Vercel`它就会给你部署并且让很多人可以访问。
### [cloudflare域名管理](https://www.cloudflare.com/zh-cn/learning/what-is-cloudflare/)
> CloudFlare具有Worker.js、全球免费CDN、SSL证书，网站DDoS防火墙等特性。反正我不是很了解。汗颜呐🤦‍♂️

### 使用内部链接进行通信
> [内部跳转链接教程](https://vitepress.dev/zh/guide/markdown#internal-links)

### VitePress-03-标题锚点的使用与文档内部链接跳转
> 解决办法：[使用锚点进行跳转](https://blog.csdn.net/qq_39505245/article/details/135869786?fromshare=blogdetail&sharetype=blogdetail&sharerId=135869786&sharerefer=PC&sharesource=nuoyangyang&sharefrom=from_link)

::: 

::: timeline 24-11-27
> 我真的服了自己了，一直使用框架习惯了，然后忘记了创造自己的东西，结果就是一直报错。在要上班的时候，突然就可以了。原因也找到了！阿西吧！论`deadline`的重要性。
:::

::: timeline 24-11-28
> 最近这几天一直在筹备这个网站，其实也算是有几个好处的，一来是可以温故而知新，因为以前有学习这个方面的东西，但最近实践起来显得很茫然，很多东西都是不知道怎么做的（当然这和以前没有学好有很大的关系）。第二呢就是能够给自己一个实时的反馈，我喜欢这样的学习。

:::

::: timeline 24-11-29
在`swiper`组件中一定的`autoplay`参数，不能这样写,这样是没有效果的。
```javascript
:autoplay='true'
```
应该这样写
```javascript
:autoplay={
  delay:3000,
  disableOnInteraction: false,
}
```
它接收的应该是一个对象

:::

::: timeline 24-12-01
### 封装
> 不得不感叹现在AI技术的成熟呀，不过，**工欲善其事，必先利其器。** 我在刚兴起时就将其视为我的老师了。😄

> 所谓封装，就是将重复的事情简单化。比如现在我有这样一堆数据。
```javascript
// //130克小方格小方格速干POLO
const xfgTshirt = [
  '/else/实物图/clothes/130克小方格圆领/1.jpg',
  '/else/实物图/clothes/130克小方格圆领/2.jpg',
  '/else/实物图/clothes/130克小方格圆领/3.jpg',
  '/else/实物图/clothes/130克小方格圆领/4.jpg',
  '/else/实物图/clothes/130克小方格圆领/5.jpg',
  '/else/实物图/clothes/130克小方格圆领/6.jpg',
  '/else/实物图/clothes/130克小方格圆领/7.jpg',
];
```
现在因为这些数据太过于重复，那末我就可以找到其中的规律，然后用函数进行封装，如下：一个参数是基础的路径，第二个是有多少张图片：
```javascript
function genarateImagePaths(basePath, count) {
  const imagePaths = []
  for (let i = 1; i <= count; i++) {
    imagePaths.push(`${basePath}/${i}.jpg`)
  }
  return imagePaths 
}
```
最后再用对象存起来
```javascript
const products = {
  xfgTshirt: genarateImagePaths('/else/实物图/clothes/130克小方格速干圆领', 6),
}
```
然后再去我需要的文件里面进行引入、调用就可以了。实现由复杂到简单的步骤。


:::


::: timeline 24-12-08
### [尺码表](/Material/size-chart.md)界面重构
> 新增尺码表布局方式，用表格的方式呈现。
:::

::: timeline 24-12-09
### 新增图片懒加载功能
> 因为静态图片越来越多的原因，很多时候加载图片时就会很慢，打开网站的时候也会很忙。所以就会想效率应该如何提升。
1. 安装`vue-lazyload`
```javascript
npm install vue-lazyload
```
2. 在主题文件配置引入
```javascript
// code... //
import Theme from "vitepress/theme"

    // 配置懒加载
    app.use(VueLazyload, {
      loading: 1.3,
      error: '/loading/error.gif', //加载失败
      loadingImage: '/loading/loading.gif', //加载中
      attempt: 1,
      //观察者选项
      observer: true,
      observerOptions: {
        rootMargin: '0px',
        threshold: 0.1,
      },
    });
// code ... //
```
3. 在你的组件中修改`src`属性为`v-lazy`
```javascript
//修改前
    <swiper-slide class="zoom-slide" v-for="(imgPath, index) in imagePaths" :key="index" >
      <div class="swiper-zoom-container">
        <img class="swiper-room-img" 
          :src="imgPath" 
          alt="Image" />
      </div>
    </swiper-slide>
// 将:src 属性修改为 v-lazy
    <swiper-slide class="zoom-slide" v-for="(imgPath, index) in imagePaths" :key="index" >
      <div class="swiper-zoom-container">
        <img class="swiper-room-img" 
          v-lazy="imgPath" 
          alt="Image" />
      </div>
    </swiper-slide>
```
### Vue 服务器渲染（SSR）出现错误
> 当然，我在完成以上操作时遇到了错误，因为我使用了`Swiper`组件进行操作,所以得到的结果是：
```javascript
✖ rendering pages...
build error:
Cannot read properties of undefined (reading 'getSSRProps')
TypeError: Cannot read properties of undefined (reading 'getSSRProps')
```
> 在开始的时候我以为是我的theme/index.js文件出现了问题。后面一想会不会是`Swiper`没有支持`Vue3`的`v-lazy`属性，后面一测试果真如此。  
> 找到这个原因之后，解决这个问题的办法就是更改`Swiper`的引入方式。
将静态导入更改为动态导入后就可以成功了。

```javascript
import { Swiper, SwiperSlide } from 'swiper/vue';
```

```javascript
// 改用动态导入
import { defineAsyncComponent } from 'vue'
const Swiper = defineAsyncComponent(() => import('swiper/vue').then(m => m.Swiper))
const SwiperSlide = defineAsyncComponent(() => import('swiper/vue').then(m => m.SwiperSlide))
```

:::

::: timeline 24-12-22
### 新增了一些功能
> 因为静态图片越来越多的原因，很多时候加载图片时就会很慢，打开网站的时候也会很忙。所以就会想效率应该如何提升。
1. 调整了首页展示图片的css样式，使其在移动端上显示更美观。用了响应式布局。`@media`
2. 新增所有图片[搜索功能](/Material/all-material.md)
3. 新增首页按钮
:::

::: timeline 24-12-23
### 在`所有素材中`新增回到顶部功能
1. 在`AllMaterial.vue`中新增`showBackToTop`变量，用于控制回到顶部按钮的显示。
```javascript
    <button
      v-show="showBackToTop"
      class="back-to-top"
      @click="scrollToTop"
      title="回到顶部"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path fill="none" d="M0 0h24v24H0z"/>
        <path d="M12 4l8 8h-6v8h-4v-8H4z" fill="currentColor"/>
      </svg>
    </button>
```
2. 在`AllMaterial.vue`中新增`scrollToTop`方法，用于滚动到顶部。
```javascript
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
```
3. 在`AllMaterial.vue`中新增`handleScroll`方法，用于监听滚动事件，并根据滚动位置显示或隐藏回到顶部按钮。
```javascript
const handleScroll = () => {
  showBackToTop.value = window.scrollY > 300
}
```
4. 组件挂载时添加滚动监听
```javascript
window.addEventListener('scroll', handleScroll)
```
5. 组件卸载时移除滚动监听
```javascript
window.removeEventListener('scroll', handleScroll)
```
:::

::: timeline 24-12-24
### 将图片获取方式重构为API获取
:::

::: timeline 24-12-30
### 解决部署到Vercel后不能访问CDN图片
因为在`Vercel`部署的环境中，代理配置（在`config.mts`中的配置）不会生效，因为`Vercel`是静态托管服务。所以需要将文件写到`vercel.json`中。解决办法如下：
1. 在`vercel.json`中添加一个重写规则，将`/yy-img`路径重写为`https://bu.dusays.com`。
```json
{
  "rewrites": [
    { 
    "source": "/yy-img/:path*", 
    "destination": "https://bu.dusays.com/:path*" }
  ],
  "headers": [
    {
      "source": "/yy-img/(.*)",
      "headers": [
        // 参考：https://vercel.com/guides/how-to-enable-cors#enabling-cors-using%C2%A0vercel.json
      ]
    }
  ]
}
```
:::

## 2025年
::: timeline 25-1-24
1. 新增网站客服插件；
2. 修复api请求图片数量bug；
3. 调整主页图片显示尺寸比例。
:::

::: timeline 25-2-2
1. 动画图标icon设置为动态,[参考链接](https://nolebase-integrations.ayaka.io/pages/zh-CN/ui/lazy-teleport-rive-canvas/)；
2. 新增vite.config.js解决不能识别.vue文件问题；
:::

::: timeline 25-2-11
### 解决env（环境变量）配置问题
1. 如果将环境变量放在根目录的话是不可以访问到变量的，需要放到docs文档下面。[参考链接](https://github.com/vuejs/vitepress/issues/3896)；
:::