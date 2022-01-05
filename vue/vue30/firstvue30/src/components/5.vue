<template>
<div>
  <div :class="{'active':isActive,'error':hasError}"></div>
  <div class="error" :class="{'active':isActive}"></div>
  <div :class="[activeClass,errorClass]"></div>
  <div :class="[flag?activeClass:errorClass]"></div>
</div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            flag: true,
            isActive:true,
            hasError:false,
            activeClass:'active',
            errorClass:'error'
        })
    
        return {
            ...toRefs(state),
        }
    }
}
</script>
<style scoped>
.active{
    margin-left: 200px;
    margin-top: 20px;
    height: 30px;
    width: 100px;
    border: 1px solid black;
}
.error{
    background-color: grey;
}
</style>

