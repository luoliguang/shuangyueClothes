<template>
  <div class="contributions">
    <div v-for="(contribution,index) in contributions">
      <img :src="contribution.url" alt="">
      <span>{{ contribution.name.split('.')[0] }}</span>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  contributions:{
    type: Array,
    required: true
  }
})

</script>

<style scoped>
.contributions{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.contributions div{
  text-align: center;
}
img{
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 0;
}

</style>