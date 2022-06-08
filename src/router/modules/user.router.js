import RouterReplaceComp from '@/utils/routerReplaceSelf';

const userManage = [
  {
    path: '/user',
    name: 'user',
    component: () => import('@/components/layout/Template.vue'),
    redirect: '/user/userOne',
    sort: 0,
    meta: {
      title: '用户',
      menu: true,
      authName: 'user',
    },
    children: [
      {
        path: 'userOne',
        name: 'userOne',
        meta: {
          title: '用户一',
          menu: true,
          authName: 'userOne',
        },
        component: RouterReplaceComp(() => import('@/views/user/userOne.vue')),
      },
    ],
  },
];

export default userManage;
