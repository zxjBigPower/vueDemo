<template>
  <div>
      <div class="dialog-cover" v-if="diaAbout">
          <div class="dialog-bg" @click="closeDia"></div>
          <div class="dialog-con">
              <div class="dialog-close">×</div>
              <slot></slot>
              
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    props:{
        diaAbout:{
            type:Boolean,
            default:false
        }
    },
    methods:{
        closeDia ($eee){
            console.log($eee.preventDefault)
            $eee.preventDefault();
            this.$emit("onClose",false)
        }
    }
}
</script>

<style>
    .dialog-cover{
        position: fixed;
        top: 0;
        left: 0;
        width:100%;
        height:100%;
        background-color: rgba(0,0,0,.3);
        z-index: 3
    }
    .dialog-cover .dialog-con{
        width: 200px;
        height: 200px;
        background-color: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -100px;
        margin-top: -100px;
    }
    .dialog-cover .dialog-con .dialog-close{
        position: absolute;top: 0;
        right: 0;
        width: 16px;
        height: 16px;
        line-height: 16px;
        text-align: center;
    }
</style>
