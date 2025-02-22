# 成为WEB前端大佬的必经之路
> 从免费课程白嫖过来的笔记，整理一下，方便自己复习

## **事件循环**

### **浏览器的进程模型**

浏览器一运行就会开启多个进程。如浏览器进程、网络进程、渲染进程。一个进程可以运行多个线程，线程与线程之间可以相互通信。主要为了独立，不影响到别的运行。减少了崩溃几率。在渲染进程中又着重了解了渲染主线程。

### **渲染主线程**

它真的很忙，需要它处理的任务包括但不限于：

1.  解析HTML
2.  解析CSS
3.  计算样式
4.  布局
5.  处理图层
6.  每秒把页面画 60 次
7.  执行全局 JS 代码
8.  执行事件处理函数
9.  执行计时器的回调函数
10. ......

因为有太多任务的存在，又不能让浏览器忙得不可开交，所以浏览器想了一个办法（就像人执行任务时候的四象限一样，分优先级）。所以浏览器也有一个功能：<font color="#02fd6b">**排队**</font>

## **异步**
### **浏览器执行JS输出顺序**
1.  全局
2.  微队列 -> Promise（优先级最高）
3.  延时队列 -> 最低
4.  交互队列 -> 高
## **Promise**

解释：立即将一个函数放入微队列

```javascript
Promise.resolve().then(fn) 
```

### **如何理解 JS 的异步？（浏览器永不阻塞）**

- 单线程是异步产生的原因；
- 事件循环是异步实现的方式；

JS是一门单线程的语言，这是因为它运行在浏览器的渲染主线程中，而渲染主线程只有一个。并且渲染主线程承载着诸多的工作，渲染页面、执行JS都在其中运行。

如果使用同步的方式，就极有可能导致主线程产生阻塞，从而导致消息对列中的很多其他任务无法得到执行，这样一来，一方面会导致繁忙的主线程白白的消耗时间，另一方面导致页面无法及时更新，给用户造成卡死现象。所以浏览器采用异步的方式来避免。具体做法是当某些任务发生时，比如计时器、网络、事件监听，主线程将任务交给其他线程去处理，自身立即结束任务的执行，转而执行后续代码。当其他线程完成时，将事先传递的回调函数包装成任务，加入到消息队列的末尾排队，等待主线程调度执行。  

在这种异步模式下，浏览器永不阻塞，从而最大限度的保证了单线程的流畅运行。

### **JS中的计时器能做到精准计时吗？为什么？**

**<font color="#02fd6b">不行，因为：</font>**

1.  计算机硬件没有原子钟，无法做到精准计时；
2.  操作系统的计时函数本身就有少量偏差 ，由于JS的计时器最终调用的是操作系统的函数，也就携带了这些偏差；
3.  按照 W3C 的标准，浏览器实现计时器时，如果嵌套层级超过5层，则会带有4毫秒的最少时间，这样在计时时间少于4毫秒时又带来了偏差；
4.  手事件循环的影响，计时器的回调函数只能在主线程空闲时运行，因此又带来了偏差。

## **JS 的事件循环**

事件循环又叫做消息循环，是浏览器渲染主线程的工作方式。

在**Chrome**的源码中，它开启一个不会结束的**for**循环，每次循环从消息队列中取出第一个任务执行，而其它线程只需要在合适的时候将任务加入对列末尾即可。

过去把消息对列简单分为宏对列和微对列。这种说法目前已无法满足复杂的浏览器环境，取而代之的是一种更加灵活多变的处理方式。

根据 W3C 官方的解释，每个任务有不同的类型，同类型的任务必须在同一个对列，不同的任务可以属于不同的对列。不同任务对列有不同的优先级，在一次事件循环中，由浏览器自行决定哪一个对列的任务。但浏览器必须有一个微对列，微对列的任务具有最高的优先级，必须优先调度执行。

## 通过Vue3重构API总结笔记
### 1. 响应式数据(ref)
- `ref` 是 Vue 3 中用于创建响应式数据的基本方法之一。它将一个普通值包装成一个响应式对象，使得该值的变化能够被 Vue 监听到，并触发视图更新。
- `ref` 的原理是通过 `Object.defineProperty` 或 `Proxy` 来实现对数据的可观测性。
- `ref` 返回的对象包含一个 `value` 属性，通过访问和修改 `value` 属性，可以实现对原始值的响应式操作。
- 在index.md中，将图片获取方式重构为API获取。
```javascript
const images = ref([]) // 创建一个响应式数组
```

### 2. 响应式数据(reactive)
- `reactive` 是 Vue 3 中用于创建响应式对象的另一种方法。它将一个普通对象转换为响应式对象，使得该对象的所有属性都具有响应性。
- `reactive` 的原理是通过 `Proxy` 来实现对对象属性的监听和响应。
- `reactive` 返回的对象是一个响应式代理对象，对代理对象的属性进行操作时，会触发视图更新。

### 3. Props传递
- 在Vue3中，Props是组件之间传递数据的一种方式。
- 在组件中，Props可以通过`defineProps`函数来定义，然后在模板中使用。
- Props的值可以通过父组件传递，也可以通过子组件传递。
- 在`AllMaterial.vue`中，新增`props`属性，用于接收父组件传递的数据。
```javascript
const props = defineProps({
  images: {
    type: Array,
    default: []
  }
})
```

### 4. 事件监听(watch)
- 在Vue3中，事件监听是通过`@event`语法糖来实现的。
- 在组件中，事件监听可以通过`@event`语法糖来实现，然后在模板中使用。
- 事件监听的值可以通过父组件传递，也可以通过子组件传递。
- 在`AllMaterial.vue`中，新增`@click`事件监听，用于接收父组件传递的数据。
```javascript
const handleClick = () => {
  console.log('点击事件')
}
```
在index.md中，新增`watch`监听，用于监听数据的变化。基本语法如下：
```javascript
const watch = (target, callback) => {
  console.log('监听数据变化')
}
```
当然，`watch`的基本语法，也可以写成
```javascript
watch(() => props.imagePaths,(newValue,oldValue) => {
  //处理新值
},{ immediate: true }) // immediate: true 表示立即执行
```
### 5. 计算属性(computed)
- 在Vue3中，计算属性是通过`computed`函数来实现的。
- 在组件中，计算属性可以通过`computed`函数来实现，然后在模板中使用。
- 计算属性的值可以通过父组件传递，也可以通过子组件传递。
- 在`AllMaterial.vue`中，新增`computed`属性，用于接收父组件传递的数据。

### 6. 生命周期钩子(onMounted)
- 在Vue3中，生命周期钩子是通过`onMounted`函数来实现的。
- 在组件中，生命周期钩子可以通过`onMounted`函数来实现，然后在模板中使用。
- 生命周期钩子的值可以通过父组件传递，也可以通过子组件传递。
- `omMounted`: 组件挂载后执行
- `onUnmounted`: 组件卸载后执行
- `onUpdated`: 组件更新后执行
- `onBeforeUpdate`: 组件更新前执行
- `onBeforeMount`: 组件挂载前执行
- `onBeforeUnmount`: 组件卸载前执行

### 7. 异步数据获取(asyncData)
如果一个数据需要变化，那么就需要使用异步数据获取。并且只能在异步函数中使用。
- async/await 处理异步操作
- 错误处理使用 try/catch
- 在`AllMaterial.vue`中，新增`asyncData`属性，用于接收父组件传递的数据。
```javascript
const asyncData = async () => {
  const images = await fetchImages()
  return { images }
}
```
### 8. 组件通信模式
- 父组件负责数据获取和管理
- 子组件通过 `props` 接收数据
- 使用本地`ref`配合`watch`处理props的变化

## 在`Vercel`部署静态网站时，当需要访问第三方的图片资源时，遇到跨域（CORS）限制。
主要通过两个部分解决：
1. `Vercel` 配置 (`vercel.json`)
```json
{
  "rewrites": [
    {
      "source": "/yy-img/:path*",
      "destination": "https://bu.dusays.com/:path*"
    }
  ],
  "headers": [
    {
      "source": "/yy-img/(.*)",
      "headers": [
        {
          "key": "Access-Control-Allow-Origin",
          "value": "*"
        },
        {
          "key": "Access-Control-Allow-Methods",
          "value": "GET,OPTIONS"
        },
        {
          "key": "Access-Control-Allow-Headers",
          "value": "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
        }
      ]
    }
  ]
}
```
1. 在`AllMaterial.vue`中，将图片路径修改为相对路径。
```javascript
const handleMaterialClick = async (material) => {
  try {
    // 将原始 URL 转换为代理 URL
    const originalUrl = material.thumbnail
    const proxyUrl = originalUrl.replace('https://bu.dusays.com', '/yy-img')
    
    const img = new Image()
    img.crossOrigin = 'anonymous'  // 关键：设置跨域属性
    
    // 图片加载处理
    await new Promise((resolve, reject) => {
      // 设置超时处理
      const timeout = setTimeout(() => {
        img.src = ''
        reject(new Error('Image load timeout'))
      }, 10000)

      // 图片加载成功处理
      img.onload = () => {
        // Canvas 处理逻辑
        // ...
      }
      
      // 图片加载失败处理
      img.onerror = (error) => {
        // ...
      }

      // 延迟设置图片源
      setTimeout(() => {
        img.src = proxyUrl
      }, 0)
    })
  } catch (error) {
    // 错误处理
  }
}
```