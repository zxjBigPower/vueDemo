<template>
  <div>
      <form action="#">
          <h5>请您注册</h5>
          <p><span>用户名：</span><input type="text" v-model="getUserName"><i>{{userNameError.errorText}}</i></p>
          <p><span>密码：</span><input type="password" v-model="getUserPsw"><i>{{userPswError.errorText}}</i></p>
          <p><span>请确认密码：</span><input type="password"></p>
          <p><span>上传头像：</span><input type="file" name="" id=""></p>
          <div class="reg-botton">
              <span @click="cancelLogin">取消</span> <span class="bg" @click="login">登录</span>
          </div>
          <p>{{errorText}}</p>
      </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      getUserName: "",
      getUserPsw: "",
      errorText: ""
    };
  },
  computed: {
    userNameError() {
      let status, errorText;
      if (!this.getUserName) {
        status = false;
        errorText = "";
      } else {
        if (!/@/g.test(this.getUserName)) {
          //console.log(222);
          status = false;
          errorText = "不包含@符号";
        } else {
          status = true;
          errorText = "";
        }
      }
      return {
        status,
        errorText
      };
      //console.log(this);
    },
    userPswError() {
      let status, errorText;
      if (!this.getUserPsw) {
        status = false;
        errorText = "";
      } else {
        if (!/^\w{1,6}$/g.test(this.getUserPsw)) {
          //console.log(222);

          status = false;
          errorText = "字符过长";
        } else {
          status = true;
          errorText = "";
        }
      }

      return { status, errorText };
    }
  },
  methods: {
    login() {
      console.log(this.userNameError.status);
      console.log(this.userPswError.status);
      if (this.userNameError.status && this.userPswError.status) {
        console.log("login");
        this.errorText = "";
        this.$http.get("http://localhost:3000/login").then(
          (res) => {
            console.log(res.body);
            this.$emit("getloginUserName",res.body)

          },
          (error) => {
            console.log(error);
          }
        );
      } else {
        this.errorText = "部分信息未填写";
      }
    },
    cancelLogin(){
      this.$emit("closeLogin")
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
