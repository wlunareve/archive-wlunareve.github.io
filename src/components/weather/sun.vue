<template>
  {{ props_object }}
</template>

<script setup>
import { defineProps, reactive } from "vue";

// setup 中的 defineProps 與 vue2 的 props 只能用一個
defineProps({
  props_object: {
    type: Object,
    default: () => ({}),
  },
});

const state = reactive({ count: 0 });
</script>

<style lang="scss" scoped>
a {
  color: red;
}
</style>