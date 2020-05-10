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
              path: "/home/picture/:type",
              name: "picture",
              component: () =>
              import( "../src/views/picture/picture.vue")
            },
            {
              path: "/home/picture-type",
              name: "picture-type",
              component: () =>
              import( "../src/views/picture/picture-type.vue")
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
            },
            
          ]
        },
        {
          path:"/user/:id",
          name:"user",
          /* redirect:'/home/article', */
          component: () =>
          import( "../src/views/user/usermain.vue"),
          children:[] 
        },
        {
          path:"/write/:type",
          name:"createWrite",
          component: () =>
          import("../src/views/write/writeArticles.vue"),
          children:[]
        },
        {
          path:"/setting/:id",
          name:"setting",
          component:()=>
          import("../src/views/user/setting.vue"),
          children:[
            {
              path: 'profile',
              name: 'settingProfile',
              component: () => import('../src/views/user/views/profile.vue') // 修改资料
            },
            {
              path: 'reset-password',
              name: 'settingResetPassword',
              component: () => import('../src/views/user/views/reset-password.vue') // 重置密码
            }
          ],
          redirect: { name: 'settingProfile' }
        },
        {
          path:"comment_rule",
          name:"comment_rule",
          component: () => import('../src/views/Rule/CommentRule.vue')
        },
        {
          path:"article_rule",
          name:"article_rule",
          component: () => import('../src/views/Rule/ArticleRule.vue')
        }
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
    },
    {
      path: "/findpwd",
      name: "findpwd",
      component: () =>
      import ("../src/views/login/findpwd.vue"),
    }
    
  ]
});
