<template>
    <h1>{{ msg }}</h1>

    <p>
        <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Documentation</a>
        <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
    </p>

    <button @click="state.count++">count is: {{ state.count }}</button>
    <p>
        Edit
        <code>components/HelloWorld.vue</code> to test hot module replacement.
    </p>
    <div>
        vuex: {{ vuex_count }}
        <button @click="increment">add vuex count</button>
    </div> 
    <div>ajax: {{ public_login_status }}</div>
</template>

<script setup>
import { defineProps, reactive } from 'vue'

defineProps({
    msg: String
})

const state = reactive({ count: 0 })
</script>

<script>
import { get_public_login_status } from '@/utils/login.js'
import { mapMutations, mapState } from 'vuex'
export default {
    data() {
        return {
            public_login_status: {},
        }
    },

    computed: {
        ...mapState({
            vuex_count: 'count'
        })
    },

    async mounted() {
        this.public_login_status = await get_public_login_status()
    },

    methods: {
        ...mapMutations([
            'increment'
        ])
    }
}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>

<style lang="scss" scoped>

a {
  color: red;
}

</style>