const mutations = {
  incrementWin(state) {
    state.wins += 1;
  },
  incrementLose(state) {
    state.loses += 1;
  },
};

export default mutations;
