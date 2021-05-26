<template>
  <div>
    <div class="jishu">
      <van-nav-bar
        class="jishu_bar"
        fixed
        placeholder
        @click-left="onClickLeft"
      >
        <template #left>
          <van-icon name="arrow-left" color="black" size="24px"></van-icon>
          <span>技术</span>
        </template>
      </van-nav-bar>
    </div>
    <div>
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <JobList v-for="item in list" :key="item"></JobList>
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>
<script>
//引入自定义组件 
import JobList from '../../components/jobList.vue'
export default {

  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
    }
  },
  components: {
    JobList
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    },
    onLoad () {
      setTimeout(() => {
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }

        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        this.loading = false;

        if (this.list.length >= 20) {
          this.finished = true;
        }
      }, 1000);
    },
    onRefresh () {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },

  },

}

</script>
<style lang="less" scoped>
.jishu_bar {
  background: #fff;
  /deep/.van-nav-bar__left {
    color: #000;
    font-size: 34px;
  }
}
</style>