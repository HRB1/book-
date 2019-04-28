<template>
  <dl :class="classname" @click="detailsFn">
    <dt>
      <img v-lazy="img">
    </dt>
    <dd>
      <template v-if="classname=='rowClass'">
        <p>{{title}}</p>
      </template>
      <template v-if="classname=='cloClass'">
        <p class="title">{{title}}</p>
        <p>{{zuozhe}}</p>
        <p>{{news}}</p>
        <p>{{miaoshu}}</p>
      </template>
    </dd>
  </dl>
</template>
<script>
export default {
  props: ["title", "zuozhe", "miaoshu", "news", "classname", "img","id"],
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    detailsFn(){
      //点击跳转详情，将id,title,路由信息的name属性传过去
      this.$router.push({name:"details",query:{id:this.id,title:this.title,name:this.$route.name}})
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.rowClass {
  width: 33.3%;
  padding-bottom: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
  dt {
    width: 90%;
    height: 150px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  dd {
    width: 90%;
  }
}

.cloClass {
  width: 95%;
  display: flex;
  margin: 0 auto;
  margin-bottom: 3%;
  dt {
    width: 30%;
    height: 150px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  dd {
    flex: 1;
    margin-left: 2%;
  }
  .title {
    font-size: 18px;
    font-weight: bold;
  }
}
</style>