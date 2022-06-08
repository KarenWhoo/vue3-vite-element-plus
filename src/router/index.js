import { createRouter, createWebHashHistory } from 'vue-router';
import store from '@/store';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
    children: [],
    redirect: '/user',
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

let routeFlag = false;
router.beforeEach(async (to, from, next) => {
  const token = localStorage.getItem('token');
  if (token) {
    if (routeFlag) {
      next();
    } else {
      // 初始化
      await store.dispatch('global/init');
      routeFlag = true;
      next({ ...to, replace: true });
    }
  } else {
    routeFlag = false;
    if (to.name === 'login') {
      next();
    } else {
      next({
        name: 'login',
        // query: { redirect: to.fullPath },
      });
    }
  }
});

export default router;
