import API from '@/services/api';
import sortByPos from '@/lib/sort-by-pos';
import nextItemPos from '@/lib/next-item-pos';

export default {
  state: {
    groups: [],
    loadingGroups: true
  },
  getters: {
    groups(state) {
      return state.groups.sort(sortByPos);
    },
    loadingGroups(state) {
      return state.loadingGroups;
    }
  },
  mutations: {
    setGroups(state, groups) {
      state.groups = groups;
    },
    setLoadingGroups(state, value) {
      state.loadingGroups = value;
    },
    addGroup(state, group) {
      state.groups.push(group);
    },
    deleteGroup(state, groupId) {
      const groupIndex = state.groups.findIndex(group => group.id === groupId);

      if (groupIndex !== -1) {
        state.groups.splice(groupIndex, 1);
      }
    }
  },
  actions: {
    async loadGroups({commit}, boardId) {
      commit('setLoadingGroups', true);
      const groups = await API.groups.index(boardId);
      commit('setGroups', groups);
      commit('setLoadingGroups', false);
    },
    async createGroup({commit, getters: {groups}}, {boardId, ...rest}) {
      const payload = {
        ...rest,
        pos: nextItemPos(groups)
      };

      const group = await API.groups.create(boardId, payload);
      commit('addGroup', group);
    },
    async deleteGroup({commit}, groupId) {
      await API.groups.destroy(groupId);
      commit('deleteGroup', groupId);
    }
  }
};
