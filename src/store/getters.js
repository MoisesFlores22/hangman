const getters = {
  getWins(state) {
    const wins = localStorage.getItem('wins') || state.wins;
    return wins;
  },
  getLoses(state) {
    const loses = localStorage.getItem('loses') || state.loses;
    return loses;
  },
  getWord(state) {
    return state.word;
  },
};

export default getters;
