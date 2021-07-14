<template>
  <div class="skill">
    <div class="title">
      <i class="title__icon"
        :class="[ icon.source, icon.name ]"
      />
      <h3 class="title__name">{{ name }}</h3>
    </div>
    <p class="skill__description">
      {{ description }}
    </p>
    <div class="skill__level">
      <div v-for="(levelItem, index) in levelArray"
        :key="index"
        class="skill__level-item"
        :class="{
          'skill__level-item--active': index <= level - 1
        }"
      />
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
export default {
  name: 'skill',

  props: {
    icon: {
      name: String,
      default: ''
    },

    name: {
      name: String,
      required: true
    },

    description: {
      type: String,
      required: true
    },
    
    level: {
      type: Number,
      required: true
    }
  },

  setup(props) {
    const TOTAL_LEVEL_COUNT = ref(3)
    const levelArray = computed(() => [...Array(TOTAL_LEVEL_COUNT.value)])

    return {
      levelArray
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../css/color';
  $skill-active: #084c41;

  .skill {
    display: flex;
    flex-direction: column;
    margin: 0 1rem 1rem 0;

    &__description {
      margin: .5rem 0;
      min-height: 3rem;
    }

    &__level {
      display: flex;

      &-item {
        margin: 0 .2rem;
        width: 3rem;
        height: .5rem;
        font-size: .75rem;
        background: $gray;
        transform: skewX(27.5deg);

        &--active {
          background: $skill-active;
        }
      }
    }
  }

  .title {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    &__icon {
      margin-right: .5rem;
    }

    &__name {
      font-size: 1rem;
    }
  }
</style>