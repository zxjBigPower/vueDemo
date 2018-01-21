<template>
  <div>
    <!-- <img :src="sendToSon[0].src" alt=""> -->
    <div id="slide">
        <ul>
            <li>
                <img :src="sendToSon[nowIndex].src" :alt="sendToSon[nowIndex].title" width="100%">
            </li>
            <div class="slider-bot">
                <p class="fl">{{sendToSon[nowIndex].title}}</p>
                <ol class="fr">
                    <li class="fl" @click="gotoPrev">&lt;</li>
                <template v-for="(item,index) in sendToSon">       
                    <li class="fl" @click="goto(index)"><a>{{index +1}}</a></li>               
                </template> 
                <li class="fl" @click="gotoNext">&gt;</li>
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
      nowIndex:0
    };
  },
  props: {
    sendToSon: { type: Array, default: ["cuowu"] }
  },
  methods:{
      goto(index){
          this.nowIndex=index;
      },
      gotoPrev (){
        console.log(this.nowIndex);
        if(this.nowIndex==0){
            return
        }else{
            this.nowIndex--;
        }
      },
      gotoNext (){
           console.log(this.nowIndex);
        if(this.nowIndex==this.sendToSon.length-1){
            return
        }else{
            this.nowIndex++;
        }
      }
  },
  mounted() {
    console.log(this.sendToSon);
  }
};
</script>
<style>
#slide {
  width: 100%;
}
#slide ul {
  position: relative;
  padding: 10px 0px 26px ;
}
#slide ul>li {
  position: relative;
  z-index: 2;
}
#slide ol{
    margin-right: 20px;
}
#slide ol>li{
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
#slide .slider-bot p{
    margin-left: 20px;
}
</style>
