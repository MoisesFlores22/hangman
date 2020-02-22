<template>
  <input
    class='answer-input'
    id="answerInput"
    @input="(e) => updateInput(e.target.value)"
    type="text"
  >
</template>

<script>
export default {
  methods: {
    updateInput(value) {
      const input = document.getElementById('answerInput');
      input.value = '';
      this.$emit('updateInput', value);
    },
  },
};
</script>

<style>
.answer-input {
  display: flex;
  margin: 0 auto;
}
</style>
