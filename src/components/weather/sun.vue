<template>
  <div id='sun'>

  </div>
</template>

<script setup>
import { defineProps, reactive } from "vue";

// setup 中的 defineProps 與 vue2 的 props 只能用一個
defineProps({
  
});

const state = reactive({ count: 0 });
</script>

<style lang="scss" scoped>
  #sun {
    position: absolute;
    margin: 3rem;
    top: 0;
    width: 200px;
    height: 200px;
    background-color: #FFDE00;
    border-radius: 50%;
    box-shadow:
      0 0 0 20px #FFDE0080,
      0 0 0 40px #FFDE0040,
      0 0 0 60px #FFDE0020,
      0 0 0 80px #FFDE0010,
      0 0 0 100px #FFDE0000,
      0 0 40px 100px #FFDE0010;
    animation:
      sunrise 2s infinite linear forwards,
      rays 2s 2s infinite linear;
  }

  @keyframes sunrise {
    0% {
      box-shadow: none;
    }
  }

  @keyframes rays {
    0% {
      box-shadow: 
      0 0 0 0 #FFDE0080,
      0 0 0 20px #FFDE0080,
      0 0 0 40px #FFDE0040,
      0 0 0 60px #FFDE0020,
      0 0 0 80px #FFDE0010,
      0 0 40px 100px #FFDE0010;
    }
    100% {
      box-shadow: 
      0 0 0 20px #FFDE0080,
      0 0 0 40px #FFDE0040,
      0 0 0 60px #FFDE0020,
      0 0 0 80px #FFDE0010,
      0 0 0 100px #FFDE0000,
      0 0 40px 100px #FFDE0010;
    }
  }
</style>