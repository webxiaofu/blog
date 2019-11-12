<template>
  <div id="center">
    <div id="center_left">
      <div class="user_msg">
        <div class="content">

          <img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572598683452&di=ce269c5d352d5dc8bda878bb354c319d&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201508%2F08%2F20150808222125_URnah.jpeg"
            alt=""
          >

          <div class="msg_info">
            <div class="name_box">
              <h1>fxd</h1>
              <div><i class="el-icon-ali icon-github"></i>
                <i class="el-icon-ali icon-weibo"></i>
                <i class="el-icon-ali icon-diqiu"></i></div>
            </div>
            <div class="other_box">
              <div class="info">
                <ul>
                  <li>
                    <div class="meta-block">
                      <p>0</p>
                      <strong>
                        我的关注
                      </strong>
                    </div>
                  </li>
                  <li>
                    <div class="meta-block">
                      <p>0</p>
                      <strong>
                        粉丝
                      </strong>
                    </div>
                  </li>
                  <li>
                    <div class="meta-block">
                      <p>0</p>
                      <strong>
                        文章
                      </strong>
                    </div>
                  </li>
                </ul>
                <div class="guanzhu"><el-button type="success" round>关注</el-button></div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <div class="line">
      </div>
      <div class="tabs">
        <el-tabs
          v-model="activeName"
          @tab-click="handleClick"
        >
          <el-tab-pane
            label="我的文章"
            name="first"
          >文章</el-tab-pane>
          <el-tab-pane
            label="我的图片"
            name="second"
          >图片</el-tab-pane>
          <el-tab-pane
            label="我的音乐"
            name="third"
          >音乐</el-tab-pane>
          <el-tab-pane
            label="我的收藏"
            name="fourth"
          >关注</el-tab-pane>
        </el-tabs>
      </div>

    </div>
    <div id="center_right">

    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "first"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
  /* TODO 11.12 */
  /* 
    1、个人主页根据登陆角色id和路由上的id来显示‘我’还是‘他’以及是否显示关注按钮
    2、新闻详情页、个人设置页、个人主页部分
  */
};
</script>
<style lang="less" scoped>
#center {
  height: 1200px;
  position: relative;
  margin: 0 auto;
  display: flex;
  max-width: 960px;
  margin-top: 10px;
  #center_left {
    width: 700px;
    height: 1200px;
    background: #fff;
    .user_msg {
      height: 150px;
      width: 100%;
      box-sizing: border-box;
      .content {
        height: 100%;
        padding: 25px;
        box-sizing: border-box;
        display: flex;

        img {
          height: 100%;
        }
        .msg_info {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          /* align-items: center; */
          .name_box {
            display: flex;
            justify-content: space-between;
            h1 {
              margin: 0 0 0 20px;
              float: left;
            }
            i {
              margin-left:30px;
              font-size: 20px;
            }
          }
          .other_box {
            .info {
              display: flex;
              justify-content: space-between;
              ul {
                list-style: none;
                padding: 0;
                margin: 0 0 0 20px;
                display: flex;
                li {
                  display: inline-block;

                  .meta-block {
                    font-size: 12px;
                    margin: 0 7px 6px 0;
                    padding: 0 7px 0 0;
                    border-right: 1px solid #f0f0f0;
                  }
                  p {
                    margin-bottom: 5px;
                    font-size: 15px;
                    color: #333;
                  }
                  strong {
                    color: #999;
                    font-weight: normal;
                  }
                  &:last-child {
                    .meta-block {
                      border-right: none;
                    }
                  }
                }
              }
              .guanzhu{
                display: flex;
                align-items: center;
              }
            }
          }
        }
      }
    }
    .line {
      height: 12px;
      background-color: #f4f5f5;
    }
    .tabs {
      margin-left: 35px;
      margin-top: 10px;
      margin-right: 35px;
    }
  }
  #center_right {
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    width: 250px;
    height: 1200px;
    background: #fff;
    img {
      width: 100%;
    }
  }
}
@media (max-width: 992px) {
  #center {
    height: 1200px;
    position: relative;
    margin: 0 auto;
    display: flex;
    max-width: 650px;
    margin-top: 10px;
    #center_left {
      /* flex: 3; */
      width: 435px;
      height: 1200px;
      background: #fff;
    }
    #center_right {
      display: flex;
      flex-direction: column;
      margin-left: 15px;
      width: 200px;
      /* flex: 1; */
      height: 1200px;
      background: #fff;
      img {
        width: 100%;
      }
    }
  }
}
</style>