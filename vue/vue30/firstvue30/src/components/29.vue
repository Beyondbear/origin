<template>
        <el-button>{{msg}}</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="primary" round>主要按钮</el-button>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            msg:'Hello Element Plus World!',
        })
    
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style lang="scss" scoped>

</style>