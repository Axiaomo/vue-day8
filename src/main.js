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



// axios
import axios from 'axios';
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);

// 在vue中使用mint-ui
Vue.use(MintUI)
Vue.config.productionTip = false
// 
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
