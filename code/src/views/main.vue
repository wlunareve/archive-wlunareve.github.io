<template>
  <main class="outer-wrapper">
    <Navbar/>
    <section class="spring"></section>
    <section class="summer"></section>
    <section class="fall"></section>
    <section class="winter"></section>
  </main>
</template>

<script>
import Navbar from "@/components/basic/navbar.vue"
export default {
  name: "main",

  components: {
    Navbar
  },
};
</script>

<style lang="scss" scoped>
.outer-wrapper {
  width: 100vw;
  height: 400vh;
}

// .spring {
//   height: 135vh;
//   background: linear-gradient(180deg, #94D39E, #ebf8e1, #EA8C6A);
// }

// .summer {
//   height: 135vh;
//   background: linear-gradient(180deg, #EA8C6A, #ebf8e1, #DF9A23);
// }

// .fall {
//   height: 135vh;
//   background: linear-gradient(180deg, #DF9A23, #ebf8e1, #7DC4C6);
// }

// .winter {
//   height: 100vh;
//   background: linear-gradient(180deg, #7DC4C6, #ebf8e1);
// }
</style>

