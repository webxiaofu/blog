<template>
  <div id="app">
    <router-view />
    <div class="music-player"><Player ></Player></div>
  </div>
</template>
<script>
import Player from './components/player/player'
export default {
  components: {
       
        Player
    },
}
</script>
<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f4f5f5;
  .music-player{
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
