<template>
  <article class="content-box content-box-index">
    <div
      class="info-box"
      v-if="articleItem._id"
      :id="'article'+articleItem._id"
      ref="article_list"
    >
      <div class="info-row title-row">
        <router-link
          class="title"
          :to="{name:'article_info',params:{id:articleItem._id}}"
        >{{articleItem.title}}</router-link>

        <el-dropdown trigger="click" @command="handleCommand" v-if="this.userid == personalInfo.user._id">
          <span class="el-dropdown-link">
            <i class="el-icon-more"></i>
          </span>
          <el-dropdown-menu slot="dropdown" >
            <el-dropdown-item command='edit'>编辑</el-dropdown-item>
            <el-dropdown-item command='delete'>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

      </div>

      <div class="info-row meta-row">
        <ul class="meta-list">
          <li class="item">
            <time>{{articleItem.create_data | dateChange}}</time>
          </li>
          <li class="item item-icon read-count">
            <i class="el-icon-view"></i>
            <strong v-text="articleItem.read_count"></strong>
          </li>
          <li class="item item-icon like-article">
            <i class="el-icon-star-off"></i>
            <strong v-text="articleItem.collect_count"></strong>
          </li>
          <li class="item item-icon comment-count">
            <i class="el-icon-chat-dot-round"></i>
            <strong v-text="articleItem.comment_count"></strong>
          </li>
          <li class="item">
            <a class="tag-class frontend">{{articleItem.tag}}</a>
          </li>
        </ul>
      </div>

      <div class="info-row footer-view">
        <!-- <router-link
          :to="{name:'user',params:{id:articleItem.author.author_id}}"
          class="avatar"
        >
          <img
            v-lazy="articleItem.author.photo"
            alt=""
          >
        </router-link> -->
        <router-link
          :to="{name:'user',params:{id:articleItem.author._id}}"
          class="name"
        >{{articleItem.author.nickname}}</router-link>
        <span>发布于专栏</span>
        <a class="article-blog">
          {{articleItem.column}}
        </a>

      </div>

    </div>
    <div
      class="thumb"
      v-if="articleItem.picture"
    >
      <img
        class="box-image"
        v-lazy="articleItem.picture"
        alt=""
      >
    </div>
  </article>

</template>
<script>
import { mapState,mapActions  } from 'vuex'
import api from '../../../../api/api'
export default {
  data() {
    return {
      userid: this.$route.params.id,
    };
  },
  props: {
    articleItem: {
      type: Object,
      default: {}
    }
  },
  methods:{
    handleCommand(command){
      //console.log(command)
      if(command == 'delete'){  //删除文章
        //console.log(this.articleItem._id,this.$route.params.id)
        api.todeleteArticles(this.$route.params.id,this.articleItem._id).then((result) => {
          if(result.data.status == '1'){
            document.querySelector("#article" + this.articleItem._id + "").style.display = "none";
            this.$message.success('删除成功！');
          }else{
            this.$message.warning('删除失败！');
          }
        }).catch((err) => {
          
        });
      }else if(command == 'edit'){
        console.log()
      } 
    } 
  },
  computed:{
    ...mapState(['personalInfo'])
  },
};
</script>
<style lang="less" scoped>
.content-box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 0.8rem 0;
  min-height: 5.75rem;
  .info-box {
    a {
      text-decoration: none;
    }
    .router-link-active {
      text-decoration: none;
    }
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    min-width: 0;
    .title-row {
      margin: 0.5rem 0;
      white-space: nowrap; //文本不进行换行
      overflow: hidden;
      text-overflow: ellipsis;
      display: flex;
      justify-content: space-between;
      .title {
        font-size: 16px;
        letter-spacing: 1px;
        font-weight: 600;
        line-height: 1.2;
        color: #333;
        float: left;
      }
    }
    .content-text {
      font-size: 13px;
      line-height: 24px;
      color: #999;
      margin-bottom: 10px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
    .meta-row {
      margin-bottom: 5px;
      .meta-list {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        padding-left: 0px;
        -webkit-box-align: baseline;
        -ms-flex-align: baseline;
        align-items: baseline;
        white-space: nowrap;
        margin: 0;
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
          a,
          span {
            font-size: 12px;
          }
          a {
            color: #b3bac1;
          }
          .tag-class {
            padding: 0.38rem 0;
            font-size: 12px;
            text-align: center;
            line-height: 1;
            border-radius: 2px;
            min-width: 0;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            color: #b3bac1;
            &:after {
              content: "/";
              color: #b3bac1;
              margin: 0 3px;
            }
            &:last-of-type {
              &:after {
                content: "";
              }
            }
          }
        }
        .item-icon {
          display: inline-block;
          font-size: 12px;
          color: #b4b4b4;
          &:hover {
            color: #333;
          }
          strong {
            margin-left: 2px;
            font-weight: normal;
          }
          &.like-article {
            cursor: pointer;
          }
          &.like-article-off {
            color: #00bb29;
          }
        }
      }
    }
    .footer-view {
      display: flex;
      align-items: center;
      span,
      a {
        font-size: 12px;
        display: inline-block;
        color: #999;
        margin-right: 10px;
        line-height: 18px;
      }
      .name,
      .article-blog {
        color: #009a61;
      }
      .avatar {
        margin-right: 6px;
        img {
          width: 26px;
          height: 26px;
          border-radius: 52px;
          overflow: hidden;
        }
      }
    }
  }
  .thumb {
    position: relative;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: 7.5rem;
    height: 4.5rem;
    margin-left: 2rem;
    border-radius: 2px;
    .box-image {
      width: 7.5rem;
      height: 4.5rem;
      border-radius: 4px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        border-radius: 4px;
      }
    }
  }
  &.article-list {
    padding-left: 0;
    padding-right: 0;
  }
  &.content-box-index {
    .thumb {
      width: 4.5rem;
      height: 4.5rem;
      border-radius: 10px;
      .box-image {
        width: 4.5rem;
        height: 4.5rem;
      }
    }
  }
}
</style>