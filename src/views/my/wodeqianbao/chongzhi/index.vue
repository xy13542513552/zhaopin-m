<template>
  <div class="cz-container">
      <div class="van-toplan">
         <!-- 导航栏 -->
    <van-nav-bar
      class="page-nav-bar"
      title="充值中心"
      left-arrow
      @click-left="$router.back()"
    />
      </div>

      <!-- tab栏查看账号的金额 -->
        <div class="account-panel">
      <span class="panel-lable">
        <div>账户余额</div>
      </span>
      <span class="panel-balance">
        <div>￥0.00</div>
      </span>
    </div>

    <!-- 充值入口 -->
    <div class="recharge-label">
        <p>充值金额</p>
    </div>
    <div class="recharge-input">
        <input  type="digit" placeholder="请输入充值金额">
    </div>

    <!-- 充值按钮 -->
    <div class="annian">
        <van-button round type="info" size="large" color="#786cff">立即充值</van-button>
      </div>

      <!-- 充值说明 -->
      <div>
          <div class="recharge-label">
              <p>充值说明</p>
          </div>
          <div class="content">
              <p>1.账号充值可选择支付宝或者微信支付</p>
              <p>2.充值金额实时到账</p>
              <p>3.若有其他疑问,可拨打客服电话400-000-3211</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Chongzhi',
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
  .account-panel {
    box-sizing: border-box;
    width: 85%;
    height: 180px;
    text-align: center;
    border-radius: 15px;
    margin: 35px auto;
    text-align:center;
    display: flex;
    justify-content:space-around;
    align-items:center;
    color: #fff;
    background: linear-gradient(-125deg, #a46bff, #786cff);
    box-shadow: 0 5px 22px 0 rgba(0, 0, 0, 0.26);
  }

  .panel-lable {
    font-size: 40px;
  }
  .recharge-label {
    p {
        color: rgb(51, 51, 51);
    font-size: 35px;
    margin-top: 50px;
    margin-bottom: 30px;
    margin-left: 55px;
    }
  }
  .recharge-input {
    width: 85%;
    margin: 0 auto;
    input {
      border: 1px solid rgb(228, 228, 228); 
      border-radius: 10px;
    //   padding: 15rpx 16rpx;
      font-size: 50px;
      padding: 15px 20px;
      background-color: rgb(245, 247, 249);
    }
  }
  .annian {
      width: 85%;
      margin: 0 auto;
      margin-top: 60px;
  }
  .content {
      font-size: 26px;
      color: #888;
      margin-left: 55px;
    }
  </style>