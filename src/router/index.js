import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  // main list page
  {
    path: '/',
    name: 'main',
    redirect: { name: 'mainList' },
    component: () => import('../views/MainLayout.vue'),
    // main list page
    children: [
       {
        path: '/mainList',
        name: 'mainList',
        // component: require('../views/main/MainList.vue').default,
        component: () => import('../views/main/MainListPage.vue'),
      },
      // complete page
      {
        path: '/complete',
        name: 'complete',
        component: () => import('../views/complete/CompletePage.vue'),
      },
      // report page
      {
        path: '/report',
        name: 'report',
        component: () => import('../views/report/ReportPage.vue'),
      },
      
      // setting page
      {
        path: '/setting',
        name: 'setting',
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
