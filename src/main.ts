import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { createPinia } from 'pinia';
import './assets/main.css'
import 'vue-toast-notification/dist/theme-sugar.css'; 
import VueToast from 'vue-toast-notification';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.use(VueToast);

app.mount('#app')
