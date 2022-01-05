<template>
    <div>
        输入源字符串:<input v-model="msg" placeholder="输入信息" />
        <p>使用计算属性将字符串转换成倒序字符串:{{computedName}}</p>
    </div>
</template>

<script>
import { reactive, toRefs,computed } from 'vue'

export default {
    setup () {
        const state = reactive({
            msg:"Hello World",
        })
        const computedName=computed(()=>{
            return state.msg.split('').reverse().join('')
        })
    
        return {
            ...toRefs(state),
            computedName
        }
    }
}
</script>

<style lang="scss" scoped>

</style>