<template>
    <div>
        数字:<input type="text" v-model="num"><br/>
        对应的大写字母:{{strA}},对应的小写字母{{stra}}

    </div>
</template>

<script>
import { reactive, toRefs, watch } from 'vue'

export default {
    setup () {
        const state=reactive({
            num:0,
            strA:'A',
            stra:'a'
        })
        watch(()=>state.num,()=>{
            state.strA=String.fromCharCode(65+parseInt(state.num%26))
            state.stra=String.fromCharCode(97+parseInt(state.num%26))
        })
        

        return {
            ...toRefs(state),
        }
    }
}
</script>

<style lang="scss" scoped>

</style>