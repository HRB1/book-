import Vue from 'vue'
import Router from 'vue-router';
const BookCity=()=> import("@/views/BookCity");
const Bookshelf=()=>import("@/views/bookshelf");
const Serach=()=>import("@/views/serach");
const Details=()=>import("@/views/details");
const Read=()=>import("@/views/read");
const Login=()=>import("@/views/login");
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'bookCity',
      component: BookCity
    },
    {
      path: '/bookshelf',
      name: 'bookshelf',
      component: Bookshelf
    },
    {
      path: '/serach',
      name: 'serach',
      component: Serach
    },
    {
      path: '/details',
      name: 'details',
      component: Details,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/read',
      name: 'read',
      component: Read,
      beforeEnter(to,from,next){
        if(window.localStorage.getItem("userId")){
          next();
        }else{
          alert("请登录!!!!")
            next("/login")
        }
      }
    },
  ]
})
