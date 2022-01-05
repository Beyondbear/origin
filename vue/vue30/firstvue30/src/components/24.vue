<template>
    <div class="film">
        <div class="filmleft">
            <!--  -->
        </div>
        <div class="filmRight">
            <div class="rightTop">
                <div class="rightTopleft">
                    <!--  -->
                </div>
                <div class="rightTopRight">
                    <!--  -->
                </div>
            </div>
            <div class="rightBootom">
                <!--  -->
            </div>
        </div>

    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            count: 0,
        })
    
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style lang="scss" scoped>
.film{
    margin: 0 auto;
    width:1050px;
    border: 1px solid grey;
    height: 550px;
}
.filmLeft{
    width: 550px;
    height: 500px;
    float: left;
}
.filmLeft h3{
    text-align: center;
}
.filmLeft ul{
    list-style: none;
}
.filmRight{
    width: 500px;
    height: 550px;
    float: left;
    background-color: bisque;
}
.rightTopleft{
    float: left;
    margin: 20px 15px 5px 10px;
}
.rightTopRight{
    float: left;
    margin: 0px 0px 5px 5px;
}
.rightBootom{
    clear:both;
    margin: 0px 10px;
}
.rightBootom p{
    line-height: 12px;
}
</style>