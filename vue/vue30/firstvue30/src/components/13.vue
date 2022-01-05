<template>
    <div>
        {{msg}}
        <button data-aid="world" @click="handleClick('Vue',$event)">
            事件对象按钮
        </button>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            msg: 'Hello',
        });
        const handleClick=(argp,e)=>{
            state.msg=state.msg+argp+e.srcElement.dataset.aid;
            e.srcElement.style.background='red';
        };
    
        return {
            ...toRefs(state),
            handleClick
        };
    },
}
</script>

<style lang="scss" scoped>

</style>