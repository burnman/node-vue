import Vue from "vue"
import Router from "vue-router"
import Main from "./views/Main.vue"

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: "/login",
      name: "Login",
      component: () => import("./views/Login.vue"),
      meta: { isPublic: true }
    },
    {
      path: "/",
      name: "main",
      component: Main,
      children: [
        {
          path: "/categories/list",
          name: "CategoryList",
          component: () => import("./views/CategoryList.vue")
        },
        {
          path: "/categories/create",
          name: "CategoryCreate",
          component: () => import("./views/CategoryEdit.vue")
        },
        {
          path: "/categories/edit/:id",
          name: "CategoryEdit",
          component: () => import("./views/CategoryEdit.vue"),
          props: true
        },

        {
          path: "/articles/list",
          name: "ArticleList",
          component: () => import("./views/ArticleList.vue")
        },
        {
          path: "/articles/create",
          name: "ArticleCreate",
          component: () => import("./views/ArticleEdit.vue")
        },
        {
          path: "/articles/edit/:id",
          name: "ArticleEdit",
          component: () => import("./views/ArticleEdit.vue"),
          props: true
        },

        {
          path: "/banners/list",
          name: "BannerList",
          component: () => import("./views/BannerList.vue")
        },
        {
          path: "/banners/create",
          name: "BannerCreate",
          component: () => import("./views/BannerEdit.vue")
        },
        {
          path: "/banners/edit/:id",
          name: "BannerEdit",
          component: () => import("./views/BannerEdit.vue"),
          props: true
        },

        {
          path: "/admin_users/list",
          name: "UserList",
          component: () => import("./views/UserList.vue")
        },
        {
          path: "/admin_users/create",
          name: "UserCreate",
          component: () => import("./views/UserEdit.vue")
        },
        {
          path: "/admin_users/edit/:id",
          name: "UserEdit",
          component: () => import("./views/UserEdit.vue"),
          props: true
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (!to.meta.isPublic && !localStorage.token) {
    return next("/login")
  }
  next()
})

export default router
