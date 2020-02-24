<template>
  <div>
    <h2 class="incorrect-letters-list">
      Incorrect Words:
      <span class="incorrect-letter-items">
        <template v-for="(word) in getIncorrectWords">
          {{ word }}
        </template>
      </span>
    </h2>
    <h1>
      Remaining Guesses: <span> {{ remainingGuesses }} </span>
    </h1>
    <Input @updateInput="value => isCorrectLetter(value)" />
    <span class="guessing-word-letter">
      <template v-for="(letter) in getMissinLettersArray">
        {{ letter }}
      </template>
    </span>
  </div>
</template>

<script>
import Input from '@/components/Input';
import getRandomWord from '@/utils/getRandomWord';
import getLetterAparitions from '@/utils/getLetterAparitions';
import { GAME_LOST, GAME_WIN } from '@/utils/constants';

export default {
  components: {
    Input,
  },
  data() {
    return {
      word: '',
      incorrectWords: [],
      currentWordArray: [],
      missingLettersArray: [],
      guesses: process.env.VUE_APP_MAX_NUMBER_OF_GUESSES || 7,
    };
  },
  computed: {
    remainingGuesses() {
      return this.guesses;
    },
    getInputValue() {
      return this.inputValue;
    },
    getMissinLettersArray() {
      return this.missingLettersArray;
    },
    getIncorrectWords() {
      return this.incorrectWords;
    },
    isUserWinner() {
      return this.word[0] === this.missingLettersArray.join('');
    },
    isUserLooser() {
      return this.guesses === 0;
    },
  },
  methods: {
    populateMissingWordArray(currentWordArray) {
      currentWordArray.forEach(() => this.missingLettersArray.push('_'));
    },
    isCorrectLetter(letter) {
      const letterAparitions = getLetterAparitions(this.currentWordArray, letter);
      if (!letterAparitions.length) {
        this.incorrectWords.push(letter);
        this.guesses -= 1;
        if (this.isUserLooser) {
          this.$router.push({ name: 'End Game', params: { result: GAME_LOST } });
        }
      } else {
        for (let index = 0; index < letterAparitions.length; index += 1) {
          this.$set(this.missingLettersArray, letterAparitions[index], letter);
        }
        if (this.isUserWinner) {
          this.$router.push({ name: 'End Game', params: { result: GAME_WIN } });
        }
      }
    },
  },
  mounted() {
    const level = this.$route.params.level;
    this.word = getRandomWord(level);
    this.currentWordArray = this.word[0].split('');
    this.populateMissingWordArray(this.currentWordArray);
  },
};
</script>

<style>
.incorrect-letters-list {
  display: flex;
  margin-left: 20px;
}
.incorrect-letter-items {
  color: red;
}
.guessing-word-letter {
  font-size: 50px;
  color: mediumblue;
  font-weight: 500;
}
</style>
