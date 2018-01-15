<template>
	<div>
		<div class="header">
			<img src="./../assets/logo.png" >
			<ul class="fr">
				<li>注册</li>
				<li>登录</li>
				<li>关于</li>
			</ul>
		</div>
		<div class="content">
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</div>
		<div class="footer"><p>Copyright © 2013-2018 菜鸟教程  runoob.com All Rights Reserved. 备案号：闽ICP备15012807号-1</p></div>
	</div>
</template>

<script>
	export default {
		data (){
			return {
				
			}
		}
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
body{
	background-color: #E3E3E3;
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