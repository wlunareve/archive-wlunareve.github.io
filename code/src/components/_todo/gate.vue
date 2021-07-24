<template>
  <section class="gate">
    <h1>“有一種美味，品的是細節講究”</h1>
    <!-- <div> -->
      <img class="gate__image" src="/src/assets/coffee_beans.png">
    <!-- </div> -->
  </section>
</template>

<script>
export default {
  name: 'gate'
}
</script>

<style lang="scss" scoped>
@import "../css/RWD_mixin.scss";
  .gate {
    position: relative;
    margin-top: 3.25rem;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 3rem;
      @include laptop {
        font-size: 2.5rem;
      }
      @include mobile {
        font-size: 2rem;
      }
      @include small-mobile {
        font-size: 1.5rem;
      }

    }

    &__image {
      position: absolute;
      right: 0;
      bottom: 11%;
      height: 70%;
      
      @include pad {
        height: 50%;
        bottom: 22%;
      }
      @include mobile {
        height: 50%;
        right: 12%
      }
      @include small-mobile {
        height: 40%;
        right: 30%;
        bottom: 28%;
        opacity: 0.5;
      }
    }
  }
</style>