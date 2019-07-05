import Vuex from 'vuex';
import Vue from 'vue';
import board from './modules/board';
import groups from './modules/groups';
import group from './modules/group';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    board,
    groups,
    group,
  }
});

export default store;
