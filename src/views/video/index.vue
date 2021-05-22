<template>
  <div class="video-container">
    <!-- 导航栏 -->
    <van-search v-model="value" placeholder="请输入搜索关键词" input-align="center"/>

    <!-- 侧边栏 -->
    <van-sidebar v-model="activeKey" class="van-chebianlan"  @change="onload">
      <van-sidebar-item
        :title="response.userName"
        v-for="response in response"
        :key="response.userId"
      ></van-sidebar-item>
    </van-sidebar>

    <!-- 招聘详情页 -->
    <!-- <div class="van-zhaopin" >
      <van-card
      v-for="(article,index) in list"
      :key="index"
        :num="article.place"
        :price="article.price"
        currency="肖毅"
        tag="急招"
        :desc="article.depict"
        :title="article.commodity"
        :thumb="article.pictureUrl"
        @click="picture"
      >
      </van-card>
    </div> -->
  </div>
</template>

<script>
import { getUserChannele } from "@/api/user";
// import { getArticles } from "@/api/user";
// import { Notify } from 'vant';

export default {
  name: "VideoIndex",
  components: {},
  props: {},
  data() {
    return {
      activeKey: 0,
      value: "",
      response: [], //频道列表
      // list: [] //招聘列表
    };
  },
  computed: {},
  watch: {},
  created() {
    this.loadChannels();
    // this.changeSide();
    // this.onload();
  },
  mounted() {},
  methods: {
    // 分类页面侧边栏
    async loadChannels() {
      try {
        const { data:res } = await getUserChannele();
        this.response = data.res.message;
        console.log(data);
      } catch (err) {
        this.$toast("获取频道数据失败");
      }
    },
    // onload() {
    //   this.changeSide()
    // },
    // onload (index){
    //   console.log(index);
      // commodityId:imdex,
      // this.list.commodityId = 1
  // commodityId:index
  //  Notify({ type: 'primary', message: index });
  //  console.log(111);
    // },

// 招聘详细页面
    // async changeSide (index) {
    //   console.log(index)
      
    //   try {
    //     const { data } = await getArticles({
    //       commodityId: 0,
    //     })
    //     console.log(data)
    //     const { response } = data
    //     this.list.push(...response)
        
    //   }catch (err) {
    //     console.log ('请求失败', err)
        
    //   }
    // },
    // 页面跳转
    // onChange (index) {
    //   this.pagination = index
    // },
    // picture () {
    //   this.$router.push('picture' + this.pagination)
    // },
  }
};
</script>

<style scoped lang="less">
.van-chebianlan {
  float: left;
}
.van-zhaopin {
  // float: right;
  overflow: hidden;
  // background-color: #222;
}
.van-card {
//   // padding: 40px 150px; 是这样子吗对啊 怎么自动好啦 你个笨蛋你给他上下左右内边距肯定挤成一坨了
  background-color: pink;
}
</style>
