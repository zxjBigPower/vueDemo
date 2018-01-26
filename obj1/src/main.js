// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//import App from './App'
import LayOut from './layOut'
//import router from './router'
import VueRouter from "vue-router"
import IndexPage from "./pages/index.vue"
import vueResource from "vue-resource"
import PageDetails from "./pages/details.vue"
const Foo = { template: '<div>foo</div>' }
Vue.use(VueRouter)
Vue.use(vueResource)
var router=new VueRouter({
	//mode:"history",
	routes:[
  {
    path:'/',
    component:IndexPage
  },
  {
    path:"/sss",
    redirect:Foo
  },
  {
    path:'/foo',
    component:Foo
  },
  {
    path:'/index',
    component:IndexPage
  },
  {
    path:'/detail',
    component:PageDetails
  }
	]
})
//Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#App',
  router,
  render: h => h(LayOut)
  // template: '<LayOut/>',
  // components: { LayOut }
})
