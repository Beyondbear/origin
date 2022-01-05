<template>
    <div>
        <span>{{msg1}}</span><br>
        <button @click="run">点击查看</button>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            msg: '🖐🖐那可真是有够恶心的呢',
            msg1:'杨宝你不会是喜欢我吧'
        })
        const getMsg=()=>{
            alert(state.msg);
        }
        const run=()=>{
            getMsg();
        }
    
        return {
            ...toRefs(state),
            run
        }
    }
}
</script>

<style lang="scss" scoped>

</style>