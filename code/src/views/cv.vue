<template>
  <div class="cv">
    <Sidebar></Sidebar>
    <Content></Content>
  </div>
</template>

<script>
import Sidebar from "@/components/cv/sidebar.vue"; 
import Content from "@/components/cv/content.vue"; 

export default {
  name: 'cv',

  components: {
    Sidebar,
    Content,
  },
}
</script>

<style lang="scss" scoped>
  .cv {
    max-width: 1280px;
    display: grid;
    grid-template-columns: 15rem 1fr;
    height: calc(100vh - 3.25rem)
  }
</style>