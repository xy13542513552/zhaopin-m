<template>
  <div class="qa-container">
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
      <div>我的钱包</div>
    </div>
    <!-- 钱包详细页面 -->
    
    <div>
<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
  <div class="van-qianbao">
    <div>
      <span>我的钱包</span>
      <span>80.00</span>
    </div>
    <div>
      <span>我的银行卡</span>
      <span>1 张</span>
    </div>
    <button>我要提现</button>
  </div>


</van-pull-refresh>
    </div>
  </div>
</template>

<script>

import { Toast } from 'vant';

export default {
  name: "QianBao",
  components: {},
  props: {},
  data() {
    return { 
      count: 0,
      isLoading: false,
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    onRefresh() {
      setTimeout(() => {
        Toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
  }
};
</script>

<style scoped lang="less">
.qa-container {
  .van-toplan {
    position: static;
    width: 100%;
    height: 90px;
    background-color: #fff;
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
  .van-qianbao {
    width: 80%;
    height: 400px;
    margin: 0 auto;
    background-color: #222;
    margin-top: 30px;
    border-radius: 30px;
  }
}
</style>