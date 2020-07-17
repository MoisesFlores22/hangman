<template>
  <div>
    <h1 :class="resultMessageClass">
      {{ resultMessage }}
    </h1>
    <h3 class="unguessed-word-message" v-if="isUserLoser">
      {{ unGuessedWordMessage }}
    </h3>
    <h3 class="instructions">
      {{ continueGameMessage }}
    </h3>
    <Button
      buttonColor="green"
      :text="returnToMainScreen"
      @click="value => redirectToMainScreen(value)"
    />
  </div>
</template>

<script>
import {
  CONTINUE_GAME_MESSAGE,
  RETURN_TO_MAIN_SCREEN,
  CONGRATS_MESSAGE,
  FAILED_MESSAGE,
  GAME_WIN,
  GAME_LOST,
} from '@/utils/constants';
import { mapGetters } from 'vuex';
import Button from '@/components/Button';

export default {
  components: {
    Button,
  },
  data() {
    return {
      continueGameMessage: CONTINUE_GAME_MESSAGE,
      returnToMainScreen: RETURN_TO_MAIN_SCREEN,
      result: this.$route.params.result,
    };
  },
  computed: {
    ...mapGetters({
      getWord: 'getWord',
    }),
    resultMessage() {
      if (this.result === GAME_WIN) {
        return CONGRATS_MESSAGE;
      }
      return FAILED_MESSAGE;
    },
    isUserLoser() {
      return this.result === GAME_LOST;
    },
    resultMessageClass() {
      return `result-message ${this.result === GAME_WIN ? GAME_WIN : GAME_LOST}`;
    },
    unGuessedWordMessage() {
      return `The word was "${this.getWord}"`;
    },
  },
  methods: {
    redirectToMainScreen() {
      this.$router.push({ name: 'Home' });
    },
  },
};
</script>

<style>
.instructions {
  color: blue;
  font-size: 25px;
}
.result-message {
  font-size: 50px;
  font-weight: 900;
}
.win {
  color: green;
}
.unguessed-word-message {
  font-size: 40px;
}
.lost {
  color: red;
}
</style>
