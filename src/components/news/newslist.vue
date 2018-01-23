<!--  -->
<template >
    <!--1.0 template主要是放html元素的(html的页面结构)-->
    <div id="tmpl">
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in list" :key="item.id">
                <router-link v-bind="{to:'/news/' + item.id}">
                    <img class="mui-media-object mui-pull-left" :src="item.images" />
                    <div class="mui-media-body">
                        <p class="mui-ellipsis">{{item.title}}</p>
                        <p class="data">发表日期:{{time}}</p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import common from "./../../kits/common.js";
const API_PROXY = "https://bird.ioliu.cn/v1/?url=";
export default {
  data() {
    return {
      // 新闻列表
      list: [],
      time: []
    };
  },

  mounted() {
    this.getnewList();
  },

  components: {},

  computed: {},

  methods: {
    getnewList() {
      this.axios.get(API_PROXY + common.apidomain + "/api/4/news/latest").then(
        res => {
          console.log(res);
          this.list = res.data.stories;
          console.log(this.time);
          this.time = res.data.date;
        },
        error => {
          console.log(error);
        }
      );
    }
  }
};
</script>
<style lang='scss' scoped>
/*当前页面的css样式写到这里，其中scoped表示这个里面写的scss*/
/*代码只是在当前页面中有效，不会影响到其他组件页面*/
img {
  border: 1px solid #ccc;
}
.data {
  color: #08e;
  margin-top: 2px;
}
</style>