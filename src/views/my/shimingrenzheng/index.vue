<template>
  <div class="smrz-container">
      <!-- 导航栏 -->
    <van-nav-bar
      class="page-nav-bar"
      title="实名认证"
      left-arrow
      @click-left="$router.back()"
    />
    <!-- 实名认证详细页面 -->
    <div>
    <div class="van-usersfz">身份证照片(个人信息面)</div>
    <div class="van-qbtop">
        <img src="../../../assets/123.png" alt="">
    </div>
    <div class="van-userbm">身份证照片(国徽图案面)</div>
    <div class="van-qbtop">
        <img src="../../../assets/sfzmb.png" alt="">
    </div>
</div>
<!-- 提交身份证 -->
<div class="van-Sfzdx">
<van-button
class="van-butsfz"
 type="info"
  size="large"
  >上传身份证</van-button>
  </div>
      <!--身份证上传-->
      <!-- <div class="upId">
            <div class="uploaderBox">
                <div>身份证照片(个人信息面)</div>
          <van-uploader
           v-model="fileList"
            upload-text="身份证正面"
             capture 
             preview-image
             
              :max-count="1"
              />
              <van-uploader
           v-model="fileList"
            upload-text="身份证反面"
             capture 
             preview-image
             
              :max-count="1"
              />
        </div>
      </div> -->
  </div>
</template>

<script>
export default {
  name: "ShiMing",
  components: {},
  props: {},
  data() {
    return {
         fileList: [
        // { url: '../../../assets/123.png' },
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
        // { isImage: true },
      ],
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    
  }
};
</script>

<style scoped lang="less">
.smrz-container {
  .van-usersfz {
      margin-top: 40px;
      margin-left: 20px;
      font-size: 25px;
      color: #92a5ad;
  }
  .van-userbm {
      margin-top: 70px;
      margin-left: 20px;
      font-size: 25px;
      color: #92a5ad;
  }
 .van-qbtop {
    //  margin-top: 50px;
     width: 60%;
     height: 300px;
     margin: 0 auto;
     img {
         width: 100%;
         height: 100%;
         margin-top: 20px;
     }
 }
 .van-Sfzdx{
     margin-top: 80px;
     width: 100%;
     height: 100px;
    //  background-color: #222;
    margin-left: 10%;
        .van-butsfz {
     width: 80%;
     height: 100px;
   margin: o auto;
 }
 }
 
}
</style>