<template>
  <div
    class="comment-item"
    :id="'comment'+commentItem._id"
    ref="comment_list"
  >
    <div class="avatar">
      <img
        v-lazy="commentItem.user.photo"
        class="box-image"
        alt=""
      >
    </div>
    <div class="comment-body">
      <div class="comment-main">
        <h4>
          <router-link
            class="user-info"
            :to="{name:'user',params:{id:commentItem.user._id}}"
          >{{commentItem.user.nickname}}</router-link>
        </h4>
        <div
          class="comment-text"
          v-html="commentItem.content"
        ></div>
        <!-- <div class="comment-text"
             v-if="Number(commentItem.status)===2||Number(commentItem.status)===5"
             v-html="commentRender(commentItem.content)"></div> -->
        <!-- <div class="comment-text"
             v-else-if="Number(commentItem.status)===1"
             style="color:#f96b84;">当前用户评论需要管理员审核才能可见</div>
        <div class="comment-text"
             v-else-if="Number(commentItem.status)===3"
             style="color:#f96b84;">当前用户评论违规</div> -->
      </div>
      <div class="comment-foot clearfix">
        <span>{{commentItem.create_timestamp | dateChange}}</span>
        <span
          class="comment-reply"
          v-show="personalInfo.islogin"
          @click="isComment=!isComment"
        >{{isComment?'取消回复':'回复'}}</span>
        <span
          class="comment-delete"
          v-if="personalInfo.user._id===commentItem.uid"
          @click="deleteComment(commentItem._id,commentItem.parent_id)"
        >删除</span><!-- TODO -->
      </div>

      <div
        class="comment-form-view"
        v-if="isComment"
        :id="'comment-reply'+commentItem._id"
      >
        <comment-form
          :aid="commentItem.aid"
          :reply_uid="commentItem.uid"
          :child_comment_id="commentItem._id"
          @commentChange="commentChange"
        />
      </div>
    </div>
    <div
      class="comment-item-children"
      v-if="commentItem.children.length>0||isComment"
    >
      <div
        class="comment-item-children-view"
        v-if="commentItem.children.length>0"
      >
        <comment-child-item
          v-for="(childCommentItem,key) in commentItem.children"
          :key="key"
          :p_id="commentItem._id"
          :childCommentItem="childCommentItem"
          @ChildCommentChange="commentChange"
        />
      </div>
    </div>
  </div>
</template>

<script>
import commentForm from "./CommentForm";
import faceQQ from "../../../components/Face";
import commentChildItem from "./CommentChildItem";
import api from "../../../../api/api";
export default {
  name: "index",
  //props: ["commentItem"],
  props: {
    commentItem: {
      default: {}
    }
  },
  data: function() {
    return {
      isComment: false
    };
  },
  methods: {
    commentChange(res) {
      console.log(res, "dhagdhjasgdhasgjd");
      if (res.data.status == "1") {
        this.$message.success("评论成功！");
        this.commentItem.children.push(res.data.data);
      } else {
        this.$message.warning("评论失败！");
      }
      this.isComment = false;
    },
    deleteComment(id, parent_id) {
      api
        .todeleteComments({
          parent_id: parent_id,
          id: id
        })
        .then(result => {
          console.log(result);
          if (result.data.status == "1") {
            /* console.log(document)
            debugger */
            document.querySelector("#comment" + id + "").style.display = "none";
            this.$emit("deleteCommnet");
            this.$message.success("删除成功！");
          } else {
            this.$message.warning("删除失败！");
          }
        })
        .catch(err => {});
    },
    commentRender(val) {
      let newComment = val;
      faceQQ.map(faceItem => {
        newComment = newComment.replace(
          new RegExp("\\" + faceItem.face_text, "g"),
          faceItem.face_view
        );
      });
      return newComment;
    }
  },
  computed: {
    /* article () {
      return this.$store.state.article.article || {};
    }, */
    personalInfo() {
      // 登录后的个人信息
      return this.$store.state.personalInfo || {};
    }
  },
  components: {
    "comment-form": commentForm,
    "comment-child-item": commentChildItem
  }
};
</script>

<style scoped lang="scss">
.comment-item {
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #f1f1f1;
  &:last-child {
    border-bottom: none;
  }
  .avatar {
    float: left;
    margin: 0 13px 10px 0;
    margin-right: 0;
    .box-image {
      width: 40px;
      height: 40px;
      border-radius: 4px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        border-radius: 80px;
      }
    }
  }
  .comment-body {
    margin-left: 50px;
    text-align: left;
    .comment-main {
      display: inline-block;
      padding: 10px 15px;
      background: #f7f7f7;
      border-radius: 20px;
      font-size: 14px;
      color: #393939;
      a {
        text-decoration: none;
      }

      .router-link-active {
        text-decoration: none;
      }
      h4 {
        font-weight: bold;
        font-size: 14px;
        color: #393939;
        margin-bottom: 5px;
        margin-top: 0px;
        .router-link-active {
          text-decoration: none;
        }
        .middle-text {
          font-size: 13px;
          display: inline-block;
          font-weight: normal;
          padding: 0 5px;
          color: #999;
        }
      }
      .comment-text {
        margin: 0;
        word-break: break-all;
      }
    }
    .comment-foot {
      font-size: 12px;
      color: #bbb;
      font-weight: normal;
      margin: 8px 0 0 15px;
      span {
        margin-right: 10px;
        white-space: nowrap;
        cursor: pointer;
      }
      .comment-delete {
        float: right;
        color: #f46e65;
      }
    }
    .comment-form {
      margin-top: 20px;
    }
  }
  .comment-item-children {
    margin-left: 50px;
    margin-top: 30px;
    padding-left: 20px;
    border-left: 1px solid #f1f1f1;
    overflow: hidden;
    .comment-item {
      margin-bottom: 15px;
      padding-bottom: 10px;
      &:last-child {
        margin-bottom: 0;
      }
    }
    /deep/ .comment-form {
      margin-top: 30px;
    }
    .comment-main {
      padding: 6px 10px;
      h4 {
        margin-bottom: 0;
        font-size: 13px;
      }
      p {
        font-size: 13px;
      }
    }
    /deep/ .avatar img {
      width: 35px;
      height: 35px;
    }
    /deep/ .comment-avatar {
      width: 35px;
      height: 35px;
    }
  }
}

.btn {
  display: block;
  border-radius: 20px;
  box-sizing: border-box;
  border: none;
  background: #f50;
  color: #fff;
  text-align: center;
  line-height: 40px;
  height: 50px;
  cursor: pointer;
  width: 100%;
  font-size: 16px;
  margin-top: 40px;
}
</style>
