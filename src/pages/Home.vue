<template>
  <div>
    <img :src="logo">
    <h1 class="title"> Welcome To Hangman </h1>
    <h2 class="instructions"> To start the game please Click the button </h2>
    <Button text="EASY" buttonColor="green" @click="value => redirectToGame(value)" />
    <Button text="MEDIUM" buttonColor="orange" @click="value => redirectToGame(value)" />
    <Button text="HARD" buttonColor="red" @click="value => redirectToGame(value)" />
  </div>
</template>

<script>
import HangmanLogo from '@/assets/hangmanlogo.png';
import Button from '@/components/Button';

export default {
  components: {
    Button,
  },
  data() {
    return {
      logo: HangmanLogo,
    };
  },
  methods: {
    redirectToGame(level) {
      const difficulty = level.toLowerCase();
      this.$router.push({ name: 'New Game', params: { level: difficulty } });
    },
  },
};
</script>

<style scoped>
.title {
  color: red;
  font-size:  50px;
}

.instructions {
  color: blue;
  font-size: 25px;
}
</style>
