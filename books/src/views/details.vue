<template>
  <div class="container">
    <my-header>
      <div class="header-left1">
        <i class="iconfont icon-xiangzuo left1" @click="goback"></i>
      </div>
      <div class="header-center1">{{$route.query.title}}</div>
      <div class="header-right1">
        <i class="iconfont icon-shouye" @click="$router.push({name:'bookCity'})"></i>
      </div>
    </my-header>
    <main class="main">
      <div class="main-details">
        <div class="details-box">
          <dl class="cloClass" v-for="(item,index) in detailsArr" :key="index" :ind="item.fiction_id" >
            <dt>
              <img v-lazy="item.cover">
            </dt>
            <dd>
              <p class="title">{{item.title}}</p>
              <p class="score">{{item.score}}.评分</p>
              <p>作者：{{item.authors}}</p>
              <p>价格：{{item.price}}金币/千字</p>
              <p>字数：{{item.word_count}}字</p>
            </dd>
          </dl>
          <div class="details-caozuo" v-if="detailsArr.length">
              <span @click="detailChild">开始阅读</span><span>下载</span>
          </div>
          <div class="error" v-else>
              <p>该书已下架，没有详细信息！！</p>
          </div>
          <div class="miaoshu">
              <div v-for="(item,index) in detailsArr" :key="index">
                   <p> {{item.summary}}</p>
                   <p class="news">最新：{{item.latest}}</p>
              </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {
      detailsArr: [],
      cloClass: "cloClass",
    };
  },
  computed: {},
  methods: {
      //返回上一页
    goback() {
      window.history.go(-1);
    },
    //点击跳转阅读
    detailChild(){
        //跳转到阅读
       this.$router.push({name:"read",query:{title:this.$route.query.title}})
    }
  },
  created() {
    let id = this.$route.query.id;//接受id
    //通过id请求本书的详情数据,根据路由的name属性判断筛选的数据
    this.$http.get("/api/details?id=" + id,{params:{route:this.$route.query}}).then(res => {
        if(res.data.length){
               this.detailsArr = res.data;
        }else{
            return;
        }
    });
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
@import "../css/details.scss";
</style>