<template>
   <div class="container">
        <my-header>
            <div class="header-left">
                  <span>签</span>
            </div>
            <div class="header-center">
                  <router-link to="/" tag="span">书城</router-link>
                  <router-link to="/bookshelf" tag="span">书架</router-link>
            </div>
            <div class="header-right">
                  <i  class="iconfont icon-user" @click="goLign"></i>
            </div>
        </my-header>
        <main class="main">
            <my-serach @changeClass="changeClass" :flag="flag"></my-serach>
            <div class="main-con">
                  <div class="main-hot-con">
                         <my-item v-for="(item,index) in xaing" :key="index" 
                          :zuozhe="item.authors"
                          :miaoshu="item.summary"
                          :title="item.title"
                          :news="item.latest"
                          :img="item.cover"
                          :id="item.fiction_id"
                         :classname="cloClass"></my-item>
                    </div>
            </div>
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
            flag:true,
            xaing:[],
            cloClass:"cloClass"
        }
    },
    computed:{

    },
    methods:{
        // //点击改变类名
        changeClass(){
            this.cloClass=this.cloClass=="cloClass"?"rowClass":"cloClass"
        },
          goLign(){
             this.$router.push({name:"login"})
         }

    },
    created(){
         this.$http.get("/api/selflist").then(res=>{
          this.xaing=res.data.items;
       })
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
.main{
    width: 100%;
    height: 100%;
    flex: 1;
    overflow: auto;
}
.main-con{
    width: 100%;
     .main-hot-con{
                width: 90%;
                display: flex;
                margin: 0 auto;
                flex-flow: wrap;
                margin-top: 5%;
               
            }

}

</style>