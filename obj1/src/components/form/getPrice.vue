<template>
  <div>
      {{sendToDialog}}
      <p>请核对信息</p>
      <ol class="clearfix">
        <li>数量</li>
        <li>颜色</li>
        <li>所属行业</li>
        <li>类型</li>
      </ol>
      <ul class="clearfix">
        <li :title="sendToDialog.num">{{sendToDialog.num}}</li>
        <li :title="sendToDialog.redio">{{sendToDialog.redio}}</li>
        <li :title="sendToDialog.check">{{sendToDialog.check}}</li>
        <li :title="sendToDialog.sel">{{sendToDialog.sel}}</li>
      </ul>
      <h5>总价： <span>{{sendToDialog.price}}</span>元</h5>
      <div class="payType">
        <p>请选择支付方式</p>
        <bank-components @on-change="getBanks"></bank-components>
        <div>
          <span @click="payMoney">确定付款</span>
        </div>
      </div>
      <is-dialog :isShow="isShow" @onClose="closeDialog">
       <div class="payStatus">
          <p>请确认支付状态：</p>
        <div>
          <span @click="getStatus('statusShowSuss')">支付成功</span><span @click="getStatus('statusShowFail')">支付失败</span>
        </div>
       </div>
      </is-dialog>  
      <is-dialog :isShow="statusShowSuss" @onClose="closeStatusDialog('statusShowSuss')">
        <p>支付成功</p>
      </is-dialog>
      <is-dialog :isShow="statusShowFail" @onClose="closeStatusDialog('statusShowFail')">
        <p>支付失败</p>
      </is-dialog>
  </div>
</template>
<script>
import bankComponents from "./bankComponents";
import isDialog from "../dialog";
export default {
  data() {
    return {
      isShow: false,
      statusShowSuss:false,
      statusShowFail:false
    };
  },
  components: {
    bankComponents,
    isDialog
  },
  props: {
    sendToDialog: {
      type: Object,
      default: {
        num: null,
        redio: null,
        check: null,
        sel: null,
        price: null
      }
    }
  },
  methods: {
    getBanks(res) {
      console.log(res);
    },
    payMoney() {
      console.log(111);
      this.isShow = true;
    },
    //支付状态弹窗的关闭
    closeDialog() {
      this.isShow = false;
    },
    //支付成功/支付失败提示的关闭
    closeStatusDialog (index){
      //console.log(index);    
      this[index]=false
    },
    //弹出支付成功/支付失败的提示弹窗
    getStatus(index){
      this[index]=true
    }
  }
};
</script>
<style lang="stylus" scoped>
div {
  p {
    margin-bottom: 15px;
  }

  ol {
    text-decoration: none;
    border-top: 1px solid #ddd;
    border-right: 1px solid #ddd;
    border-bottom: 1px solid #ddd;

    li {
      float: left;
      width: 25%;
      text-align: center;
      overflow: hidden;
      border-left: 1px solid #ddd;
      box-sizing: border-box;
      line-height: 24px;
    }
  }

  ul {
    text-decoration: none;
    border-right: 1px solid #ddd;
    border-bottom: 1px solid #ddd;

    li {
      float: left;
      width: 25%;
      text-align: center;
      overflow: hidden;
      border-left: 1px solid #ddd;
      box-sizing: border-box;
      line-height: 24px;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }

  .payType {
    div {
      span {
        display: inline-block;
        width: 150px;
        height: 30px;
        background-color: #fc7;
        text-align: center;
        color: #ffffff;
        cursor: pointer;
        border-radius: 4px;
        line-height: 30px;
      }
    }
  }
}

.payStatus {
  p, div {
    span {
      width: 150px;
      height: 30px;
      line-height: 30px;
      background-color: #d4f;
      display: inline-block;
      text-align: center;
      cursor: pointer;
      color: #fff;
      border-radius: 2px 4px;
      margin-left: 10px;
    }
  }
}
</style>
