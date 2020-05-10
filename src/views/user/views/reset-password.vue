<template>
  <div class="reset-password">
    <div class=" setting-view">
      <div class="sub-view-box setting-password-view">
        <h1>修改密码</h1>
        <ul class="setting-list">
          <li class="item-view">
            <span class="title">旧密码</span>
            <div class="input-box password-input password-input">
              <input
                type="password"
                v-model="formData.old_password"
                placeholder="请输入原密码"
                class="input"
              >
              <a
                href="javascript:;"
                class="reset-password"
                @click="tapResetPassword"
              >忘记密码？</a>
            </div>
          </li>
          <li class="item-view">
            <span class="title">新密码</span>
            <div class="input-box  password-input">
              <input
                type="password"
                v-model="formData.new_password"
                placeholder="请输入新密码"
                class="input"
              >
            </div>
          </li>
          <li class="item-view">
            <span class="title toright">确认新密码</span>
            <div class="input-box  password-input">
              <input
                type="password"
                v-model="formData.repeat_new_password"
                placeholder="确认新密码"
                class="input"
              >
            </div>
          </li>
        </ul>
        <div class="footer-view">
          <button
            class="button button-save"
            @click="save"
          >保存</button>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import api from "../../../../api/api";
export default {
  data() {
    return {
      formData: {
        old_password: "",
        new_password: "",
        repeat_new_password: "",
        uid: this.$route.params.id
      }
    };
  },
  methods: {
    //忘记密码
    tapResetPassword() {
      this.$router.push({name:'findpwd'})
    },
    save() {
      if (this.formData.new_password == this.formData.repeat_new_password) {
        api
          .toupdatePassword(this.formData)
          .then(result => {
            if (result.data.status == 1) {
              this.$message.success(result.data.msg);
            } else {
              this.$message.error(result.data.msg);
            }
            this.formData = {
              formData: {
                old_password: "",
                new_password: "",
                repeat_new_password: "",
                uid: this.$route.params.id
              }
            };
          })
          .catch(err => {});
      } else {
        this.$message.error("两次密码不一致，请重新输入！");
      }
    }
  }
};
</script>
<style lang="less" scoped>
.reset-password {
  .setting-view {
    // box-shadow: 0 1px 3px 0px rgba(0, 0, 0, 0.1);
    // border-radius: 5px;
    padding: 30px;
    background: #ffffff;
    .sub-view-box {
      > h1 {
        color: #333333;
        font-size: 20px;
        font-weight: bold;
        padding-bottom: 20px;
        border-bottom: 1px solid #f1f1f1;
      }
      .setting-list {
        padding-left: 0px;
        .item-view {
          padding: 24px 0;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          border-bottom: 1px solid #f1f1f1;
          .title {
            font-size: 14px;
            color: #333;
            width: 120px;
          }
          .toright {
            margin-left: 13px;
          }
          .avatar-uploader {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
          }
          .input-box {
            margin-left: 20px;
            text-align: left;
            flex: 1;
            input {
              width: 100%;
            }
          }
          .profile-radio {
            input {
              width: auto;
              display: inline-block;
            }
            span {
              margin: 0 20px 0 6px;
              font-size: 15px;
              vertical-align: middle;
            }
          }
          .input {
            display: block;
            border: none;
            outline: none;
            color: #909090;
            font-size: 14px;
          }
          .avatar {
            display: inline-block;
            position: relative;
            background-position: 50%;
            background-size: cover;
            background-repeat: no-repeat;
            background-color: #eee;
            -webkit-box-flex: 0;
            -ms-flex: 0 0 auto;
            flex: 0 0 auto;
            width: 72px;
            height: 72px;
            margin-right: 12px;
          }
          .hint {
            color: #909090;
            font-size: 12px;
            margin-bottom: 18px;
          }
          .button,
          button {
            font-size: 12px;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            background-color: #007fff;
            color: #fff;
            border-radius: 2px;
            border: none;
            padding: 6px 15px;
            outline: none;
            transition: background-color 0.3s, color 0.3s;
            cursor: pointer;
          }
        }
      }
      .action-box,
      .footer-view {
        margin-left: 12px;
        .hint {
          color: #909090;
          font-size: 12px;
          margin-bottom: 18px;
        }
        .button,
        button {
          font-size: 12px;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          background-color: #007fff;
          color: #fff;
          border-radius: 2px;
          border: none;
          padding: 6px 15px;
          outline: none;
          transition: background-color 0.3s, color 0.3s;
          cursor: pointer;
        }
        .button-save {
          padding: 8px 30px;
          font-size: 14px;
          margin-top: 20px;
        }
        .upload-btn {
          position: relative;
          .file-input {
            position: absolute;
            top: 0;
            left: 0;
            width: 80px;
            height: 30px;
            opacity: 0;
            cursor: pointer;
            &:hover {
              cursor: pointer;
            }
          }
        }
      }
    }
  }

  .setting-password-view {
    .password-input {
      input {
        display: inline-block !important;
        width: auto !important;
      }
      .reset-password {
        display: inline-block;
        font-size: 14px;
        color: #ffc107;
      }
    }
  }
}
</style>