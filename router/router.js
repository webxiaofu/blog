import Vue from "vue";
import Router from "vue-router";

import main from '../src/views/main'
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect:'/home',
      name: "main",
      component: main,
      children:[
        {
          path:"/home",
          name:"home",
          redirect:'/home/article',
          component: () =>
          import( "../src/views/home/home.vue"),
          children:[
            {
              path: "/home/article",
              name: "article",
              component: () =>
              import( "../src/views/article/article.vue")
              
            },
            {
              path: "/home/picture",
              name: "picture",
              component: () =>
              import( "../src/views/picture/picture.vue")
            },
            {
              path: "/home/music",
              name: "music",
              component: () =>
              import( "../src/views/music/music.vue")
            },
            {
              path:"/home/article/:id",
              name:'article_info',
              component: () =>
              import("../src/views/article/article_info")
            }
          ]
        },
        
      ]
    },
    {
      path: "/login",
      name: "login",
      component:() =>
      import( "../src/views/login/login.vue"),

    },
    {
      path: "/register",
      name: "register",
      component: () =>
      import ("../src/views/login/registered.vue"),
    }
    
  ]
});
