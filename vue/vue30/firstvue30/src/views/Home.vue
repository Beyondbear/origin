<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @是一个别名，相当于/src文件夹
//导入/src/components/HelloWorld.vue组件，取名为HelloWorld
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld  //定义子组件名称为HelloWorld
    
  }
}
</script>
