<template>
  <div class="search-box">
    <input
      v-model="searchQuery"
      type="text"
      :placeholder="placeholder"
      @input="onInput"
      class="search-input"
      aria-label="搜索问题"
    />
    <div class="search-actions">
      <button 
        v-if="searchQuery"
        class="search-btn clear-btn"
        @click="clearSearch"
        title="清空搜索"
      >
        <svg t="1734765103430" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="32094" width="32" height="32"><path d="M748.928 129.792a96 96 0 0 0-117.568 67.84l-24.832 92.8-92.8-24.896a96 96 0 0 0-80.064 171.264c-2.752 8.064-6.272 17.728-10.496 28.544a622.016 622.016 0 0 1-58.112 114.304c-43.2 65.408-134.016 142.592-165.248 168.128a38.464 38.464 0 0 0 14.464 66.944l454.208 121.728c30.08 8.064 63.232-4.608 78.528-33.984 28.928-55.68 94.72-197.568 98.112-349.952a96 96 0 0 0 39.552-187.584l-92.672-24.832 24.832-92.8a96 96 0 0 0-67.84-117.504z m-18.752 193.728l24.832-92.736a32 32 0 1 0-61.824-16.576l-24.832 92.8 61.824 16.512z m-140.224 28.672l-92.736-24.832a32 32 0 0 0-16.576 61.824l340.032 91.072 22.272 6.016 8.64 2.304a32 32 0 0 0 16.576-61.824l-92.8-24.832-30.848-8.32L620.8 360.512l-30.912-8.32zM493.696 458.944l287.552 77.056c1.28 142.08-61.888 280.96-91.008 336.896a3.2 3.2 0 0 1-1.728 1.6 5.44 5.44 0 0 1-3.52 0.128l-64.704-17.344 49.92-186.24c1.792-6.72-6.912-11.136-11.264-5.632l-131.392 167.04-61.824-16.64 35.392-132.16c1.728-6.272-5.952-10.816-10.624-6.272L372.992 791.04l-95.168-25.536c42.752-37.44 104.704-96.192 140.672-150.592 29.504-44.736 50.56-91.264 64.32-126.272 4.352-11.136 7.936-21.12 10.88-29.696z m-307.776-4.864L160 384l-25.92 70.08L64 480l70.08 25.92L160 576l25.92-70.08L256 480l-70.08-25.92zM256 256l17.28 46.72L320 320l-46.72 17.28L256 384l-17.28-46.72L192 320l46.72-17.28L256 256zM145.28 174.72L128 128l-17.28 46.72L64 192l46.72 17.28L128 256l17.28-46.72L192 192l-46.72-17.28z" fill="#1F6FBF" p-id="32095"></path></svg>
      </button>
      <button 
        class="search-btn search-icon"
        @click="handleSearch"
        title="搜索"
      >
        <svg t="1734764877670" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16860" width="32" height="32"><path d="M596.48 728.64a8.032 8.032 0 0 1-5.664-2.336l-92.208-92.208a8.048 8.048 0 0 1 0.784-12.016 233.04 233.04 0 0 0 43.744-43.744 8.032 8.032 0 0 1 12.016-0.784l92.208 92.208a8 8 0 0 1 0 11.312l-45.248 45.248a7.952 7.952 0 0 1-5.632 2.32z m-80.192-99.52l80.208 80.208 33.936-33.936-80.208-80.208a248.256 248.256 0 0 1-33.936 33.936zM688 152.016h-64a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16z" fill="#263238" p-id="16861"></path><path d="M656 184.016a8 8 0 0 1-8-8v-64a8 8 0 0 1 16 0v64a8 8 0 0 1-8 8zM784 232.016h-64a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16z" fill="#263238" p-id="16862"></path><path d="M752 264.016a8 8 0 0 1-8-8v-64a8 8 0 0 1 16 0v64a8 8 0 0 1-8 8z" fill="#263238" p-id="16863"></path><path d="M647.392 669.728l-56.576 56.576a15.984 15.984 0 0 0 0 22.624l158.384 158.384a15.984 15.984 0 0 0 22.624 0l56.576-56.576a15.984 15.984 0 0 0 0-22.624l-158.384-158.384a16 16 0 0 0-22.624 0z" fill="#40C4FF" p-id="16864"></path><path d="M760.528 919.984c-6.144 0-12.288-2.336-16.976-7.008l-158.384-158.4a23.76 23.76 0 0 1-7.024-16.96c0-6.4 2.496-12.448 7.024-16.992l56.56-56.56a24 24 0 0 1 33.952 0l158.384 158.384a24.016 24.016 0 0 1 0 33.936l-56.576 56.576a23.792 23.792 0 0 1-16.96 7.024z m-101.824-246.944a8.016 8.016 0 0 0-5.664 2.336l-56.56 56.56a7.952 7.952 0 0 0 0 11.312l158.384 158.4a8.064 8.064 0 0 0 11.312 0l56.576-56.576a8 8 0 0 0 0-11.328l-158.384-158.384a8 8 0 0 0-5.664-2.32zM358.896 685.792c-136.752 0-248-111.248-248-248s111.248-248 248-248c136.736 0 248 111.248 248 248s-111.248 248-248 248z m0-480c-127.92 0-232 104.08-232 232s104.08 232 232 232 232-104.08 232-232-104.08-232-232-232z" fill="#263238" p-id="16865"></path><path d="M550.896 437.808c0 106.032-85.968 192-192 192s-192-85.968-192-192 85.968-192 192-192c106.048 0 192 85.952 192 192z" fill="#FFD740" p-id="16866"></path><path d="M358.896 637.792c-110.288 0-200-89.712-200-200s89.712-200 200-200c110.272 0 200 89.712 200 200s-89.728 200-200 200z m0-384c-101.456 0-184 82.544-184 184s82.544 184 184 184 184-82.544 184-184-82.544-184-184-184z" fill="#263238" p-id="16867"></path><path d="M502.896 445.792a8 8 0 0 1-8-8c0-74.992-61.008-136-136-136a8 8 0 0 1 0-16c83.808 0 152 68.192 152 152 0 4.432-3.568 8-8 8zM144 780.912H112a8 8 0 0 1 0-16h32a8 8 0 0 1 0 16zM352 780.912H176a8 8 0 0 1 0-16h176a8 8 0 0 1 0 16z" fill="#263238" p-id="16868"></path><path d="M912 540.912h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 0 16z" fill="#263238" p-id="16869"></path><path d="M848 540.912H672a8 8 0 0 1 0-16h176a8 8 0 0 1 0 16z" fill="#263238" p-id="16870"></path></svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  placeholder: { type: String, default: '搜索...' },
  modelValue: { type: String, default: '' }
});

const emit = defineEmits(['update:modelValue', 'search']);

const searchQuery = ref(props.modelValue);

const onInput = () => {
    emit('update:modelValue', searchQuery.value);
    emit('search', searchQuery.value)
};

const clearSearch = () => {
  searchQuery.value = '';
  emit('update:modelValue', '');
  emit('search', '')
};

const handleSearch = () => {
  emit('search', searchQuery.value)
};
</script>

<style scoped>

.search-section {
  margin-bottom: 12px;
}

.search-box {
  position: relative;
  max-width: 600px;
  margin: 0px auto 20px auto;
}

.search-box input {
  width: 100%;
  padding: 15px 20px;
  padding-right: 48px;
  border: 2px solid var(--vp-c-bg-soft);
  border-radius: 12px;
  font-size: 16px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  transition: all 0.3s ease;
}

.search-box input:focus {
  border-color: var(--vp-c-brand);
  outline: none;
  box-shadow: 0 0 0 3px rgba(13, 241, 207, 0.1);
}

.search-icon {
  position: absolute;
  right: 8px;
  transition: right 0.3s ease;
}

/* 深色模式适配 */
:root.dark .empty-state {
  background: var(--vp-c-bg-mute);
}

:root.dark .reset-button:hover {
  background: var(--vp-c-brand-lighter);
}

.search-actions {
  position: absolute;
  right: 8px;
  top:0;
  transform: translateY(-50%);
  display: flex;
  gap: 4px;
}

.search-btn {
  border: none;
  background: none;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 6px;
  color: var(--vp-c-text-2);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 搜索按钮的基础样式和动画 */
.search-icon {
  position: absolute;
  right: 8px;
  transition: right 0.3s ease;
}

/* 当有搜索内容时，搜索按钮向左移动 */
.search-box:has(input:not(:placeholder-shown)) .search-icon {
  right: 48px; /* 可以根据需要调整这个值 */
}

/* 清空按钮的动画效果 */
.clear-btn {
  position: absolute;
  right: 8px;
  opacity: 0;
  transform: translateX(20px);
  transition: all 0.3s ease;
}

/* 当输入框有内容时显示清空按钮 */
.search-box:has(input:not(:placeholder-shown)) .clear-btn {
  opacity: 1;
  transform: translateX(0);
}

.search-btn:hover {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
}

.clear-btn {
  right: 5px;
  font-size: 14px;
}

.clear-btn:hover {
  color: var(--vp-c-danger);
}
</style> 