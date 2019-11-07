<template>
    <section class="sign-lay layout-content">
      <div class="sign-view client-card">
        <div class="title">
          注册
        </div>
        <div class="js-sign-in-container">
          <form id="sign-up"
                accept-charset="UTF-8"
                method="post"
                ref="register">

            <div class="input-prepend restyle js-normal">
              <input v-model="formData.nickname"
                     type="text"
                     class="nickname"
                     placeholder="你的昵称">
              <i class="el-icon-user-solid"></i>
            </div>

            <div class="input-prepend email-view">
              <input v-model="formData.email"
                     type="text"
                     class="send-email-input account"
                     placeholder="邮箱">
              <i class="el-icon-message"></i>
              <send-code :isSend="isSendCodeSuccess"
                         v-model="isSendCode"
                         @click.native="sendCode"
                         storage-key="sendEmailCode"
                         class="btn-send-email-code" />
            </div>

            <div class="input-prepend email-view-code"
                 v-show="formData.email">
              <input v-model="formData.code"
                     type="text"
                     class="send-email-code code"
                     placeholder="请输入验证码">
              <i class="el-icon-chat-round"></i>
            </div>

            <div class="input-prepend">
              <input v-model="formData.password"
                     type="password"
                     class="password"
                     placeholder="密码">
              <i class="el-icon-key"></i>
            </div>

            <div class="input-prepend">
              <input v-model="formData.double_password"
                     type="password"
                     class="double_password"
                     placeholder="重复密码">
              <i class="el-icon-key"></i>
            </div>

            <div class="footer-text">已有账户， <em @click="tapSign">登录</em></div>

            <button class="sign-up-button"
                    type="button"
                    @click="register">注册</button>
          </form>

        </div>
      </div>
    </section>
</template>
<script>
import sendcode from "../../components/send-code/send-code"
export default {
    data () {
    return {
      isSendCode: false,
      isSendCodeSuccess: false, // 验证码是否发送
      formData: {
        nickname: '',
        email: '',
        phone: '',
        code: '',
        type: 'email',
        password: '',
        double_password: ''
      }
    }
  },
  methods: {
    sendCode () { // 发送注册验证码
      
    },
    register () {
      
    },
    tapSign () {
      this.$router.push({ name: 'login' })
    }
  },
  components: {
    'send-code': sendcode,
    
  }
}
</script>
<style lang="less" scoped>

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
      top: 8px;
      left: 12px;
      font-size: 18px;
      color: #969696;
    }
  }
  .email-view {
    .send-email-input {
      padding-right: 92px;
    }
    .btn-send-email-code {
      position: absolute;
      right: 0;
      font-size: 12px;
      top: 0px;
      bottom: 10px;
    }
  }
  .email-view-code {
    text-align: left;
    .send-email-code {
      width: 170px;
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
}
</style>