// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//import App from './App'
import LayOut from './components/layOut'
//import router from './router'
import VueRouter from "vue-router"
import IndexPage from "./pages/index"
import vueResource from "vue-resource"
Vue.use(VueRouter)
Vue.use(vueResource)
let router=new VueRouter({
	mode:"history",
	routes:[
	{path:'/',component:IndexPage}
	]
})
//Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#layOut',
  router,
  
  render: h => h(LayOut)
 /* template: '<App/>',
  components: { App }*/
})
