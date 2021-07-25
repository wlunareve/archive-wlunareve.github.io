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
  import { capitalizeFirstLetter } from '@/utils/string-formator.js'
  import { computed, defineAsyncComponent } from 'vue'
  import { useRoute } from 'vue-router';

  export default {
    name: "MarkdownPage",

    components: {
      CommonWebDeveloperRoadmap2020: defineAsyncComponent(() => import("../../assets/markdown/common/web_developer_roadmap_2020.md")),
      HtmlSemanticHtmlTag: defineAsyncComponent(() => import("../../assets/markdown/html/semantic_html_tag.md")),
      Css30CssBestPractice: defineAsyncComponent(() => import("../../assets/markdown/css/30_css_best_practice.md")),
      CssCssGuildlineAndStylelint: defineAsyncComponent(() => import("../../assets/markdown/css/css_guildline_and_stylelint.md")),
      CssCssInJsThroughAnalysis: defineAsyncComponent(() => import("../../assets/markdown/css/css_in_js_through_analysis.md")),
      CssCssVariableInCompany: defineAsyncComponent(() => import("../../assets/markdown/css/css_variable_in_company.md")),
    },

    // TODO 
    // 解決線上 static file 的問題
    // 增加 list 篩選跟分頁
    // RWD
    // 寫一篇相關文章，說明如何將 markdown 的內容顯示在私人部落格

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
        currentArticleComponent,
      }
    },
  };
</script>

<style>
  @import '../../css/markdown.css';
</style>