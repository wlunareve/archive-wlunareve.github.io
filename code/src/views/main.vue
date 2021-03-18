<template>
  <div class="outer-wrapper">
    <div class="wrapper"> 
      <div class="slide spring">
        <Sun />
        <div v-for="(item, index) in hills" :key="index" class="hill hill--spring" />
        <!-- <div class="mountain" /> -->
      </div>
      <div class="slide summer">
        <div v-for="(item, index) in hills" :key="index" class="hill hill--summer" />
      </div>
      <div class="slide fall">
        <div v-for="(item, index) in hills" :key="index" class="hill hill--fall" />
      </div>
      <div class="slide winter">
        <div v-for="(item, index) in hills" :key="index" class="hill hill--winter" />
      </div>
    </div>
  </div>
</template>

<script>
import Sun from "@/components/weather/sun.vue";

export default {
  name: "main",

  components: {
    Sun,
  },

  data() {
    return {
      hills: [...Array(10)]
    }
  }
};
</script>

<style lang="scss" scoped>
  .outer-wrapper {
    width: 100vh;
    height: 100vw;
    transform: rotate(-90deg) translateX(-100vh);
    transform-origin: top left;
    overflow-y: scroll;
    overflow-x: hidden;
    position: absolute;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
  

  .wrapper {
    display: flex;
    flex-direction: row;
    width: 400vw;
    transform: rotate(90deg) translateY(-100vh);
    transform-origin: top left;
  }

  .slide {
    width: 100vw;
    height: 100vh;
    background:  beige;
    display: flex;
    align-items: flex-end;
    font-size: xx-large;
  }

  .spring {
    // background: linear-gradient(0deg, #A4CF66, #00B9F2)
  }

  .hill {
    position: relative;
    left: 0;
    bottom: 0;
    width: 10vw;
    height: 10vh;
    border-radius: 100% 100% 0 0;

    &--spring {
      background: #779E36;
    }

    &--summer {
      background: green;
    }

    &--fall {
      background: #B56228;
    }

    &--winter {
      background: #634329;
    }
  }
</style>

