<template>
  <div class="answers-list">
    <div v-for="(answer, index) in answers" :key="index" class="answer">
      <div v-html="renderMarkdown(answer.content)"></div>
      <ImageGrid v-if="answer.images.length > 0" :images="answer.images" />
    </div>
  </div>
</template>

<script setup>
import { marked } from 'marked';
import ImageGrid from './ImageGrid.vue';

defineProps({
  answers: {
    type: Array,
    required: true
  }
});

const renderMarkdown = (content) => {
  return marked(content);
};
</script> 