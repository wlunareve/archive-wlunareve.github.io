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
    <p class="article__paragraph">
      {{ paragraph }}
    </p>
    <div
      v-for="({ title: ulTitle, content: liContents}, index) in ulContents" 
      :key="index"
      class="lineup"
    >
      <span class="lineup__title">{{ ulTitle }}</span>
      <ul>
        <li v-for="(li_content, index) in liContents" 
          :key="index"
        >
          {{ li_content }}
        </li>
      </ul>
    </div>
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

      paragraph: {
        type: String,
        default: ''
      },
      
      ulContents: {
        type: Array,
        required: true
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import '../../css/color';

  .article {
    display: flex;
    flex-direction: column;

    &__title {
      margin: .25rem 0;
      font-size: 1.25rem;
      font-weight: bold;

      &--has-link:hover {
        transform: translateY(-.1rem);
        color: $cyan-darken4;
      }
    }

    &__subtitle {
      text-indent: 2rem;
      color: $grey-darken1;
    }

    &__paragraph {
      text-indent: 2rem;
    }
  }

  .lineup {
    margin: .25rem 0;

    &__title {
      font-weight: bold;
    }

    ul {
      margin-left: 3.5rem;
      list-style: disc;
    }

    li {
      text-indent: 0;
      line-height: 1.68;
    }
  }
</style>