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
  @font-face {
    font-family: JasonHandwriting;
    src: 
      url('./assets/fonts/JasonHandwriting/JasonHandwriting1.ttf') format('truetype');
  }

  @font-face {
    font-family: DiamorScript;
    src: url('./assets/fonts/DiamorScript/Diamor.ttf') format('truetype');
  }


  @import './css/RWD_mixin';

  .wrapper {
    display: flex;
    justify-content: center;
    text-align: justify;
    // font-family: "Inter", "Roobert", "Helvetica Neue", Helvetica, Arial, sans-serif;
    // -webkit-font-smoothing: antialiased;
    // -moz-osx-font-smoothing: grayscale;
  }

  .content {
    position: relative;
    margin-top: 3.2rem;
    width: 80vw;
    max-width: 1680px;

    @include laptop {
      width: 100vw;
    }
  }
</style>