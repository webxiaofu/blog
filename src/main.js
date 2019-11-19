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
Vue.use(VueQuillEditor);
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
  var dateTime = new Date(timespan);

  var year = dateTime.getFullYear();
  var month = dateTime.getMonth() + 1;
  var day = dateTime.getDate();
  var hour = dateTime.getHours();
  var minute = dateTime.getMinutes();
  var second = dateTime.getSeconds();
  
  var now_new = (new Date()).valueOf();  

  var milliseconds = 0;
  var timeSpanStr;

  milliseconds = parseInt(now_new) - parseInt(timespan);
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
  else if (milliseconds > 1000 * 60 * 60 * 24 * 15 && year == now.getFullYear()) {
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