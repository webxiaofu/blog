<template>
<!-- TODO -->
<!-- 编辑器待优化！ -->
  <div class="main">
    <el-input
      v-model="articleData.title"
      placeholder="请输入标题"
    ></el-input>
    <div>
      <!-- 图片上传组件辅助-->
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
      </el-upload>
      <!--富文本编辑器组件--> <!-- :auto-upload="false"
        :file-list="fileList"
        ref="upload" -->
      <el-row v-loading="quillUpdateImg">
        <quill-editor
          v-model="articleData.content"
          ref="myQuillEditor"
          :options="editorOption"
          @blur="onEditorBlur($event)"
          @focus="onEditorFocus($event)"
          @change="onEditorChange($event)"
        >
        </quill-editor>
      </el-row>
    </div>
    <div class="selects">
      <div class="select-left">
        <!--  <label for="" class="labelStyle">标签</label> -->
        <el-select
          v-model="articleData.tag"
          placeholder="请选择标签"
        >
          <el-option
            v-for="item in option1"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="select-right">
        <!-- <label for="" class="labelStyle">专栏</label> -->
        <el-select
          v-model="articleData.column"
          placeholder="请选择专栏"
        >
          <el-option
            v-for="item in option2"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
    </div>
    
    <div class="footer-button">
      <el-button
        type="primary"
        @click="uploadArticles()"
      >发布文章</el-button>
    </div>

  </div>
</template>
<script>
import  api  from '../../../api/api'
import { mapState } from 'vuex'
export default {
  data() {
    return {
      
      quillUpdateImg: false, // 根据图片上传状态来确定是否显示loading动画，刚开始是false,不显示
      content: "",
      editorOption: {
        modules: {
          toolbar: {
            container: [
              ["bold", "italic", "underline", "strike"], //加粗，斜体，下划线，删除线
              ["blockquote", "code-block"], //引用，代码块

              [{ header: 1 }, { header: 2 }], // 标题，键值对的形式；1、2表示字体大小
              [{ list: "ordered" }, { list: "bullet" }], //列表
              /* [{ script: "sub" }, { script: "super" }], // 上下标 */
              /* [{ indent: "-1" }, { indent: "+1" }], // 缩进 */
              /* [{ direction: "rtl" }], // 文本方向 */

              [{ size: ["small", false, "large", "huge"] }], // 字体大小
              /* [{ header: [1, 2, 3, 4, 5, 6, false] }], //几级标题 */

              /* [{ color: [] }, { background: [] }], // 字体颜色，字体背景颜色 */
              /* [{ font: [] }], //字体 */
              [{ align: [] }], //对齐方式

              ["clean"], //清除字体样式
              ["image" /* , "video" */] //上传图片、上传视频
            ],
            handlers: {
              image: function(value) {
                if (value) {
                  // 触发input框选择图片文件
                  document.querySelector(".avatar-uploader input").click();
                } else {
                  this.quill.format("image", false);
                }
              }
            }
          }
        }
      },
      option1: [
        //标签
        {
          value: "文章",
          label: "文章"
        }
      ],
      option2: [
        //专栏
        {
          value: "爱国主义",
          label: "爱国主义"
        }
      ],
      serverUrl: "/v1/upload", // 这里写你要上传的图片服务器地址
      articleData: {
        //文章相关字段
        title: "",
        create_data: "",
        comment_count: "0",
        read_count: "0",
        collect_count: "0",
        tag: "",
        column: "",
        content: "",
        author: {
          author_name: "",
          author_id: "",
          photo:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572598683452&di=ce269c5d352d5dc8bda878bb354c319d&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201508%2F08%2F20150808222125_URnah.jpeg"
        },
        picture: ""
      }
    };
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    }
  },
  methods: {
    onEditorReady(editor) {
      // 准备编辑器
    },
    onEditorBlur() {}, // 失去焦点事件
    onEditorFocus() {}, // 获得焦点事件
    onEditorChange() {}, // 内容改变事件
    saveHtml: function(event) {
      alert(this.content);
    },
    uploadArticles() {
      //console.log(this.content);
      this.articleData.create_data = (new Date()).valueOf();
      this.articleData.author.author_name = this.personalInfo.user.username;
      this.articleData.author.author_id = this.personalInfo.user._id;
      console.log(this.articleData)
      /* TODO 条件校验*/
      api.toCreateArticles(this.articleData).then((result) => {
        console.log(result)
        if(result.data.status == '1'){
          this.$message.success('上传成功！');
          this.$router.push({name:'article_info',params:{id:result.data.articlesInfo._id}})
        }else{
          this.$message.error('上传失败！');
        }
      });
    },
    // 上传图片前
    beforeUpload(file) {
      this.quillUpdateImg = true;
      console.log(file);
      const isIMG =
        file.type === "image/jpg" ||
        file.type === "image/jpeg" ||
        file.type === "image/png";
      const isLt = file.size / 1024 / 512 <= 1;
      if (!isIMG) {
        this.$message.error("上传文章图片只支持jpg、jpeg、png格式!");
        this.quillUpdateImg = false;
      }
      if (!isLt) {
        this.$message.error("上传文章图片大小不能超过512KB!");
        this.quillUpdateImg = false;
      }
      return isLt && isIMG;
    },
    // 上传图片成功
    uploadSuccess(res, file) {
      // res为图片服务器返回的数据
      console.log("上传成功");
      console.log(res);
      // 获取富文本组件实例
      let quill = this.$refs.myQuillEditor.quill;
      // 如果上传成功
      if (res.status == "1") {
        // 获取光标所在位置
        let length = quill.getSelection().index;
        // 插入图片  res.info为服务器返回的图片地址
        quill.insertEmbed(length, "image", res.url);
        // 调整光标到最后
        quill.setSelection(length + 1);
      } else {
        this.$message.error("图片插入失败111");
      }
      // loading动画消失
      this.quillUpdateImg = false;
    },
    // 上传图片失败
    uploadError(res, file) {
      // loading动画消失
      this.quillUpdateImg = false;
      this.$message.error("图片插入失败");
    }
  },
  computed:{
    ...mapState(['personalInfo'])
  }
};
</script>
<style lang="less" scoped>
.main {
  width: 960px;
  margin: 20px auto 0 auto;
  /* height: 500px; */
  background-color: #fff;
  .selects {
    display: flex;
    margin-top: 20px;
    .select-left {
      flex: 1;
    }
    .select-right {
      flex: 1;
    }
  }
  .footer-button {
    margin-top: 50px;
    padding-bottom: 20px;
  }
}

.main /deep/ .ql-editor {
  min-height: 600px;
}
.el-select {
  display: inline-block;
  position: relative;
  width: 95%;
}
.main /deep/.ql-toolbar.ql-snow {
  border: 1px solid #dcdfe6;
  border-bottom: 0px;
}
.main /deep/.ql-container.ql-snow {
  border: 1px solid #dcdfe6;
}
</style>