<template>
  <div class="outer-wrapper">
    <div class="wrapper"> 
      <sun />
      <cloud />
      <div class="slide spring">
        <hill v-for="(item, index) in hills" :key="index" weather="spring" />
      </div>
      <div class="slide summer">
        <hill v-for="(item, index) in hills" :key="index" weather="summer" />
      </div>
      <div class="slide fall">
        <hill v-for="(item, index) in hills" :key="index" weather="fall" />
      </div>
      <div class="slide winter">
        <hill v-for="(item, index) in hills" :key="index" weather="winter" />
      </div>
    </div>
  </div>
</template>

<script>
import Sun from "@/components/weather/sun.vue";
import Cloud from "@/components/weather/cloud.vue";
import Hill from '@/components/ground/hill.vue';

export default {
  name: "main",

  components: {
    Sun, 
    Cloud,
    Hill
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

</style>

