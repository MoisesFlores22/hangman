const mutations = {
  incrementWin(state) {
    state.wins += 1;
    if (localStorage.getItem('wins')) {
      this.replaceState(
        Object.assign(state.wins, JSON.parse(localStorage.getItem('wins'))),
      );
    } else {
      localStorage.setItem('wins', JSON.stringify(state.wins));
    }
  },
  incrementLose(state) {
    state.loses += 1;
    if (localStorage.getItem('loses')) {
      this.replaceState(
        Object.assign(state.wins, JSON.parse(localStorage.getItem('loses'))),
      );
    } else {
      localStorage.setItem('loses', JSON.stringify(state.loses));
    }
  },
  setWord(state, word) {
    state.word = word;
  },
};

export default mutations;
