<template>
  <div class="location-container">
    <van-nav-bar
      class="job"
      title="位置"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="con_back">
      <div class="con-box">
        <div class="mapbox">
          <van-sticky>
            <!-- 搜索框 -->
            <div class="con_search">
              <van-search
                v-model="value"
                id="keyword"
                name="keyword"
                background="#fff"
                placeholder="请输入搜索关键词"
              />
            </div>
            <!-- 地图 -->
            <div :style="{ width: '100%', height: '375px' }">
              <el-amap
                vid="amap"
                :amap-manager="amapManager"
                :events="events"
                :plugin="plugin"
                class="amap-demo"
                :zoom="zoom"
                :center="center"
              >
                <!-- amap-manager： 地图管理对象 
          vid：地图容器节点的ID 
          zooms：地图显示的缩放级别范围，在PC上，默认范围[3,18]，取值范围[3-18]；在移动设备上，默认范围[3-19]，取值范围[3-19]
          center： 地图中心点坐标值 
          plugin：地图使用的插件 
          events： 事件 -->
                <!-- 图标 -->
                <el-amap-marker
                  v-for="(marker, index) in markers"
                  :position="marker"
                  :key="index"
                ></el-amap-marker>
              </el-amap>
            </div>
          </van-sticky>
        </div>
        <!-- 中心点附近列表 -->
        <div class="list-box">
          <ul>
            <li
              v-for="(item, index) in lists"
              :key="index"
              @click="onResLi(item)"
            >
              <span>{{ item.name }}</span>
              <p>{{ item.address }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//引入地图管理对象
import { AMapManager } from "vue-amap"
let amapManager = new AMapManager();
export default {
  data () {
    const self = this;
    return {
      ceshi: '',
      value: "",
      search_key: '',        //搜索值
      lists: [],                          //地点列表
      search_list: [],       //搜索结果列表
      noSearchShow: false, //无搜索结果提示，无搜索结果时会显示暂无搜索结果
      center: [121.59996, 31.197646],
      amapManager,
      zoom: 17,
      address: null,
      searchKey: '',
      markers: [],
      lng: 0,
      lat: 0,
      loaded: false,
      autocomplete: {},
      events: {
        init (o) {
          var placeSearch = new AMap.PlaceSearch({
            type: '餐饮服务|购物服务|生活服务|体育休闲服务|医疗保健服务|住宿服务|风景名胜|商务住宅|政府机构及社会团体|科教文化服务|金融保险服务|公司企业|地名地址信息', // 兴趣点类别
            pageSize: 30, // 单页显示结果条数
            pageIndex: 1, // 页码
            city: "娄底", // 兴趣点城市
            autoFitView: false // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
          });
          //根据地图中心点查附近地点
          placeSearch.searchNearBy('', [self.center[0], self.center[1]], 200, (status, result) => {
            if (status == 'complete') {
              self.lists = result.poiList.pois//将查询到的地点赋值
            }
          });
        },
        moveend () {
          let map = amapManager._map
          let lng = map.getCenter().lng
          let lat = map.getCenter().lat
          this.center = [lng, lat]
          var placeSearch = new AMap.PlaceSearch({
            type: '餐饮服务|购物服务|生活服务|体育休闲服务|医疗保健服务|住宿服务|风景名胜|商务住宅|政府机构及社会团体|科教文化服务|金融保险服务|公司企业|地名地址信息', // 兴趣点类别
            pageSize: 30, // 单页显示结果条数
            pageIndex: 1, // 页码
            city: "娄底", // 兴趣点城市
            autoFitView: false // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
          });
          //根据地图中心点查附近地点
          placeSearch.searchNearBy('', [lng, lat], 200, (status, result) => {
            if (status == 'complete') {
              self.lists = result.poiList.pois//将查询到的地点赋值
            }
          });
          // console.log(this.center)
        },
        //地图移动图标跟着移动
        mapmove () {
          let map = amapManager._map
          self.markers = []
          let lng = map.getCenter().lng
          let lat = map.getCenter().lat
          self.markers.push([lng, lat])
        },
        // 点击获取地址的数据
        // click (e) {

        //   self.markers = []
        //   let { lng, lat } = e.lnglat
        //   self.lng = lng
        //   self.lat = lat
        //   self.center = [lng, lat]
        //   self.markers.push([lng, lat])
        //   // 这里通过高德 SDK 完成。
        //   let geocoder = new AMap.Geocoder({
        //     radius: 1000,
        //     extensions: 'all'
        //   })
        //   //上传具体地址 
        //   geocoder.getAddress([lng, lat], function (status, result) {
        //     if (status === 'complete' && result.info === 'OK') {
        //       if (result && result.regeocode) {
        //         self.address = result.regeocode.formattedAddress
        //         self.searchKey = result.regeocode.formattedAddress
        //         self.$nextTick()
        //       }
        //     }
        //   })
        // }
      },
      plugin: [
        {
          enableHighAccuracy: true,//是否使用高精度定位，默认:true
          timeout: 100,          //超过10秒后停止定位，默认：无穷大
          maximumAge: 0,           //定位结果缓存0毫秒，默认：0
          convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
          showButton: true,        //显示定位按钮，默认：true
          buttonPosition: 'RB',    //定位按钮停靠位置，默认：'LB'，左下角
          showMarker: false,        //定位成功后在定位到的位置显示点标记，默认：true
          showCircle: false,        //定位成功后用圆圈表示定位精度范围，默认：true
          panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
          zoomToAccuracy: true,//定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：f
          extensions: 'all',
          pName: 'Geolocation',
          events: {
            init (o) {
              // o 是高德地图定位插件实例
              o.getCurrentPosition((status, result) => {
                if (result && result.position) {
                  self.lng = result.position.lng;
                  self.lat = result.position.lat;
                  self.center = [self.lng, self.lat];
                  self.markers.push([self.lng, self.lat])
                  self.loaded = true;
                  self.$nextTick();
                }
                console.log(result.message)
                // self.ceshi = result.message
              });
            },
          }
        },
        {
          pName: 'Autocomplete',
          events: {
            init (o) {
              var autoOptions = {
                city: "娄底", //城市，默认全国
                input: "keyword"//使用联想输入的input的id
              };
              var autocomplete = new AMap.Autocomplete(autoOptions);
              self.autocomplete = autocomplete
            }
          }
        },
        {
          pName: 'PlaceSearch',
          events: {
            init (o) {
              console.log(self.autocomplete)

              var placeSearch = new AMap.PlaceSearch({
                type: '餐饮服务|购物服务|生活服务|体育休闲服务|医疗保健服务|住宿服务|风景名胜|商务住宅|政府机构及社会团体|科教文化服务|金融保险服务|公司企业|地名地址信息', // 兴趣点类别
                pageSize: 10, // 单页显示结果条数
                pageIndex: 1, // 页码
                city: '娄底',
                map: amapManager._map
              })
              AMap.event.addListener(self.autocomplete, "select", function (e) {
                //TODO 针对选中的poi实现自己的功能
                placeSearch.setCity(e.poi.adcode);
                placeSearch.search(e.poi.name);
                self.value = e.poi.name
                console.log(e)
              });
            }
          }
        },
      ]
    };
  },
  mounted () {
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    },
    onResLi (e) {
      let lat = e.location.lat
      let lng = e.location.lng
      this.center = [lng, lat]
      console.log(this.center)
    }
  }
}
</script>
<style lang="less" scoped>
.con_back {
  background: #fff;
}
.job {
  background: #4fc08d;
}
.amap-demo {
  height: 100%;
}
.list-box {
  font-size: 24px;
  ul {
    li {
      margin: 30px 0;
      padding-left: 30px;
      border-bottom: 1px #ebedf0 solid;
      span {
        font-size: 30px;
      }
      p {
        margin: 0;
        padding-bottom: 30px;
        color: rgb(153, 153, 153);
      }
    }
    li:last-child {
      margin-bottom: 0;
    }
  }
}
.con_search {
  /deep/.van-search {
    padding: 0;
  }
}
</style>