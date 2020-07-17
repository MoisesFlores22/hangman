const mutations = {
  incrementWin(state) {
    state.wins += 1;
  },
  incrementLose(state) {
    state.loses += 1;
  },
  setWord(state, word) {
    state.word = word;
  },
};

export default mutations;
