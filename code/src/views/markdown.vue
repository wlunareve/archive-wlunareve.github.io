<template>
  <!-- list -->
  <div id="markdown">
    <div class="list">
      <article v-for="(markdown, index) in markdownList"
        :key="index"
      >
        <header class="list__title">
          {{ markdown.title }}
          {{ markdown.time }}
        </header>
        <p class="list__introduction">
          {{ markdown.introduction }}
        </p>
        {{ markdown.path }}
        <a :href="markdown.path">
          詳細...
        </a>
      </article>
    </div>
  </div>
  <!-- content -->
  <!-- <HelloWorld /> -->
</template>

<script>
  import markdownList from '@md/list.json'
  import HelloWorld from '@md/common/web_developer_roadmap_2020.md'
  export default {
    name: "Markdown",

    components: {
      HelloWorld
    },

    setup() {
      console.log(markdownList)

      return {
        markdownList
      }
    },
  };
</script>

