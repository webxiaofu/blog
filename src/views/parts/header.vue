<template>
  <div id="main">
    <div id="head">
      <div id="head_main">
        <img
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588741113889&di=fe2722392ecac366f5985f46253e6561&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F8b1e5a31c3a77e6480ce40b4f4b1ac273850388314f9-Udfcrc_fw658"
          alt=""
        >
        <div id="nav_menu">
          <el-menu
            :default-active="$route.path"
            class="el-menu-demo"
            mode="horizontal"
            router
          >
            <el-menu-item index="/home/article">文章</el-menu-item>
            <!-- <el-menu-item index="/home/music">音乐</el-menu-item> -->
            <el-menu-item index="/home/picture-type">图片</el-menu-item>
          </el-menu>
        </div>
        <div id="search_box">
          <el-input
            placeholder="请输入内容"
            prefix-icon="el-icon-search"
            v-model="input1"
          >
          </el-input>
        </div>
        <div
          id="buttons"
          v-if="!personalInfo.islogin"
        >
          <!-- <el-button
            type="text"
            icon="el-icon-tickets"
          >写文章</el-button> -->
          <el-button type="text" @click="login()">登录</el-button>
          <el-button type="danger" round @click="registered()">注册</el-button>
        </div>
        <div id="writing_logo" v-if="personalInfo.islogin">
          <i class="el-icon-edit" @click="writeArticles()"></i>
        </div>
        <div id="logo" v-if="personalInfo.islogin">
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              <img   
                
                alt=""
                v-lazy="personalInfo.user.photo"
              >
            </span>
            <el-dropdown-menu slot="dropdown" >
              <el-dropdown-item command='homepage'>我的主页</el-dropdown-item>
              <el-dropdown-item command='setting'>设置</el-dropdown-item>
              <el-dropdown-item command='logout'>登出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      input1: "",
      
    };
  },
  creared() {},
  methods:{
    login(){
      this.$router.push({ name: 'login' })
    },
    registered(){
      this.$router.push({ name: 'register' })
    },
    handleCommand(command) {
      if(command == 'logout'){
        console.log('登出')
        this.$store.commit('SET_LOGIN_OUT')
        localStorage.removeItem('token')
      }
      if(command == 'homepage'){
        const _id = this.personalInfo.user._id
        this.$router.push({ path: `/user/${_id}` })
      }
      if(command == 'setting'){
        const _id = this.personalInfo.user._id
        this.$router.push({ path: `/setting/${_id}` })
      }   
    },
    writeArticles(){
      this.$router.push({name: 'createWrite',params: {type:'create'}})
    }
  },
  computed:{
    ...mapState(['personalInfo'])
  }
};
</script>
<style lang="less" scoped>
#main {
  font-size: 18px;
  background-color: #f4f5f5;

  #head {
    //height: 50px;

    width: 100%;
    background: #fff;
    border-bottom: 1px solid #f1f1f1;

    height: 60px;
    z-index: 250;
    #head_main {
      margin: 0 auto;
      display: flex;
      max-width: 960px;
      img{
          width: 78px;
          height: 60px;
        }
      .el-menu--horizontal > .el-menu-item {
        font-size: 16px;
      }
    }
    #nav_menu {
      margin-left: 20px;
    }
    #search_box {
      margin-left: 200px;
      .el-input {
        margin-top: 10px;
      }
    }
    #writing_logo{
      margin: auto 15px auto auto;
    }
    #logo{
      margin-left: 40px;
      margin-top: 5px;
      img {
        width: 50px;
        height: 50px;
      }
    }
    #buttons {
      margin-left:180px;
      /* margin-top: 5px; */
      .el-button--text {
        margin-top: 10px;
        font-size: 16px;
        
      }
      
    }
  }
}
@media (max-width: 992px) {
  #main {
    font-size: 18px;
    background-color: #f4f5f5;
    min-width: 650px;
    #head {
      //height: 50px;

      width: 100%;
      background: #fff;
      border-bottom: 1px solid #f1f1f1;

      height: 60px;
      z-index: 250;
      #head_main {
        margin: 0 auto;
        display: flex;
        max-width: 650px;
        img{
          width: 98px;
          height: 38px;
        }
        .el-menu--horizontal > .el-menu-item {
          font-size: 16px;
        }
      }
      #nav_menu {
        margin-left: 20px;
      }
      #search_box {
        margin-left: 20px;
        .el-input {
          margin-top: 10px;
          width: 150px;
        }
      }
      #writing_logo{
      margin: auto 10px auto auto;
      }
      #logo{
      margin-left: 20px;  
      margin-top: 10px;
      img {
          width: 40px;
          height: 40px;
        }
      }
      #buttons {
        /* margin-left: 10px; */
        margin-left: 10px;
       /*  margin-top: 10px; */
        .el-button--text {
          margin-top: 10px;
          font-size: 16px;
          
        }
        
      }
    }
  }
}
</style>
