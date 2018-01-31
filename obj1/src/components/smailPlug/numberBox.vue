<template>
  <div>
      <ul class="clearfix">
        <li @click="Prictice(-1)">-</li>
        <li><input type="number" v-model="dataNum" @keyup="setPrice"></li>
        <li @click="Prictice(1)">+</li>
      </ul>
  </div>
</template>
<script>
export default {
  props: {
    sendTheMax: {
      type: Number,
      default: 5
    },
    sendTheMin: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      dataNum: 20
    };
  },
  mounted() {
    this.dataNum = this.sendTheMin;
  },
  methods: {
    Prictice(index) {
      index = index - 0;
      if (this.dataNum == this.sendTheMin && index == -1) {
        return;
      }
      if (this.dataNum == this.sendTheMax && index == 1) {
        return;
      }
      if (this.dataNum > this.sendTheMin && index == -1) {
        this.dataNum = this.dataNum - 0;
        this.dataNum = this.dataNum + index;
      }
      if (this.dataNum < this.sendTheMax && index == 1) {
        this.dataNum = this.dataNum - 0;
        this.dataNum = this.dataNum + index;
      }
    },
    setPrice() {
      if (this.dataNum > this.sendTheMax || this.dataNum < this.sendTheMin) {
        if (!this.dataNum) {
          this.dataNum = null;
        } else {
          this.dataNum = this.sendTheMin;
        }
      }
    }
  },
  watch: {
    dataNum() {
      this.$emit("on-change", this.dataNum);
    }
  }
};
</script>
<style lang="stylus" scoped>
div {
  display: inline-block;

  ul {
    border-radius: 4px;
    border: 1px solid #ccc;

    li {
      float: left;

      &:nth-of-type(2) {
        input {
          width: 50px;
          text-align: center;
        }
      }

      &:nth-of-type(1), &:nth-of-type(3) {
        cursor: pointer;
        width: 50px;
        text-align: center;
      }
    }
  }
}
</style>