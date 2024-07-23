<template>
  <div class="menu-border">
    <div class="menu-box" v-for="item in items" :key="item.id">
      <img :src="item.image" alt="product image" class="product-image">
      <div class="product-info">
        <h3>{{ item.name }}</h3>
        <p>{{ item.description }}</p>
        <span class="price">{{ item.price }}</span>
        <div class="quantity-control">
          <input type="number" v-model.number="item.quantity" min="1" />
          <button @click="addToCart(item)">加入購物車</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useCartStore } from '../stores/cart';
import fruitetower from '../img/fruitetower.jpg';
import { useToast } from 'vue-toast-notification';
const items = ref([
  { id: 15, name: '水果塔1', description: '新鮮的水果和香脆的塔皮', price: 180, image: fruitetower, quantity: 1 },
  { id: 16, name: '水果塔2', description: '新鮮的水果和香脆的塔皮', price: 250, image: fruitetower, quantity: 1 },
  { id: 17, name: '水果塔3', description: '新鮮的水果和香脆的塔皮', price: 280, image: fruitetower, quantity: 1 },
  { id: 18, name: '水果塔4', description: '新鮮的水果和香脆的塔皮', price: 300, image: fruitetower, quantity: 1 },
]);

const cartStore = useCartStore();
const toast = useToast();
function addToCart(item: any) {
  cartStore.addItem({ ...item });
  toast.success(`${item.name} 已加入購物車`); 
}
</script>

<style scoped>
.menu-border {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
}

.menu-box {
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 15px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.product-image {
  width: 100%;
  height: auto;
  margin-bottom: 15px;
}

.product-info h3 {
  font-size: 20px;
  color: #333;
  margin: 0 0 10px;
}

.product-info p {
  font-size: 14px;
  color: #666;
  margin: 0 0 15px;
}

.price {
  font-size: 18px;
  color: #e91e63;
  font-weight: bold;
}

.quantity-control {
  display: flex;
  align-items: center;
  justify-content: center; 
}

.quantity-control input {
  width: 50px;
  margin-right: 10px;
}

.quantity-control button {
  border-radius: 5px;
  border: 1px solid #ddd;
  padding: 5px 10px; 
}
@media (max-width: 768px) {
  .menu-border {
    display: grid;
    grid-template-columns: repeat(1, 1fr); 
    grid-gap: 10px;
    width: 100%;
}
}
</style>