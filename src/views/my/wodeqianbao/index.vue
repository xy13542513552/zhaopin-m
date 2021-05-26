<template>
  <div class="qa-container">
    <div class="space-upper">
      <!-- 导航栏 -->
    <van-nav-bar
      class="page-nav-bar"
      title="我的钱包"
      left-arrow
      @click-left="$router.back()"
    />
      <!-- 钱包详细页面 -->

      <div class="van-qianbao">
        <div class="wallet-image">
          <img src="../../../assets/wallet.png">
        </div>
        <div>
          <div class="wallet-account">
            <div class="wallet-account_balance">
              0.00
            </div>
          </div>
          <div>
            <div class="wallet-account_lable">
              账户余额(元)
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="van-chongzhi">
      <div class="annian">
        <van-button round type="info" size="large" color="#786cff" @click="onTargetRecharge()">充 值</van-button>
      </div>
      <div class="van-text">
      <span class="lable-text" @click="onTargetRechargeOrder()">充值记录</span>
      <span class="lable-text" @click="onTargetBalanceLog()">账单详情</span>
      </div>
    </div>
  </div>
</template>

<script>
// import { Toast } from 'vant';

export default {
  name: "QianBao",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    // 跳转到充值中心
    onTargetRecharge () {
      this.$router.push("/chongzhi")
    },

  // 跳转到查看记录
  onTargetRechargeOrder () {
   this.$router.push("/jilv")
  },

  // 跳转到账单详细
  onTargetBalanceLog () {
    this.$router.push("/zhangdan")
  }
  }
};
</script>

<style scoped lang="less">
.qa-container {
  // background: #fff;
  .space-upper {
    padding: 150rpx 0;
    text-align: center;
  } 
  
  .wallet-image img {
    width: 300px;
    margin-top: 100px;
  }
  .wallet-account {
    margin-top: 30px;
  }
  .wallet-account_balance {
    font-size: 50px;
  }

  .wallet-account_lable {
    margin-top: 20px;
    color: #cec1c1;
    font-size: 24px;
  }
  .annian {
    width: 60%;
    padding-left: 150px;
    margin-top: 120px;
  }
  .lable-text {
    font-size: 23px;
    color: rgb(94, 94, 94);
    padding: 0 60px;
  }
  .van-chongzhi {
    text-align: center;
  }
  .van-text {
    margin-top: 30px;
  }
}
</style>