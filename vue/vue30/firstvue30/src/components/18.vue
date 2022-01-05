<template>
    <div>
        <table border="1" align="center" width="400px">
            <caption><h2>购物车</h2></caption>
            <tr align="center">
                <td>货名</td>
                <td>单价</td>
                <td>数量</td>
            <td>合计</td>
            </tr>
            <tr align="center" v-for="(user,index) in package1" :key="index">
                <td>{{user.name}}</td>
                <td>{{user.price}}</td>
                <td>{{user.count}}</td>
                <td>{{user.price*user.count}}</td>
            </tr>
            <tr align="center">
                <td>总价</td>
                <td colspan="3">{{computedname}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
import { reactive, toRefs,computed } from 'vue'

export default {
    setup () {
        const state = reactive({
            package1:[
                {
                    name:'华为m3',
                    price:4566,
                    count:2
                    },
                {
                    name:'华为m4',
                    price:4166,
                    count:3
                    },
                {
                    name:'苹果11',
                    price:5200,
                    count:2
                    },
                {
                    name:'小米11',
                    price:2180,
                    count:4
                    }
                ],
        });
        const computedname=computed(()=>{
            let prices=0;
            for(let i=0;i<state.package1.length;i++){
                prices+=state.package1[i].price*state.package1[i].count;
            }
            return prices;
        });
    
        return {
            ...toRefs(state),
            computedname
        }
    }
}
</script>

<style lang="scss" scoped>

</style>