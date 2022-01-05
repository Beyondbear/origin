<template>
    <div>
        学习Vue 3.0之前需要掌握的知识包括:<br/>
        <blogpost v-for="post in posts" :key="post.id" :title="post.title" :id="post.id"></blogpost>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import blogpost from './Childcomp1.vue'

export default {
    components:{
        blogpost
    },
    setup () {
        const state = reactive({
            posts:[{id:1,title:'HTML'},{id:2,title:'CSS'},{id:3,title:'JavaScript'},{id:4,title:'jQuery'}]
        })
    
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style lang="scss" scoped>

</style>