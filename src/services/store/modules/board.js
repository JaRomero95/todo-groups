import API from '@/services/api';

export default {
  state: {
    board: null,
  },
  getters: {
    board(state) {
      return state.board;
    },
    boardId(state) {
      return state.board ? state.board.id : state.board;
    }
  },
  mutations: {
    setBoard(state, board) {
      state.board = board;
    }
  },
  actions: {
    async loadBoard({commit}) {
      const board = await API.board.show();
      commit('setBoard', board);
    }
  }
};
