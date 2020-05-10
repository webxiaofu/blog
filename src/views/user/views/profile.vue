<template>
  <div class="profile">
    <div class="view setting-view client-card">
      <div class="sub-view-box setting-profile-view">

        <h1>个人资料</h1>

        <ul class="setting-list">
          <li class="item-view">

            <span class="title">头像</span>
            <div class="avatar-uploader avatar-uploader">
              <div class="avatar">
                <img
                  v-lazy="formData.photo"
                  class="box-image"
                  alt=""
                >
              </div>
              <div class="action-box">
                <div class="hint">支持 jpg、png 格式大小 1M 以内的图片
                  <!-- <span class="hint-review"
                      v-if="formData.avatar_review_status===1||formData.avatar_review_status===3">
                  ({{formData.avatar_review_status===1?'新头像正在审核中，审核通过则显示，否则将换回原头像':'头像审核失败，请重新上传'}})
                </span> -->
                </div>
                <el-upload
                  class="upload-demo"
                  :action="serverUrl"
                  name="file"
                  :show-file-list="false"
                  accept=".jpg,.jpeg,.png"
                  :on-success="uploadSuccess"
                  :on-error="uploadError"
                  :before-upload="beforeUpload"
                  :limit="1"
                >
                  <el-button>点击上传</el-button>
                  
                </el-upload>
              </div>
            </div>

          </li>
          <li class="item-view">

            <span class="title">昵称</span>
            <div class="input-box profile-input profile-input">
              <input
                v-model="formData.nickname"
                placeholder="填写你的昵称"
                class="input"
              >
            </div>

          </li>

          <li class="item-view">
            <span class="title">性别</span>
            <div class="input-box profile-radio">
              <input
                type="radio"
                name="sex"
                value="1"
                v-model="formData.role"
              ><span>男</span>
              <input
                type="radio"
                name="sex"
                value="2"
                v-model="formData.role"
              ><span>女</span>
              <input
                type="radio"
                name="sex"
                value="0"
                v-model="formData.role"
              ><span>保密</span>
            </div>
          </li>
          <li class="item-view">

            <span class="title">地区</span>
            <div class="input-box profile-input profile-input">
              <input
                placeholder="填写你的地区"
                v-model="formData.address"
                class="input"
              >
            </div>

          </li>
          <!-- <li class="item-view">

            <span class="title">公司</span>
            <div class="input-box profile-input profile-input">
              <input
                placeholder="填写你的公司"
                v-model="formData.company"
                class="input"
              >
            </div>

          </li> -->
          <li class="item-view">

            <span class="title">个人介绍</span>
            <div class="input-box profile-input profile-input">
              <input
                v-model="formData.description"
                placeholder="填写职业技能、擅长的事情、喜欢的事情等"
                class="input"
              >
            </div>

          </li>
          <li class="item-view">

            <span class="title">个人主页</span>
            <div class="input-box profile-input profile-input">
              <input
                placeholder="填写你的个人主页"
                v-model="formData.homepage"
                class="input"
              >
            </div>

          </li>
        </ul>

        <div class="footer-view">
          <button
            class="button button-save"
            @click="updateUserInfo"
          >保存
          </button>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import { mapState,mapActions  } from 'vuex'
import api from '../../../../api/api'
export default {
  data() {
    return {
      serverUrl: "/v1/upload", // 这里写你要上传的图片服务器地址
      formData: {
        nickname: "",
        role: "",
        address: "",
        description: "",
        homepage: "",
        photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572598683452&di=ce269c5d352d5dc8bda878bb354c319d&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201508%2F08%2F20150808222125_URnah.jpeg",
        _id:this.$route.params.id
      }
    };
  },
  created(){
    this.getUserInfo()
  },
  methods:{
    ...mapActions([
      'getNewVuexUserData'
    ]),
    getUserInfo(){
      /* todo 有问题为解决，无法及时更新 personalInfo */
      this.getNewVuexUserData(this.$route.params.id)
      
      console.log(this.personalInfo)
      this.formData = this.personalInfo.user
      
    },
    // 上传图片前
    beforeUpload(file) {
      console.log(file);
      const isIMG =
        file.type === "image/jpg" ||
        file.type === "image/jpeg" ||
        file.type === "image/png";
      const isLt = file.size / 1024 / 512 <= 1;
      if (!isIMG) {
        this.$message.error("上传文章图片只支持jpg、jpeg、png格式!");
      }
      if (!isLt) {
        this.$message.error("上传文章图片大小不能超过512KB!");
      }
      return isLt && isIMG;
    },
    // 上传图片成功
    uploadSuccess(res, file) {
      // res为图片服务器返回的数据
      console.log("上传成功");
      console.log(res);
      this.formData.photo = res.url
    },
    // 上传图片失败
    uploadError(res, file) {
      
      this.$message.error("上传头像失败");
    },
    updateUserInfo(){
      console.log(this.formData)
      api.toupdateUserInfo(this.formData).then((result) => {
        if(result.data.status == 1){
          
          console.log(result,'result')
          this.formData = result.data.data
          this.getNewVuexUserData(this.$route.params.id)
          //this.getUserInfo()
          this.$message.success('修改成功！')
        }
      }).catch((err) => {
        console.log(err)
      });
    }
  },
  computed:{
    ...mapState(['personalInfo'])
  },
};
</script>
<style lang="less" scoped>
.profile {
  .setting-view {
    // box-shadow: 0 1px 3px 0px rgba(0, 0, 0, 0.1);
    // border-radius: 5px;
    padding: 30px;
    background: #ffffff;
    .sub-view-box {
      > h1 {
        color: #333333;
        font-size: 20px;
        font-weight: bold;
        padding-bottom: 20px;
        border-bottom: 1px solid #f1f1f1;
      }
      .setting-list {
        padding-left: 0px;
        .item-view {
          padding: 24px 0;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          border-bottom: 1px solid #f1f1f1;
          .title {
            font-size: 14px;
            color: #333;
            width: 120px;
          }
          .avatar-uploader {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
          }
          .input-box {
            flex: 1;
            input {
              width: 100%;
            }
          }
          .profile-radio {
            text-align: left;
            input {
              width: auto;
              display: inline-block;
            }
            span {
              margin: 0 20px 0 6px;
              font-size: 15px;
              vertical-align: middle;
            }
          }
          .input {
            display: block;
            border: none;
            outline: none;
            color: #909090;
            font-size: 14px;
          }
          .avatar {
            display: inline-block;
            position: relative;
            -webkit-box-flex: 0;
            -ms-flex: 0 0 auto;
            flex: 0 0 auto;
            width: 72px;
            height: 72px;
            margin-right: 12px;
            .box-image {
              width: 72px;
              height: 72px;
              border-radius: 4px;
              overflow: hidden;
              img {
                width: 100%;
                height: 100%;
                border-radius: 80px;
              }
            }
          }
          .hint {
            color: #909090;
            font-size: 12px;
            margin-bottom: 18px;
            .hint-review {
              color: #ff4d4f;
              font-size: 12px;
            }
          }
          /deep/.UploadImage {
            background: #007fff;
            color: #fff;
            font-size: 12px;
          }
          .button,
          button {
            font-size: 12px;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            background-color: #007fff;
            color: #fff;
            border-radius: 2px;
            border: none;
            padding: 6px 15px;
            outline: none;
            transition: background-color 0.3s, color 0.3s;
            cursor: pointer;
          }
        }
      }
      .action-box,
      .footer-view {
        margin-left: 12px;
        .hint {
          color: #909090;
          font-size: 12px;
          margin-bottom: 18px;
        }
        .upload-demo{
          .el-button{
            height: 38px;
            width: 100px;
          }
        }
        .button,
        button {
          font-size: 12px;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          background-color: #007fff;
          color: #fff;
          border-radius: 2px;
          border: none;
          display: inline-block;
          padding: 6px 15px;
          outline: none;
          transition: background-color 0.3s, color 0.3s;
          cursor: pointer;
        }
        .upload-image {
          border-radius: 2px;
          border: none;
          display: inline-block;
          padding: 6px 15px;
        }
        .button-save {
          padding: 8px 30px;
          font-size: 14px;
          margin-top: 20px;
        }
      }
    }
  }
}
</style>