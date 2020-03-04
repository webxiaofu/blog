<template>

  <div
    class="box-comment"
    v-loading='isLoading'
    
  >
  
    <div
      class="box-comment-part"
      v-if="isgetcomment"
    >
      <div class="box-comment-part-title">
        <span>发表评论</span>
        <small>
          已发布评论
          <em>{{page.count}}</em> 条
        </small>
        <router-link
          class="comment-rule"
          :to="{'name':'comment_rule'}"
        >《点我查看评论规范》</router-link>
      </div>
      <comment-form @commentChange="commentChange" 
      :aid='this.$route.params.id'
      />

      <div class="comment-list">
        <div id="commentlist" >
          <comment-item
            
            :comment-item="item"
            v-for="(item,key) in articleComment"
            :key="key"
            
          />
        </div>

        <Page
          :total="Number(this.page.count)"
          :page="Number(this.page.page)"
          :pageSize="this.page.pageSize"
          @pageChange="pageChange"
        ></Page>
      </div>
    </div>
    <div v-else>
      <p class="no-comment">评论模块已关闭</p>
    </div>
  </div>
  
</template>

<script>
import commentItem from "./CommentItem";
import Page from "../../../components/page/page";
import commentForm from "./CommentForm";
import { mapState } from "vuex";
import api from '../../../../api/api'
export default {
  name: "index",
  created() {
    this.getCommentList(); // 获取用户的评论
  },
  data() {
    return {
      isLoading: false,
      articleComment: {
        
      },
      page:{
        page:1,
        pageSize:5,
        count:0
      },
      isgetcomment:false
    };
  },
  methods: {
    getCommentList() {
      // 获取评论列表
      this.isLoading = true;
      api.togetComments(this.$route.params.id,this.page.page,this.page.pageSize).then((result) => {
        
        if(result.data.status == 1){
          console.log(result)
          this.isLoading = false;
          this.articleComment = result.data.data
          this.page.count = result.data.count
          this.isgetcomment = true
        }
        
      }).catch((err) => {
        
      });
      
    },
    pageChange(val) {
      this.page.page = val;
      this.getCommentList();
    },
    commentChange(res) {
      console.log(res,'llalalalalalala')
      if (res.data.status == "1") {
        this.$message.success('评论成功！');
        this.articleComment.unshift(res.data.data);
        this.page.count += 1;
      } else {
        this.$message.warning('评论失败！');
      }
    }
  },
  computed: {
    
  },
  components: {
    "comment-item": commentItem,
    "comment-form": commentForm,
    Page
  }
};
</script>

<style scoped lang="less">
/*comment-lay start*/

.box-comment {
  margin-bottom: 100px;
  margin-left: 15px;
  margin-right: 15px;
  .box-comment-part {
    margin-top: 60px;
    margin-bottom: 60px;
    .box-comment-part-title {
      font-size: 20px;
      color: #393939;
      font-weight: bold;
      line-height: 1.1;
      padding: 0 0 26px;
      border-bottom: 1px solid #eaeaea;
      margin: 0 0 45px;
      position: relative;
      text-align: left;
      small {
        font-size: 14px;
        font-weight: normal;
        color: #c8c8c8;
        margin-left: 10px;
        margin-right: 10px;
        em {
          font-style: normal;
          color: #ff5a00;
          font-weight: bold;
          font-size: 18px;
        }
      }
      .comment-rule {
        font-size: 14px;
        display: inline-block;
        color: red;
      }
    }
  }
  .no-comment {
    text-align: center;
    padding: 15px;
    font-size: 14px;
    color: #666;
  }
  .comment-list {
    list-style: none;
    margin: 38px 0 25px 0;
    margin-bottom: 40px;
  }
}

/*comment-lay end*/
</style>
