<template>
  <div class="contain">
    <shop_Header @toggle-view="toggleView" />
    <Banner v-if="showBanner" />
    <router-view v-if="!showBanner" />
    <Content v-if="showBanner" />
  </div>
  
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Banner from './Banner.vue';
import shop_Header from './shop_Header.vue';
import Content from './Content.vue';
const showBanner = ref(true);

function toggleView(show: boolean) {
  showBanner.value = show;
}
</script>

<style scoped>
.content {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  padding-top: 50px; 
}
.contain {
  width: 1000px;
  margin: 0 auto;
  flex: 1; 
}
</style>