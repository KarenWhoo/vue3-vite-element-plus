// 动态获取modules中所有router文件
const files = import.meta.globEager('./modules/*.router.js');

let routers = [];

Object.values(files).forEach((item) => {
  routers = routers
    .concat(item.default)
    .sort((a, b) => (a.sort ? a.sort - b.sort : -1));
});

const mainRouters = routers;

export default mainRouters;
