<template>
    <div>
<span>{{count}}</span>
<button @click="setMsg('world')">修改count的值</button>

    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            count: 'hello',
        })
        const setMsg=(data)=>{
            state.count=data;
        }
        return {
            ...toRefs(state),
            setMsg
        }
    }
}
</script>

<style lang="scss" scoped>

</style>