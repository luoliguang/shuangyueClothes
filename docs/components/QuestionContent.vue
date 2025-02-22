<template>
  <div class="question-content">
    <!-- 贡献者信息 -->
    <div class="contributor-info">
      <div class="avatar-wrapper" :title="question.contributor.name">
        <img 
          :src="question.contributor.avatar" 
          :alt="question.contributor.name"
          class="contributor-avatar"
          loading="lazy"
        />
        <span class="contributor-name">{{ question.contributor.name }}</span>
      </div>
    </div>

    <!-- 问题内容 -->
    <div class="question-text">
      {{ question.content }}
    </div>
    
    <!-- 问题图片 -->
    <ImageGrid v-if="question.images.length > 0" :images="question.images" />

    <!-- 问题标签 -->
    <div class="question-categories">
      <span 
        v-for="category in question.categories" 
        :key="category"
        class="category-tag"
      >
        {{ category }}
      </span>
    </div>
  </div>
</template>

<script setup>
import ImageGrid from './ImageGrid.vue';

defineProps({
  question: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
.question-categories {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
}

.category-tag {
  background-color: var(--bg-tertiary);
  color: var(--text-secondary);
  padding: 4px 8px;
  border-radius: var(--radius-sm);
  font-size: 12px;
}
</style> 