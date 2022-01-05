<template>
    <div>
        <span v-for="(value,key,index) in mark" :key="index">
            科目:{{key}},成绩:{{value}}<br>
        </span>
        <span>姓名:李德伟</span>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            mark:{
                C语言:90,
                离散:85,
                大学英语:89
            }
        })
    
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style lang="scss" scoped>

</style>