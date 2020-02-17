<template>
  <div>
    <div class="row-title">
      {{articleInfo.title}}
    </div>
    <div class="row-author">
      <img
        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572598683452&di=ce269c5d352d5dc8bda878bb354c319d&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201508%2F08%2F20150808222125_URnah.jpeg"
        class="author-picture"
      >
      <div class="info">
        <div class="author-name">
          {{articleInfo.author.author_name}}
        </div>
        <ul class="meta-list">
          <li class="item">
            <time>{{ articleInfo.create_data | dateChange }}</time>
          </li>
          <li class="item item-icon read-count">
            阅读：{{articleInfo.read_count}}
            <!-- <i class="el-icon-view"></i>
            <strong v-text="articleItem.read_count"></strong> -->
          </li>
          <li class="item item-icon like-article">
            收藏：{{articleInfo.collect}}
            <!-- <i class="el-icon-star-off"></i>
            <strong v-text="articleItem.collect_count"></strong> -->
          </li>
          <li class="item item-icon comment-count">
            评论：{{articleInfo.comment_count}}
            <!-- <i class="el-icon-chat-dot-round"></i>
            <strong v-text="articleItem.comment_count"></strong> -->
          </li>
        </ul>
      </div>
    </div>
    <div class="content" v-html="articleInfo.content">
    </div>
    <!-- TODO -->
    <!-- 评论模块 -->
  </div>

</template>
<script>
import api from "../../../api/api"
export default {
  data() {
    return {
      article_id:this.$route.params.id,
      articleInfo:{author:{}},//文章详情信息
    };
  },
  created() { 
    this.getArticleInfoById()
  },
  methods: {
    getArticleInfoById(){
      api.toGetArticleInfo(this.article_id).then((result) => {
        console.log(result,222)
        if(result.data.status == '1'){
          this.articleInfo = result.data.articleInfo
        }
      }).catch((err) => {
        console.log(err)
      });
    }
  }
};
</script>
<style lang="less" scoped>
.row-title {
  font-size: 24px;
  margin-top: 20px;
}
.row-author {
  margin-top: 20px;
  display: flex;
  .author-picture {
    width: 50px;
    height: 50px;
    margin-left: 15px;
    margin-right: 15px;
  }
  .info {
    .author-name{
      text-align: left;
    }
    .meta-list {
      display: flex;
      padding-left: 0px;
      .item {
        display: inline-block;
        color: #b3bac1;
        font-size: 12px;
        &:after {
          display: inline-block;
          content: "\B7";
          margin: 0 4px;
          color: #b2bac2;
        }
        &:last-of-type {
          &:after {
            content: "";
          }
        }
      }
    }
  }
}
.content{
  margin:25px 15px 15px 15px;
  text-align: left;
  
}
/* .content /deep/ p{
  color: red;
} */
.content /deep/ img{
  width: 100%;
}
</style>