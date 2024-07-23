<template>
  <div class="header" id="header">
    <div class="logo">
      <ul>
        <li><img src="../img/logo.png" @click.native="goToHome" alt="Logo"></li>
        <li>
          <a href="#" @click="goToCart" id="cart1">
          <img class="shopicon" src="../img/shopicon.png" alt="Shop Icon">
          </a>
        </li>
    </ul>
    </div>
    <div class="navbar">
      <ul>
        <li>
          <router-link to="/" @click.native="goToHome" id="home">
            首頁
          </router-link>
        </li>
        <li><a href="#" @click="dessert()" id="dessert">甜點</a></li>
      </ul>
      <a href="#" @click="goToCart" id="cart">
        <img class="shopicon" src="../img/shopicon.png" alt="Shop Icon">
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue';
import { useRouter } from 'vue-router';

const emit = defineEmits(['toggle-view']);
const router = useRouter();

function toggleView(show: boolean) {
  emit('toggle-view', show);
}

function goToCart() {
  toggleView(false); 
  router.push('/cart'); 
}

function goToHome() {
  toggleView(true); 
  router.push('/all'); 
}

function dessert() {
  const targetElement = document.getElementById('content');
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>

<style scoped>
.header {
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between; 
  align-items: center; 
  border-bottom: 1px solid #ddd;
}
#cart1{
  display: none;
}
.logo ul{
  list-style: none;
}
.logo {
  display: flex; 
  align-items: center; 
}

.logo img {
  height: 40px;
  cursor: pointer;
}

.navbar {
  display: flex;
  align-items: center; 
}

.navbar ul {
  list-style: none;
  display: flex;
  align-items: center; 
  margin: 0;
  padding: 0;
}

.navbar ul li {
  margin-right: 20px;
}

.navbar ul li a {
  text-decoration: none;
  color: #3cb371;
  font-size: 16px;
  font-weight: bold;
}

.shopicon {
  width: 25px;
  cursor: pointer; 
}

@media (max-width: 768px) {
  .header{
    width: 360px;
  }
  .navbar ,#cart {
    display: none; 
  }
  .logo ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
  }
  .logo ul li{
    margin: 0 40px;
  }
  #cart1{
    display: block;
  }
  #cart1 img{
    width: 25px;
    height: 28px;
    cursor: pointer; 
    margin-left: -15px;
    align-items: center; 
    justify-content: center; 
  }
}
</style>
