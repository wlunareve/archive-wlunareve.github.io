<template>
  <div id="sun" class="sun__wrapper" :style="cssProps">
    <div class='sun' />
  </div>
</template>

<script setup>
import { defineProps, ref, computed, reactive } from "vue";
  // 太陽出現12小時 共180度
  // 1小時轉 15 度

  // setup 中的 defineProps 與 vue2 的 props 只能用一個
  defineProps({
  
  });

  const hour = ref(new Date().getHours());
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
  .sun__wrapper {
    position: absolute;
    display: flex;
    justify-content: flex-end;
    width: 80vw;
    left: 50vw;
    bottom: 0;
    transform: translate(-50%, 0) rotate(var(--sunDeg));
    pointer-events: none;
    z-index: 1;
  }


  .sun {
    position: relative;
    // left: 50vw;
    // bottom: 0;
    width: 8rem;
    height: 8rem;
    background-color: #FFDE00;
    border-radius: 50%;
    box-shadow:
      0 0 0 20px #FFDE0080,
      0 0 0 40px #FFDE0040,
      0 0 0 60px #FFDE0020,
      0 0 0 80px #FFDE0010,
      0 0 0 100px #FFDE0000,
      0 0 40px 100px #FFDE0010;
    transform: translate(50%, 0);
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