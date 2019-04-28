import GroupsList from '@/pages/GroupsList.vue';
import GroupsCreate from '@/pages/GroupsCreate.vue';
import GroupsShow from '@/pages/GroupsShow.vue';

export default [
  {
    path: '/groups',
    name: 'groups-list',
    component: GroupsList,
  },
  {
    path: '/groups/create',
    name: 'groups-create',
    component: GroupsCreate,
  },
  {
    path: '/groups/show/:id',
    name: 'groups-show',
    component: GroupsShow,
  },
  {
    path: '*',
    redirect: {name: 'groups-list'},
  },
];
