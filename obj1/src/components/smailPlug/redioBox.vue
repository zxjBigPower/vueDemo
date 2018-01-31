<template>
<div>
<ul>
    <li v-for="(item,index) in sendToRedio" @click="getSelectedArray(index)" :class="{seled:index===currentIndex}">{{item.name}}</li>
    
</ul>
</div>
</template>
<script>
export default {
  data (){
      return{
          nowIndex:-1,
         selected:"",
         currentIndex:-1,
      }
  },
  methods:{
      getSelectedArray (index){
          this.selected=this.sendToRedio[index].name
          this.nowIndex=this.sendToRedio[index].value;
          this.$emit("on-change",this.nowIndex)
          this.currentIndex=index
      }
  },
  mounted(){
      this.getSelectedArray(0)
  },
  props:{
      sendToRedio:{type:Array,default:{name:"未定义",value:9}}
  }
}
</script>
<style scoped lang="stylus">
div
    display: inline-block
    ul
        li
            float left
            padding 2px 5px 
            border 1px solid #ddd
            font normal 100 14px "微软雅黑"
            border-radius 4px
            margin-left 5px
            &:hover,&.seled
                background-color #ef45ef
            
          
</style>
