import RouterReplaceComp from '@/utils/routerReplaceSelf';

const userManage = [
  {
    path: '/setting',
    name: 'setting',
    component: () => import('@/components/layout/Template.vue'),
    redirect: '/setting/settingOne',
    sort: 1,
    meta: {
      title: '设置',
      menu: true,
      authName: 'setting',
    },
    children: [
      {
        path: 'settingOne',
        name: 'settingOne',
        meta: {
          title: '设置一',
          menu: true,
          authName: 'settingOne',
        },
        component: RouterReplaceComp(() =>
          import('@/views/setting/settingOne.vue')
        ),
      },
    ],
  },
];

export default userManage;
