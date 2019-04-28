<template>
    <div class="serchBox">
         <p @click="$router.push({name:'serach'})"><i class="iconfont icon-fangdajing"></i>请输入你搜索的内容</p>
         <span v-if="flag"><i @click="$emit('changeClass')" class="iconfont icon-fenlei-xuanzhong"></i></span>
    </div>
</template>
<script>
import "../js/flexible";
export default {
    props:["flag"],
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
$font-size:37.5px;
@function rem($px){
    @return $px / $font-size *1rem;
}

.serchBox{
    width: 100%;
    height: rem(44px);
    font-size: 16px;
    display: flex;
    align-items: center;
    padding: 0 5%;
    margin-top: 2%;
    span{
        width: 10%;
        height: 75%;;
        display: flex;
        justify-content:center;
        align-items: center;
        color: #999;
        border:1px solid #ccc;
        margin-left: 5%;

        i{
             font-size: 20px;
        }
    }
    p{
        width: 85%;
        flex: 1;
         color: #999;
         border:1px solid #ccc;
         height: 80%;;
         display: flex;
         align-items: center;
         padding-left: 10%;
    }
}
</style>