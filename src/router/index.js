// 1.0导入vue核心包
import Vue from 'vue'
// 2.0将vue-router集成到这个项目来
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from './../components/account/login.vue'
import Register from './../components/account/Register.vue'
// 将vue-router对象绑定到vue对象上
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
