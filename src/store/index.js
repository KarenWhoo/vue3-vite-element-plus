import { createStore } from 'vuex';

// 动态导入modules中所有文件
const files = import.meta.globEager('./modules/*.js');
const modules = {};

Object.keys(files).forEach((item) => {
  modules[item.replace(/(\.\/modules\/|\.js)/g, '')] = files[item].default;
});

export default createStore({
  modules,
});
