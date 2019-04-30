import GroupsIndex from '@/pages/GroupsIndex.vue';
import GroupsShow from '@/pages/GroupsShow.vue';

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
    component: GroupsIndex,
    meta: {
    },
  },
  {
    path: '/groups/show/:id',
    name: 'groups-show',
    component: GroupsShow,
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
