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
  import markdownList from '@md/list.json'
  import { computed, defineAsyncComponent } from 'vue'
  import { useRoute } from 'vue-router';
  
  const capitalizeFirstLetter = (string) => {
    return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
  }

  const generateMarkdownComponents = () => {
    return markdownList.reduce((components, { path }) => {
      const key = path
        .split(/\/|_/)
        .map(text => capitalizeFirstLetter(text))
        .join('')

      // can't use Template literals and vite resolve alias
      return {
        ...components,
        [key]: defineAsyncComponent(() => import('/static/markdown/' + path + '.md'))
      }
    }, {})
  }

  export default {
    name: "MarkdownPage",

    components: generateMarkdownComponents(),

    setup() {
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