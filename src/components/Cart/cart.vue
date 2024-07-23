<template>
  <div class="main">
    <left_main/>
    <right_main/>
  </div>
</template>

<script setup lang="ts">
  import right_main from './right_main.vue'
  import left_main from './left_main.vue'
</script>

<style scoped>
.main {
  display: flex;
  justify-content: center; 
  gap: 20px;
  width: 100%;
}
@media (max-width: 768px) {
  .main {
    display: flex;
    justify-content: center; 
    flex-direction: column;
    gap: 20px;
    margin-bottom: 20px;
}
}
</style>
