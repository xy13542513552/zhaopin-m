<template>
  <div class="login-container">
    <!-- 导航栏 -->
    <!-- <van-nav-bar
      class="page-nav-bar"
      title="登录"
    >-->
    <!-- <van-icon slot="left" name="cross" @click="$router.back()"/> -->
    <div class="van-yzm">
      <h4>验证码登入</h4>
    </div>
    <!-- <van-icon
        slot="left"
        name="cross"
        @click="$router.back()"
      />
    </van-nav-bar>-->
    <!-- /导航栏 -->

    <!-- 登录表单 -->
    <!--
      表单验证：
        1、给 van-field 组件配置 rules 验证规则
        2、当表单提交的时候会自动触发表单验证
           如果验证通过，会触发 submit 事件
           如果验证失败，不会触发 submit //
    -->
    <van-form class="form-van" ref="loginForm" @submit="onSubmit">
      <van-field
        v-model="user.mobile"
        name="mobile"
        placeholder="输入手机号"
        :rules="userFormRules.mobile"
        type="number"
        maxlength="11"
      >
        <i slot="left-icon" class="toutiao toutiao-shouji"></i>
      </van-field>
      <van-field
        v-model="user.code"
        name="code"
        placeholder="输入验证码"
        :rules="userFormRules.code"
        type="number"
        maxlength="6"
      >
        <i slot="left-icon" class="toutiao toutiao-yanzhengma"></i>
        <template #button>
          <!--
            time: 倒计时时间
          -->
          <van-count-down
            v-if="isCountDownShow"
            :time="1000 * 60"
            format="ss s"
            @finish="isCountDownShow = false"
          />
          <van-button
            v-else
            class="send-sms-btn"
            native-type="button"
            round
            size="small"
            type="default"
            @click="onSendSms"
          >发送验证码</van-button>
        </template>
      </van-field>
      <van-checkbox class="van-bottom" v-model="checked" icon-size="12px">我已阅读<u @click="xianyi" v-model="qdxy">《招聘平台服务协议》</u></van-checkbox>
      <div class="login-btn-wrap">
        <van-button class="login-btn" block type="info" native-type="submit">登录</van-button>
      </div>
      <div class="van-dia">
        <span @click="dialog">收不到验证码?</span>
      </div>
      <div class="van-qita">
        <div class="qita-text">其他方式登入</div>
        <!-- 点击事件还没获取微信接口 -->
        <div class="qita-img" @click="dialog"> 
          <img src="../../assets/weixin.png" alt>
        </div>
      </div>
      <van-popup v-model="qdxy" round position="bottom" :style="{ height: '70%' }" >
        <div class="qdxy-tab">招聘平台服务协议</div>
         </van-popup>
    </van-form>
    <!-- /登录表单 -->
  </div>

 
</template>


<script>
import { login, sendSms } from "@/api/user";
import { Dialog } from "vant";

export default {
  name: "LoginIndex",
  components: {},
  props: {},
  data() {
    return {
      qdxy:false,
      checked: false,
      user: {
        mobile: "13911111111", // 手机号
        code: "246810" // 验证码
      },
      userFormRules: {
        mobile: [
          {
            required: true,
            message: "手机号不能为空"
          },
          {
            pattern: /^1[3|5|7|8]\d{9}$/,
            message: "手机号格式错误"
          }
        ],
        code: [
          {
            required: true,
            message: "验证码不能为空"
          },
          {
            pattern: /^\d{6}$/,
            message: "验证码格式错误"
          }
        ]
      },
      isCountDownShow: false // 是否展示倒计时
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    async onSubmit() {
      // 1. 展示登陆中 loading
      this.$toast.loading({
        message: "登录中...",
        forbidClick: true, // 禁用背景点击
        duration: 0 // 持续时间，默认 2000，0 表示持续展示不关闭
      });

      // 2. 请求登录
      try {
        const { data } = await login(this.user);
        this.$store.commit("setUser", data.data);
        this.$toast.success("登录成功");

        // 登录成功，跳转回原来页面
        // back 的方式不严谨，后面讲功能优化的时候再说
        this.$router.back();
      } catch (err) {
        if (err.response.status === 400) {
          this.$toast.fail("手机号或验证码错误");
        } else {
          this.$toast.fail("登录失败，请稍后重试");
        }
      }
    },

    async onSendSms() {
      // 1. 校验手机号
      try {
        await this.$refs.loginForm.validate("mobile");
      } catch (err) {
        return console.log("验证失败", err);
      }

      // 2. 验证通过，显示倒计时
      this.isCountDownShow = true;

      // 3. 请求发送验证码
      try {
        await sendSms(this.user.mobile);
        this.$toast("发送成功");
      } catch (err) {
        // 发送失败，关闭倒计时
        this.isCountDownShow = false;
        if (err.response.status === 429) {
          this.$toast("发送太频繁了，请稍后重试");
        } else {
          this.$toast("发送失败，请稍后重试");
        }
      }
    },
    dialog() {
      Dialog.alert({
        title: "收不到验证码",
        message:
          "1.请确认手机号是否正确</br>2.请确认手机是否停机</br>3.请稍后重试"
      }).then(() => {
        // on close
      });
    },
    xianyi() {
      this.qdxy = true;
    }
  }
};
</script>

<style scoped lang="less">
.login-container {
  // background-color: #444;
  .toutiao {
    font-size: 37px;
  }

  .send-sms-btn {
    width: 152px;
    height: 46px;
    line-height: 46px;
    background-color: #ededed;
    font-size: 22px;
    color: #666;
  }

  .login-btn-wrap {
    padding: 35px 20px;
    .login-btn {
      background-color: #6db4fb;
      border: none;
      border-radius: 40px;
    }
  }
  .form-van {
    width: 80%;
    height: 1000px;
    margin: 0 auto;
    .van-cell {
      margin-bottom: 20px;
     border-radius: 40px;
    }
  }
  .van-bottom {
    margin-top: 30px;
    font-size: 24px;
  }
  .van-yzm {
    padding-left: 60px;
  }
  .van-dia {
    font-size: 30px;
    color: #666;
    padding-left: 60%;
  }
  .van-qita {
    margin-top: 400px;//这里最好是定位 
    // font-size: 24px;
    // color: #6db4fb;
    width: 200px;
    height: 150px;
    // background-color: pink;
    margin-left: 190px;
  }
  .qita-text {
    text-align: center;
    font-size: 24px;
    color: #6db4fb;
  }
  .qita-img {
    margin: 0 auto;
    margin-top: 10px;
    width: 100px;
    height: 100px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .qdxy-tab {
    font-size: 50px;
    font-weight: 700;
    text-align: center;
    margin-top: 20px;
  }
}
</style>
