<template>
  <div class="my-container">
    <!-- 已登录头部 -->
    <div v-if="user" class="header user-info">
      <div class="base-info">
        <div class="left">
          <van-image
            class="avatar"
            :src="userInfo.photo"
            round
            fit="cover"
          />
          <span class="name">{{ userInfo.name }}</span>
        </div>
        <div class="right">
          <van-button size="mini" round>编辑资料</van-button>
        </div>
      </div>
      <div class="data-stats">
        <div class="data-item">
          <span class="count">{{ userInfo.art_count }}</span>
          <span class="text">关注</span>
        </div>
        <div class="data-item">
          <span class="count">{{ userInfo.follow_count }}</span>
          <span class="text">粉丝</span>
        </div>
      </div>
    </div>
    <!-- /已登录头部 -->

    <!-- 未登录头部 -->
    <div v-else class="header not-login">
      <div class="login-btn" @click="$router.push('/login')">
        <img class="mobile-img" src="~@/assets/mobile.png" alt="">
        <span class="text">登录 / 注册</span>
      </div>
    </div>
    <!-- /未登录头部 -->

    <!-- 宫格导航 -->
  <div class="navigation-van">
        <van-grid class="grid-nav mb-9" :column-num="2" clickable :border="false">
      <van-grid-item class="grid-item" border:false>
        <i slot="icon" class="toutiao toutiao-shoucang"></i>
        <span slot="text" class="text">我的发布</span>
      </van-grid-item>
      <van-grid-item class="grid-item">
        <i slot="icon" class="toutiao toutiao-lishi"></i>
        <span slot="text" class="text">我的收藏</span>
      </van-grid-item>
    </van-grid>
          <div class="fenge-xiang">1</div>
    <van-cell title="我的订单" value="查看全部" is-link style="margin-bottom:10px"/>
      <van-grid square :column-num="5" :border="false" :clickable="true" class="van-grid-dingdan">
        <van-grid-item
          v-for="value in grids"
          :key="value"
          :icon="value.icon"
          :text="value.text"
        />
      </van-grid>
    </div>

    <div class="tool-box">
      <van-cell title="工具与服务" value="查看更多" is-link  :border="false" @click="$router.push('/chakangengduo')" />
      <div class="fenge-xiang">1</div>
      <van-grid class="color-tool" clickable :column-num="4" :border="false" >
  <van-grid-item icon="user-o" text="客服服务" @click="showKefu" v-model="show" />
  <van-grid-item icon="paid" text="我的钱包" @click="$router.push('/wodeqianbao')" />
  <van-grid-item icon="coupon-o" text="实名认证" @click="$router.push('/shimingrenzheng')" />
  <van-grid-item icon="smile" text="关于我们" @click="$router.push('/guanyuwomen')" />
</van-grid>
    </div>

    <!-- <van-cell title="消息通知" is-link />
    <van-cell title="实名认证" is-link />
    <van-cell  title="客服电话" is-link /> -->
    <van-cell
      v-if="user"
      class="logout-cell"
      clickable
      title="退出登录"
      @click="onLogout"
    />
    <!-- <van-action-sheet v-model="show" :actions="actions" @select="onLook" /> -->
    <van-popup v-model="show" round position="bottom" :style="{ height: '20%' }">
      <van-divider
  :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
>
  招聘客服电话
</van-divider>
      <van-divider>040-88888-101 <button> 电话</button></van-divider>
    </van-popup>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getUserInfo } from '@/api/user'

export default {
  name: 'MyIndex',
  components: {},
  props: {},
  data () {
    return {
      show: false,
      grids: [
        { icon: 'peer-pay', text: ' 全部订单' },
        { icon: 'cash-back-record', text: '待付款' },
        { icon: 'after-sale', text: '已付款' },
        { icon: 'certificate', text: '评论' },
        { icon: 'certificate', text: '已完成' }
      ],
      userInfo: {} // 用户信息
    }
  },
  computed: {
    ...mapState(['user'])
  },
  watch: {},
  created () {
    // 如果用户登录了，则请求加载用户信息数据
    if (this.user) {
      this.loadUserInfo()
    }
  },
  mounted () {},
  methods: {
    onLogout () {
      // 退出提示
      // 在组件中需要使用 this.$dialog 来调用弹框组件
      this.$dialog.confirm({
        title: '确认退出吗？'
      }).then(() => {
        // on confirm
        // 确认退出：清除登录状态（容器中的 user + 本地存储中的 user）
        this.$store.commit('setUser', null)
      }).catch(() => {
        // on cancel
        console.log('取消执行这里')
      })
    },

    async loadUserInfo () {
      try {
        const { data } = await getUserInfo()
        this.userInfo = data.data
      } catch (err) {
        this.$toast('获取数据失败，请稍后重试')
      }
    },
    showKefu() {
      this.show = true;
      
    },
  }
}
</script>

<style scoped lang="less">
.my-container { 
  // background-color: #222;
  .header {
    height: 361px;
    background: url("~@/assets/banner.png");
    background-size: cover;
  }

  .not-login {
    display: flex;
    justify-content: center;
    align-items: center;
    .login-btn {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .mobile-img {
        width: 132px;
        height: 132px;
        margin-bottom: 15px;
      }
      .text {
        font-size: 28px;
        color: #fff;
      }
    }
  }

  .user-info {
    .base-info {
      height: 231px;
      padding: 76px 32px 23px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left {
        display: flex;
        align-items: center;
        .avatar {
          width: 132px;
          height: 132px;
          border: 4px solid #fff;
          margin-right: 23px;
        }
        .name {
          font-size: 30px;
          color: #fff;
        }
      }
    }
    .data-stats {
      display: flex;
      .data-item {
        height: 130px;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
        .count {
          font-size: 36px;
        }
        .text {
          font-size: 23px;
        }
      }
    }
  }

  .grid-nav {
    .grid-item {
      height: 150px;
      i.toutiao {
        font-size: 45px;
      }
      .toutiao-shoucang {
        color: #eb5253;
      }
      .toutiao-lishi {
        color: #ff9d1d;
      }
      span.text {
        font-size: 28px;
      }
    }
  }

  .logout-cell {
    text-align: center;
    color: #d86262;
    margin-top: 20px;
    // border-radius: 30px;
    overflow: hidden;
  }
  .van-grid-dingdan {
    margin-top: -26px;
  }
  .navigation-van {
    width: 98%;
    margin: 0 auto;
    margin-top: -23px;
    border-radius: 40px;
    height:378px;
    overflow: hidden;
    box-shadow: 3px 3px rgba(17, 3, 3, 0.102);
  }
  .tool-box {
    width: 98%;
    margin: 0 auto;
    box-shadow: 3px 3px rgba(17, 3, 3, 0.102);
    margin-top: 20px;
    border-radius: 40px;
    overflow: hidden;
  }
  .color-tool {
    color: blue;
  }
  .fenge-xiang {
    height: 0.8px;
  }
}
</style>

