import DefaultTheme from 'vitepress/theme'
import components from '../../components'
import Theme from "vitepress/theme"
import "./vars.css";
import "./style.css";
import "vitepress-markdown-timeline/dist/theme/index.css"; // 时间线样式
import VueLazyload from 'vue-lazyload'; // 懒加载
import { h } from 'vue'
import { NuLazyTeleportRiveCanvas } from '@nolebase/ui-rive-canvas'

// 添加控制台欢迎信息
const welcomeMessage = `
%c欢迎来到双月服饰！
鄙人纯前端小白，如果你是一名后端大佬，
那么我有好多的东西向你请教，还望不吝赐教。
📧 联系我：giluo@vip.qq.com
🌈 让我们一起实现更好的网站！`;
const messageStyles = [
  'background: linear-gradient(to right, #41b883, #42d392)',
  'color: white',
  'font-size: 14px',
  'font-weight: bold',
  'line-height: 1.5',
  'text-shadow: 1px 1px 1px rgba(0,0,0,0.2)',
  'padding: 10px',
  'border-radius: 4px',
].join(';')

// 在客户端环境下输出欢迎信息
if (typeof window !== 'undefined') {
  console.log(welcomeMessage, messageStyles)
  
  // 添加一个性能提示
  console.log(
    '%c🚀 页面加载完成！',
    'background: #4CAF50; color: white; font-size: 12px; padding: 4px; border-radius: 2px;'
  )
}

export default {
  ...DefaultTheme,
  ...Theme, // 继承原有主题
  enhanceApp({ app, router, siteData }) {
    // 调用原主题的 enhanceApp 方法
    if (Theme.enhanceApp) {
      Theme.enhanceApp({ app, router, siteData });
    }
    // 全局注册组件
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component);
    });
    // 仅在客户端环境下初始化 VueLazyload
    if (typeof window !== 'undefined' && !import.meta.env.SSR) {
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
    }
  },

  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-top': () => [h(NuLazyTeleportRiveCanvas)]
    })
  }
}