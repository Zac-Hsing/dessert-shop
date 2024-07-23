import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCartStore = defineStore('cart', () => {
  const items = ref([]);
  const total = ref(0);

  function addItem(item) {
    const existingItem = items.value.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      items.value.push(item);
    }
    total.value += item.price * item.quantity;
  }

  function removeItem(item) {
    const index = items.value.findIndex(i => i.id === item.id);
    if (index !== -1) {
      total.value -= items.value[index].price * items.value[index].quantity;
      items.value.splice(index, 1);
    }
  }

  return { items, total, addItem, removeItem };
});
