<template>
    <div>
        前期所需要的知识{{myid}}:{{mytext}}<br/>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    props:['title','id'], //接受父组件传来的数据
    setup (props) {
        const state = reactive({
            mytext:props.title, //把数据变成响应式数据
            myid:props.id
        })
    
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style lang="scss" scoped>

</style>