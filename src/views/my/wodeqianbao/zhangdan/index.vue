<template>
  <div class="zd-container">
     <!-- 导航栏 -->
    <van-nav-bar
      class="page-nav-bar"
      title="账单详情"
      left-arrow
      @click-left="$router.back()"
    />

      <div class="tupian">
          <img src="../../../../assets/empty.png">
      </div>
      <div class="wenzi">亲, 暂无账单记录</div>
  </div>
</template>

<script>
export default {
  name: 'ZdIndex',
  components: {},
  props: {},
  data () {
    return {

    };
  },
  computed: {},
  watch: {},
  created () { },
  mounted () { },
  methods: {

  }
}
</script>

<style scoped lang="less">
  .tupian {
      width: 100%;
      text-align: center;
  }
  .tupian img {
     width: 300px;
     margin-top: 100px;
  }
  .wenzi {
      font-size: 30px;
      color: #cec1c1;
      text-align: center;
      margin-top: 20px;
  }
  </style>