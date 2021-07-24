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

  .markdown {
    margin: 0 auto;
    width: 1280px;
  }
</style>