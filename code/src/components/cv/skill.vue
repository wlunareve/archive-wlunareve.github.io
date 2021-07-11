<template>
  <div class="skill">
    <h3 class="skill__name">{{ name }}</h3>
    <p>
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

    &__name {
      font-size: 1.2rem;
    }

    &__level {
      display: flex;

      &-item {
        margin: 0 .2rem;
        width: 3rem;
        height: .5rem;
        background: $gray;
        transform: skewX(27.5deg);

        &--active {
          background: $skill-active;
        }
      }
    }
  }
</style>