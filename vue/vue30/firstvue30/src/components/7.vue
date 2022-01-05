<template>
    <div>
        <table border="1" align="center" width="400px">
            <caption>前端语言列表</caption>
            <tr>
                <td>序号</td>
                <td>内容</td>
            </tr>
            <tr align="center" v-for="(item,index) in list" :key="index">
                <td>{{index+1}}</td>
                <td>{{item}}</td>
            </tr>
        </table>

    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            list:['HTML','CSS','JAVASCRIPT','BOOTSTRAP','VUE']
        })
    
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style lang="scss" scoped>
h2{
    color:red;
}
</style>