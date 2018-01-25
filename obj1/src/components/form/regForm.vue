<template>
  <div>
      <form action="#">
          <h5>请登录</h5>
          <p>
              <span>用户名：</span> <input id="reg-name" type="text" placeholder="请输入用户名">
          </p>
          <p>
              <span>密码：</span> <input id="reg-psw" type="password" placeholder="请输入密码"> <i id="showPsw" @click="changeType">显示</i>
          </p>
          <div class="reg-botton">
             <span @click="cancelRegin">取消</span> <span class="bg">登录</span>
          </div>
      </form>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    changeType() {
      //console.log(this)
      //document.getElementById("reg-psw").type="text";
      if (document.getElementById("reg-psw").type == "password") {
        document.getElementById("reg-psw").type = "text";
        document.getElementById("showPsw").innerHTML == "隐藏";
      } else {
        document.getElementById("reg-psw").type = "password";
        document.getElementById("showPsw").innerHTML == "显示";
      }
    },
    cancelRegin (){
      this.$emit("closeRegin")
    }
  }
};
</script>
<style scoped>
h5 {
  text-align: center;
  margin-bottom: 20px;
}
p {
  margin: 10px auto;
}
p span {
  display: inline-block;
  width: 150px;
  text-align: right;
}
p i {
  cursor: pointer;
}
.reg-botton {
  margin: 10px;
  text-align: center;
}
.reg-botton span {
  display: inline-block;
  width: 100px;
  height: 30px;
  background-color: #ccc;
  border-radius: 4px;
  line-height: 30px;
  color: #fff;
}
.reg-botton span.bg {
  background-color: aqua;
}
</style>
