<template>
    <div>
        <button @click="sub">-</button>
        <span>{{counter}}</span>
        <button @click="add">+</button>

    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            counter:1 
        })
        const add=()=>{
            state.counter++
        }
        const sub=()=>{
            state.counter--
        }
    
        return {
            ...toRefs(state),
            add,
            sub
        }
    }
}
</script>

<style lang="scss" scoped>
button,span{
    width:30px;
    font-size:28px;
    margin: 10px;
}

</style>