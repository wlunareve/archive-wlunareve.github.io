<template>
  <nav class="nav">
    <div class="nav__container">
      <a href="/" class="nav__title">ToD</a>
    </div>
  </nav>
</template>
  
<script>
  export default {
    name: "main",

    components: {
      
    },
};
</script>

<style lang="scss" scoped>
  .nav {
    width: 100vw;
    min-height: 3.25rem;
    position: fixed;
    border-bottom: 1px solid #dbdbdb;
    display: flex;
    justify-content: center;
    align-items: center;

    &__title {
      font-size: 1.5rem;
      font-weight: 800;
    }

    &__container {
      width: 1680px;
    }
  }

  .nav::hover {
    background-color: #f9f8f7
  }
</style>
