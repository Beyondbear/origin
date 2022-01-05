<template>
    <div>
        <!-- 文本框 -->
        用户名:<input v-model="test" />{{test}}<br />
        <!-- 下拉列表框 -->
        前端语言:
        <select v-model="selected">
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="JAVASCRIPT">JAVASCRIPT</option>
            <option value="jQuery">jQuery</option>
            <option value="Vue3.0">Vue 3.0</option>
        </select>
        <span>选择是:{{selected}}</span><br />
        <!-- 单选按钮 -->
        性别:
        <input type="radio" id="boy" value="男" v-model="picked">
        <label for="boy">男</label>
        <input type="radio" id="girl" value="女" v-model="picked">
        <label for="girl">女</label>
        <br />
        <span>选择是:{{picked}}</span>
        <br />
        <!-- 复选框 -->爱好:
        <input type="checkbox" id="one" value="羽毛球" v-model="checkedNames">
        <label for="one">羽毛球</label>
        <input type="checkbox" id="two" value="音乐" v-model="checkedNames">
        <label for="two">音乐</label>
        <input type="checkbox" id="three" value="乒乓球" v-model="checkedNames">
        <label for="three">乒乓球</label>
        <br />
        <span>选择的爱好是:{{checkedNames}}</span>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            test:"lb",
            selected:"Vue 3.0",
            picked:"女",
            checkedNames:["音乐","乒乓球"]
        })
    
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style lang="scss" scoped>

</style>