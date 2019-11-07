<template>
  
    <section class="sign-lay layout-content">
      <div class="sign-view client-card">
        <div class="title">
          登录
        </div>
        <div class="js-sign-in-container">
          <form id="new_session"
                ref="login">
            <!-- 正常登录登录名输入框 -->
            <div class="input-prepend restyle js-normal">
              <input placeholder="邮箱"
                     type="text"
                     v-model="formData.email"
                     @keyup.enter="login"
                     value="">
              <i class="el-icon-user-solid"></i>
            </div>

            <div class="input-prepend">
              <input placeholder="密码"
                     type="password"
                     v-model="formData.password"
                     name="password"
                     @keyup.enter="login"
                     value="">
              <i class="el-icon-key"></i>
            </div>

            <div class="remember-btn clearfix">
              <div class="pull-left">
                没有账号？ <a href="javascript:;" class="reg-btn"
                    @click="tapRegister">注册</a>
              </div>
              <div class="pull-right">
                <a href="javascript:;" id="wjmm"
                   @click="tapResetPassword">忘记密码</a>
              </div>
            </div>

            <div class="footer-text"></div>

            <button class="sign-in-button"
                    id="sign-in-form-submit-btn"
                    type="button"
                    @click="login">
              登录
            </button>
            <div class="go-home"><router-link class="return-home" 
                         :to="{ name: 'home' }">返回首页</router-link></div>
            
          </form>

        </div>
      </div>
    </section>
    <!--home-lay layout-content end-->
  
</template>

<script>


export default {
  name: 'SignIn',
  data () {
    return {
      formData: {
        email: '',
        phone: '',
        type: 'email',
        password: '',
      }
    }
  },
  methods: {
    login () {
      
    },
    tapRegister () {
      this.$router.push({ name: 'register' })
    },
    tapResetPassword () {
      
    }
  },
  components: {
    
  }
}
</script>

<style scoped lang="less">
  .client-card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid #edf2f9;
  border-radius: 0.5rem;
}
.client-card {
  display: block;
  margin-bottom: 1rem;
  border-color: #edf2f9;
  box-shadow: 0 0.75rem 1.5rem rgba(18, 38, 63, 0.03);
}
  .sign-lay {
  height: 100%;
  min-height: 750px;
  text-align: center;
  font-size: 14px;
  background-color: #fff;
}
  .sign-view {
  width: 400px;
  margin: 60px auto 0;
  padding: 50px 50px 50px;
  background-color: #fff;
  vertical-align: middle;
  display: inline-block;
  text-align: center;
  .title {
    font-weight: 400;
    color: #ea6f5a;
    font-size: 20px;
    margin-bottom: 15px;
  }
  .remember-btn {
    margin: 15px 0;
    font-size: 12px;
    padding-bottom: 1px;
    span {
      margin-left: 5px;
      font-size: 12px;
      color: #969696;
      vertical-align: middle;
    }
    .pull-left{
      float: left;
      a{
        text-decoration: none;
      }
    }
    .pull-right{
      float: right;
      a{
        text-decoration: none;
      }
    }
  }
  .input-prepend {
    position: relative;
    margin-bottom: 15px;
    input {
      width: 100%;
      height: 35px;
      margin-bottom: 0;
      padding: 4px 12px 4px 42px;
      border: none;
      border: 1px solid #ebebeb;
      background-color: #ffffff;
      vertical-align: middle;
      font-size: 13px;
      border-radius: 12px;
      box-sizing: border-box;
    }
    i {
      position: absolute;
      top: 12px;
      left: 12px;
      font-size: 18px;
      color: #969696;
    }
  }
  .sign-in-button,
  .sign-up-button {
    margin-top: 20px;
    width: 100%;
    padding: 9px 18px;
    font-size: 15px;
    border: none;
    border-radius: 25px;
    color: #fff;
    background: #42c02e;
    cursor: pointer;
    outline: none;
    display: block;
    clear: both;
  }
  .footer-text {
    margin-top: 30px;
    em {
      color: #3194d0;
      cursor: pointer;
    }
  }
  #sign-in-form-submit-btn {
    background: #3194d0;
  }
  .go-home{
    margin-top: 10px;
  }
  .return-home{
    text-decoration: none;
  }
}
</style>