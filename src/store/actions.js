const actions = {
  incrementWin({ commit }) {
    commit('incrementWin');
  },
  incrementLoses({ commit }) {
    commit('incrementLose');
  },
  setCurrentWord({ commit }, word) {
    commit('setWord', word);
  },
};

export default actions;
