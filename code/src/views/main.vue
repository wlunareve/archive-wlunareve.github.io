<template>
  <main class="outer-wrapper">
    <Navbar/>
    <section class="section spring"></section>
    <section class="section summer"></section>
    <section class="section fall"></section>
    <section class="section winter"></section>
  </main>
</template>

<script>
import Navbar from "@/components/basic/navbar.vue"
import { onMounted, onUnmounted } from '@vue/runtime-core';
export default {
  name: "main",

  components: {
    Navbar
  },

  setup() {
    
    onMounted(() => {
      add_scroll_color_event([255, 193, 193], '.spring')
    }) 

    onUnmounted(() => {
      console.log('unmounted!')
    })
  }
};

function add_scroll_color_event (center_rgb, selector) {
  const [red, green, blue] = center_rgb.map(color => 255 - color)
  const section = document.querySelector(selector)
  const sectionHeight = section.offsetHeight 
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY || window.pageYOffset
    const difference = (sectionHeight / 3) - scrollY
    const positiveDifference = difference < 0 ? -difference : difference

    let y = 1 + (positiveDifference) / 500
    y = y < 1 ? 1 : y // ensure y is always >= 1 (due to Safari's elastic scroll)
    const [r, g, b] = [red/y, green/y, blue/y]
      .map(Math.round)
      .map(color => 255 - color)
    section.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
  })
}
</script>

<style lang="scss" scoped>
.outer-wrapper {
  width: 100vw;
  height: 400vh;
}

.section {
  height: 100vh;
}
</style>

