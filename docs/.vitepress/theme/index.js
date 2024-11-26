import DefaultTheme from 'vitepress/theme'
import components from '../../components'
import Theme from "vitepress/theme"
import "./vars.css";
// import "./styles/style.scss";
import "vitepress-markdown-timeline/dist/theme/index.css"; // 时间线样式

/*
export default {
  ...DefaultTheme,
  ...Theme, //继承原有主题
  enhanceApp(ctx) {
    //确保原有的主题enhanceApp功能被调用
    if (Theme.enhanceApp) {
      Theme.enhanceApp(ctx);
    }
    Object.entries(components).forEach(([name, component]) => {
      ctx.app.component(name, component);
    })
  }
}
*/
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
  },
};


/*
// 批量注册所有組件
Object.entries(components).forEach(([name, component]) => {
  app.component(name, component);
});
*/