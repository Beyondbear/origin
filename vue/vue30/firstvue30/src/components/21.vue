<template>
    <div>
        请输入书籍关键字:
        <input type="text" v-model="mytext" /><p></p>
        查询结果:
        <ul>
            <li v-for="(item,index) in computedList" :key="index">
                {{item}}
            </li>
        </ul>
    </div>
</template>

<script>
import { reactive, toRefs,computed } from 'vue'
import test from '../../public/test.json'

export default {
    setup () {
        let a=JSON.parse(test);
        const state = reactive({
            mytext: '',
            list:[]
        })
        state.list=a.list;
        const computedList=computed(()=>{
            const newlist=state.list.filter(item=>item.includes(state.mytext))
            return newlist
        })
    
        return {
            ...toRefs(state),
            computedList
        }
    }
}
</script>

<style lang="scss" scoped>

</style>