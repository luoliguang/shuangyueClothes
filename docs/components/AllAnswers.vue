<template>
  <div class="all-answers">
    <!-- 搜索和过滤部分 -->
    <div class="search-filter-container">
      <div class="search-box">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="请输入关键词搜索..."
          @input="debouncedSearch"
          class="search-input"
          aria-label="搜索问题"
        />
        <button class="search-button" @click="handleSearch" aria-label="搜索">
          <svg class="search-icon" viewBox="0 0 24 24">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
          </svg>
        </button>
      </div>

      <div class="filter-tags">
        <button
          class="filter-tag"
          :class="{ active: selectedCategory === '' }"
          @click="selectCategory('')"
        >
          所有分类
        </button>
        <button
          v-for="category in categories"
          :key="category"
          :class="['filter-tag', { active: selectedCategory === category }]"
          @click="selectCategory(category)"
        >
          {{ category }}
        </button>
      </div>
    </div>

    <!-- 问题列表部分 -->
    <div class="masonry-container" v-if="!loading && filteredQuestions.length">
      <div class="masonry-column">
        <TransitionGroup name="list">
          <div
            v-for="question in leftColumnQuestions"
            :key="question.id"
            class="question-card"
            @click="viewDetails(question)"
          >
            <QuestionContent :question="question" />
            <AnswersList :answers="question.answers" />
          </div>
        </TransitionGroup>
      </div>
      <div class="masonry-column">
        <TransitionGroup name="list">
          <div
            v-for="question in rightColumnQuestions"
            :key="question.id"
            class="question-card"
            @click="viewDetails(question)"
          >
            <QuestionContent :question="question" />
            <AnswersList :answers="question.answers" />
          </div>
        </TransitionGroup>
      </div>
    </div>

    <!-- 加载状态 -->
    <div v-if="loading" class="loading-container">
      <div class="loading-spinner"></div>
      <p>加载中...</p>
    </div>

    <!-- 无结果提示 -->
    <div v-if="!loading && !filteredQuestions.length" class="empty-state">
      <svg class="empty-icon" viewBox="0 0 24 24">
        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
      </svg>
      <p>暂无搜索结果</p>
      <p class="sub-text">请尝试其他关键词</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useDebounceFn } from '@vueuse/core';
import QuestionContent from './QuestionContent.vue';
import AnswersList from './AnswersList.vue';
import questionsData from '../components/data/questions.json';

// 状态
const searchQuery = ref('');
const selectedCategory = ref('');
const questions = ref(questionsData);
const categories = computed(() => {
  const categorySet = new Set();
  questions.value.forEach(question => {
    question.categories.forEach(category => {
      categorySet.add(category);
    });
  });
  return Array.from(categorySet);
});
const loading = ref(false);

// 计算属性
const filteredQuestions = computed(() => {
  return questions.value.filter(question => {
    const matchesSearch = question.content.toLowerCase().includes(searchQuery.value.toLowerCase());
    const matchesCategory = selectedCategory.value ? 
      question.categories.includes(selectedCategory.value) : true;
    return matchesSearch && matchesCategory;
  });
});

// 添加计算属性来分配问题到不同列
const leftColumnQuestions = computed(() => {
  return filteredQuestions.value.filter((_, index) => index % 2 === 0);
});

const rightColumnQuestions = computed(() => {
  return filteredQuestions.value.filter((_, index) => index % 2 === 1);
});

// 方法
const handleSearch = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 300);
};

const debouncedSearch = useDebounceFn(handleSearch, 300);

const selectCategory = (category) => {
  selectedCategory.value = category;
  handleSearch();
};

const viewDetails = (question) => {
  console.log('查看问题详情:', question);
};
</script>

<style src="./css/allAnswers.css"></style>