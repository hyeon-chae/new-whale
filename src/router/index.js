import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('../views/MainLayout.vue'),
    children: [
      // main-list
      {
        path: '/main-list',
        name: '리스트',
        component: () => import('../views/main/MainList.vue'),
      },
    ]
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
