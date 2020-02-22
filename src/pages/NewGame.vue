<template>
  <div>
    <h2>
      Incorrect Words:
      <template v-for="(word, index) in incorrectWords">
        <span :key="index">
          {{ word }}
        </span>
      </template>
    </h2>
    <h1>
      Remaining Guesses: <span> {{ remainingGuesses }} </span>
    </h1>
    <template v-for="(letter, index) in missingLettersArray">
      <span :key="index">
        {{ letter }}
      </span>
    </template>
  </div>
</template>

<script>
import randomWords from 'random-words';

export default {
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
  },
  methods: {
    getWord(difficulty) {
      switch (difficulty) {
        case 'easy':
          return randomWords({ exactly: 1, maxLength: 3 });
        case 'medium':
          return randomWords({ exactly: 1, minLength: 3, maxLength: 5 });
        case 'hard':
          return randomWords({ exactly: 1, maxLength: 9 });
        default:
          return '';
      }
    },
  },
  mounted() {
    const level = this.$route.params.level;
    this.word = this.getWord(level);
    this.currentWordArray = this.word[0].split('');
    this.currentWordArray.forEach(() => this.missingLettersArray.push('_'));
  },
};
</script>

<style>

</style>
