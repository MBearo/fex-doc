<template>
  <img class="image" :src="src"/>
</template>
<script>
export default {
  name:'Img',
  props:{
    src:String
  }
}
</script>
<style scoped>
  .image{
    width: 100%;
  }
</style>
