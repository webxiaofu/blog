<template>
  <div>
    <div v-if="article_list.length == 0">
      没有数据  
      <!-- TODO  -->
      <!-- 
        没有数据待美化，后期可以单独封装成一个组件
       -->        
    </div>
    <div
      
      v-for="(item,index) in article_list"
      :key="index"
      id="articleItem"
    >
      <articleItemUser :articleItem="item"> </articleItemUser>
    </div>
  </div>
</template>
<script>
import article_item_user from "../components/article_item_user";
export default {
  data() {
    return {
      article_list: [
        {
          author: {
            author_id: "5dca7dc81806a623a0c8a7c5",
            author_name: "fuxingde",
            photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572598683452&di=ce269c5d352d5dc8bda878bb354c319d&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201508%2F08%2F20150808222125_URnah.jpeg"
          },
          collect_count: 2,
          column: "爱国主义",
          comment_count: 5,
          content: "啦啦啦，我是爱国的小先锋。",
          create_data: "1573542375904",
          picture: "",
          read_count: 33,
          tag: "文章",
          title: "这是一个测试3！",
          _id: "5dca5a50eddd3530b3f63cf0"
        },
        {
          author: {
            author_id: "5dca7dc81806a623a0c8a7c5",
            author_name: "fuxingde",
            photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572598683452&di=ce269c5d352d5dc8bda878bb354c319d&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201508%2F08%2F20150808222125_URnah.jpeg"
          },
          collect_count: 2,
          column: "爱国主义",
          comment_count: 5,
          content: "啦啦啦，我是爱国的小先锋。",
          create_data: "1573542375904",
          picture: "",
          read_count: 33,
          tag: "文章",
          title: "这是一个测试3！",
          _id: "5dca5a50eddd3530b3f63cf0"
        }
      ]
    };
  },
  methods: {},
  components: {
    articleItemUser: article_item_user
  }
};
</script>
<style lang="less" scoped>
  #articleItem{
    border-bottom: 1px solid #f1f1f1;
  }
</style>