<template>
  <div id="clouds" class="clouds">
    <div v-for="({top, left, scale}, key) in cloud_count" 
      :key="key" 
      class="cloud__wrapper"
      :style="{
        top: top*20 + '%',
        left: left*98 + '%',
        transform: 'scale(' + scale + ')'
      }"
    >
      <div class="cloud cloud--upper-left"></div>
      <div class="cloud cloud--upper-right"></div>
      <div class="cloud cloud--vertical"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "clouds",

  data() {
    return {
      cloud_count: [...Array(40)].map(() => {
        return {
          top: Math.random(),
          left: Math.random(),
          scale: Math.random() + 0.2,
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>

.clouds {
  position: absolute;
  height: 100vh;
  width: 400vw;
}

.cloud__wrapper {
  position: absolute;
  width: 200px;
  height: 50px;
}

.cloud {
  position: absolute;
  box-sizing: border-box;
  background: white;
//   border: 0.25rem solid #3F9DD6;
  border-radius: 3rem;
  z-index: 0;

  &--vertical {
    width: 80%;
    height: 100%;
    transform: translate(12%, 100%);
    z-index: 0;
    box-shadow: 0 8px 5px rgb(0 0 0 / 10%);
  }

  &--upper-left {
    position: absolute;
    width: 40%;
    height: 120%;
    transform: translate(50%, 51%) rotate(69deg);
  }

  &--upper-right {
    position: absolute;
    width: 40%;
    height: 115%;
    transform: translate(93%, 64%) rotate(150deg);
  }
}
</style>