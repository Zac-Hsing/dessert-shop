import { createRouter, createWebHistory } from 'vue-router';
import AllDessert from '../components/dessert/AllDessert.vue';
import ChocoCake from '../components/dessert/ChocoCake.vue';
import FruitTower from '../components/dessert/FruitTower.vue';
import CreamPuffs from '../components/dessert/CreamPuffs.vue';
import Cheesecake from '../components/dessert/CheeseCake.vue';
import LayerCake from '../components/dessert/LayerCake.vue';
import Cart from '../components/Cart/cart.vue';
import CartPage from '../components/Cart/CartPage.vue';

const routes = [
  { path: '/', redirect: '/all' },
  { path: '/all', component: AllDessert },
  { path: '/choco-cake', component: ChocoCake },
  { path: '/fruit-tower', component: FruitTower },
  { path: '/cream-puffs', component: CreamPuffs },
  { path: '/cheesecake', component: Cheesecake },
  { path: '/layer-cake', component: LayerCake },
  { path: '/cart', component: Cart },
  { path: '/cartpage', component: CartPage },
];

const router = createRouter({
  history: createWebHistory('/dessert-shop/'), 
  routes,
});

export default router;
