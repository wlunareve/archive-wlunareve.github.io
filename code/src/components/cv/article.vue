<template>
  <div class="article">
    <h2 class="article__title">{{ title }}</h2>
    <p class="article__subtitle">{{ subtitle }}</p>
    <ul>
      <li v-for="(li_content, index) in li_contents" :key="index">{{li_content}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'article',

  props: {
    title: {
      type: String,
      required: true
    },

    subtitle: {
      type: String
    },
    
    li_contents: {
      type: Array,
      required: true
    }
  },

  // setup(props) {

  //   return 
  // }
}
</script>

<style lang="scss" scoped>
  .article {
    display: flex;
    flex-direction: column;
    
    &__title {
      font-size: 1.5rem;
    }
    
    &__subtitle { 
      color: gray;
      text-indent: 2rem;
    }

    ul {
      list-style: disc;
    }

    li {
      margin: 0rem 2rem;
      line-height: 1.68;
    }
  }
</style>