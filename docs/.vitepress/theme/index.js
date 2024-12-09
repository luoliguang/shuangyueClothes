import DefaultTheme from 'vitepress/theme'
import components from '../../components'
import Theme from "vitepress/theme"
import "./vars.css";
// import "./styles/style.scss";
import "vitepress-markdown-timeline/dist/theme/index.css"; // 时间线样式
// import { defineClientConfig } from '@vitepress/client';

// 动态导入 VueLazyload
const VueLazyload = import.meta.env.SSR ? {} : await import('vue-lazyload');

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
    //仅在客户端环境下初始化 VueLazyload
    if (!import.meta.env.SSR) {
      app.use(VueLazyload.default, {
        loading: 1.3,
        error: '/loading/error.gif',
        loadingImage: '/loading/loading.gif',
        attempt: 1,
        observer: true,
        observerOptions: {
          rootMargin: '0px',
          threshold: 0.1,
        }
      });
    }
  },
}