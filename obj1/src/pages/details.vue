<template>
  <div id="bg">
      <div class="details clearfix">
        <div class="details-left fl">
        <img :src="changeImgSrc" alt="">
        <ul>
          <router-link v-for="item in products" tag="li" :to="'/detail/'+item.path" active-class="now">{{item.name}}</router-link>
        </ul>
      </div>
      <div class="details-right fr">
       <keep-alive>
         <router-view></router-view>
       </keep-alive>
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
          name: "数据统计",
          path: "count",
          icon: require("../assets/images/1.png"),
          active: false
        },
        {
          name: "数据预测",
          path: "forecast",
          active: false
        },
        {
          name: "流量分析",
          path: "analysis",
          active: false
        },
        {
          name: "广告发布",
          path: "publish",
          active: false
        }
      ],
      imgMap: {
        "/detail/count": require("../assets/images/1.png"),
        "/detail/forecast": require("../assets/images/2.png"),
        "/detail/analysis": require("../assets/images/3.png"),
        "/detail/publish": require("../assets/images/4.png")
      }
    };
  },
  computed: {
    changeImgSrc() {
      //console.log(this.$route);
      return this.imgMap[this.$route.path];
    }
  }
};
</script>
<style scoped>
#bg {
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
.details-left ul li {
  line-height: 24px;
}
.details-left ul li:hover,
.details-left ul li.now {
  background-color: aquamarine;
}
.details-right {
  float: right;
  width: 78%;
}
</style>
