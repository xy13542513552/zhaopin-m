<template>
  <div class="ding-container">
    <!-- 导航栏 -->
    <van-nav-bar class="page-nav-bar" title="我的订单" left-arrow @click-left="$router.back()"/>

    <!-- 订单tablan -->
    <van-tabs v-model="active" animated>
      <van-tab title="全部" name="1">全部订单</van-tab>
      <van-tab title="定金" name="2">定金</van-tab>
      <van-tab title="待付款" name="3">待付款</van-tab>
      <van-tab title="已完成" name="4">已完成</van-tab>
      <van-tab title="待评价" name="5">评价</van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "DingIndex",
  components: {},
  props: {},
  data() {
    return {
      active: ""
    };
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
    // console.log(this.$route.params.id);
this.active=this.$route.params.id
    // this.$route.query.index
  },
  methods: {}
};
</script>

<style scoped lang="less"></style>