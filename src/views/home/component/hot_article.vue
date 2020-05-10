<template>
  <div class="main">
    <router-link
      :to="{name:'user',params:{id:articleItem.author._id}}"
      class="avatar"
    >
      <img
        v-lazy="articleItem.author.photo"
        alt=""
      >
    </router-link>
    <div class="title-row">
      <router-link
        @click.native="handleClickArticle(articleItem._id)"
        class="title"
        :to="{name:'article_info',params:{id:articleItem._id}}"
      >{{articleItem.title}}</router-link>
    </div>
  </div>
</template>
<script>
import api from "../../../../api/api";
export default {
  data() {
    return {};
  },
  props: {
    articleItem: {
      type: Object,
      default: {}
    }
  },
  methods: {
    handleClickArticle(id) {
      //点击阅读文章 阅读量+1
      console.log(id, "hagsdhagdjagsjh");
      api
        .toaddReadCount(id)
        .then(result => {
          if (result.data.status == "1") {
            console.log(result);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style lang="less" scoped>
.main {
  display: flex;
  //width: 250px;
  img {
    width: 26px;
    height: 26px;
    border-radius: 52px;
    //overflow: hidden;
  }
  .title-row {
    overflow: hidden;
    text-overflow: ellipsis;
    margin-left: 15px;
    .title {
      font-size: 16px;
      letter-spacing: 1px;
      font-weight: 600;

      color: #333;
      float: left;
    }
  }
}
</style>