<template>
  <div>
    <img :src="logo">
    <div class="win-lose-balance">
      <h2>
        Wins: {{ wins }}
      </h2>
      <h2>
        Losses: {{ loses }}
      </h2>
    </div>
    <h1 class="title"> Welcome To Hangman </h1>
    <h2 class="instructions"> To start the game please Click the button </h2>
    <Button text="EASY" buttonColor="green" @click="value => redirectToGame(value)" />
    <Button text="MEDIUM" buttonColor="orange" @click="value => redirectToGame(value)" />
    <Button text="HARD" buttonColor="red" @click="value => redirectToGame(value)" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
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
  computed: {
    ...mapState({
      wins: 'wins',
      loses: 'loses',
    }),
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
.win-lose-balance {
  display: flex;
  justify-content: space-around;
}
.instructions {
  color: blue;
  font-size: 25px;
}
</style>
