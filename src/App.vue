<template>
  <div id="app">
    <!-- 路由的出口 -->
    <!-- <transition :name="SkipSwitchName"> -->
    <router-view class="router-view"> </router-view>
    <!-- </transition> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      SkipSwitchName: ""
    };
  },
  watch: {
    $route (to, from) {
      if (to.meta.tx < from.meta.tx) {
        this.SkipSwitchName = 'Skleft'
      } else {
        this.SkipSwitchName = 'Skright'
      }
    }

  }
}
</script>

<style lang="less"></style>
