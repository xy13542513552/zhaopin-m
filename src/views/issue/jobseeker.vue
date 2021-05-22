<template>
  <div class="recruitment">
    <van-nav-bar class="job" @click-left="onClickLeft">
      <van-icon color="#000" slot="left" name="arrow-left" />
    </van-nav-bar>
    <div class="head">
      <div class="flex">
        <span class="biaoti">{{ recruitmentMess }}</span>
      </div>
      <van-steps class="step" :active="active">
        <van-step class="stepleft">填写个人信息</van-step>
        <van-step class="stepright">求职意向</van-step>
      </van-steps>
      <div>
        <div class="head_portrait">
          <van-cell
            class="cell_bottom boder_bottom head_padd"
            title="头像"
            size="large"
            label="使用真实头像更容易提升求职成功率"
          />
          <van-uploader
            class="boder_bottom"
            v-model="fileList"
            multiple
            :max-count="1"
          />
        </div>
        <!-- 输入姓名 -->
        <div class="fieds">
          <span class="span_padding">姓名</span>
          <van-field
            class="boder_bottom"
            v-model="value"
            placeholder="请输入姓名"
            size="large"
          />
        </div>
        <!-- 性别选择 -->
        <div class="fieds">
          <span class="span_padding">性别</span>
          <van-field
            class="boder_bottom"
            readonly
            clickable
            name="picker"
            :value="sex"
            placeholder="选择性别"
            @click="showPicker = true"
          />
          <van-popup v-model="showPicker" position="bottom">
            <van-picker
              show-toolbar
              :columns="columns"
              @confirm="onConfirm"
              @cancel="showPicker = false"
            />
          </van-popup>
        </div>

        <!-- 选择出生年月 -->
        <div class="fieds">
          <span class="span_padding">出生年月</span>
          <van-field
            class="boder_bottom"
            readonly
            clickable
            :value="date"
            name="calendar"
            placeholder="点击选择日期"
            @click="showCalendar = true"
          />
          <van-popup
            v-model="showCalendar"
            round
            position="bottom"
            :style="{ height: '30%' }"
          >
            <van-datetime-picker
              v-model="currentDate"
              type="date"
              title="出生年月"
              :min-date="minDate"
              :max-date="maxDate"
              @confirm="onConfirmDate"
              @cancel="showCalendar = false"
            />
          </van-popup>
        </div>
        <!-- 参加工作时间 -->
        <div class="fieds">
          <span class="span_padding">参加工作时间</span>
          <van-field
            class="boder_bottom"
            readonly
            clickable
            :value="workDate"
            name="calendar"
            placeholder="点击选择日期"
            @click="showWork = true"
          />
          <van-popup
            v-model="showWork"
            round
            position="bottom"
            :style="{ height: '30%' }"
          >
            <van-datetime-picker
              v-model="currentDateWork"
              type="year-month"
              title="参加工作时间"
              :min-date="minDateWork"
              :max-date="maxDateWork"
              @confirm="onConfirmWork"
              @cancel="showWork = false"
            />
          </van-popup>
        </div>

        <!-- 微信号 -->
        <div class="fieds">
          <span class="span_padding">微信号</span>
          <van-field
            class="boder_bottom"
            v-model="weixin"
            placeholder="请输入微信号"
            size="large"
          />
        </div>
      </div>
      <p class="zhu">注：职位名称、职位类型和工作城市发布后不可修改</p>
    </div>
    <div class="bottom">
      <div class="bottom1">
        <van-button
          v-if="recruitmentMess === '发布校招'"
          type="primary"
          size="large"
          disabled
          >下一步</van-button
        >
        <van-button v-else type="primary" size="large">下一步</van-button>
      </div>
    </div>

    <van-action-sheet
      v-model="exchangeShow"
      :actions="actions"
      @select="onSelect"
    />
  </div>
</template>
<script>
export default {

  data () {
    return {
      recruitmentMess: "求职发布",
      actions: [
        { name: "社招", text: "发布社招" },
        { name: "应届校园招聘", text: "发布校招" },
        { name: "实习生招聘", text: "发布实习" }],
      exchangeShow: false,
      active: 0,
      fileList: [],
      value: "",
      sex: "",
      columns: ['男', '女'],
      showPicker: false,

      date: "",
      minDate: new Date(1980, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(2021, 5, 17),
      showCalendar: false,

      workDate: '',
      minDateWork: new Date(1980, 0, 1),
      maxDateWork: new Date(2025, 10, 1),
      currentDateWork: new Date(2021, 5, 17),
      showWork: false,

      weixin: ""
    };
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    },
    onSelect (item) {
      this.exchangeShow = false;
      this.recruitmentMess = item.text
    },
    onConfirm (value) {
      this.sex = value;
      this.showPicker = false;
    },

    onConfirmDate (date) {
      this.date = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
      this.showCalendar = false;
    },
    onConfirmWork (date) {
      this.workDate = `${date.getFullYear()}.${date.getMonth() + 1}`;
      this.showWork = false;
    }
  }
}
</script>







































<style lang="less" scoped>
.job {
  background: #fff;
}
.recruitment {
  background: #fff;
  height: 100vh;
}
.head {
  padding: 20px;
  font-size: 30px;
  background: #fff;
  .flex {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    .biaoti {
      font-size: 60px;
      font-weight: bold;
    }
    .exchange {
      display: flex;
      align-items: center;
    }
  }
  .head_portrait {
    display: flex;
    justify-content: space-between;
    margin: 0 32px;
  }
  .step {
    padding: 0 60px;
  }
  .zhu {
    margin: 0 32px;
    padding-top: 50px;
    border-top: #d8d8d8 1px solid;
    font-size: 24px;
    color: #969799;
  }
  .cell_bottom {
    padding-bottom: 40px;
    padding-left: 0;
    padding-right: 0;
  }
  .label-class {
    color: black;
    font-size: 24px;
  }
  .fieds {
    margin: 0 32px;
    margin-top: 30px;
    // .span_padding {
    // }
  }
}
.boder_bottom {
  font-size: 40px;
  // font-weight: bold;
  border-bottom: #d8d8d8 1px solid;
}
.bottom {
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  // border-top: #d8d8d8 1px solid;
  padding-top: 20px;
  .bottom1 {
    width: 80%;
  }
}
</style>