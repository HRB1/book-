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
                  <i class="iconfont icon-user" @click="goLign"></i>
            </div>
        </my-header>
        <main class="main">
           <my-serach :flag="flag"></my-serach>
           <div class="swiper-container banner">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(item,index) in homeList" :key="index">
                        <img v-lazy="item.ad_pic_url" alt="">
                    </div>
                </div>
           </div>
           <div class="main-type">
              <dl>
                  <dt><i class="iconfont icon-lingsheng"></i></dt>
                  <dd>限免</dd>
              </dl>
               <dl>
                  <dt><i class="iconfont icon-lingsheng"></i></dt>
                  <dd>限免</dd>
              </dl>
               <dl>
                  <dt><i class="iconfont icon-lingsheng"></i></dt>
                  <dd>限免</dd>
              </dl>
               <dl>
                  <dt><i class="iconfont icon-lingsheng"></i></dt>
                  <dd>限免</dd>
              </dl>
               <dl>
                  <dt><i class="iconfont icon-lingsheng"></i></dt>
                  <dd>限免</dd>
              </dl>
           </div>
           <div class="main-hot">
               <div class="hotBox">
                   <h3>本周最热</h3>
                    <div class="main-hot-con">
                         <my-item v-for="(item,index) in hotList" :key="index" 
                          :zuozhe="item.authors"
                          :miaoshu="item.summary"
                          :title="item.title"
                          :news="item.latest"
                          :img="item.cover"
                          :id="item.fiction_id"
                         :classname="rowClass"></my-item>
                    </div>
               </div>
                <div class="BangBox">
                   <h3>重磅推荐</h3>
                    <div class="main-hot-con">
                         <my-item v-for="(item,index) in zhongbang" :key="index" 
                          :zuozhe="item.authors"
                          :miaoshu="item.summary"
                          :title="item.title"
                          :news="item.latest"
                          :img="item.cover"
                          :id="item.fiction_id"
                         :classname="cloClass"></my-item>
                    </div>
               </div>
               
           </div>
        </main>
    </div>
</template>
<script>
import Swiper from "swiper";

export default {
    props:{

    },
    components:{
    },
    data(){
        return {
           flag:false,
           homeList:[],
           hotList:[],
           zhongbang:[],
           rowClass:"rowClass",
            cloClass:"cloClass"
        }
    },
    computed:{

    },
    methods:{
        //初始化轮播图
         init(){
            new Swiper(".banner",{
            })
         },
         goLign(){
             this.$router.push({name:"login"})
         }


    },
    created(){
       //请求数据
       this.$http.get("/api/citylist").then(res=>{
    
           //轮播图
          this.homeList=res.data.items[0].data.data;
          //本周最火
          this.hotList=res.data.items[1].data.data;
                //  console.log(this.hotList)
          //重榜推荐
          this.zhongbang=res.data.items[2].data.data;
          this.$nextTick(()=>{
              this.init();//执行轮播图
          })
       })
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
@import "swiper/dist/css/swiper.min.css";
@import "../css/bookCity.scss";

</style>