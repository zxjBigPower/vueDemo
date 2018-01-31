<template>
  <div>
      {{sendToDialog}}
  </div>
</template>
<script>
export default {
  props: {
    sendToDialog: {
      type: Object,
      default: {
        num: null,
        redio: null,
        check: null,
        sel: null
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
</style>
