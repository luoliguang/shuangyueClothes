---
layout: home
---

<SearchBox 
  v-model="searchQuery"
  placeholder="搜索视频素材..."
/>

<div class="video-gallery">
  <div v-if="filteredVideos.length === 0" class="no-results">没有找到相关视频...</div>
  <div v-else class="video-list">
    <div v-for="video in filteredVideos" :key="video.id" class="video-card">
      <h4>{{ video.title }}</h4>
      <video controls :src="video.url" class="video-player"></video>
      <p>{{ video.description }}</p>
    </div>
  </div>
</div>

<script setup>
import { ref, computed } from 'vue';
import SearchBox from '../components/common/SearchBox.vue'; // 根据实际路径调整
import videosMaterial from '../components/data/videos.js'; // 确保路径正确并导入数据

const searchQuery = ref('');

// 优化后的视频搜索
const filteredVideos = computed(() => {
  if (!searchQuery.value) {
    return videosMaterial; // 直接返回导入的数据
  }
  
  const queries = searchQuery.value.toLowerCase().trim().split(/\s+/); // 拆分为多个关键词

  return videosMaterial.filter(video => {
    const titleMatch = queries.every(query => video.title.toLowerCase().includes(query));
    const descriptionMatch = queries.every(query => video.description.toLowerCase().includes(query));
    
    return titleMatch || descriptionMatch; // 只要标题或描述中有一个匹配即可
  });
});
</script>


<style scoped>
:root {
  --background-color: #f9f9f9;
  --card-background: white;
  --text-color: #333;
  --text-secondary: #666;
  --card-shadow: rgba(0, 0, 0, 0.1);
}

@media (prefers-color-scheme: dark) {
  :root {
    --background-color: #1e1e1e;
    --card-background: #2a2a2a;
    --text-color: #f9f9f9;
    --text-secondary: #bbb;
    --card-shadow: rgba(255, 255, 255, 0.1);
  }
}

.video-gallery {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: var(--background-color);
}

.video-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 30px;
  width: 100%;
}

.video-card {
  background-color: var(--card-background);
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 4px 20px var(--card-shadow);
  transition: transform 0.3s, box-shadow 0.3s;
}

.video-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
}

.video-player {
  width: 100%;
  height: auto;
  border-radius: 5px;
}

.no-results {
  color: var(--text-secondary);
  font-size: 18px;
}

h4 {
  margin: 0 auto 10px 0 !important;
  text-align: center;
}

/* 响应式设计 */
@media (max-width: 600px) {
  .video-card {
    padding: 10px; /* 在小屏幕上减少内边距 */
  }

  .video-list {
    gap: 20px; /* 减少卡片之间的间距 */
  }

  .no-results {
    font-size: 16px; /* 调整无结果提示的字体大小 */
  }
}
</style>
