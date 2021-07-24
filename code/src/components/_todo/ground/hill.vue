<template>
    <div 
      class="hill"
      :class="`hill--${weather}`" 
    >
    </div>
</template>


<script setup>
import { defineProps, reactive } from "vue";

// setup 中的 defineProps 與 vue2 的 props 只能用一個
defineProps({
  weather: {
    props: String,
    require: true
  }
});

</script>

<style lang="scss" scoped>
  .hill {
    position: relative;
    left: 0;
    bottom: 0;
    width: 10vw;
    height: 10vh;
    background: white;
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