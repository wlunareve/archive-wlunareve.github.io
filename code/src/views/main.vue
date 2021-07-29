<template>
  <main id="main" 
    class="main"
  >
    <div class="introduction">
      <h1 class="introduction__title">I am ToD</h1>
      <div class="introduction__content">
        <p>努力嘗試分享的小小前端</p>
        <p>希望這邊有任何一篇文章能夠幫助到你！</p>
      </div>
    </div>
    <Sun /> 
  </main>
</template>

<script>
  import Sun from '@/components/_todo/weather/sun.vue'
  export default {
    name: "Main",

    components: {
      Sun
    },
  };
</script>

<style lang="scss" scoped>
  .main {
    position: relative;
    width: 100%;
    height: calc(100vh - 3.25rem);
  }

  .introduction {
    position: absolute;
    top: 50%;
    left: 25%;
    transform: translate(-12.5%, -50%);

    &__title {
      font-size: 6rem;
      font-family: DiamorScript;
      color: brown;
    }

    &__content {
      font-size: 2rem;
      font-family: JasonHandwriting;
    }
  }
</style>
