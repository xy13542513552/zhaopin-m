<template>
  <div class="recruitment">
    <van-nav-bar class="job" @click-left="onClickLeft">
      <van-icon color="#000" slot="left" name="arrow-left" />
    </van-nav-bar>
    <div class="head">
      <div class="flex">
        <span class="biaoti">{{ recruitmentMess }}</span>
        <div class="exchange" @click="exchangeShow = true">
          <van-icon name="exchange" />
          <span>切换招聘类型</span>
        </div>
      </div>
      <van-steps class="step" :active="active">
        <van-step class="stepleft">填写基本信息</van-step>
        <van-step class="stepright">选择招聘要求</van-step>
      </van-steps>
      <div>
        <van-cell
          label-class
          class="cell_bottom"
          title="职位名称"
          is-link
          size="large"
          label="请填写职位名称，如“销售专员”"
        />
        <van-cell
          class="cell_bottom"
          title="职位描述"
          is-link
          size="large"
          label="介绍工作内容、职位需求、加分项"
        />
        <van-cell
          class="cell_bottom"
          title="工作地点"
          is-link
          size="large"
          label="请填写精确的工作地点"
        />
      </div>
      <p class="zhu">注：职位名称、职位类型和工作城市发布后不可修改</p>
      <div class="accessory">
        <p>添加附件(最多三张)：</p>
        <van-uploader v-model="fileList" multiple :max-count="3" />
      </div>
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
      recruitmentMess: "发布校招",
      actions: [
        { name: "社招", text: "发布社招" },
        { name: "应届校园招聘", text: "发布校招" },
        { name: "实习生招聘", text: "发布实习" }],
      exchangeShow: false,
      active: 0,
      fileList: [],
    };
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    },
    onSelect (item) {
      this.exchangeShow = false;
      this.recruitmentMess = item.text
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
  }
  .accessory {
    margin: 0 32px;
  }
  .label-class {
    color: black;
    font-size: 24px;
  }
}
.bottom {
  width: 100%;
  position: fixed;
  bottom: 3%;
  display: flex;
  justify-content: center;
  border-top: #d8d8d8 1px solid;
  padding-top: 20px;
  .bottom1 {
    width: 80%;
  }
  .van-cell__label {
    color: #000;
  }
}
</style>