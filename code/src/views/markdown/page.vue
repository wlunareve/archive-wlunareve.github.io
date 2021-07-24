<template>
  <!-- list -->
  <div id="markdown" 
    class="markdown__wrapper"
  >
    <div class="markdown">
      <component :is="currentArticleComponent" />
    </div>
  </div>
</template>

<script>
  import { computed, defineAsyncComponent } from 'vue'
  import { useRoute } from 'vue-router';
  export default {
    name: "MarkdownPage",

    components: {
      CommonWebDeveloperRoadmap2020: defineAsyncComponent(() => import('@md/common/web_developer_roadmap_2020.md'))
    },

    setup() {
      const capitalizeFirstLetter = (string) => {
        return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
      }

      const route = useRoute()
      const pathList = route.params.path
      const currentArticleComponent = computed(() => {
        return pathList
          .map(path => path.split('_'))
          .flat()
          .map(text => capitalizeFirstLetter(text))
          .join('')
      })
      
      return {
        currentArticleComponent
      }
    },
  };
</script>

<style>
  @import '../../css/markdown.css';
</style>