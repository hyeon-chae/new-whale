import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('../views/main/MainPage.vue'),
  },

  {
    path: '/login',
    name: '로그인페이지',
    component: () => import('../views/login/LoginPage.vue'),
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
