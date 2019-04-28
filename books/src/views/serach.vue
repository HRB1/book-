<template>
    <div class="container">
           <my-header>
            <div class="header-left1">
                 <i  class="iconfont icon-xiangzuo left1" @click="goback"></i>
            </div>
            <div class="header-center1">
                <p class="center1"><i class="iconfont icon-fangdajing"></i><input type="text" placeholder="请输入书名、作者、关键字"></p> 
            </div>
            <div class="header-right1">
                  <span class="right1">搜索</span>
            </div>
        </my-header>
        <main>
            搜索
        </main>
      
    </div>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{
        //点击返回上一页
       goback(){
           window.history.go(-1)
       }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>