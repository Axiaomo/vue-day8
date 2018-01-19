<!--  -->
<template>
    <!--1.0 template主要是放html元素的(html的页面结构)-->
    <div id="tmpl">
        <div class="title">
            <h4>
                <img :src="info.image" />
                <p>{{info.title}}</p>
            </h4>
        </div>
        <div id="content" class="newinfo" v-html="info.body">

        </div>

    </div>
</template>

<script>

import axios from "axios";
import common from './../../kits/common.js';
const API_PROXY = "https://bird.ioliu.cn/v1/?url=";
//负责到处.vue这个组件对象(它本质上是一个vue对象，
//所以vue中该定义的元素都可以使用)
export default {
  data() {
    return {
      id: 0, //传入id值
      //   info: {
      //     // title: "纸壳这么廉价的东西，也能被他们拿来做这么酷的事，服了",
      //     // image: "https://pic2.zhimg.com/v2-f9994ddcf6b8847774120a0e32134f01.jpg",
      //     // body: "111"
      //   }
      info: {}
    };
  },

  mounted() {
    this.getid();
    this.getinfo();
  },

  components: {},

  computed: {},

  methods: {
    //   获取url传入的id参数值，赋值给data中的id属性
    getid() {
      this.id = this.$route.params.id;
    },
    // 请求服务器获取到这个id对应的详情数据对象
    getinfo() {
      axios
        .get(API_PROXY + common.apidomain+"/api/4/news/" + this.id)
        .then(res => {
          console.log(res.data);
          this.info = res.data;
        }),
        error => {
          console.log(error);
        };
    }
  }
};
</script>
<style lang='scss'>
@import './../../../static/css/NewsInfo.min.css';
.title {
  height: 200px;
  overflow: hidden;
  position: relative;
  h4 {
    p {
      color: #333;
      position: absolute;
      top: 90px;
      padding: 30px 20px;
      line-height: 25px;
      font-size: 22px;
      font-weight: normal;
    }
    img {
      position: absolute;
      bottom: -75px;
      width: 100%;
    }
  }
}
.title,
#content {
  padding: 10px;
}
</style>