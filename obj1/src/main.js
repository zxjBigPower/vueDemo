// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//import App from './App'
import LayOut from './layOut'
//import router from './router'
import VueRouter from "vue-router"
import IndexPage from "./pages/index"
import vueResource from "vue-resource"
import PageDetails from "./pages/details"
import detailCount from "./pages/detail/count"
import detailAnalysis from "./pages/detail/analysis"
import detailForecast from "./pages/detail/forecast"
import detailPublish from "./pages/detail/publish"
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
    path:'/index',
    component:IndexPage
  },
  {
    path:'/detail',
    component:PageDetails,
    children:[
      {path:"count",component:detailCount},
      {path:"analysis",component:detailAnalysis},
      {path:"forecast",component:detailForecast},
      {path:"publish",component:detailPublish}
    ]
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
