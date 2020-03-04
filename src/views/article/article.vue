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
import api from "../../../api/api"
export default {
  data() {
    return {
      tabs: [{ name: "最新" }, { name: "最热" }, { name: "最多赞" }],
      tabsChoose: 0,
      article_list:'',
      page:1,
      pagesize:10,
      sortId:0
    };
  },
  created(){
    this.sortId = 0;
    this.getArticles()
  },
  methods: {
    changeClick(index) {
      this.tabsChoose = index;
      this.sortId = index;
      this.getArticles()
    },
    getArticles(){
      api.toGetArticles(this.page,this.pagesize,this.sortId).then((result) => {
      if(result.data.status == '1'){
        console.log(result)
        this.article_list = result.data.articles;
      }    
    })
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