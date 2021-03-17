<template>
  <Sun 
    :props_object="test_data"> 
  </Sun>
</template>

<script>
import Sun from "@/components/weather/sun.vue";

export default {
  name: "main",

  components: {
    Sun,
  },

  data() {
    return {
      test_data: {
        'a': {
          'b': 1
        },
        'c': {
          'd': 2
        }
      }
    }
  }
};
</script>