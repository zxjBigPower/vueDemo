<template>
<div>
    <select name="goodsType" v-model="goodsType" id="goodsType" @change="getGoodsType">
        <option v-for="item in sendToSelect" :value="item.value">{{item.label}}</option>
    </select>
</div>
</template>
<script>
export default {
  data (){
      return {
          goodsType:""
      }
  },
  methods:{
      getGoodsType (){
        this.$emit("getSelectionVal",this.goodsType)
    }
  },
  props:{
    sendToSelect:{
        type:Array,
        default:[{label:"未定义",value:0}]
    }
  },
  mounted(){
      this.goodsType=this.sendToSelect[0].value
      //console.log(this.sendToSelect[0].value)
  }
}
</script>
<style scoped>
div{
    display: inline-block
}
</style>
