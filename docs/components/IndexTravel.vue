<template>
<div class='brief'>
  <div>
    <h1>每一段旅程,都有每一段旅程的意义...</h1>
  </div>
  <div>
    <img :class="['animated-element-left',{animateLeft:animatedElements.left.animate}]" 
          src='https://bu.dusays.com/2025/01/06/677b7d92665b6.png'>
    <div :class="['animated-element-right',{animateRight:animatedElements.right.animate}]" >
      <h3>一张还算有意义的照片</h3>
      <p>2025.1.1,跨年的特殊日子我们突破了自我。登顶这1298m的罗浮山。想来过程也是极其艰难，惊喜和意外全然不断。但幸好也是登上了。旅途更珍贵的，不应该想着结果，而是能够更深刻体会到的应该是旅途的意义。</p>
    </div>
  </div>
  <div>
    <div :class="['animated-element-left',{animateLeft:animatedElements.left.animate}]"  >
      <h3>小小罗浮山轻松拿捏</h3>
      <p>无意间拍到这样的站位，这照片显示的方式。在摄影上的专业名词应该叫“剪影”。我的意思是，生活永远是不确定性的，你永远也不会知道下一步会变成什么样子，亦或能散发出怎样的色彩。永远不要停止努力，你现在所学习到的事物在未来的某一刻一定会给你回馈。永远别停止前行。这才是你首当其冲需要做的事情。</p>
    </div>
    <img :class="['animated-element-right',{animateRight:animatedElements.right.animate}]"
          src='https://bu.dusays.com/2025/01/05/67795dd0deda6.jpg'>
  </div>
</div>
</template>

<script>
import { ref, onMounted, onUnmounted, watch } from 'vue'

export default {
  setup() {
    const animatedElements = ref({
      left: {
        element: null,
        animate: false,
      },
      right: {
        element: null,
        animate: false,
      },
    });

    onMounted(() => {
      animatedElements.value.left.element = document.querySelector(".animated-element-left");
      animatedElements.value.right.element = document.querySelector(".animated-element-right");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if (entry.target === animatedElements.value.left.element) {
                animatedElements.value.left.animate = true; // 进入视口
              } else if (entry.target === animatedElements.value.right.element) {
                animatedElements.value.right.animate = true; // 进入视口
              }
            } else {
              if (entry.target === animatedElements.value.left.element) {
                // animatedElements.value.left.animate = false; // 离开视口
              } else if (entry.target === animatedElements.value.right.element) {
                // animatedElements.value.right.animate = false; // 离开视口
              }
            }
          });
        },
        {
          threshold: 0.1, // 元素进入视口 10% 时触发
        }
      );

      observer.observe(animatedElements.value.left.element); // 继续观察
      observer.observe(animatedElements.value.right.element); // 继续观察

      onUnmounted(() => {
        observer.disconnect();
      });
    });

    // 监视动画状态的变化
    watch(() => animatedElements.value.left.animate, (newValue) => {
      if (newValue) {
        animatedElements.value.left.element.classList.add('animateLeft');
        animatedElements.value.left.element.classList.remove('leave');
      } else {
        animatedElements.value.left.element.classList.remove('animateLeft');
        animatedElements.value.left.element.classList.add('leave');
      }
    });

    watch(() => animatedElements.value.right.animate, (newValue) => {
      if (newValue) {
        animatedElements.value.right.element.classList.add('animateRight');
        animatedElements.value.right.element.classList.remove('leave');
      } else {
        animatedElements.value.right.element.classList.remove('animateRight');
        animatedElements.value.right.element.classList.add('leave');
      }
    });

    return { animatedElements }
  }
}
</script>

<style>
/* 首页介绍页面 */
.brief{
  width:100%;
  display: flex;
  flex-wrap: wrap;
}
.brief div:nth-child(1){
  flex-basis: 100%;
  margin-top: 20px;
}
.brief div:nth-child(1) h1{
  color:transparent;
  background-image: -webkit-linear-gradient(120deg, #bd34fe, #41d1ff);
  background-clip: text;
}
.brief div:nth-child(2),
.brief div:nth-child(3){
  margin-top: 20px;
  width:100%;
  display:flex;
}
.brief div:nth-child(2) img,
.brief div:nth-child(3) img{
  width:70%;
  border-radius:5px;
  flex-grow:2;
}
.brief div:nth-child(2) div{
  display:flex;
  flex-direction: column;
  justify-content: center;
  margin-left:20px;
}
.brief div:nth-child(3) div{
  display:flex;
  flex-direction: column;
  justify-content: center;
  margin-right:20px;
}
.brief div:nth-child(2) div h3,
.brief div:nth-child(3) div h3{
  margin:0;
}

/* 左往右 */
.animated-element-left {
  opacity: 0;
  transform: translateX(-40px);
  transition: all 0.5s ease-out; /* 确保平滑 */
}

.animated-element-left.animateLeft {
  opacity: 1;
  transform: translateX(0px);
  animation: fadeInUpLeft 1s ease-out forwards;
}

@keyframes fadeInUpLeft {
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* 右往左 */
.animated-element-right {
  opacity: 0;
  transform: translateX(40px);
  transition: all 0.5s ease-out; /* 确保平滑 */
}

.animated-element-right.animateRight {
  opacity: 1;
  transform: translateX(0px);
  animation: fadeInUpRight 1s ease-out forwards;
}

@keyframes fadeInUpRight {
  from {
    opacity: 0;
    transform: translateX(40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* 新增离开动画样式 */
.animated-element-left.leave,
.animated-element-right.leave {
  transition: all .5s ease-out; /* 确保平滑 */
}
</style>