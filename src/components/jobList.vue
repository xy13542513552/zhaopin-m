<template>
  <div>
    <div
      class="job"
      ref="jobRef"
      @touchstart="gtouchstart()"
      @touchend="gtouchend()"
    >
      <div class="job_flex">
        <p class="van-ellipsis">电气工程师</p>
        <p>7-10K</p>
      </div>
      <div class="job_tag">
        <van-tag color="rgb(245,247,249)" size="medium" text-color="#000"
          >3-5年</van-tag
        >
        <van-tag color="rgb(245,247,249)" size="medium" text-color="#000"
          >大专</van-tag
        >
        <van-tag color="rgb(245,247,249)" size="medium" text-color="#000"
          >五险</van-tag
        >
        <van-tag color="rgb(245,247,249)" size="medium" text-color="#000"
          >SolidWorks</van-tag
        >
        <van-tag color="rgb(245,247,249)" size="medium" text-color="#000"
          >月休6天</van-tag
        >
      </div>
      <div class="job_text">
        <p>手拉手信息技术</p>
        <p>未融资</p>
        <p>20-99人</p>
      </div>
      <div class="job_image_flex">
        <van-image
          width="30px"
          height="30px"
          fit="cover"
          round
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
        />
        <p>邓女士·人事经理</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    gtouchstart (item) {
      this.$refs.jobRef.style.background = "none"
      console.log(1)
    },
    gtouchend (item) {
      this.$refs.jobRef.style.background = "#fff"
      console.log(2)
    }
  }
}
</script>
<style lang="less" scoped>
.job {
  padding: 0 40px;
  margin: 15px 0;
  background: #fff;
  .job_flex {
    padding: 20px 0 15px 0;
    font-size: 36px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      margin: 0;
    }
    p:first-child {
      font-size: 36px;
      font-weight: bold;
    }
    p:last-child {
      margin-left: 100px;
      width: 120px;
      color: #4fc08d;
    }
  }
  .job_tag {
    display: flex;
    padding-bottom: 15px;
    /deep/.van-tag--default {
      margin-right: 10px;
    }
  }
  .job_text {
    display: flex;
    font-size: 26px;
    padding-bottom: 15px;
    p {
      margin: 0;
      margin-right: 10px;
    }
  }
  .job_image_flex {
    display: flex;
    align-items: center;
    padding-bottom: 30px;
    p {
      margin: 0;
      padding-left: 10px;
      font-size: 24px;
    }
  }
}
</style>