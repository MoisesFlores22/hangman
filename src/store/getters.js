const getters = {
  getWins(state) {
    return state.wins;
  },
  getLoses(state) {
    return state.loses;
  },
  getWord(state) {
    return state.word;
  },
};

export default getters;
