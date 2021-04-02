<template>
  <div id="spring" class="spring">
    <cloud />
    <div class="mount">
      <div class="board" @click="showWaterer">Click</div>
      <div class="seed"></div>
      <div v-show="isWatererShow" class="watherer"></div>
    </div>
    <hill v-for="(item, index) in hills" :key="index" weather="spring" />
  </div>
</template>

<script>
import Hill from "@/components/ground/hill.vue";
import Cloud from "@/components/weather/cloud.vue";
import { ref } from "vue";

export default {
  name: "spring",

  components: {
    Hill,
    Cloud,
  },

  setup() {
    const hills = [...Array(10)];

    const isWatererShow = ref(false);
    const showWaterer = () => {
      isWatererShow.value = !isWatererShow.value;
    };
    return {
      hills,
      isWatererShow,
      showWaterer,
    };
  },
};
</script>

<style lang="scss" scoped>
#spring {
  position: relative;
}

.mount {
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  width: 20rem;
  height: 10rem;
  background: #519a56;
  border-radius: 8rem 8rem 0 0;
}

.board {
  position: absolute;
  box-sizing: border-box;
  color: white;
  background: brown;
  height: 2rem;
  transform: translate(3rem, -4.5rem) rotate(-16deg);
  border: 2px solid white;
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    width: 0.75rem;
    transform: translate(1.75rem, -5%);
    height: 2.85rem;
    background: brown;
  }
}

.seed {
  position: absolute;
  width: 0.5rem;
  height: 1rem;
  margin: auto;
  left: 0;
  right: 0;
  background: #d0da9b;
  transform: translate(0, -100%);

  &::before {
    content: "";
    display: block;
    width: 1rem;
    height: 1rem;
    background: green;
    transform: translate(25%, -86%) rotate(18deg);
    border-radius: 100% 0;
  }

  &::after {
    content: "";
    display: block;
    width: 1rem;
    height: 1rem;
    background: green;
    transform: translate(-75%, -200%);
    border-radius: 0 100%;
  }
}

.watherer {
  position: absolute;
  height: 1rem;
  width: 1rem;
  background: blue;
}
</style>