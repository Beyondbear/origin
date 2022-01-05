<template>
<p>{{hello}}</p>
<p v-text="hello"></p>
<p v-html="hello"></p>

</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            hello:'<h1>hello world</h1>',
        })
    
        return {
            ...toRefs(state),
        }
    }
}
</script>