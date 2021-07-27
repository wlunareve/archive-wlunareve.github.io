<template>
  <!-- list -->
  <div id="markdown" 
    class="markdown__wrapper"
  >
    <router-view />
  </div>
</template>

<script>
  export default {
    name: "Markdown",

    setup() {
      console.log('markdown');
      return {
      }
    },
  };
</script>

<style lang="scss" scoped>
  @import '../../css/color';
</style>