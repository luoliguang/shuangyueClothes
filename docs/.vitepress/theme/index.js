import DefaultTheme from 'vitepress/theme'
import components from '../../components'
import Theme from "vitepress/theme"
import "./vars.css";
// import "./styles/style.scss";
import "vitepress-markdown-timeline/dist/theme/index.css"; // 时间线样式
// import VueLazyload from 'vue-lazyload'; // 懒加载
import { setupLazyload } from '../../components/data/VueLazyload'

export default {
  ...DefaultTheme,
  ...Theme, // 继承原有主题
  enhanceApp({ app, router, siteData }) {
    // 调用原主题的 enhanceApp 方法
    if (Theme.enhanceApp) {
      Theme.enhanceApp({ app, router, siteData });
    }

    // // 配置懒加载
    // app.use(VueLazyload, {
    //   loading: 1.3,
    //   error: '/loading/error.gif', //加载失败
    //   loadingImage: '/loading/loading.gif', //加载中
    //   attempt: 1,
    //   //观察者选项
    //   observer: true,
    //   observerOptions: {
    //     rootMargin: '0px',
    //     threshold: 0.1,
    //   },
    // });
    // 设置懒加载
    setupLazyload(app)

    // 全局注册组件
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component);
    });
  },
};