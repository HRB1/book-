<template>
    <div>
        <h2>登录</h2>
        用户名：<input type="text" placeholder="请输入用户名" v-model="valname">
        <br>
        密码：<input type="password" placeholder="请输入密码">
        <button type="button" @click="submit">登录</button>
        <span @click="goback">返回首页</span>
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
            valname:"" 
        }
    },
    computed:{

    },
    methods:{
       submit(){
           //向后台请求数据验证登录信息
           this.$http.post("/api/login",{name:this.valname}).then(res=>{
            if(res.data.code){
                //登录成功后，设置本地存储
                window.localStorage.setItem("userId",this.valname);
                if(window.localStorage.getItem("userId")){
                    //跳转到详情页
                    this.$router.push({path:'/read'})
                }
            }
           })
        //    
      
       },
       goback(){
          this.$router.push({name:"bookCity"})
       }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">
   div{
       width: 100%;
       height: 400px;;
       background: #eee;
       font-size: 20px;
   }
    h2{
        font-size: 30px;
        width: 30%;
        text-align: center;
        margin: 0 auto;   
      }
   input{
       width: 100%;
       height: 50px;

   }
   button{
       width: 100px;
       height: 30px;;
   }
</style>