<template>
  <div class="markdown">
    <component :is="currentArticleComponent" />
  </div>
</template>

<script>
  import { capitalizeFirstLetter } from '@/utils/string-formator.js'
  import { computed, defineAsyncComponent } from 'vue'
  import { useRoute } from 'vue-router';

  export default {
    name: "MarkdownPage",

    components: {
      CommonSeoBasic: defineAsyncComponent(() => import("../../assets/markdown/common/seo_basic.md")),
      JsDayjsCode: defineAsyncComponent(() => import("../../assets/markdown/js/dayjs_code.md")),
      CommonWebDeveloperRoadmap2020: defineAsyncComponent(() => import("../../assets/markdown/common/web_developer_roadmap_2020.md")),
      HtmlSemanticHtmlTag: defineAsyncComponent(() => import("../../assets/markdown/html/semantic_html_tag.md")),
      Css30CssBestPractice: defineAsyncComponent(() => import("../../assets/markdown/css/30_css_best_practice.md")),
      CssCssGuildlineAndStylelint: defineAsyncComponent(() => import("../../assets/markdown/css/css_guildline_and_stylelint.md")),
      CssCssInJsThroughAnalysis: defineAsyncComponent(() => import("../../assets/markdown/css/css_in_js_through_analysis.md")),
      CssCssVariableInCompany: defineAsyncComponent(() => import("../../assets/markdown/css/css_variable_in_company.md")),
    },

    // TODO 
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

<style lang="scss" scoped>
  @import '../../css/RWD_mixin';

  .markdown {
    margin: 0 auto;
    max-width: 1280px;

    @include laptop {
      margin: 0 1rem;
    }
  }
</style>

<style>
  @import '../../css/markdown.css';

  ul {
    list-style-type: disc;
  }

  ol {
    list-style-type: decimal;
  }

  li {
    display: list-item;
    text-align: -webkit-match-parent;
  }
</style>