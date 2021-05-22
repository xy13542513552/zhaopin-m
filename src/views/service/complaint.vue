<template>
  <div class="complaint">
    <van-nav-bar
      class="job"
      title="举报投诉"
      fixed
      placeholder
      @click-left="onClickLeft"
    >
      <van-icon color="#000" slot="left" name="arrow-left" />
    </van-nav-bar>
    <van-cell
      v-for="(asd, index) in celldata"
      :key="index"
      :title="asd.title"
      is-link
      size="large"
      :label="asd.label"
      :to="asd.to"
    />
  </div>
</template>
<script>
export default {

  data () {
    return {
      celldata: [
        { title: "散播违法/敏感言论", label: "招聘者发布的信息包含违法、政治敏感内容", to: "service" },
        { title: "散播违法/敏感言论", label: "招聘者发布的信息包含违法、政治敏感内容", to: "service" },
        { title: "散播违法/敏感言论", label: "招聘者发布的信息包含违法、政治敏感内容", to: "service" },
        { title: "散播违法/敏感言论", label: "招聘者发布的信息包含违法、政治敏感内容", to: "service" },
        { title: "散播违法/敏感言论", label: "招聘者发布的信息包含违法、政治敏感内容", to: "service" },
        { title: "散播违法/敏感言论", label: "招聘者发布的信息包含违法、政治敏感内容", to: "service" },
        { title: "散播违法/敏感言论", label: "招聘者发布的信息包含违法、政治敏感内容", to: "service" },
        { title: "散播违法/敏感言论", label: "招聘者发布的信息包含违法、政治敏感内容", to: "service" },
        { title: "散播违法/敏感言论", label: "招聘者发布的信息包含违法、政治敏感内容", to: "service" },
      ]
    };
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
  background: #fff;
}
.more {
  font-size: 30px;
  .val {
    display: flex;
    justify-content: space-between;
  }
}
</style>