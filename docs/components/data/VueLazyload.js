import VueLazyload from 'vue-lazyload'

export function setupLazyload(app) {
  if (typeof window !== 'undefined') {  // 确保只在客户端执行
    const lazyloadOptions = {
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
    }
    
    app.use(VueLazyload, lazyloadOptions)
  }
}