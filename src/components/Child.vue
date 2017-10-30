<template>
  <div class="child">
  This is DatePicker
  <p v-on:click="incrementCounter">{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'Child',
  props: ['message'],
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    incrementCounter() {
      this.counter += 1;
      this.$emit('increment', this.counter);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
