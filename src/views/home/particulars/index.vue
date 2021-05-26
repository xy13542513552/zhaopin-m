<template>
  <div class="all_padding">
    <!-- 导航栏 -->
    <div class="bar_title">
      <van-nav-bar fixed placeholder @click-left="onClickLeft">
        <template #left>
          <van-icon name="arrow-left" color="black" size="24px"></van-icon>
        </template>
        <template #right>
          <div class="bar_right">
            <i slot="icon" class="toutiao toutiao-shoucang"></i>
            <i slot="icon" class="iconfont icon-fenxiang"></i>
            <i slot="icon" class="iconfont icon-bianzu"></i>
          </div>
        </template>
      </van-nav-bar>
    </div>
    <!-- 标题栏 -->
    <div class="header_padding">
      <div class="header">
        <div class="header_title">
          <p>WEB开发(全国出差)</p>
          <div>
            <span>6-8K·13薪</span>
          </div>
        </div>
        <div class="header_icon">
          <i slot="icon" class="iconfont icon-zuobiao">娄底</i>
          <i slot="icon" class="iconfont icon-gongwenbao">5-10年</i>
          <i slot="icon" class="iconfont icon-boshimao-copy">本科</i>
        </div>
      </div>
    </div>
    <div class="van-hairline--bottom"></div>
    <!-- 头像区 -->
    <div class="head_portrait_padding">
      <div class="head_portrait_flex">
        <van-image
          round
          width="2.5rem"
          height="2rem"
          src="https://img.bosszhipin.com/beijin/upload/avatar/20201225/3708d1df9201939a28ded65b8e78f3a81528947647a5937d4d49fa3b23ee78b3_s.png?x-oss-process=image/resize,w_100,limit_0"
        />
        <van-cell class="head_portrait_cell" is-link value="更多相似职位">
          <template #title>
            <span class="head_portrait_name">杨女士</span>
            <span class="head_portrait_active">刚刚活跃</span>
          </template>
          <template #label>
            <span class="head_portrait_label">上海屹通·招聘专员</span>
          </template>
        </van-cell>
      </div>
    </div>
    <div class="van-hairline--bottom"></div>
    <div class="performance">
      <h6>奖金绩效</h6>
      <p>十三薪、带薪年假、餐补、差补、五险一金、年度调薪</p>
    </div>
    <div class="van-hairline--bottom"></div>
    <div class="job">
      <h6>职位详情</h6>
      <div class="job_icon">
        <van-tag color="#ebedf0" text-color="black">前端开发</van-tag>
        <van-tag color="#ebedf0" text-color="black">Vue</van-tag>
      </div>
      <div class="job_text">
        <p>技能要求：</p>
        <p>Web前端，Vue，CSS，Javascript，HTML5，jQuery</p>
        <p>1、学历为全日制本科及以上，计算机专业优先考虑</p>
        <p>2、有1年及以上工作经验</p>
        <p>3、技能要求：</p>
        <p>1.精通vuejs，并有2年vuejs工作经验;</p>
        <p>2.熟练运用CSS3新特性,熟悉HTML5最新规范;</p>
        <p>3.能够熟练运用HTML5特性构建移动端的WebApp;</p>
        <p>4、要求较强的解决问题的能力，沟通能力和人际交往能力。</p>
        <p>5、接受银行驻场工作。</p>
      </div>
    </div>
    <div class="van-hairline--bottom"></div>
    <div class="company">
      <div class="company_flex">
        <van-image
          radius="10px"
          width="1.5rem"
          height="1.5rem"
          src="https://img.bosszhipin.com/beijin/mcs/chatphoto/20190215/8af84271a99ee5d933f9502cb9e7bf42307809de6f1ac8e71308338353133c3b.jpg?x-oss-process=image/resize,w_120,limit_0"
        />
        <van-cell
          title="上海屹通信息科技发展有限公司"
          label="已上市·1000-9999人·计算机软件"
          is-link
        />
      </div>
    </div>

    <div class="communication">
      <div>
        <button>立即沟通</button>
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
    onClickLeft () {
      this.$router.back()
    },


  }
}
</script>
<style lang="less" scoped>
.all_padding {
  padding: 30px 36px 0;
  background: #fff;
  .bar_title {
    color: black;
    .bar_right {
      i {
        font-size: 36px;
        padding: 0 15px;
      }
    }
  }
  .header_padding {
    padding-bottom: 30px;
    .header_title {
      display: flex;
      justify-content: space-between;
      padding-bottom: 10px;
      p {
        margin: 0;
        font-size: 64px;
        font-weight: bold;
      }
      div {
        width: 40%;
        span {
          display: block;
          text-align: center;
          font-size: 40px;
          line-height: 84px;
          align-items: center;
          color: rgb(93, 213, 200);
        }
      }
    }
    .header_icon {
      display: flex;
      padding-bottom: 10px;
      i {
        font-size: 30px;
        padding-left: 35px;
      }
      i:first-child {
        padding: 0;
      }
    }
  }
  .head_portrait_padding {
    padding: 34px 0;
    .head_portrait_flex {
      display: flex;
      justify-content: space-around;
      .head_portrait_cell {
        padding-left: 20px;
        padding-right: 0;
        .head_portrait_name {
          font-size: 36px;
        }
        .head_portrait_active {
          padding-left: 20px;
          font-size: 24px;
          color: rgb(150, 151, 153);
        }
        .head_portrait_label {
          font-size: 28px;
          color: black;
        }
      }
    }
  }
  .performance {
    padding: 20px 0;
    h6 {
      margin: 0;
    }
    p {
      font-size: 34px;
    }
  }
  .job {
    padding-top: 20px;
    h6 {
      margin: 0;
    }
    .job_icon {
      display: flex;
      padding: 20px 0;
      /deep/.van-tag--default {
        margin-right: 10px;
      }
    }
    .job_text {
      font-size: 30px;
      padding-bottom: 40px;
      p {
        margin: 0;
      }
    }
  }
  .company {
    padding-top: 40px;
    padding-bottom: 20%;
    .company_flex {
      display: flex;
      align-items: center;
    }
  }
}
.communication {
  position: fixed;
  bottom: 0;
  left: 0;
  background: #fff;
  border-top: 1px solid #ebedf0;
  div {
    width: 100vw;
    padding-top: 30px;
    display: flex;
    justify-content: center;

    button {
      width: 90%;
      background: rgb(93, 213, 200);
      color: #fff;
      border: 0;
      border-radius: 20px;
      font-size: 34px;
      padding: 34px;
    }
  }
}
</style>