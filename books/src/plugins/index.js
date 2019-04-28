export default {
    install(Vue){
        //头部组件
        Vue.component("my-header",()=>import("../components/my-header"));
        //搜索框组件
        Vue.component("my-serach",()=>import("../components/my-serch"));
        //列表组件
        Vue.component("my-item",()=>import("../components/my-item"))
    }
}