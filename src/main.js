import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import { Lazyload } from 'vant';

// 加载 Vant 核心组件库
import Vant from 'vant'


// 加载 Vant 全局样式
import 'vant/lib/index.css'

// 加载全局样式
import './styles/index.less'

// 加载动态设置 REM 基准值
import 'amfe-flexible'
//加载地图
import AMap from 'vue-amap'
//使用地图
Vue.use(AMap)

 // 初始化vue-amap
 AMap.initAMapApiLoader({
  // 高德key
  key: 'f1dfcc4ee5ce3d72b7010c43c29220ec',
  // 插件集合 （插件按需引入）
  plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.Geocoder', 'AMap.PlaceSearch', 'AMap.Geolocation' ,'AMap.CitySearch']
});

// 注册使用 Vant 组件库
Vue.use(Vant)
// Vue.use(Lazyload, {
//   lazyComponent: true,
// });

Vue.config.productionTip = false

//路由跳转后自动回到顶部
router.afterEach(() => {
  window.scrollTo(0,0);
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
