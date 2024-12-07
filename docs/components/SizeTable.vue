<template>
  <div class="size-table-container">
    <!-- 标题和适用款式 -->
    <div class="table-header">
      <h3>{{ title }}</h3>
      <div class="applicable-styles" v-if="styles && styles.length">
        <span class="label">适用款式：</span>
        <div class="style-tags">
          <span v-for="style in styles" :key="style" class="style-tag">
            {{ style }}
          </span>
        </div>
      </div>
    </div>

    <!-- 尺码类型选择 -->
    <div class="type-selector">
      <button 
        :class="['type-btn', { active: currentType === 'adult' }]"
        @click="currentType = 'adult'"
      >
        成人尺码
      </button>
      <button 
        :class="['type-btn', { active: currentType === 'children' }]"
        @click="currentType = 'children'"
      >
        儿童尺码
      </button>
    </div>

    <!-- 尺码表格 -->
    <div class="table-container" :id="tableId">
      <table class="size-table">
        <thead>
          <tr>
            <th v-for="column in currentColumns" :key="column.prop">
              {{ column.label }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in currentTableData" :key="index">
            <td v-for="column in currentColumns" :key="column.prop">
              {{ row[column.prop] }}
            </td>
          </tr>
        </tbody>
      </table>

      <!-- 误差说明 -->
      <div class="error-notes">
        <p>※ 测量误差范围：1-3cm</p>
        <p>※ 由于测量方法不同，可能存在1-3cm的误差属正常现象</p>
      </div>
    </div>

    <!-- 操作按钮 -->
    <div class="table-actions">
      <button class="btn primary" @click="downloadAsImage">下载图片</button>
      <button class="btn" @click="copyTable">复制表格</button>
    </div>

    <!-- 提示消息 -->
    <div v-if="showMessage" class="message" :class="messageType">
      {{ messageText }}
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import html2canvas from 'html2canvas'

const props = defineProps({
  title: {
    type: String,
    default: '服装尺码表'
  },
  adultColumns: {  // 成人尺码列配置
    type: Array,
    default: () => [
      { prop: 'size', label: '尺码' },
      { prop: 'length', label: '衣长' },
      { prop: 'bust', label: '胸围' },
      { prop: 'shoulder', label: '肩宽' },
      { prop: 'height', label: '参考身高' },
      { prop: 'weight', label: '参考体重' }
    ]
  },
  childrenColumns: {  // 儿童尺码列配置
    type: Array,
    default: () => [
      { prop: 'size', label: '尺码' },
      { prop: 'length', label: '衣长' },
      { prop: 'bust', label: '胸围' },
      { prop: 'age', label: '参考年龄' },
      { prop: 'height', label: '参考身高' }  // 儿童特有的列
    ]
  },
  adultData: {
    type: Array,
    default: () => []
  },
  childrenData: {
    type: Array,
    default: () => []
  },
  styles: {
    type: Array,
    default: () => []
  }
})

const currentType = ref('adult')
const tableId = 'size-table'
const showMessage = ref(false)
const messageText = ref('')
const messageType = ref('success')

// 显示提示消息
const showToast = (text, type = 'success') => {
  messageText.value = text
  messageType.value = type
  showMessage.value = true
  setTimeout(() => {
    showMessage.value = false
  }, 3000)
}


// 根据当前类型显示对应的列配置
const currentColumns = computed(() => {
  return currentType.value === 'adult' ? props.adultColumns : props.childrenColumns
})

// 根据选择显示对应数据
const currentTableData = computed(() => {
  return currentType.value === 'adult' ? props.adultData : props.childrenData
})

// 修改下载图片功能
const downloadAsImage = async () => {
  const container = document.querySelector('.size-table-container') // 修改为整个容器
  try {
    const canvas = await html2canvas(container, {
      backgroundColor: document.documentElement.classList.contains('dark') ? '#1a1a1a' : '#ffffff',
      scale: 2, // 提高图片质量
      useCORS: true // 支持跨域图片
    })
    const link = document.createElement('a')
    link.download = `${props.title}.png`
    link.href = canvas.toDataURL('image/png', 1.0)
    link.click()
    showToast('图片已成功下载')
  } catch (err) {
    console.error('下载失败:', err)
    showToast('下载失败，请重试', 'error')
  }
}

// 复制表格
const copyTable = async () => {
  const table = document.getElementById(tableId)
  try {
    await navigator.clipboard.writeText(table.innerText)
    showToast('表格内容已复制到剪贴板')
  } catch (err) {
    showToast('复制失败，请重试', 'error')
  }
}
</script>

<style scoped>
.size-table-container {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  margin: 10px 0;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  font-family: system-ui, -apple-system, sans-serif;
}

.table-header {
  margin-bottom: 2rem;
  text-align: center; 
}

.applicable-styles {
  /* 适用款式也居中 */
  margin-top: 1rem;
  text-align: center; 
}

.label {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}

/* 标签居中显示 */
.style-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
  justify-content: center;
}

.style-tag {
  padding: 0.3rem 0.8rem;
  border-radius: 1rem;
  font-size: 0.9rem;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-dark);
}

.type-selector {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

.type-btn {
  padding: 0.5rem 1.5rem;
  border: 2px solid var(--vp-c-brand);
  border-radius: 2rem;
  background: var(--vp-c-bg);
  color: var(--vp-c-brand);
  cursor: pointer;
  transition: all 0.3s;
  font-weight: 500;
}

.type-btn:hover {
  background: var(--vp-c-brand-soft);
}

.type-btn.active {
  background: var(--vp-c-brand);
  color: var(--vp-c-bg);
}

.table-container {
  /* border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  margin: 20px 0; */
  background: var(--vp-c-bg);
}

.size-table {
  width: 100%;
  border-collapse: collapse;
  border-radius: 8px;
  overflow: hidden;
  background: var(--vp-c-bg);
}

.size-table th {
  padding: 12px;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-text-1);
  font-weight: 600;
  border: none;
  text-align: center;
}

.size-table td {
  padding: 12px;
  border: none;
  text-align: center;
  color: var(--vp-c-text-1);
  border-bottom: 1px solid var(--vp-c-divider-light);
}

.size-table tr:last-child td {
  border-bottom: none;
}

.size-table tbody tr:hover {
  background: var(--vp-c-bg-soft);
}

.size-table tbody tr:nth-child(even) {
  background: var(--vp-c-bg-soft);
}

.error-notes {
  margin: 15px;
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}

.table-actions {
  margin-top: 20px;
  display: flex;
  gap: 10px;
  justify-content: flex-end;
}

.btn {
  padding: 8px 16px;
  border: 1px solid var(--vp-c-brand);
  border-radius: 4px;
  cursor: pointer;
  background: var(--vp-c-bg);
  color: var(--vp-c-brand);
  transition: all 0.3s;
  font-weight: 500;
}

.btn:hover {
  background: var(--vp-c-brand-soft);
}

.btn.primary {
  background: var(--vp-c-brand);
  color: var(--vp-c-bg);
  border: none;
}

.btn.primary:hover {
  background: var(--vp-c-brand-dark);
}

.message {
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 12px 24px;
  border-radius: 4px;
  animation: fadeIn 0.3s;
  z-index: 9999;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  min-width: 200px;
  text-align: center;
}

.message.success {
  background: var(--vp-c-brand);
  color: white;
}

.message.error {
  background: #f44336;
  color: white;
}
.vp-doc h3 {
  margin: 0 !important;
}
.table-header h3 {
  /*  重置标题边距 */
  margin: 0 !important;
  padding: 0;
  line-height: 1.5;
  font-size: 1.5rem;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>