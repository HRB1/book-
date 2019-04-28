// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import plugins from './plugins';//封装全局组件
import "./fonts/iconfont.css";
import "./js/flexible";
import axios from "axios";
import VueLazyload from "vue-lazyload";//懒加载插件

Vue.use(plugins)//注册封装全局组件

Vue.use(VueLazyload,{//注册懒加载插件
  loading:"../static/timg.gif"
})

Vue.config.productionTip = false

Vue.prototype.$http=axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  plugins,
  components: { App },
  template: '<App/>'
})
