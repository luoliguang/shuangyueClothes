<template>
  <div>
    <slot />
    <Analytics />
  </div>
</template>

<script setup>
import { Analytics } from '@vercel/analytics/vue';
// 其他导入
</script> 