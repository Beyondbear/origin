<template>
    <div>
        <p v-once>{{msg}}</p>
        <p>{{msg}}</p>
        <p>
            <input type="text" name="" v-model="msg">
        </p>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            msg:'hello'
        })
    
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style lang="scss" scoped>

</style>