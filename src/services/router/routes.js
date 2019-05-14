import Login from '@/pages/Login.vue';
import GroupIndex from '@/pages/GroupIndex.vue';
import GroupShow from '@/pages/GroupShow.vue';

const RouteParent = {render(c) { return c('router-view'); }};

const generateBreadcrumbs = breadcrumbs => [
  {
    text: 'Groups',
    to: {name: 'groups-index'},
  },
  ...breadcrumbs,
];

export default [
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      auth: false,
    },
  },
  {
    path: '/app',
    component: RouteParent,
    meta: {
      auth: true,
    },
    children: [
      {
        path: '/groups',
        name: 'groups-index',
        component: GroupIndex,
      },
      {
        path: '/groups/show/:id',
        name: 'groups-show',
        component: GroupShow,
        meta: {
          breadcrumbs: generateBreadcrumbs([
            {text: 'Show group'},
          ]),
        },
      },
    ],
  },
  {
    path: '*',
    redirect: {name: 'login'},
  },
];
