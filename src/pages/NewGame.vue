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
    <span>
      <template v-for="(letter) in getMissinLettersArray">
        {{ letter }}
      </template>
    </span>
  </div>
</template>

<script>
import randomWords from 'random-words';
import Input from '@/components/Input';

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
      guesses: process.env.VUE_APP_MAX_NUMBER_OF_GUESSES,
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
      return this.word === this.missingLettersArray.join('')
    },
    isUserLooser() {
      return this.guesses === 0
    },
  },
  methods: {
    getWord(difficulty) {
      switch (difficulty) {
        case 'easy':
          return randomWords({ exactly: 1, maxLength: 3 });
        case 'medium':
          return randomWords({ exactly: 1, maxLength: 5 });
        case 'hard':
          return randomWords({ exactly: 1, maxLength: 9 });
        default:
          return '';
      }
    },
    populateMissingWordArray(currentWordArray) {
      currentWordArray.forEach(() => this.missingLettersArray.push('_'));
    },
    getLetterAparitions(letter) {
      return this.currentWordArray
        .map((element, i) => (element === letter ? i : -1))
        .filter(index => index !== -1);
    },
    isCorrectLetter(letter) {
      const letterAparitions = this.getLetterAparitions(letter);
      if (letterAparitions.length === 0) {
        this.incorrectWords.push(letter);
        this.guesses -= 1;
      } else {
        for (let index = 0; index < letterAparitions.length; index += 1) {
          this.$set(this.missingLettersArray, letterAparitions[index], letter);
        }
      }
    },
  },
  mounted() {
    const level = this.$route.params.level;
    this.word = this.getWord(level);
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
</style>
