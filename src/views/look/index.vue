<template>
  <div>
    <div class="look">
      <van-nav-bar
        class="job"
        title=" 查看"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
  </div>
</template>
<script>
export default {

  data () {
    return {

    }
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    }
  }
}
</script>
<style lang="less" scoped>
.job {
  background: #4fc08d;
}
</style>