import { ref, onMounted, onUnmounted } from 'vue';

export const useScroll = () => {
  const showBackToTop = ref(false); // 创建响应式变量

  const handleScroll = () => {
    showBackToTop.value = window.scrollY > 600; // 根据滚动位置更新状态
  };

  // 组件挂载时添加滚动事件监听
  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });

  // 组件卸载时移除滚动事件监听
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });

  return { showBackToTop }; // 返回响应式变量
};