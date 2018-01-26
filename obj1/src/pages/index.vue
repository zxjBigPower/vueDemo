<template>
	<div id="layOut" class="clearfix">
    <!-- <input type="text" v-model="baidu" @keyup="getbaiAPI"> -->
		<div class="main-left fl">
			<div class="conBox">
				<div class="conBox1">
					<h3>全部产品</h3>
					<template v-for="product in productList">
						<h6>{{product.title}}</h6>
						<ul v-for="item in product.list">
							<li>
								<a :href="item.url">{{item.name}}</a> 
								<span v-if="item.hot" :class="{hot:item.hot}" >hot</span>
							</li>
						</ul>
						<div v-if="!product.last" class="hr"></div>
					</template>				
				</div>
				<div class="conBox2">
					<h3>最新消息</h3>
					<ul>
						<li v-for="item in newsList"><a :href="item.url">{{item.title}}</a><span v-if="item.hot" class="hot">hot</span></li>
					</ul>
				</div>
			</div>
		</div>
		<div class="main-right fr">
			<slider-top :sendToSon="userInfo" :getStopTime="slideTime" @onchange="getSlideIndex"></slider-top>
			<div class="con-r-b">
				<ul>
					<li v-for="(item,index) in boardList">
						<div>
							<div class="img fl" :class="['con-r-b-img-'+(index+1)]"></div>
							<h4>{{item.title}}</h4>
							<p>{{item.description}}</p>
							<a href="">立即购买</a>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import sliderTop from "./../components/slider";
import logFormVue from "../components/form/logForm.vue";
export default {
  components: {
    sliderTop
  },
  data() {
    return {
      baidu: "",
      slideTime: 2000,
      userInfo: [
        {
          title: "xx1",
          src: require("./../assets/slideShow/pic1.jpg"),
          href: "detail/count"
        },
        {
          title: "xx2",
          src: require("./../assets/slideShow/pic2.jpg"),
          href: "detail/borderList"
        },
        {
          title: "xx3",
          src: require("./../assets/slideShow/pic3.jpg"),
          href: "detail/showInfo"
        },
        {
          title: "xx4",
          src: require("./../assets/slideShow/pic4.jpg"),
          href: "detail/num"
        }
      ],
      boardList: [
        {
          title: "开放产品",
          description: "开放产品是一款开放产品",
          id: "car",
          toKey: "analysis",
          saleout: false
        },
        {
          title: "品牌营销",
          description: "品牌营销帮助你的产品更好地找到定位",
          id: "earth",
          toKey: "count",
          saleout: false
        },
        {
          title: "使命必达",
          description: "使命必达快速迭代永远保持最前端的速度",
          id: "loud",
          toKey: "forecast",
          saleout: true
        },
        {
          title: "勇攀高峰",
          description: "帮你勇闯高峰，到达事业的顶峰",
          id: "hill",
          toKey: "publish",
          saleout: false
        }
      ],
      newsList: "",
      productList: {
        pc: {
          title: "PC产品",
          list: [
            {
              name: "数据统计",
              url: "http://starcraft.com"
            },
            {
              name: "数据预测",
              url: "http://warcraft.com"
            },
            {
              name: "流量分析",
              url: "http://overwatch.com",
              hot: true
            },
            {
              name: "广告发布",
              url: "http://hearstone.com"
            }
          ]
        },
        app: {
          title: "手机应用类",
          last: true,
          list: [
            {
              name: "91助手",
              url: "http://weixin.com"
            },
            {
              name: "产品助手",
              url: "http://twitter.com",
              hot: true
            },
            {
              name: "智能地图",
              url: "http://maps.com"
            },
            {
              name: "团队语音",
              url: "http://phone.com"
            }
          ]
        }
      }
    };
  },
  methods: {
    getSlideIndex(index) {
      //console.log(index);
    },
    getbaiAPI() {
      console.log(2222);
      
    }
  }, //https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=
  mounted() {
    this.$http.get("http://localhost:3000/getNewsList").then(
      res => {
        console.log(res.body);
      },
      error => {
        console.log(error);
      }
    )
    this.$http.get("http://localhost:3000/db").then((res)=>{
      console.log(res.body)
       this.newsList=res.body.getNewsList
    },(err)=>{
     
    })
    this.$http.jsonp("https://sug.so.360.cn/suggest",{  
                                params:{  
                                    word:'a'  
                                }  
                            }).then((res)=>{
      console.log(res.body)
       //this.newsList=res.body.getNewsList
    },(err)=>{
     
    })
  }
};
</script>

<style scoped>
#layOut {
  width: 90%;
  margin: 0 auto;
}
.main-left {
  width: 20%;
}
.main-right {
  width: 80%;
}
.main-left .conBox {
  box-sizing: border-box;
  padding: 10px;
}
.main-left .conBox h3 {
  padding-left: 30px;
  background-color: #31b0d5;
}
.main-left .conBox h6 {
  font-weight: 700;
  margin-left: 30px;
  font-size: 16px;
  padding: 10px 0;
}
.main-left .conBox ul {
  font-size: 14px;
  margin-left: 30px;
}
.main-left .conBox ul li {
  position: relative;
   white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.main-left .conBox ul li span {
  position: absolute;
  top: 0;
  right: 0;
  padding: 0 3px;
  border-radius: 2px;
  color: white;
  background-color: red;
}
@keyframes brounce {
  0% {
    transform: translateY(-3px);
  }
  50% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(-3px);
  }
}
.hot {
  animation: brounce 0.3s infinite;
}
.hr {
  border: 1px solid #ccc;
}
.main-right .con-r-b {
  padding: 10px;
}
.main-right .con-r-b ul li {
  float: left;
  width: 50%;
}
.main-right .con-r-b ul li > div {
  padding: 10px;
}
.main-right .con-r-b ul li > div h4 {
  margin-top: 40px;
}
.main-right .con-r-b ul li > div p {
  margin: 5px 0;
  font-size: 14px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.main-right .con-r-b ul li > div a {
  float: left;
  width: 96px;
  height: 34px;
  line-height: 34px;
  text-align: center;
  background-color: #46b8da;
  color: white;
  border-radius: 2px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.main-right .con-r-b ul li > div .img {
  width: 125px;
  height: 125px;
  margin: 10px;
}
.main-right .con-r-b ul li:nth-of-type(2n) > div {
  padding-left: 0;
}
.main-right .con-r-b ul li:nth-of-type(2n + 1) > div {
  padding-right: 0;
}
.con-r-b-img-1 {
  background: url(../assets/images/1.png) no-repeat center;
}
.con-r-b-img-2 {
  background: url(../assets/images/2.png) no-repeat center;
}
.con-r-b-img-3 {
  background: url(../assets/images/3.png) no-repeat center;
}
.con-r-b-img-4 {
  background: url(../assets/images/4.png) no-repeat center;
}
</style>