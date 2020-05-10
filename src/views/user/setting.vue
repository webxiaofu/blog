<template>

  <div class="container">
    <div class="row">
      <div class="user-setting-aside">
        <h2 class="title"><i class="el-icon-setting"></i>设置</h2>
        <ul class="setting-tap-list">
          <li>
            <router-link
              :to='{name:"settingProfile"}'
              class="dropdown-item"
            >
              <i class="el-icon-user-solid"></i>个人资料
            </router-link>
          </li>
          <li>
            <router-link
              :to='{name:"settingResetPassword"}'
              class="dropdown-item"
            >
              <i class="el-icon-lock"></i>密码修改
            </router-link>
          </li>
        </ul>
      </div>
      <div class="other-side">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.container {
  height: 1200px;
  .row {
    position: relative;
    margin: 0 auto;
    display: flex;
    max-width: 960px;
    margin-top: 10px;
    display: flex;
    .user-setting-aside {
      background: #fff;
      //width: 300px;
      flex: 2;
      text-align: left;
      height: 150px;
      .title {
        padding: 10px 20px;
        font-weight: bold;
        font-size: 14px;
        margin-bottom: 0;

        i {
          margin-right: 15px;
          font-size: 18px;
        }
      }
      .setting-tap-list {
        display: block;
        padding: 0px;
        margin-top: 0px;
        list-style: none;
        li {
          a {
            display: block;
            padding: 10px 20px;
            font-size: 14px;
            text-decoration: none;
            color:#2c3e50;
            i {
              margin-right: 15px;
              font-size: 18px;
            }
            &:hover {
              color: #f46e65;
            }
            &.router-link-active {
              color: red;
            }
          }
        }
      }
    }
    .other-side{
      flex: 5;
      margin-left: 15px;
      background: #fff;
    }
  }
}
</style>