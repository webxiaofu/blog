import Vue from "vue";
import App from "./App.vue";
import router from "../router/router";
import store from "../store/store";
import ElementUI from "element-ui";
import VueLazyload from 'vue-lazyload';
import "element-ui/lib/theme-chalk/index.css";
import '../src/assets/css/iconfont.css';
import VueQuillEditor from 'vue-quill-editor';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import './assets/css/mian.less'
/* 瀑布流插件 */
import waterfall from 'vue-waterfall2'
Vue.use(waterfall)
Vue.use(VueQuillEditor);
/* 图片预览插件  */
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
let options = {
  fullscreenEl: false
};
Vue.use(preview, options)
Vue.use(preview)
/*  */
Vue.use(ElementUI);
Vue.config.productionTip = false;

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '/default/img/loadingfail.png',
  loading: '/default/img/loadingimg.png',
  attempt: 1
})
//时间过滤器
Vue.filter('dateChange', function (timespan) {
  var timespan_bzsj = new Date(parseInt(timespan)); 

  var year = timespan_bzsj.getFullYear();
  var month = timespan_bzsj.getMonth() + 1;
  var day = timespan_bzsj.getDate();
  var hour = timespan_bzsj.getHours();
  //var minute = timespan_bzsj.getMinutes();
  var minute = (timespan_bzsj.getMinutes() < 10 ? '0'+timespan_bzsj.getMinutes() : timespan_bzsj.getMinutes()) + ':';
  var second = timespan_bzsj.getSeconds();
  
  var now_new = (new Date()).valueOf();  
  var now_new_bzsj = new Date(now_new)
  var milliseconds = 0;
  var timeSpanStr;
  /* console.log(year,'year')
  console.log(timespan_bzsj)
  console.log(now_new)
  console.log(now_new_bzsj) */
  milliseconds = parseInt(now_new) - parseInt(timespan);
  //console.log(milliseconds)
  /* console.log(timespan)
  console.log(now_new)
  console.log(milliseconds) */
  if (milliseconds <= 1000 * 60 * 1) {
    timeSpanStr = '刚刚';
  }
  else if (1000 * 60 * 1 < milliseconds && milliseconds <= 1000 * 60 * 60) {
    timeSpanStr = Math.round((milliseconds / (1000 * 60))) + '分钟前';
  }
  else if (1000 * 60 * 60 * 1 < milliseconds && milliseconds <= 1000 * 60 * 60 * 24) {
    timeSpanStr = Math.round(milliseconds / (1000 * 60 * 60)) + '小时前';
  }
  else if (1000 * 60 * 60 * 24 < milliseconds && milliseconds <= 1000 * 60 * 60 * 24 * 15) {
    timeSpanStr = Math.round(milliseconds / (1000 * 60 * 60 * 24)) + '天前';
  }
  else if (milliseconds > 1000 * 60 * 60 * 24 * 15 && year == now_new_bzsj.getFullYear()) {
    timeSpanStr = month + '-' + day + ' ' + hour + ':' + minute;
  } else {
    timeSpanStr = year + '-' + month + '-' + day + ' ' + hour + ':' + minute;
  }
  return timeSpanStr;
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");