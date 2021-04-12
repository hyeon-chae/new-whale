import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  // main list page
  {
    path: '/',
    name: 'main',
    redirect: { name: '목표 리스트' },
    component: () => import('../views/MainLayout.vue'),
    // main list page
    children: [
       {
        path: '/mainList',
        name: '목표 리스트',
        // component: require('../views/main/MainList.vue').default,
        component: () => import('../views/main/MainListPage.vue'),
      },
      // complete page
      {
        path: '/complete',
        name: '완료 목표',
        component: () => import('../views/complete/CompletePage.vue'),
      },
      // report page
      {
        path: '/report',
        name: '리포트',
        component: () => import('../views/report/ReportPage.vue'),
      },
      
      // setting page
      {
        path: '/setting',
        name: '마이페이지',
        component: () => import('../views/setting/SettingPage.vue'),
      },
    ]
  },
  // add new one page
  {
    path: '/addNew',
    name: 'addNew',
    component: () => import('../views/addNew/AddNewPage.vue'),
  },
  // login page
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
