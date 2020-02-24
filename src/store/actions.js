const actions = {
  incrementWin({ commit }) {
    commit('incrementWin');
  },
  incrementLoses({ commit }) {
    commit('incrementLose');
  },
};

export default actions;
