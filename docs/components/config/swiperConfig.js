/**
 * Swiper 3D轮播图配置 (用于 Swiper.vue 组件)
 * 实现3D覆盖流效果的轮播
 */
export const swiperConfig = {
  effect: 'coverflow',          // 使用3D覆盖流效果
  grabCursor: true,             // 鼠标悬停时显示抓手光标
  loop: true,                   // 循环播放
  centeredSlides: true,         // 居中显示当前slide
  slidesPerView: 'auto',        // 自动计算每页显示的slide数量
  initialSlide: 1,              // 初始显示第2张slide
  
  // 自动播放配置
  autoplay: {
    delay: 3000,                // 自动播放间隔时间(ms)
    disableOnInteraction: false,// 用户操作后不停止自动播放
    pauseOnMouseEnter: true     // 鼠标悬停时暂停自动播放
  },

  // 3D覆盖流效果的具体配置
  coverflowEffect: {
    rotate: 25,                 // slide做3D旋转时Y轴的旋转角度
    stretch: 0,                 // slide之间的拉伸值
    depth: 150,                 // slide的位置深度
    modifier: 1,                // 效果倍数
    slideShadows: true,         // 开启slide阴影
  },

  // 分页器配置
  pagination: {
    clickable: true,            // 分页器可点击
    dynamicBullets: true        // 动态分页器(当页数较多时优化显示)
  }
}

/**
 * 图片查看器配置 (用于 SwiperZoom.vue 组件)
 * 实现图片放大查看功能
 */
export const swiperZoomConfig = {
  zoom: true,                   // 开启缩放功能
  loop: true,                   // 循环播放
  navigation: true,             // 显示上一页/下一页按钮
  
  // 分页器配置
  pagination: {
    type: 'fraction',           // 分数形式显示页码(如: 1/4)
    clickable: true,            // 分页器可点击
  },
  
  slidesPerView: 1,             // 同时显示1张图片
  spaceBetween: 30              // 图片之间的间距(px)
} 