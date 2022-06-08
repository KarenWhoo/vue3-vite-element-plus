import store from '@/store';

// 根据后端给的权限，注册用户拥有的路由 (根据实际项目编写)
const registerHomeRoutes = (routes) => {
  const homeRoutes = [];
  routes.forEach((item) => {
    const { children = [], meta: { authName } = { authName: '' } } = item;

    if (store.state.global.permission.includes(authName) || !authName) {
      if (children.length > 0) {
        item.children = registerHomeRoutes(children);
      }
      homeRoutes.push(item);
    }
  });
  return homeRoutes;
};

export default registerHomeRoutes;
