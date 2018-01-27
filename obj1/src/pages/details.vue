<template>
  <div id="bg">
      <div class="details clearfix">
        <div class="details-left fl">
        <img src="../assets/images/1.png" alt="">
        <ul>
          <li v-for="item in products"><a :href="'#/detail/'+item.path">{{item.name}}</a></li>
        </ul>
      </div>
      <div class="details-right fr">
        <div class="details-r-t">
        <h2>dfgsdgbsfgh</h2>
        <p>fdgaefgwrthsgasrweagaregegjinfdbnsifjvbjdfvbnsdjfbvnsufibnjd是大概说不定v首付的GV圣诞发赶不上变化舒服个梵蒂冈are隔热安防噶而非噶尔发给啊还是人鸡同鸭讲阿斯蒂芬电光火石干哈输入法肝火旺盛热帖和耳机和人事通过和私人会所如果还是发该函数是爱人刚sbnijsfbnidfnb</p>
        <ul>
          <li><span>购买数量：</span><span></span></li>
          <li><span>产品类型：</span><span></span></li>
          <li><span>有效时间：</span></li>
          <li><span>总价：</span></li>
        </ul></div>
        <div class="details-r-b">
          <router-view></router-view>
        </div>
      </div>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      products: [
        {
          name: '数据统计',
          path: 'count',
          icon: require('../assets/images/1.png'),
          active: false
        },
        {
          name: '数据预测',
          path: 'forecast',
          active: false
        },
        {
          name: '流量分析',
          path: 'analysis',
          active: false
        },
        {
          name: '广告发布',
          path: 'publish',
          active: false
        }
      ],
      imgMap: {
        '/detail/count': require("../assets/images/1.png"),
        '/detail/forecast': require("../assets/images/2.png"),
        '/detail/analysis': require("../assets/images/3.png"),
        '/detail/publish': require("../assets/images/4.png")
      }
    };
  }
};
</script>
<style scoped>
#bg{
  background-color: #f1f1f1;
}
.details {
  width: 80%;
  margin: 0 auto;
}
.details-left {
  padding: 10px;
  box-sizing: border-box;
  float: left;
  width: 20%;
  text-align: center;
  background-color: #fff;
}
.details-left img {
  width: 80%;
  text-align: center;
  margin: 0 auto;
}
.details-left ul li{
  line-height: 24px;

}
.details-left ul li:hover{
  background-color:aquamarine ;
}
.details-right {
  float: right;
  width: 78%;
}
.details-right .details-r-t{
  box-sizing: border-box;
  padding: 10px;
  background-color: #fff;
}
.details-right .details-r-t h2{
  margin: 10px 10px 20px;
}
.details-right .details-r-t p{
  text-indent: 2em;
  line-height: 24px;
  padding: 0 10px;
  height: 50px;
  overflow: hidden;
  white-space: inherit;
  text-overflow:ellipsis; 
}
</style>
