<template>
  <div class="location-container">
    <van-nav-bar
      class="job"
      title="位置"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div>
      <van-field
        v-model="fieldValue"
        is-link
        readonly
        label="地区"
        placeholder="请选择所在地区"
        @click="show = true"
      />
      <div>
        <van-button
          @click="show = true"
          icon="location"
          type="warning"
          v-model="fieldValue"
          >{{ fieldValue }}</van-button
        >
      </div>
      <van-popup v-model="show" round position="bottom">
        <van-cascader
          v-model="cascaderValue"
          title="请选择所在地区"
          :options="options"
          @close="show = false"
          @finish="onFinish"
        />
      </van-popup>
    </div>

    <div class="amap-page-container">
      <div :style="{ width: '100%', height: '375px' }">
        <el-amap
          vid="amap"
          :events="events"
          :plugin="plugin"
          class="amap-demo"
          :zoom="zoom"
          :center="center"
        >
          <el-amap-marker
            v-for="(marker, index) in markers"
            :position="marker"
            :key="index"
          ></el-amap-marker>
        </el-amap>
      </div>

      <div class="toolbar">
        <span v-if="loaded"> location: lng = {{ lng }} lat = {{ lat }} </span>
        <span v-else>正在定位</span>
      </div>
      <div v-on:click="req_post()">查询周边</div>
    </div>
  </div>
</template>

<script>
export default {

  data () {

    const self = this;
    return {
      show: false,
      fieldValue: '默认',
      cascaderValue: '',
      // 选项列表，children 代表子选项，支持多级嵌套
      options: [
        {
          text: '浙江省',
          value: '330000',
          children: [{
            text: '杭州市',
            value: '330100',
            children: [{
              text: '上城区', value: '330101'
            }, {
              text: '下城区', value: '330102'
            }]
          }],
        },
        {
          text: '江苏省',
          value: '320000',
          children: [{ text: '南京市', value: '320100' }],
        },
      ],
      center: [121.59996, 31.197646],
      zoom: 17,
      address: null,
      searchKey: '',
      markers: [],
      lng: 0,
      lat: 0,
      loaded: false,
      events: {

        // 点击获取地址的数据
        click (e) {
          // console.log(e)
          self.markers = []
          let { lng, lat } = e.lnglat
          self.lng = lng
          self.lat = lat
          self.center = [lng, lat]
          self.markers.push([lng, lat])
          // 这里通过高德 SDK 完成。
          let geocoder = new AMap.Geocoder({
            radius: 1000,
            extensions: 'all'
          })
          //上传具体地址
          geocoder.getAddress([lng, lat], function (status, result) {
            if (status === 'complete' && result.info === 'OK') {
              if (result && result.regeocode) {
                console.log(result.regeocode.formattedAddress)
                self.address = result.regeocode.formattedAddress
                self.searchKey = result.regeocode.formattedAddress
                self.$nextTick()
              }
            }
          })
        }
      },
      plugin: [{
        enableHighAccuracy: true,//是否使用高精度定位，默认:true
        timeout: 100,          //超过10秒后停止定位，默认：无穷大
        maximumAge: 0,           //定位结果缓存0毫秒，默认：0
        convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
        showButton: true,        //显示定位按钮，默认：true
        buttonPosition: 'RB',    //定位按钮停靠位置，默认：'LB'，左下角
        showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
        showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
        panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
        zoomToAccuracy: true,//定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：f
        extensions: 'all',
        pName: 'Geolocation',
        events: {
          init (o) {
            // o 是高德地图定位插件实例
            o.getCurrentPosition((status, result) => {
              // console.log(result)
              if (result && result.position) {
                self.lng = result.position.lng;
                self.lat = result.position.lat;
                self.center = [self.lng, self.lat];
                self.markers.push([self.lng, self.lat])
                self.loaded = true;
                self.$nextTick();
              }
              console.log(status)
            });
          }
        }
      },

      ]

    };
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    },
    // 全部选项选择完毕后，会触发 finish 事件
    onFinish ({ selectedOptions }) {
      this.show = false;
      this.fieldValue = selectedOptions.map((asd) => asd.text).pop();
    },
    initSearch () {
      let vm = this
      let map = this.amapManager.getMap()
      console.log(map)
    },
  }
}
</script>
<style lang="less" scoped>
.job {
  background: #4fc08d;
}
.amap-demo {
  height: 100%;
}
</style>