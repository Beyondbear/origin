<template>
    <div>
        <input v-model="message" placeholder="输入信息" /><br />
        <span>输入信息是{{message}}</span>
        <br/><br/>
        <hr />
        <textarea v-model="mulMsg" placeholder="add multiple lines"></textarea>
        <span>多行文本的内容为</span>
        <p>{{mulMsg}}</p>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            message:'',
            mulMsg:''
        })
    
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style lang="scss" scoped>

</style>