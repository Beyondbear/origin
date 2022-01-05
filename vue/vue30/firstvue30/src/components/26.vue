<template>
    <div>
        父组件<p />
        <child-comp></child-comp> <p />
        <child-comp></child-comp> <p />
        <child-comp></child-comp>

    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import ChildComp from './ChildComp.vue'

export default {
    components:{
        ChildComp
        },
    setup () {
        const state = reactive({
            count: 0,
        })
    
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style lang="scss" scoped>

</style>