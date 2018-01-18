// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 注册mint-ui
import MintUI from 'mint-ui'
// 导入mint-ui的css文件 css文件没有导出对象
import 'mint-ui/lib/style.css'
// 导入mui的css文件 css文件没有导出对象
import './../static/mui/css/mui.css';
import './../static/css/site.scss';
// 导入vue-resource,自动在vue对象实例上注入一个$http对象就可以使用axios方法
// import vueResource from 'vue-resource'
// Vue.use(vueResource)

// 在vue中使用mint-ui
Vue.use(MintUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
