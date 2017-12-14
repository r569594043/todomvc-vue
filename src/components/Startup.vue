<template>
  <div id="root">
    <div>{{ message }}</div>
    <span v-bind:title="message">
      鼠标悬停几秒钟查看此处动态绑定的提示信息！
    </span>
  </div>
</template>

<script>
  export default {
    name: 'Startup',
    data() {
      return {
        message: 'Hello Vue!',
      };
    },
    watch: {
    },
    created() {
    },
    computed: {
    },
    components: {
    },
    methods: {
    },
    directives: {
    },
  };
</script>

<style scoped>
  
</style>