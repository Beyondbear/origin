<template>
    <div>
        <a href="http://www.baidu.com" target="_blank">百度</a><br>
        <a href="http://www.baidu.com" target="_blank" @click="handleClick($event)">百度</a><br>
        <a href="http://www.baidu.com" target="_blank" @click.prevent="handleClick1()">百度</a><br>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({

        });
        const handleClick=(e)=>{
            e.preventDefault();
        };
        const handleClick1=()=>{};

        return {
            ...toRefs(state),
            handleClick,
            handleClick1
        }
    }
}
</script>

<style lang="scss" scoped>

</style>