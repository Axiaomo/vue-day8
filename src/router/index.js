// 1.0导入vue核心包
import Vue from 'vue'
// 2.0将vue-router集成到这个项目来
import Router from 'vue-router'
import home from '@/components/home.vue'
import shopcar from './../components/shopcar/car.vue'
import Register from './../components/account/Register.vue'
import Newslist from './../components/news/newslist.vue'
import NewsInfo from './../components/news/newsinfo.vue'
import Photolist from './../components/photo/photolist.vue'
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
      // 首页
      path: '/home',
      name: 'home',
      component: home
    }, {
      // 购物车
      path: '/shopcar',
      name: 'shopcar',
      component: shopcar
    }, {
      path: '/register',
      name: 'register',
      component: Register
    }, {
      path: '/photo/photolist',
      name: 'photolist',
      component: Photolist
    }, {
      // 新闻资讯
      path: '/news/newslist',
      name: 'newslist',
      component: Newslist
    }, {
      // 新闻资讯详情页
      path: '/news/:id',
      name: 'Newsinfo',
      component: NewsInfo
    }
  ]
})
