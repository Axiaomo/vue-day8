// 1.0导入vue核心包
import Vue from 'vue'
// 2.0将vue-router集成到这个项目来
import Router from 'vue-router'
import home from '@/components/home.vue'
import shopcar from './../components/shopcar/car.vue'
import Register from './../components/account/Register.vue'
// 将vue-router对象绑定到vue对象上
Vue.use(Router)

export default new Router({
  linkActiveClass: 'mui-active',
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: 'home'
    }, {
      path: '/home',
      name: 'home',
      component: home
    }, {
      path: '/shopcar',
      name: 'shopcar',
      component: shopcar
    }, {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
