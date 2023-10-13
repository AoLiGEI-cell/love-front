import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";

import Start from "../views/StartView.vue";
import Home from "../views/HomeView.vue";
import User from "../views/UserView.vue";
import Photo from "../views/PhotoView.vue";
import Message from "../views/MessageView.vue";
import Fifth from "../views/5View.vue";
import Sixth from "../views/6View.vue";

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "start",
    component: Start,
    meta:{
      title: '我爱你~你爱我~',
      requireAuth: false,
    },
  },
  {
    path: "/home",
    name: "home",
    component: Home,
    meta:{
      title: 'homehome',
      requireAuth: false,
    },
      children: [
        {
          path: "/UserView",
          name: "UserView",
          component: User,
          meta: {
            title: '个人主页啦，小秘密',
            requireAuth: false,
          }
        },
        {
          path: "/PhotoView",
          name: "PhotoView",
          component: Photo,
          meta: {
            title: '照片墙啊，都是美照',
            requireAuth: false,
          }
        },
        {
          path: "/MessageView",
          name: "MessageView",
          component: Message,
          meta: {
            title: '留言区！大声说“我爱你”',
            requireAuth: false,
          }
        },
        {
          path: "/5View",
          name: "5View",
          component: Fifth,
          meta: {
            title: '还在开发',
            requireAuth: false,
          }
        },
        {
          path: "/6View",
          name: "6View",
          component: Sixth,
          meta: {
            title: '还在开发',
            requireAuth: false,
          }
        },
      ]
  },
  
  // {
  //   path: "/about",
  //   name: "about",
  //   component: () =>
  //     import("../views/AboutView.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, _from, next) => {
  let isLogin = store.getters.getUserName;
  if (to.meta.requireAuth) { // 校验路由，除了登录之外的页面都要校验
      if (isLogin != '?') { // 是否有登录过
          next();
      } else {
          alert('密码错误或未登录'); // 未登录或密码错误，跳转到login页面
          next({
              path: '/',
              query: {redirect :to.fullPath},
          })
      }
  } else { // 如果是 login 路由
      next();
  }
})
router.afterEach((to) => {
  document.title = to.meta.title;
})


export default router;
