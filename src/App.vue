<template>
  <div id="app">
    <!-- 路由的出口 -->
    <transition :name="SkipSwitchName">
      <router-view class="router-view"> </router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      SkipSwitchName: "Skleft"
    };
  },
  watch: {
    // $route (to, from) {
    //   if (to.meta.tx < from.meta.tx) {
    //     this.SkipSwitchName = 'Skleft'
    //   } else {
    //     this.SkipSwitchName = 'Skright'
    //   }
    // }

  }
}
</script>

<style lang="less">
.Skleft-enter-active {
  animation-name: Skleft-in;
  animation-duration: 0.3s;
}
.Skleft-leave-active {
  animation-name: Skleft-out;
  animation-duration: 0.3s;
}
@keyframes Skleft-in {
  0% {
    -webkit-transform: translate3d(100%, 0, 0);
  }

  100% {
    -webkit-transform: translate3d(0, 0, 0);
  }
}
@keyframes Skleft-out {
  0% {
    opacity: 0;
    height: 0;
    -webkit-transform: translate3d(0, 0, 0);
  }
  100% {
    opacity: 0;
    height: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
  }
}

// .Skright-enter-active {
//   animation-name: Skright-in;
//   animation-duration: 0.3s;
// }
// .Skright-leave-active {
//   animation-name: Skright-out;
//   animation-duration: 0.3s;
// }
// @keyframes Skright-in {
//   0% {
//     width: 100%;
//     -webkit-transform: translate3d(-100%, 0, 0);
//     transform: translate3d(-100%, 0, 0);
//     /* visibility: visible; */
//   }
//   /*50% {
//       transform: translate3d(50%, 0, 0);
//     }*/
//   100% {
//     width: 100%;
//     -webkit-transform: translate3d(0, 0, 0);
//     transform: translate3d(0, 0, 0);
//   }
// }
// @keyframes Skright-out {
//   0% {
//     width: 100%;
//     -webkit-transform: translate3d(0, 0, 0);
//     transform: translate3d(0, 0, 0);
//   }
//   /*50% {
//       transform: translate3d(-50%, 0 , 0);
//     }*/
//   100% {
//     width: 100%;
//     -webkit-transform: translate3d(100%, 0, 0);
//     transform: translate3d(100%, 0, 0);
//     /* visibility: hidden; */
//   }
// }
</style>
