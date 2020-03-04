<template>
  <div id="center" v-if="userInfo"  >
    <div id="center_left" >
      <div class="user_msg" >
        <div class="content">

          <img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572598683452&di=ce269c5d352d5dc8bda878bb354c319d&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201508%2F08%2F20150808222125_URnah.jpeg"
            alt=""
          >

          <div class="msg_info">
            <div class="name_box">
              <h1>{{userInfo.nickname}}</h1>
              <div><i class="el-icon-ali icon-github"></i>
                <i class="el-icon-ali icon-weibo"></i>
                <i class="el-icon-ali icon-diqiu"></i></div>
            </div>
            <div class="other_box">
              <div class="info">
                <ul>
                  <li>
                    <div class="meta-block">
                      <p>{{ userInfo.focusOn.focusOn_number }}</p>
                      <strong>
                        {{ personalInfo.user._id === userInfo._id ? '我的关注' : '他的关注'}}
                      </strong>
                    </div>
                  </li>
                  <li>
                    <div class="meta-block">
                      <p>{{ userInfo.fans.fans_number }}</p>
                      <strong>
                        粉丝
                      </strong>
                    </div>
                  </li>
                  <li>
                    <div class="meta-block">
                      <p>{{ userInfo.articles.number }}</p>
                      <strong>
                        文章
                      </strong>
                    </div>
                  </li>
                </ul>
                <div class="guanzhu" v-if="( personalInfo.user._id !== userInfo._id ) && personalInfo.islogin">
                  <el-button type="success" round v-if="personalInfo.user.focusOn.focusOn_id.includes(this.userid)" @click="focusOther(1)">取消关注</el-button>
                  <el-button type="success" round v-if="!personalInfo.user.focusOn.focusOn_id.includes(this.userid)" @click="focusOther(0)">关注</el-button>
                </div>
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
            :label=" this.userid == personalInfo.user._id ? '我的文章' : '他的文章' "
            name="first"
          ><articlesView v-if="tab_index == '0'"></articlesView></el-tab-pane>
          <el-tab-pane
            :label=" this.userid == personalInfo.user._id ? '我的音乐' : '他的音乐' "
            name="second"
          ><musicsView v-if="tab_index == '1'"></musicsView></el-tab-pane>
          <el-tab-pane
            :label=" this.userid == personalInfo.user._id ? '我的图片' : '他的图片' "
            name="third"
          ><picturesView v-if="tab_index == '2'"></picturesView></el-tab-pane>
          <el-tab-pane
            :label=" this.userid == personalInfo.user._id ? '我的收藏' : '他的收藏' "
            name="fourth"
          ></el-tab-pane>
        </el-tabs>
      </div>

    </div>
    <div id="center_right">
      111
    </div>

  </div>
</template>
<script>
import { mapState,mapActions  } from 'vuex'
import api from '../../../api/api'
import user_article_view from './views/user_article_view'
import user_music_view from './views/user_music_view'
import user_picture_view from './views/user_pcture_view'
export default {
  data() {
    return {
      activeName: "first",
      userid: this.$route.params.id,
      userInfo:'',
      tab_index: '0' //根据tab条件决定渲染组件
      
    };
  },
  /* activated(){
    this.getUserMainInfo()
  }, */
  created(){
    this.getUserMainInfo()
    
  },
  methods: {
    ...mapActions([
      'getNewVuexUserData'
    ]),
    handleClick(tab, event) {
      console.log(tab.index);
      this.tab_index = tab.index
    },
    getUserMainInfo(){
      api.toGetUserInfo(this.userid).then((result) => {
        console.log(result)
        if(result.data.status == '1'){
          this.userInfo = result.data.users[0]
        }
      });
    },
    focusOther(status){
      let params = {
        fid:this.userid,
        uid:this.personalInfo.user._id,
        status:status
      }
      console.log(params)
      api.tofocusonOther(params).then((result) => {
        if(result.data.status == 1){
          this.getUserMainInfo()
          this.getNewVuexUserData(this.personalInfo.user._id)
          //this.personalInfo.user.focusOn.focusOn_id.push(this.userid)
          this.$message.success('操作成功！')
          
        }else{
          this.$message.error('操作失败！')
        }
      }).catch((err) => {
        
      });
    }
  },
  computed:{
    ...mapState(['personalInfo'])
  },
  components: {
    articlesView:user_article_view,
    musicsView:user_music_view,
    picturesView:user_picture_view
  }
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