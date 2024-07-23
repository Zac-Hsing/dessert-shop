<template>
  <div class="content" id="content">
    <Menu />
    <Dessert />
  </div>
</template>

<script setup lang="ts">
import Menu from './Menu.vue';
import Dessert from './Dessert.vue';

</script>

<style>
@media (max-width: 768px) {
  .content{
    width: 90%;
    flex-direction: column;
    object-fit: cover;
  }
}  
</style>