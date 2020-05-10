<template>
  <div class="main">
    <div class="main-container">
      <box-header />

      <router-view :key="key"></router-view>
      
      <!-- todo 回到顶部功能 -->
        
      
    </div>
  </div>

</template>
<script>
//import Player from '../components/player/player'
import header from "../views/parts/header";
export default {
  data() {
    return {};
  },
  components: {
    "box-header": header
    //Player
  },
  computed: {
    key() {
      return this.$route.path + Math.random();
    }
  }
};
</script>
<style lang="less" scoped>
.main {
  //overflow: hidden;
  //width: 1900px;
  .main-container {
    //height: 100%;
    //height: 100vh;
    //overflow: hidden;
    //height: 1000px;
    //width: 1920px;
    //overflow-x: hidden;
    //overflow-y: scroll;
  }
}
</style>