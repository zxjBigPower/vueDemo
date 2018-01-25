<template>
  <div>
    <!-- <img :src="sendToSon[0].src" alt=""> -->
    <div id="slide" @mouseenter="stopRun" @mouseleave="runToNext">
        <ul>
            <li>
                <transition name="slide-trans">
                    <img :src="sendToSon[nowIndex].src" :alt="sendToSon[nowIndex].title" width="100%">
                </transition>
                <!-- <transition name="slide-trans-old">
                    <img v-if="!showFlag" :src="sendToSon[nowIndex].src" :alt="sendToSon[nowIndex].title" width="100%">
                </transition> -->
            </li>
            <div class="slider-bot">
                <p class="fl">{{sendToSon[nowIndex].title}}</p>
                <ol class="fr">
                    <li class="fl" @click="goto(gotoPrev)">&lt;</li>
                <template v-for="(item,index) in sendToSon">       
                    <li class="fl" @click="goto(index)"><a :class="{current:index==nowIndex}">{{index +1}}</a></li>               
                </template> 
                <li class="fl" @click="goto(gotoNext)">&gt;</li>
                </ol>              
            </div>
        </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      aaa: "23232",
      nowIndex: 0,
      showFlag: true
    };
  },
  props: {
    sendToSon: { type: Array, default: ["cuowu"] },
    getStopTime:{default:1000}
  },
  methods: {
    goto(index) {
        //console.log(index)
      this.showFlag = false;
      setTimeout(() => {
        this.showFlag = true;
        this.nowIndex = index;
      }, 10);
    },

    runToNext() {
      //console.log(this.getStopTime);
      this.timerInter = setInterval(() => {
       this.goto(this.gotoNext)
        this.$emit("onchange",this.nowIndex);
      }, this.getStopTime);
     
    },
    stopRun() {
      clearInterval(this.timerInter);
    }
  },
  mounted() {
    //console.log(this.sendToSon);
    this.runToNext();
  },
  computed: {
    gotoPrev() {
      //console.log(this.nowIndex);
      if (this.nowIndex == 0) {
        return this.sendToSon.length - 1
      } else {
        return this.nowIndex - 1;
      }
    },
    gotoNext() {
      // console.log(this.nowIndex);
      if (this.nowIndex == this.sendToSon.length - 1) {
        return  0
      } else {
        return this.nowIndex + 1;
      }
    }
  }
};
</script>
<style scoped>
/* .slide-trans-enter-active {
  transition: all 3s;
}
.slide-trans-enter {
  transform: translateX(100%);
}
.slide-trans-old-enter{
    position: absolute;
    top: 0;
    left: 0;
}
.slide-trans-old-leave-active {
  transition: all 3s;
} */
#slide {
  width: 100%;
 
}
#slide ul {
  position: relative;
  padding: 10px 0px 26px;
}
#slide ul > li {
  position: relative;
  z-index: 2;
}
#slide ul > li >img{
   
}
#slide ol {
  margin-right: 20px;
}
#slide ol > li {
  padding: 3px;
  vertical-align: middle;
  color: aqua;
  cursor: pointer;
}
#slide .slider-bot {
  position: absolute;
  bottom: 0px;
  left: 0;
  width: 100%;
  height: 30px;
  background-color: rgb(144, 144, 144);
}
#slide .slider-bot p {
  margin-left: 20px;
}
.current {
  text-decoration: underline;
  color: red;
}
</style>
