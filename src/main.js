import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
// import HeaderBar from '@/components/HeaderBar'
// import BottomNav from '@/components/BottomNav'

createApp(App).use(store).use(router).mount('#app')
// custom-header bar
// Vue.component('header-bar', HeaderBar);
// Vue.component('bottom-nav', BottomNav);