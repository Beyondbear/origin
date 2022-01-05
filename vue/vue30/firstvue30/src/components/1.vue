<template>
    <div>
        {{timeMsg}}
    </div>
</template>
<script>
import {reactive,toRefs,onMounted} from 'vue'
export default {
    setup() {
        const state=reactive({
            timeMsg:new Date()
        })
        onMounted(()=>{
            setInterval(()=>{
                state.timeMsg=new Date();
            },1000)
        })
        return {...toRefs(state)}
    }
}
</script>