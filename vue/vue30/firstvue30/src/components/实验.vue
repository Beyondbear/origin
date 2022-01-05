<template>
<div>
  <h2>记事本</h2>
  <header id="top">
    <input type="text" v-model="data.mrvalue" @keyup.enter="add" />
    <ul id="lb">
      <!-- v-for循环列出列表 -->
      <li v-for="(item, index) in data.list" :key="index">
        <!-- 前面的序号 -->
        <span id="xh">{{ index + 1 }}</span>
        <!-- 列表内容 -->
        <span>{{ item }}</span>
        <!-- 关闭按钮 -->
        <!-- 添加点击移除事件，要传形参 -->
        <button id="qc" @click="remove(index)">删除</button>
      </li>
      <!-- v-指令   当不等于0时显示 -->
      <span v-if="data.list.length != 0">
       条数：{{ data.list.length }}
      </span>
      <!-- v-show指令   当不等于0时显示 -->
      <button @click="clear" v-show="data.list.length != 0" id="clear">清除所有记录</button>
    </ul>
  </header>
  </div>
</template>
<script>
import { reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
           data:{
                    list:["学习","吃饭","睡觉"],
                    mrvalue:"好好学习，天天向上"
                }
        })
        const add = () => state.data.list.push(state.data.mrvalue)
        const remove = (index) => state.data.list.splice(index,1);
        const clear = () => state.data.list=[]

        return {
            ...toRefs(state),
            add,
            remove,
            clear
        }
    }
}

</script>

<style scoped>
#lb {
  list-style: none;
}
#lb li {
  position: relative;
  border-bottom: 1px solid black;
  width: 400px;
  height: 50px;
  line-height: 50px;
}
#xh {
  background-color: tomato;
  padding: 10px;
  margin-right: 10px;
  height: 30px;
  width:30px;
  border-radius:10px;
}
#qc {
  position: absolute;
  top: 10px;
  right: 0px;
  background-color: antiquewhite;
  padding: 2px;
  height: 30px;
  line-height: 30px;
  cursor: pointer;
}
#clear{
    margin: 10px 100px;
}
</style>
