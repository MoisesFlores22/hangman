<template>
  <button @click="clickAction" :class="buttonClass">
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    buttonColor: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  methods: {
    clickAction() {
      this.$emit('click', this.text);
    },
  },
  computed: {
    buttonClass() {
      return `button-commons ${this.buttonColor}`
    },
  }
};
</script>

<style scoped>
.button-commons {
  height: 50px;
  width: 150px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 900;
  outline: none;
  cursor: pointer;
}
.red {
  background-color: #ff0011;
  color: #ffffff;
}

.green {
  background-color: green;
  color: #ffffff;
}

.orange {
  background-color: darkorange;
  color: black;
}
</style>
