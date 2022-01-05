<template>
    <div>
        长度:<input v-model="length" type="text" /><br />
        宽度:<input v-model="width" type="text" /><br />
        面积为:{{computedName}}<br />
        <button @click="add">计算周长</button>周长为:{{perimeter}}
    </div>
</template>

<script>
import { reactive, toRefs,computed } from 'vue'

export default {
    setup () {
        const state = reactive({
            length:0,
            width:0,
            perimeter:0
        })
        const computedName=computed(()=>{
            let areas=0
            areas=state.length*state.width*1
            return areas
        })
        const add=()=>{
            state.perimeter=2*(state.length*1+state.width*1)
        }
    
        return {
            ...toRefs(state),
            add,
            computedName
        }
    }
}
</script>

<style lang="scss" scoped>

</style>