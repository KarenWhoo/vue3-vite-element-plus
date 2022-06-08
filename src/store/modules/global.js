import router from '@/router';
import mainRouters from '@/router/routers';
// import { getPermissionApi } from '@/apis/global';
import registerHomeRoutes from '@/utils/registerHomeRoutes';

export default {
  namespaced: true, // 开启命名空间
  state() {
    return {
      username: '',
      homeRoutes: [],
      permission: [],
      token: '',
    };
  },
  mutations: {
    setInitInfo(state, { username, token }) {
      state.username = username;
      state.token = token;
    },

    setPermission(state, payload) {
      state.permission = payload;
    },
    setHomeRoutes(state, payload) {
      state.homeRoutes = payload;
    },
  },
  actions: {
    logout({ commit }) {
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      commit('setInitInfo', { username: '', token: '' });
      commit('setPermission', []);
      commit('setHomeRoutes', []);
      router.push('/login');
    },

    async init({ commit }) {
      const username = localStorage.getItem('username');
      const token = localStorage.getItem('token');
      commit('setInitInfo', { username, token });
      // const permission = (await getPermissionApi()) || [];
      // commit('setPermission', permission);
      commit('setPermission', ['setting', 'user', 'settingOne', 'userOne']);
      const homeRoutes = registerHomeRoutes(mainRouters);
      commit('setHomeRoutes', homeRoutes);
      homeRoutes.forEach((item) => {
        router.addRoute('home', item);
      });
      // router.addRoute({
      //   path: '/:pathMatch(.*)*',
      //   redirect: '/404',
      // });
    },
  },
  getters: {},
};
