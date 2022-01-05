<template>
    <div>
        <h2 v-if="Math.random()>0.5">随机数大于0.5</h2>
        <h2 v-else>随机数小于等于0.5</h2>
        <template v-if="OK">
            <h1>Vue</h1>
            <p>有条件渲染</p>
        </template>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            OK: true,
        })
    
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style lang="scss" scoped>
h2{
    color: red;
}
</style>