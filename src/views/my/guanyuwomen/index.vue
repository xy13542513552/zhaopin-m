<template>
  <div class="gywm-container">
      <!-- //状态栏 -->
    <div class="van-toplan">
      <van-icon
        class="van-fanhui"
        color="#000"
        size="25px"
        slot="left"
        name="arrow-left"
        @click="$router.back()"
      />
      <div>关于我们</div>
    </div>
    <!-- 关于我们详细页面 -->
    
  </div>
</template>

<script>
export default {
  name: "WoMeng",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="less">
.gywm-container {
  .van-toplan {
    position: static;
    width: 100%;
    height: 90px;
    background-color: #222;
    text-align: center;
    div {
      font-size: 35px;
    //   width: 100%;
    //   height: 90px;
      line-height: 90px;
      // margin: 0 auto;
    }
  }
  .van-fanhui {
    // margin-left: 60px;
    position: absolute;
    left: 10px;
    top: 20px;
  }
}
</style>