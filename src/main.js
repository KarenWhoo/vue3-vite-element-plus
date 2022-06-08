import { createApp } from 'vue';

import App from './App.vue';
import router from '@/router';
import store from '@/store';

import '@/assets/css/common.scss';

const app = createApp(App);

// 使用vuex
app.use(store);
// 使用路由
app.use(router);

app.mount('#app');
