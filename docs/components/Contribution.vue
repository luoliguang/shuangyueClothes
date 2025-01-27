<template>
  <div class="contributions">
    <div v-for="(contribution,index) in contributions">
      <img :src="contribution.url" alt="">
      <span>{{ contribution.name.split('.')[0] }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref,onMounted  } from 'vue'
import { getImagesUrl } from '../components/sever/sever.js'
import { apiNumbers } from '../components/data/AllMaterial.js' // 素材数据

const contributions = [];
onMounted(()=>{
  getImagesUrl(apiNumbers.Contribution).then(res => {
    res.forEach(item => {
      contributions.push(
        {
          url: item.url,
          name: item.name
        }
      )
    });
    
  })

})

</script>

<style scoped>
.contributions{
  display: flex;
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