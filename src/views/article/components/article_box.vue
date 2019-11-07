<template>
  <div>
    <div
      v-for="item in articles"
      :key="item.id"
    >
      <router-link
        :to="'/home/article/'+item.id"
        id="article_box"
        tag="div"
      >
        <div id="info_box">
          <div id="author_time"><span>作者:<span id="author">{{ item.author }}</span>时间:<span id="time">{{ item.date }}</span></span></div>
          <div id="title">
            <p>{{ item.title }}</p>
          </div>
          <div id="comment_zan">
            <div class="img_box">
              <img
                src="../../../assets/点赞.svg"
                alt=""
                class="zan"
              >
              <span class="count">{{ item.zan_count }}</span>
            </div>
            <div class="img_box">
              <img
                src="../../../assets/评论.svg"
                alt=""
                class="comment"
              >
              <span class="count">{{ item.comment_count }}</span>
            </div>
          </div>
        </div>
        <div id="picture_box">
          <!-- <img
            src="../../../assets/logo.png"
            alt=""
          > -->
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      articles: [
        {
          author: "李白",
          date: "2019-10-10",
          title: "为中华之崛起而读书！",
          comment_count: "20",
          zan_count: "11",
          id: 1
        },
        {
          author: "李白",
          date: "2019-10-10",
          title: "为中华之崛起而读书！",
          comment_count: "20",
          zan_count: "11",
          id: 2
        },
        {
          author: "李白",
          date: "2019-10-10",
          title: "为中华之崛起而读书！",
          comment_count: "20",
          zan_count: "11",
          id: 3
        },
        {
          author: "李白",
          date: "2019-10-10",
          title: "为中华之崛起而读书！",
          comment_count: "20",
          zan_count: "11",
          id: 4
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
#article_box {
  border-bottom: 1px solid #f1f1f1;
  cursor: pointer;
  padding: 18px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  #info_box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    #author_time {
      display: flex;
      span {
        font-size: 15px;
        color: #909090;
      }
      #author {
        margin-right: 10px;
      }
    }
    #title {
      p {
        margin: 0;
        text-align: left;
        font-weight: 600;
        line-height: 40px;
        color: #2e3135;
        font-size: 20px;
      }
    }
    #comment_zan {
      display: flex;
      .img_box {
        display: flex;
        justify-content: center;
        .count {
          margin-left: 10px;
          margin-right: 10px;
        }
        color: #b2bac2;
        border-radius: 1px;
        border: 1px solid #edeeef;
        .zan {
          height: 20px;
          width: 20px;
          margin-left: 10px;
        }
        .comment {
          height: 20px;
          width: 20px;
          margin-left: 10px;
        }
      }
    }
  }
  #picture_box {
    img {
      width: 80px;
      height: 80px;
    }
  }
}
#article_box:hover {
  background-color: #f0f0f0fa;
}
</style>