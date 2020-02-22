<template>
  <button @click="clickAction" :class="buttonColor">
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
};
</script>

<style scoped>
.red {
  height: 50px;
  width: 150px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 900;
  background-color: #ff0011;
  color: #ffffff;
  outline: none;
  cursor: pointer;
}

.green {
  height: 50px;
  width: 150px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 900;
  background-color: green;
  color: #ffffff;
  outline: none;
  cursor: pointer;
}

.orange {
  height: 50px;
  width: 150px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 900;
  background-color: darkorange;
  color: black;
  outline: none;
  cursor: pointer;
}
</style>
