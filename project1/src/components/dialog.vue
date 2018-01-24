<template>
  <div>
      <div class="dialog-cover" v-if="isShow">
          <div class="dialog-bg" @click="closeDia"></div>
          <div class="dialog-con">
              <div class="dialog-close" @click="closeDia">×</div>
              <div class="dialog-con-box">
                  <slot ></slot>
              </div>
              
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closeDia() {
      this.$emit("onClose");
    },
  }
  
};
</script>

<style>
.dialog-cover {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 3;
}
.dialog-bg {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
}
.dialog-cover .dialog-con {
  width: 500px;
  background-color: #fff;
  position: absolute;
  top: 100px;
  left: 50%;
  margin-left: -250px;
}
.dialog-cover .dialog-con .dialog-close {
  position: absolute;
  top: 0;
  right: 0;
  width: 16px;
  height: 16px;
  line-height: 16px;
  text-align: center;
  cursor: pointer;
}
.dialog-cover .dialog-con .dialog-con-box{
    width: 100%;
    padding: 20px;
    box-sizing: border-box
}
.dialog-cover .dialog-con .dialog-con-box p{
    text-indent: 2em;
}
</style>
