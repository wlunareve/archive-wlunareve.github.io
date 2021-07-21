<template>
  <main id="app" 
    class="wrapper"
  >
    <Navbar />
    <div class="content">
      <router-view />
    </div>
  </main>
</template>

<script>
  import Navbar from "@/components/basic/navbar.vue";
  export default {
    name: 'App',

    components: {
      Navbar
    }  
  }
</script>

<style lang="scss" scoped>
  @import './css/RWD_mixin';

  .wrapper {
    display: flex;
    justify-content: center;
    // font-family: "Inter", "Roobert", "Helvetica Neue", Helvetica, Arial, sans-serif;
    // -webkit-font-smoothing: antialiased;
    // -moz-osx-font-smoothing: grayscale;
  }

  .content {
    position: relative;
    margin-top: 3.2rem;
    width: 1680px;

    @include laptop {
      width: 1120px;
    }
  }
</style>