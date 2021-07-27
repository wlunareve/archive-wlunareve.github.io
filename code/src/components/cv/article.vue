<template>
  <div class="article">
    <a v-if="titleLink" 
      :href="titleLink"
      target="_blank" 
      rel="noopener noreferrer"
    >
      <h2 class="article__title"
        :class="{
          'article__title--has-link': titleLink
        }"
      >
        {{ title }}
      </h2>
    </a>
    <h2 v-else
      class="article__title"
    >
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

      titleLink: {
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

      &--has-link:hover {
        transform: translateY(-.1rem);
        color: $cyan-darken4;
      }
    }

    &__subtitle {
      text-indent: 2rem;
      color: $grey-darken1;
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