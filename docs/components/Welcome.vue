<template>
  <div class="belowMsg">
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true
    }
  }
 
}
</script>

<style>
.belowMsg{
  margin-top: 60px;
  text-align: center;
}
h1{
  color: cyan;
}
</style>