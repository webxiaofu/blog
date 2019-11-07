<template>
  <div id="center">
    <div id="center_left">
      <!-- 文章主体 -->
      <router-view />
    </div>
    <div id="center_right">
      <!-- 侧边栏主体 -->
    </div>

  </div>
</template>
<script>
export default {};
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