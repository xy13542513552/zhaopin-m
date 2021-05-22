<template>
  <div class="home-container">
    <!-- 搜索框 -->
    <div class="search">
      <van-search
        v-model="value"
        shape="round"
        background="#4fc08d"
        placeholder="请输入搜索关键词"
        @search="onSearch"
      >
        <template #right-icon>
          <van-button type="primary" round size="small">搜索</van-button>
        </template>
      </van-search>
    </div>
    <div class="basics">
      <!-- 轮播图 -->
      <div class="picture">
        <van-swipe :autoplay="3000" @change="onChange">
          <van-swipe-item
            v-for="(image, index) in images"
            :key="index"
            @click="picture"
          >
            <img height="200px" width="100%" :src="image" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- 服务模块 -->
      <div>
        <van-grid square :column-num="4" :border="false" :clickable="true">
          <van-grid-item
            v-for="value in grids"
            :key="value.key"
            :icon="value.icon"
            :text="value.text"
            @click="getLists(value.methods)"
          />
        </van-grid>
      </div>

      <div class="simulation">
        <!-- <van-button type="primary" icon="balance-o">电商模块</van-button> -->
        <van-grid
          :column-num="1"
          :border="false"
          :clickable="true"
          icon-size="36px"
        >
          <van-grid-item icon="balance-o" text="电商模块" />
        </van-grid>
      </div>
      <div class="card">
        <van-swipe-cell>
          <van-card
            class="goods-card"
            num="2"
            price="2.00"
            desc="描述信息"
            title="商品标题"
            thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
          />
          <template #right>
            <van-button
              square
              text="删除"
              type="danger"
              class="delete-button"
            />
          </template>
        </van-swipe-cell>
        <van-card
          class="goods-card"
          num="2"
          price="2.00"
          desc="描述信息"
          title="商品标题"
          thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
        />
        <van-card
          class="goods-card"
          num="2"
          price="2.00"
          desc="描述信息"
          title="商品标题"
          thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
        />
      </div>
    </div>

    <!-- 分享 -->
    <van-share-sheet
      v-model="showShare"
      title="立即分享给好友"
      :options="options"
      @select="onSelect"
    />
    <!-- 发布选项 -->
    <van-action-sheet v-model="show" :actions="actions" @select="onLook" />
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  name: "HomeIndex",
  data () {
    return {
      options: [
        { name: '微信', icon: 'wechat' },
        { name: '朋友圈', icon: 'wechat-moments' },
        { name: '微博', icon: 'weibo' },
        { name: 'QQ', icon: 'qq' },
      ],
      value: "",
      actions: [{ name: '招聘发布', url: "/recruitment" }, { name: '找工作发布', url: '/jobseeker' }],
      images: [
        "https://img01.yzcdn.cn/vant/apple-1.jpg",
        "https://img01.yzcdn.cn/vant/apple-2.jpg",
      ],
      //分享开关
      showShare: false,
      //发布开关
      show: false,
      //客服开关
      serviceShow: false,
      pagination: 0,
      grids: [
        { icon: 'phone', text: '客服服务', methods: "service", key: "k1" },
        { icon: 'star', text: '发布', methods: "issueShow", key: "k2" },
        { icon: 'share', text: '分享服务', methods: 'enjoyShow', key: "k3" },
        { icon: 'eye', text: '查看服务', methods: 'look', key: "k4" },
        { icon: 'location', text: '位置服务', methods: "location", key: "k5" },
        { icon: 'chat', text: '信息', key: "k6", methods: 'message' },
        { icon: 'phone', text: '客服服务', key: "k7" },
        { icon: 'phone', text: '客服服务', key: "k8" },
      ]
    };
  },

  computed: {},
  watch: {},
  created () { },
  mounted () { },
  methods: {
    //搜索框确认事件
    onSearch (val) {
      Toast(val)
    },
    onChange (index) {
      this.pagination = index
    },
    picture () {
      this.$router.push('picture' + this.pagination)
    },
    onSelect (option) {
      Toast(option.name);
      this.showShare = false;
    },
    onLook (item) {
      this.show = false;
      this.$router.push(item.url)
      // Toast(item.name)
    },
    getLists (item) {
      this[item]()
    },
    issueShow () {
      this.show = true
    },
    enjoyShow () {
      this.showShare = true
    },
    service () {
      this.$router.push('complaint')
    },
    location () {
      this.$router.push("location")
    },
    look () {
      this.$router.push("look")
    },
    message () {
      this.$router.push("qa")
    }
  }
};
</script>

<style scoped lang="less">
.home-container {
  .basics {
    padding: 16px;
  }
  .search {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1;
  }
  .picture {
    margin-top: 125px;
  }
  .simulation {
    margin: 50px 0;
    button {
      padding: 50px 100px;
    }
  }
  .goods-card {
    // margin: 0;
    background-color: #fff;
  }

  .delete-button {
    height: 100%;
  }
  .van-button--small {
    padding: 0 30px !important;
  }
}
</style>
