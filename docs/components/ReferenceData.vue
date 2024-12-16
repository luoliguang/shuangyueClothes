<template>
  <div class="reference-date">
    <img :src="ImageSrc" :alt="alias" class="reference-image" />
    <p class="reference-alias">{{ alias }}</p>
  </div>
</template>

<script setup>

// 定义接收的 props
const props = defineProps({
  ImageSrc: {
    type: String,
    required: true, // 必填
  },
  alias: {
    type: String,
    default: 'Image', // 默认值
  },
});
</script>

<style scoped>
/* 样式可以根据需要调整 */
.reference-date {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.reference-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.reference-alias {
  margin-top: 8px;
  font-size: 14px;
  color: #01eaff;
  border-radius: 5px;
  border: 5px solid #005082; 
  padding: 0px 5px;
}
</style>
