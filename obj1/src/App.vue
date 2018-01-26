<template>
	<div>
		<div class="header">
			<img src="./../assets/logo.png" >
			<ul class="fr">
				<li v-if="userName">{{userName}}</li>
				<li v-if="userName">退出</li>
				<li v-if="!userName" @click="openDia('isLogShow')">注册</li>
				<li v-if="!userName" @click="openDia('isRegShow')">登录</li>
				<li @click="openDia('isAboutShow')">关于</li>
			</ul>
			<router-link to="/index">to foo</router-link>
		</div>
		<div class="content">
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</div>
		<div class="footer"><p>Copyright © 2013-2018 菜鸟教程  runoob.com All Rights Reserved. 备案号：闽ICP备15012807号-1</p></div>
		<my-dialog :isShow="isAboutShow" @onClose="getClose('isAboutShow')">
			<p>本报告在调研数据的基础上，采用定性与定量相结合的方式深入分析了专车市场发展的驱动因素与阻碍因素、专车市场背后的产业格局、专车企业的竞争格局、用户对专车市场的依赖程度、专车对其他交通工具运力的补充效应等，通过这五个章节的研究反映专车市场的发展态势和面临的问题。报告力求客观、深入、准确地反映中国专车市场发展情况，为政府、企事业单位和社会各界提供决策依据。 </p>
		</my-dialog>
		<my-dialog :isShow="isLogShow" @onClose="getClose('isLogShow')">
			<log-form  @getloginUserName="getSuccessLog" @closeLogin="getCloseLogin"></log-form>
		</my-dialog>
		<my-dialog :isShow="isRegShow" @onClose="getClose('isRegShow')" >
			<reg-form @closeRegin="getCloseRegin"></reg-form>
		</my-dialog>
	</div>
</template>

<script>
	import Dialog from "./dialog"
	import LogForm from "./form/logForm"
	import RegForm from "./form/regForm"
	import logFormVue from './form/logForm';
	export default {
		components:{
			myDialog:Dialog,LogForm,RegForm
		},
		data (){
			return {
				userName:"",
				isAboutShow:false,
				isLogShow:false,
				isRegShow:false
			}
		},
		methods:{
			openDia (a){
				this[a]=true;
				//console.log(a)
			},
			getClose(attr){
				//console.log(attr)
				this[attr]=false;
			},
			getSuccessLog(attr){
				//console.log(attr)
				this.userName=attr.username;
				this.getClose('isLogShow')
			},
			getCloseLogin (){
				this.getClose('isLogShow')
			},
			getCloseRegin (){
				this.getClose('isRegShow')
			}
		},
		
	}
</script>

<style>
	html,body,div,span,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,abbr,address,cite,code,del,dfn,em,img,ins,kbd,q,samp,small,strong,sub,sup,var,b,i,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,figcaption,figure,footer,header,hgroup,menu,nav,section,summary,time,mark,audio,video {
	margin:0;
	padding:0;
	/*border:0;
	*/
    /*outline:0;
	*/
    /*font-size:100%;
	vertical-align:baseline;
	background:transparent;
	*/
}
h1,h2,h3,h4,h5,h6,em,i {
	font-weight:100;
	font-style:normal;
}
ul,ol,li {
	list-style-type:none;
}
a {
	color:#666;
	text-decoration:none;
	outline:0;
}
a:hover {
	text-decoration:none;
}
.fl{
	float: left;
}
.fr{
	float: right;
}
.clearfix:after {
    display: block;
    clear: both;
    content: "";
    visibility: hidden;
    height: 0
}

.clearfix {
    zoom: 1
}

.header{
	height: 100px;
	background-color: #333;
}
.header img{
	float: left;
	width: 60px;
	height: 60px;
	margin-top: 20px;
	margin-left: 40px;
}
.header ul{
	margin-right: 40px;
}
.header ul>li{
	float: left;
	line-height: 80px;
	padding: 10px;
	color: #fff;
	cursor: pointer;
	position: relative;
}
.header ul>li:before{
	content: "";
	width: 1px;
	height: 14px;
	position: absolute;
	top: 44px;
	left: 0;	
	background-color: red;
}
.header ul>li:first-child:before{
	background-color:transparent;
}
.footer{
	text-align: center;
	background-color: #E3E3E3;
	height: 50px;
}
.footer p{
	text-align: center;
	color: #666;
	line-height: 50px;
}
</style>