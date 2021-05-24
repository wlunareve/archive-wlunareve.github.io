<template>
  <section class="gate">
    <h1>“有一種美味，品的是細節講究”</h1>
    <img class="gate__image" src="/src/assets/coffee_beans.png">
  </section>
</template>

<script>
export default {
  name: 'gate'
}
</script>

<style lang="scss" scoped>
  .gate {
    margin-top: 3.25rem;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 3rem;
    }

    &__image {
      position: absolute;
      right: 0;
      height: 100%;
    }
  }
</style>