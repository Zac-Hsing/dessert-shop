<template>
  <div class="menu-right">
    <router-view />
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.menu-right {
  width: 75%;
  border: 1px solid #3cb371;
  padding: 20px;
}
@media (max-width: 768px) {
  .menu-right {
    width: 40%;
    border: 1px solid #3cb371;
    padding: 10px;
    object-fit: cover;
  }  
}
</style>
