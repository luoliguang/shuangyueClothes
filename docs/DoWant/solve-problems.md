---
layout: doc
---

# 记录问题
<br />

## 24年11月

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
![ai老师帮我解决问题](/else/problems/ai组件.png)
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
