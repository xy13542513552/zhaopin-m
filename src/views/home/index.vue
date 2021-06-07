<template>
  <div class="home-container">
    <!-- 搜索框 -->
    <van-sticky>
      <div class="search" ref="serchDom">
        <div class="search_flex">
          <van-icon
            @click="location"
            class="search_icon_left"
            name="location"
          ></van-icon>
          <div class="search_title">首页</div>
        </div>

        <van-search
          v-model="value"
          shape="round"
          placeholder="搜索职位或公司"
          @focus="onFocus"
        >
          <template #right-icon>
            <van-button
              class="ass"
              type="primary"
              round
              size="mini"
              @click="onFocus"
              >搜索</van-button
            >
          </template>
        </van-search>
      </div>
    </van-sticky>
    <!-- 轮播图 -->
    <div class="picture_padding">
      <div class="picture">
        <van-swipe :autoplay="3000" @change="onChange">
          <van-swipe-item
            class="picture_item"
            v-for="(image, index) in images"
            :key="index"
          >
            <img class="picture_img" :src="image" />
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>

    <div class="basics">
      <!-- 服务模块 -->
      <div class="grid_div">
        <van-grid square :column-num="4" :border="false" :clickable="true">
          <van-grid-item
            v-for="value in grids"
            :key="value.key"
            :text="value.text"
            @click="getLists(value.methods)"
          >
            <!-- <i class="grid_item_i" slot="icon" :class="value.class"></i> -->
            <img slot="icon" src="../../images/坐标.png" width="36px" alt="" />
          </van-grid-item>
        </van-grid>
      </div>
      <div class="simulation">
        <van-grid :column-num="2" clickable :border="false">
          <van-grid-item class="grid-item" @click="zhaopin()">
            <i slot="icon" class="iconfont icon-zhaopin"></i>
            <span slot="text" class="text">我要招聘</span>
          </van-grid-item>
          <van-grid-item class="grid-item" @click="jianzhi()">
            <i slot="icon" class="iconfont icon-jianzhi"></i>
            <span slot="text" class="text">我要兼职</span>
          </van-grid-item>
        </van-grid>
      </div>
      <div class="card">
        <van-tabs v-model="active" animated sticky :offset-top="sticky_top">
          <van-tab title="推荐">
            <van-list
              v-model="loading"
              :finished="finished"
              finished-text="没有更多了"
              @load="onLoad"
            >
              <JobList v-for="item in list" :key="item"></JobList>
            </van-list>
          </van-tab>
          <van-tab title="最新">
            <van-card
              class="goods-card"
              num="2"
              price="2.00"
              desc="描述信息"
              title="商品标题"
              thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
              @click="commodity_details()"
            />
          </van-tab>
        </van-tabs>
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
import JobList from '../../components/jobList'
import { getHomeList } from '@/api/user'
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
      actions: [{ name: '招聘发布', url: "/recruitment" },
      { name: '找工作发布', url: '/jobseeker' }],
      images: [
        "https://img01.yzcdn.cn/vant/apple-1.jpg",
        "https://img01.yzcdn.cn/vant/apple-2.jpg",
      ],
      //分享开关
      showShare: false,
      //发布开关
      show: false,
      //轮播图网址
      pagination: "",
      grids: [
        { class: "iconfont  icon-jishu", text: '技术', key: "jishu", methods: "jishu_router" },
        { class: "iconfont icon-icon-prize1", text: '产品', key: "chanping" },
        { class: "iconfont icon-sheji", text: '设计', key: "sheji" },
        { class: "iconfont icon-yunying", text: '运营', key: "yunying" },
        { class: "iconfont icon-shichang", text: '市场', key: "shichng" },
        { class: "iconfont icon-renshi", text: '人事', key: "renshi" },
        { class: "iconfont icon-xiaoshou", text: '销售', key: "xiaoshou" },
        { class: "iconfont icon-mediatb", text: '传媒', key: "chuangmei" },

      ],
      active: 0,
      list: [],
      loading: false,
      finished: false,
      //标签吸顶高度
      sticky_top: "",
    };
  },

  components: {
    JobList
  },
  watch: {},
  created () { },
  mounted () {
    //初始化标签吸顶高度
    this.sticky_top = this.$refs.serchDom.offsetHeight
    //屏幕变化时动态改变标签吸顶高度
    window.onresize = () => {
      return (() => {
        this.sticky_top = this.$refs.serchDom.offsetHeight
      })();
    }
    this.getList()
  },

  methods: {
    //搜索框焦点事件
    onFocus (val) {
      this.$router.push('searCh')
    },
    onChange (index) {
      if (index == 0)
        this.pagination = "https://www.baidu.com/"
      else
        this.pagination = "https://www.taobao.com/"
    },
    picture (e) {
      window.location.href = e
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
    location () {
      this.$router.push("location")
    },
    zhaopin () {
      this.$router.push('recruitment')
    },
    jianzhi () {
      this.$router.push('jobseeker')
    },
    //招聘详情跳转
    commodity_details () {
      this.$router.push('particulars')
    },
    jishu_router () {
      this.$router.push("look")
    },

    onLoad () {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 20) {
          this.finished = true;
        }
      }, 500);
    },
    async getList () {
      try {
        const { listdata } = await getHomeList()
        console.log(getHomeList())
      } catch (err) {
        this.$toast('获取数据失败，请稍后重试')
      }
    },
  }
};
</script>

<style scoped lang="less">
.home-container {
  .basics {
    padding: 16px 0;
  }
  .search {
    background-image: linear-gradient(#3390cc, #33d0cc);

    width: 100%;
    z-index: 1;
    /deep/.van-search {
      background: none;
    }
    .search_flex {
      display: flex;
      align-items: flex-end;
      justify-content: center;
      .search_title {
        color: white;
        font-size: 30px;
        line-height: 60px;
        font-weight: bold;
      }
      .search_icon_left {
        color: white;
        position: absolute;
        left: 0;
        top: 6px;
        font-size: 48px;
      }
    }
  }
  .picture_padding {
    .picture {
      .picture_item {
        background: red;
        .picture_img {
          width: 100%;
          height: 400px;
          display: block;
          box-sizing: border-box;
          background: #fff;
        }
      }
    }
  }
  .grid_div {
    border-radius: 30px;
    overflow: hidden;
    box-shadow: 0 2px 3px #aaaaaa;
    .grid_item_i {
      font-size: 48px;
    }
  }

  .simulation {
    margin: 20px 0;
    border-radius: 80px;
    overflow: hidden;
    box-shadow: 0 2px 3px #aaaaaa;
  }
  .card {
    .goods-card {
      background-color: #fff;
    }
  }

  .delete-button {
    height: 100%;
  }
  .van-button--small {
    padding: 0 30px !important;
  }
  .ass {
    padding: 10px 30px;
    display: flex;
  }
}

.grid-item {
  height: 141px;
  i.iconfont {
    font-size: 60px;
  }
  .icon-zhaopin {
    color: red;
  }
  .icon-jianzhi {
    color: blue;
  }
  span.text {
    font-size: 36px;
  }
}
</style>
