<template>
  <div>
      <ul>
          <li v-for="(item,index) in sendToChe" @click="toggleStatus(index)" :class="{seled:selectedArr.indexOf(sendToChe[index].label) !== -1}">{{item.label}}</li> {{selectedArr}}
      </ul>
  </div>
</template>
<script>
export default {
  props: {
    sendToChe: {
      type: Array,
      default: {
        label: "未定义",
        value: -1
      }
    }
  },
  data() {
    return {
      indexArr: [],
      selectedArr: [],
      theFirstFlag: true
    };
  },
  methods: {
    toggleStatus(index) {
      if (this.selectedArr.indexOf(this.sendToChe[index].label) === -1) {
        this.selectedArr.push(this.sendToChe[index].label);
        this.indexArr.push(this.sendToChe[index].value);
      } else {
        console.log(this.selectedArr.indexOf(this.sendToChe[index].label));
        //找到所在对应数组的位置
        this.selectedArr.splice(
          this.selectedArr.indexOf(this.sendToChe[index].label),
          1
        );
        this.indexArr.splice(
          this.selectedArr.indexOf(this.sendToChe[index].label),
          1
        );
      }
      //console.log(this.selectedArr);
      this.$emit("getCheckArr", this.indexArr);
      //console.log(this.indexArr);
    }
  }
};
</script>
<style lang="stylus" scoped>
div {
    display: inline-block;

    ul {
        li {
            float: left;
            padding: 2px 5px;
            border: 1px solid #ddd;
            font: normal 100 14px '微软雅黑';
            border-radius: 4px;
            margin-left: 5px;

            &:hover, &.seled {
                background-color: #ef45ef;
            }
        }
    }
}
</style>
