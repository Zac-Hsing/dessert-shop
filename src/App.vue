<template>
  <div id="app">
    <Contain />
    <shop_Footer />
    <ScrollToTop id="scroll"/>
  </div> 
</template>
  
<script setup lang="ts">
import Contain from './components/common/Contain.vue';
import shop_Footer from './components/common/shop_Footer.vue';
import ScrollToTop from './components/ScrollToTop.vue'
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  
}


@media (max-width: 768px) {
  #app {
    padding: 10px;  
    width: 400px;
    overflow-x: hidden;
    align-items: center; 
    justify-content: center; 
    margin-left: 5px;
  }
  
}
</style>
