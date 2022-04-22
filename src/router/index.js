import Vue from 'vue'
import VueRouter from 'vue-router'
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home/Home.vue')
  },
  {
    path: '/category',
    name: 'category',
    component: () => import('../views/category/Category.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/cart/Cart.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/profile/Profile.vue'),
  },
  {
    path: '/detail/:iid',
    name: 'detail',
    component: () => import('../views/detail/Detail.vue'),
    //跳转路由隐藏底部导航栏
    meta: {
      isHide: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router