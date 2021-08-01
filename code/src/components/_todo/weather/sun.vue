<template>
  <div v-show="should_show_sun"
    id="sun" 
    class="sun__wrapper" 
    :style="cssProps"
  >
    <div class="sun" />
  </div>
</template>

<script setup>
  import { defineProps, ref, computed, reactive } from "vue";

  const hour = ref(new Date().getHours());

  const should_show_sun = computed(() => hour.value <= 18 && hour.value >=6)

  const now = computed(() => hour.value % 12)
  const angle = computed(() => {
    if (now.value >= 6) return (now.value - 6) * -15
    return now.value * -15 - 90
  })

  const cssProps = computed(() => {
    return {
      '--sunDeg': `${angle.value}deg`
    }
  })  
</script>


<style lang="scss" scoped>
  @import '../../../css/RWD_mixin';

  $sun-length: 7rem;
  $sun-length--mobile: 3rem;
  $sun-color-orange: rgb(255, 166, 0);
  $sun-color-yellow: rgb(255, 255, 0);

  .sun {
    position: relative;
    width: $sun-length;
    height: $sun-length;
    background-color: $sun-color-orange;
    border-radius: 50%;
    filter: saturate(.75);
    box-shadow:
      0 0 10px $sun-color-orange,
      0 0 60px $sun-color-orange,
      0 0 200px $sun-color-yellow,
      inset 0 0 80px $sun-color-yellow;
    transform: translate(50%, 0);

    @include pad {
      width: $sun-length--mobile;
      height: $sun-length--mobile;
    }

    &__wrapper {
      position: absolute;
      bottom: 3rem;
      right: $sun-length--mobile;
      display: flex;
      justify-content: flex-end;
      width: 50%;
      transform: rotate(var(--sunDeg));
      pointer-events: none;
      z-index: 1;
      transform-origin: left center;

      @include pad {
        top: 2rem;
        bottom: initial;
        transform: unset;
      }
    }
  }
</style>