<template>
  <div class="cv">
    <Sidebar />
    <Content />
  </div>
</template>

<script>
  import Sidebar from "@/components/cv/sidebar.vue"; 
  import Content from "@/components/cv/content.vue"; 

  export default {
    name: 'CV',

    components: {
      Sidebar,
      Content,
    },
  }
</script>

<style lang="scss" scoped>
  .cv {
    display: grid;
    grid-template-columns: 15rem 1fr;
    max-width: 1280px;
    height: calc(100vh - 3.25rem);
  }
</style>