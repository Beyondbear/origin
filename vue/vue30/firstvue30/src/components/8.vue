<template>
    <div>
        <table border="1" align="center" width="400px">
            <caption>前端语言列表</caption>
            <tr>
                <td>序号</td>
                <td>姓名</td>
                <td>年龄</td>
            </tr>
            <tr align="center" v-for="(user,index) in listobj" :key="index">
                <td>{{user.id}}</td>
                <td>{{user.name}}</td>
                <td>{{user.age}}</td>
            </tr>
        </table>

    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            listobj: [{id:1,'name':'tom',age:'12'},{id:2,'name':'jak',age:'23'},{id:3,'name':'bill',age:'34'},{id:4,'name':'lick',age:'25'}]
        })
    
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style lang="scss" scoped>

</style>