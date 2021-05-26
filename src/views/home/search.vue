<template>
  <div>
    <form action="/">
      <van-search
        height="100vh"
        v-model="value"
        show-action
        placeholder="搜索职位或公司"
        shape="round"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <div class="recommend">
      <p>职位推荐</p>
      <div class="recommend_tag">
        <van-tag color="rgb(245,247,249)" size="large" text-color="#000"
          >前端开发</van-tag
        >
        <van-tag color="rgb(245,247,249)" size="large" text-color="#000"
          >web前端</van-tag
        >
        <van-tag color="rgb(245,247,249)" size="large" text-color="#000"
          >HTML5</van-tag
        >
        <van-tag color="rgb(245,247,249)" size="large" text-color="#000"
          >JavaScript</van-tag
        >
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from 'vant';
export default {
  data () {
    return {
      value: ''
    }
  },
  methods: {
    onSearch (val) {
      Toast(val);
    },
    onCancel () {
      this.$router.back()
    },
  },
}
</script>
<style lang="less" scoped>
.recommend {
  height: 90vh;
  background: #fff;
  padding: 20px 40px;
  p {
    margin: 0;
    font-size: 36px;
    font-weight: bold;
  }
  .recommend_tag {
    /deep/.van-tag--default {
      margin: 10px;
    }
  }
}
</style>