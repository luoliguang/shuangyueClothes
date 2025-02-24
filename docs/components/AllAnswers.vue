<template>
  <div class="all-answers">
    <!-- 搜索和过滤部分 -->
    <div class="search-filter-container">
      <div class="search-box">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="请在这里输入您的问题。搜索方式：关键词1 关键词2"
          @input="debouncedSearch"
          class="search-input"
          aria-label="搜索问题"
        />
        <button 
          class="search-button" 
          @click="handleSearch"
          :disabled="loading"
        >
          <svg class="search-icon-answer" viewBox="0 0 24 24">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
          </svg>
        </button>
      </div>

      <div class="filter-tags">
        <button
          class="filter-tag"
          :class="{ active: !selectedCategory }"
          @click="resetFilters"
        >
          所有分类
        </button>
        <button
          v-for="category in categories"
          :key="category"
          class="filter-tag"
          :class="{ active: selectedCategory === category }"
          @click="selectCategory(category)"
        >
          {{ category }}
        </button>
      </div>
    </div>

    <!-- 问题列表部分 -->
    <div v-if="!loading && filteredQuestions.length" class="masonry-container">
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

  <BackToTopButton :show="showBackToTop" />
</template>

<script setup>
import { ref, computed, nextTick } from 'vue';
import { useDebounceFn } from '@vueuse/core';
import QuestionContent from './answers/QuestionContent.vue';
import AnswersList from './answers/AnswersList.vue';
import questionsData from './data/questions.json';
import BackToTopButton from './common/BackToTopButton.vue';
import { useScroll } from './commonJs/useScroll'; //监听用户滚动

// 状态管理
const searchQuery = ref('');
const selectedCategory = ref('');
const questions = ref(questionsData);
const loading = ref(false);

// 分类列表计算
const categories = computed(() => {
  const categorySet = new Set();
  questions.value.forEach(question => {
    question.categories.forEach(category => {
      categorySet.add(category);
    });
  });
  return Array.from(categorySet).sort();
});

// 搜索和过滤后的问题列表
const filteredQuestions = computed(() => {
  const queries = searchQuery.value.toLowerCase().trim().split(/\s+/); // 拆分为多个关键词
  const category = selectedCategory.value;

  return questions.value.filter(question => {
    // 搜索匹配
    const searchMatch = queries.every(query => {
      return (
        question.content.toLowerCase().includes(query) ||
        question.answers.some(answer => answer.content.toLowerCase().includes(query)) ||
        question.categories.some(cat => cat.toLowerCase().includes(query))
      );
    });

    // 分类匹配
    const categoryMatch = !category || question.categories.includes(category);

    return searchMatch && categoryMatch;
  });
});

// 左右列分配
const leftColumnQuestions = computed(() => {
  return filteredQuestions.value.filter((_, index) => index % 2 === 0);
});

const rightColumnQuestions = computed(() => {
  return filteredQuestions.value.filter((_, index) => index % 2 === 1);
});

// 搜索处理
const handleSearch = async () => {
  loading.value = true;
  try {
    await nextTick();
    // 这里可以添加实际的搜索逻辑
  } finally {
    setTimeout(() => {
      loading.value = false;
    }, 300);
  }
};

// 防抖处理
const debouncedSearch = useDebounceFn(() => {
  handleSearch();
}, 300);

// 分类选择
const selectCategory = (category) => {
  selectedCategory.value = category;
  handleSearch();
};

// 重置过滤器
const resetFilters = () => {
  searchQuery.value = '';
  selectedCategory.value = '';
  handleSearch();
};

// 回到顶部功能
const { showBackToTop  } = useScroll()
// 查看详情
// const viewDetails = (question) => {
//   console.log('查看问题详情:', question);
// };
</script>

<style src="./css/allAnswers.css"></style>