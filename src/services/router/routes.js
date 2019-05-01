import GroupIndex from '@/pages/GroupIndex.vue';
import GroupShow from '@/pages/GroupShow.vue';

const generateBreadcrumbs = breadcrumbs => [
  {
    text: 'Groups',
    to: {name: 'groups-index'},
  },
  ...breadcrumbs,
];

export default [
  {
    path: '/groups',
    name: 'groups-index',
    component: GroupIndex,
    meta: {
    },
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
  {
    path: '*',
    redirect: {name: 'groups-index'},
  },
];
