<template>
    <div>
        子组件<br />
        <button v-on:click="count++">
            您单机了{{ count }}次
        </button>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
    export default {
        setup() {
            const state=reactive({
                count:0
            })

        return{
            ...toRefs(state)
        }
            
        }
        
    }
</script>

<style lang="scss" scoped>

</style>