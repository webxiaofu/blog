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
    <div v-if="article_list.length == 0">
      没有数据
    </div>
    <div
      v-else
      v-for="(item,index) in article_list"
      :key="index"
      id="articleItem"
    >
      <articleItem :articleItem="item"> </articleItem>
    </div>

  </div>
</template>
<script>
/* import article_box from "./components/article_box"; */
import article_item from "./components/article_item";
import api from "../../../api/api";
export default {
  data() {
    return {
      tabs: [{ name: "最新" }, { name: "最热" }, { name: "最多评论" }],
      tabsChoose: 0,
      article_list: [],
      page: 1,
      pagesize: 8,
      count:'',
      sortId: 0,
      flag:true,//节流
      scrollTop: 0, //滚动条位置
      offsetHeight: 0, //可视区高
      scrollHeight: 0, //滚动区域
      noMoreData: false
    };
  },
  created() {
    this.sortId = 0;
    this.getArticles();
  },
  mounted() {
    let _this = this;
    window.addEventListener("scroll", _this.bindScroll);
  },
  watch: {
    //观察滚动条位置
    scrollTop: function() {
      console.log("当前滚动条高" + this.scrollTop);
      console.log("可视区高" + this.offsetHeight);
      console.log("滚动条高" + this.scrollHeight);

      if (this.scrollHeight <= this.offsetHeight + this.scrollTop ) {
        // 拉取更多数据
        //return  this.getMoreData();
        if(this.falg){
          console.log("到底了");
          this.page +=1
          this.getArticles()
        }
        
      }
    }
  },
  methods: {
    changeClick(index) {
      this.page = 1
      this.article_list = []
      this.tabsChoose = index;
      this.sortId = index;
      this.getArticles()
      /* api.toGetArticles(this.page, this.pagesize, this.sortId).then(result => {
        if (result.data.status == "1") {
          
          
          this.article_list = this.article_list.concat(result.data.articles);
          this.count = result.data.count
        }
      }); */
    },
    getArticles() {
      //this.article_list = []
      api.toGetArticles(this.page, this.pagesize, this.sortId).then(result => {
        if (result.data.status == "1") {
          this.falg = true
          if(result.data.articles.length == 0){
            this.falg = false
          }
          console.log(result);
          this.article_list = this.article_list.concat(result.data.articles);
          this.count = result.data.count
        }
      });
    },
    loadmore() {
      console.log("lodemore1111");
      //this.article_list = this.article_list.concat(this.article_list)
    },
    bindScroll() {
      this.scrollTop = document.documentElement.scrollTop;
      this.scrollHeight = document.documentElement.scrollHeight;
      this.offsetHeight = document.documentElement.offsetHeight;
    }
  },
  components: {
    /* articleBox: article_box, */
    articleItem: article_item
  }
};
</script>
<style lang="less" scoped>
#article {
  /* height: 1000px;
  overflow: auto; */
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
  #articleItem {
    border-bottom: 1px solid #f1f1f1;
  }
}
</style>