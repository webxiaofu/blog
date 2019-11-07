<template>
  <div id="main">
    <div id="head">
      <div id="head_main">
        <img
          src="https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg"
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
            <el-menu-item index="/home/music">音乐</el-menu-item>
            <el-menu-item index="/home/picture">图片</el-menu-item>
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
          v-if="islogin"
        >
          <!-- <el-button
            type="text"
            icon="el-icon-tickets"
          >写文章</el-button> -->
          <el-button type="text" @click="login()">登录</el-button>
          <el-button type="danger" round @click="registered()">注册</el-button>
        </div>
        <div id="writing_logo" v-if="!islogin">
          <i class="el-icon-edit"></i>
        </div>
        <div id="logo" v-if="!islogin">
          <el-dropdown>
            <span class="el-dropdown-link">
              <img
                src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572598683452&di=ce269c5d352d5dc8bda878bb354c319d&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201508%2F08%2F20150808222125_URnah.jpeg"
                alt=""
              >
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>

            </el-dropdown-menu>
          </el-dropdown>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      input1: "",
      islogin: true
    };
  },
  creared() {},
  methods:{
    login(){
      this.$router.push('/login')
    }
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
      margin-left: 30px;
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
