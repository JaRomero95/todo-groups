import API from '@/services/api';
import sortByPos from '@/lib/sort-by-pos';
import nextItemPosition from '@/lib/next-item-pos';

export default {
  state: {
    group: [],
    loadingGroup: true
  },
  getters: {
    group(state) {
      return state.group;
    },
    tasks(state, getters) {
      if (!getters.group || !getters.group.cards) {
        return [];
      }

      return getters.group.cards.sort(sortByPos);
    },
    loadingGroup(state) {
      return state.loadingGroup;
    },
  },
  mutations: {
    setGroup(state, group) {
      state.group = group;
    },
    editGroup(state, group) {
      state.group = {
        ...state.group,
        ...group
      };
    },
    setLoadingGroup(state, value) {
      state.loadingGroup = value;
    },
    addTask(state, task) {
      state.group.cards.push(task);
    },
    deleteTask(state, taskId) {
      const taskIndex = state.group.cards.findIndex(task => task.id === taskId);

      if (taskIndex !== -1) {
        state.group.cards.splice(taskIndex, 1);
      }
    }
  },
  actions: {
    async loadGroup({commit}, groupId) {
      commit('setLoadingGroup', true);
      const group = await API.groups.show(groupId);
      commit('setGroup', group);
      commit('setLoadingGroup', false);
    },
    async editGroup({commit, getters}, attributes) {
      commit('setLoadingGroup', true);
      const group = await API.groups.update(getters.group.id, attributes);
      commit('editGroup', group);
      commit('setLoadingGroup', false);
    },
    async createTask({commit, getters: {tasks}}, {groupId, ...rest}) {
      const payload = {
        ...rest,
        pos: nextItemPosition(tasks)
      };

      const task = await API.tasks.create(groupId, payload);
      commit('addTask', task);
    },
    async deleteTask({commit}, taskId) {
      await API.tasks.destroy(taskId);
      commit('deleteTask', taskId);
    }
  }
};
