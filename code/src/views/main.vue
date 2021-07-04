<template>
  <main class="wrapper">
    <Navbar />
    <div class="content">
      <CV />
    </div>
  </main>
</template>

<script>
import Navbar from "@/components/basic/navbar.vue";
import CV from '@/views/cv.vue'
import { onMounted, onUnmounted } from "vue";
export default {
  name: "main",

  components: {
    Navbar,
    CV
  },

  setup() {
    onMounted(() => {
      // add_scroll_color_event([255, 193, 193], '.wrapper')
    });

    onUnmounted(() => {
      console.log("unmounted!");
    });
  },
};

// function add_scroll_color_event(center_rgb, selector) {
//   const [red, green, blue] = center_rgb.map((color) => 255 - color);
//   const section = document.querySelector(selector);
//   const sectionHeight = section.offsetHeight;
//   window.addEventListener("scroll", () => {
//     const scrollY = window.scrollY || window.pageYOffset;
//     const difference = sectionHeight / 3 - scrollY;
//     const positiveDifference = difference < 0 ? -difference : difference;

//     let y = 1 + positiveDifference / 100;
//     y = y < 1 ? 1 : y; // ensure y is always >= 1 (due to Safari's elastic scroll)
//     const [r, g, b] = [red / y, green / y, blue / y]
//       .map(Math.round)
//       .map((color) => 255 - color);
//     section.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
//   });
// }
</script>

<style lang="scss" scoped>
@import "../css/RWD_mixin.scss";

.wrapper {
  width: 100vw;
  // text-align: center;
  display: flex;
  justify-content: center;
}

.content {
  position: relative;
  width: 1680px;
  margin-top: 3.2rem;

  @include laptop {
    width: 1120px;
  }
}

.section {
  height: 100vh;
}
</style>

