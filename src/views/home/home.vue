<template>
  <div id="center">
    <div id="center_left">
      <!-- 文章主体 -->
      <router-view />
    </div>
    <div id="center_right">
      <!-- 侧边栏主体 -->
      <div id="right_logo">
        <el-row>
          <el-col :span="24">
            <span class="title">| 做点什么吧</span>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <a
              href="#"
              @click="writeArticles"
            >
              <i class="el-icon-edit"></i>
              <span>写文章</span>
            </a>
          </el-col>
          <el-col :span="8">
            <a
              href="#"
              @click="uploadImgs"
            >
              <i class="el-icon-picture-outline"></i>
              <span>上传图片</span>
            </a>
          </el-col>
          <el-col :span="8">
            <a href="#"  @click="listen">
              <i class="el-icon-service"></i>
              <span>听音乐</span>
            </a>
          </el-col>
        </el-row>

      </div>
      <div id="hot_article">

        <span class="title">| 热门文章推荐</span>
        <div
          id="hotarticle"
          v-for="(item,index) in hotarticles"
          :key="index"
        >
          <hotArticle :articleItem="item"></hotArticle>
        </div>

      </div>
      <div id="web_message">

        <span class="title">| 网站公告</span>
        <span>
          <router-link
            :to="{'name':'article_rule'}"
          >点我查看发布文章规范</router-link>
        </span>

        <span>
          <router-link
            :to="{'name':'comment_rule'}"
          >点我查看评论规范</router-link>
        </span>

      </div>
      <div id="web_tip">
        <ul>
          <li>关于</li>
          <li>建议反馈</li>
        </ul>
        <ul><a href="http://www.beian.miit.gov.cn">浙ICP备19046665号</a></ul>
        <ul>@fuxingde webblog</ul>
      </div>
    </div>
    <!-- <Dilaog :dialogFormVisible='dialogFormVisible'></Dilaog> -->
    <!-- dialog -->
    <el-dialog
      title="上传图片"
      :visible.sync="dialogFormVisible"
    >
      <el-form
        label-position="right"
        label-width="200px"
        :model="uploadImgForm"
      >
        <el-form-item label="选择要上传的图片">
          <div class="upload">

            <el-upload
              class="avatar-uploader"
              :action="serverUrl"
              name="file"
              :show-file-list="false"
              accept=".jpg,.jpeg,.png"
              :on-success="uploadSuccess"
              :on-error="uploadError"
              :before-upload="beforeUpload"
              :limit="1"
            >
              <img
                v-if="uploadImgForm.src"
                :src="uploadImgForm.src"
                class="avatar"
              >
              <i
                v-else
                class="el-icon-plus avatar-uploader-icon"
              ></i>
            </el-upload>
          </div>
        </el-form-item>
        <el-form-item label="选择图片类别">
          <el-select
            v-model="uploadImgForm.type"
            placeholder="请选择活动区域"
          >
            <el-option
              v-for="(item,index) in imgTypes"
              :key="index"
              :label="item.title"
              :value="item.type"
            ></el-option>
            
          </el-select>
        </el-form-item>

      </el-form>

      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="sureUploadImg"
        >确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import hot_article from "./component/hot_article";
import api from "../../../api/api";
import { getRandomArrayElements } from "../../util";
import { mapState } from "vuex";
/* import dilaog from "../../components/dialog/dialog"; */
export default {
  data() {
    return {
      hotarticles: [
        /* {
          author: {
            photo:
              "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572598683452&di=ce269c5d352d5dc8bda878bb354c319d&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201508%2F08%2F20150808222125_URnah.jpeg"
          },
          _id:'1',
          title:'标题标题标题标题标题标题标题标题标题标题！'
        } */
      ],
      dialogFormVisible: false,
      serverUrl: "/v1/upload",
      uploadImgForm: {
        type: "",
        src: ""
      },
      imgTypes:[]
    };
  },
  created() {
    this.getHotArticle();
    this.getImgType()
  },
  methods: {
    getHotArticle() {
      api
        .togetHotArticle()
        .then(result => {
          console.log(result);
          if (result.data.status == 1) {
            //console.log( getRandomArrayElements(result.data.data, 3) ,1111);
            this.hotarticles = getRandomArrayElements(result.data.data, 3);
          }
        })
        .catch(err => {});
    },
    writeArticles() {
      //alert(this.personalInfo)
      if (this.personalInfo.islogin) {
        this.$router.push({ name: "createWrite", params: { type: "create" } });
      } else {
        this.$message.error("请先登录！");
      }
    },
    uploadImgs(){
      this.dialogFormVisible = true;
    },
    sureUploadImg() {
      /* todo 表单验证，不能为空 */
      console.log(this.uploadImgForm)
      api.toUploadImg(this.uploadImgForm).then((result) => {
        console.log(result)
        if(result.data.status == 1){
          this.$message.success('上传成功！')
          this.dialogFormVisible = false;
        }else{
          this.$message.error('上传失败！')
        }
      }).catch((err) => {
        
      });
      //console.log(this.dialogFormVisible)
    },
    //获取图片类别
    getImgType(){
      api.togetAllImgTypes().then((result) => {
        console.log(result,'types')
        if(result.data.status == 1){
          this.imgTypes = result.data.data
        }
      }).catch((err) => {
        
      });
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
      this.uploadImgForm.src = res.url
    },
    // 上传图片失败
    uploadError(res, file) {
      
      this.$message.error("上传失败");
    },
    listen(){
      this.$message.success('请点击右下角音乐插件欣赏音乐！')
    }
  },
  components: {
    /* articleBox: article_box, */
    hotArticle: hot_article,
    /* Dilaog: dilaog */
  },
  computed: {
    ...mapState(["personalInfo"])
  }
};
</script>
<style lang="less" scoped>
#center {
  //min-height: 1000px;
  //height: 1000px;
  //overflow: auto;
  //height:100%;
  position: relative;
  margin: 0 auto;
  display: flex;
  max-width: 960px;
  margin-top: 10px;
  #center_left {
    width: 700px;
    //min-height: 1000px;
    background: #fff;
  }
  #center_right {
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    width: 250px;
    //min-height: 1000px;
    //background: #fff;
    #right_logo {
      background: #fff;
      display: flex;
      flex-direction: column;
      color: #303133;
      padding: 20px;
      .title {
        margin-bottom: 20px;
      }
      h2 {
        font-size: 16px;
      }
      .el-col {
        display: flex;

        a {
          width: 80px;
          display: flex;
          flex-direction: column;
          color: #303133;
          i {
            font-size: 20px;
          }
          span {
            font-size: 14px;
          }
        }
      }
    }
    #hot_article {
      background-color: #fff;
      margin-top: 20px;
      padding: 20px;
      display: flex;
      text-align: left;
      flex-direction: column;
      .title {
        margin-bottom: 20px;
      }
      #hotarticle {
        padding-top: 10px;
      }
    }
    #web_message {
      background-color: #fff;
      margin-top: 20px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      text-align: left;
      
      .title {
        margin-bottom: 20px;
      }
      .el-link.el-link--default {
        color: #606266;
        padding-top: 5px;
      }
    }
    #web_tip {
      background-color: #fff;
      margin-top: 20px;
      padding: 20px;
      ul {
        display: flex;
        margin-top: 10px;
        li {
          list-style: none;
          padding-left: 15px;
        }
      }
    }
    img {
      width: 100%;
    }
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
    border: 1px solid;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
}
@media (max-width: 992px) {
  #center {
    min-height: 1000px;
    position: relative;
    margin: 0 auto;
    display: flex;
    max-width: 650px;
    margin-top: 10px;
    #center_left {
      /* flex: 3; */
      width: 435px;
      height: 1200px;
      background: #fff;
    }
    #center_right {
      display: flex;
      flex-direction: column;
      margin-left: 15px;
      width: 200px;
      /* flex: 1; */
      min-height: 1000px;
      background: #fff;
      img {
        width: 100%;
      }
    }
  }
}
</style>