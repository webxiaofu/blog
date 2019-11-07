<template>
  <div id="article">
    <div id="tab">
      <a
        v-for="(item,index) in tabs"
        :key="index"
        @click="changeClick(index)"
        :class="{ tabsColor:tabsChoose == index}"
      >
        {{item.name}}
      </a>
    </div>
    <div
      v-for="(item,index) in article_list"
      :key="index"
      id="articleItem"
    >
      <articleItem :articleItem="item"> </articleItem>
    </div>

  </div>
</template>
<script>
import article_box from "./components/article_box";
import article_item from "./components/article_item";
export default {
  data() {
    return {
      tabs: [{ name: "最新" }, { name: "最热" }, { name: "最多赞" }],
      tabsChoose: 0,
      article_list: [
        {
          aid: "10037",
          article_blog: {
            blog_id: "1",
            create_date: "2019-07-14T17:25:59.000Z",
            create_timestamp: "1563125159",
            description: "",
            en_name: "xsb",
            enable: false,
            icon: "/default/img/default_icon.png",
            is_public: true,
            like_count: "0",
            name: "小随笔官方",
            read_count: 27,
            rejection_reason: "2",
            status: 4,
            tag_ids: "dfOfficialExclusive",
            uid: "10000",
            update_date: "2019-07-14T17:25:59.000Z"
          },
          blog_ids: "1",
          comment_count: "0",
          content:
            "<blockquote>↵<p>对于不好的可以吐槽，哈哈</p>↵</blockquote>↵<p>好的意见和建议，我都会尽快在下个版本中添加或者修改</p>↵<p>每天我都会看网站的动态的</p>↵",
          cover_img: "",
          create_date: "2019-10-31T03:57:34.000Z",
          create_dt: "2019-10-31",
          create_timestamp: "1572494254",
          excerpt:
            "对于不好的可以吐槽，哈哈好的意见和建议，我都会尽快在下个版本中添加或者修改每天我都会看网站的动态的",
          is_public: true,
          like_count: "0",
          origin_content:
            "> 对于不好的可以吐槽，哈哈↵↵好的意见和建议，我都会尽快在下个版本中添加或者修改↵↵每天我都会看网站的动态的",
          read_count: "18",
          rejection_reason: null,
          source: 1,
          status: 6,
          tag: [
            {
              attention_count: "1",
              create_date: "2019-07-14T16:34:22.000Z",
              create_timestamp: "1563122062",
              description: "官方标签发布文章专属标签",
              en_name: "official",
              enable: true,
              icon: "/default/img/default_article_tag.png",
              id: "2",
              is_push: true,
              name: "官方专属",
              sort: null,
              tag_id: "dfOfficialExclusive"
            }
          ],

          tag_ids: "dfOfficialExclusive",
          title: "大家对于网站有啥意见和建议的，可以在这里留言",
          type: 1,
          uid: "10000",
          update_date: "2019-10-31T04:00:37.000Z",
          update_timestamp: null,
          user: {
            avatar:
              "https://www.xiaosuibi.com/upload/avatar-img-service/2019/10/1571194601365.jpeg",
            introduction: "坚持",
            nickname: "月下",
            sex: 1,
            uid: "10000"
          }
        },
        {
          aid: "10037",
          article_blog: {
            blog_id: "1",
            create_date: "2019-07-14T17:25:59.000Z",
            create_timestamp: "1563125159",
            description: "",
            en_name: "xsb",
            enable: false,
            icon: "/default/img/default_icon.png",
            is_public: true,
            like_count: "0",
            name: "小随笔官方",
            read_count: 27,
            rejection_reason: "2",
            status: 4,
            tag_ids: "dfOfficialExclusive",
            uid: "10000",
            update_date: "2019-07-14T17:25:59.000Z"
          },
          blog_ids: "1",
          comment_count: "0",
          content:
            "<blockquote>↵<p>对于不好的可以吐槽，哈哈</p>↵</blockquote>↵<p>好的意见和建议，我都会尽快在下个版本中添加或者修改</p>↵<p>每天我都会看网站的动态的</p>↵",
          cover_img: "",
          create_date: "2019-10-31T03:57:34.000Z",
          create_dt: "2019-10-31",
          create_timestamp: "1572494254",
          excerpt:
            "对于不好的可以吐槽，哈哈好的意见和建议，我都会尽快在下个版本中添加或者修改每天我都会看网站的动态的",
          is_public: true,
          like_count: "0",
          origin_content:
            "> 对于不好的可以吐槽，哈哈↵↵好的意见和建议，我都会尽快在下个版本中添加或者修改↵↵每天我都会看网站的动态的",
          read_count: "18",
          rejection_reason: null,
          source: 1,
          status: 6,
          tag: [
            {
              attention_count: "1",
              create_date: "2019-07-14T16:34:22.000Z",
              create_timestamp: "1563122062",
              description: "官方标签发布文章专属标签",
              en_name: "official",
              enable: true,
              icon: "/default/img/default_article_tag.png",
              id: "2",
              is_push: true,
              name: "官方专属",
              sort: null,
              tag_id: "dfOfficialExclusive"
            }
          ],

          tag_ids: "dfOfficialExclusive",
          title: "大家对于网站有啥意见和建议的，可以在这里留言",
          type: 1,
          uid: "10000",
          update_date: "2019-10-31T04:00:37.000Z",
          update_timestamp: null,
          user: {
            avatar:
              "https://www.xiaosuibi.com/upload/avatar-img-service/2019/10/1571194601365.jpeg",
            introduction: "坚持",
            nickname: "月下",
            sex: 1,
            uid: "10000"
          }
        }
      ]
    };
  },
  methods: {
    changeClick(index) {
      this.tabsChoose = index;
    }
  },
  components: {
    articleBox: article_box,
    articleItem: article_item
  }
};
</script>
<style lang="less" scoped>
#article {
  #tab {
    height: 50px;
    border-bottom: 1px solid #f1f1f1;
    .tabsColor {
      color: #007fff;
    }
    a {
      font-size: 15px;
      margin-left: 24px;
      text-decoration: none;
      cursor: pointer;
      color: #909090;
      float: left;
      margin-top: 15px;
      margin-bottom: 15px;
    }
    a:hover {
      color: #007fff;
    }
  }
  #articleItem{
    border-bottom: 1px solid #f1f1f1;
  }
}
</style>