<template>
  <div class="article">
    <h2 class="article__title">
      {{ title }}
    </h2>
    <p class="article__subtitle">
      {{ subtitle }}
    </p>
    <ul>
      <li v-for="(li_content, index) in liContents" 
        :key="index"
      >
        {{ li_content }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Article',

    props: {
      title: {
        type: String,
        required: true
      },

      subtitle: {
        type: String,
        default: '',
      },
      
      liContents: {
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
  @import '../../css/color';

  .article {
    display: flex;
    flex-direction: column;

    &__title {
      font-size: 1.5rem;
    }

    &__subtitle {
      text-indent: 2rem;
      color: $gray;
    }

    ul {
      list-style: disc;
    }

    li {
      margin: 0 2rem;
      line-height: 1.68;
    }
  }
</style>