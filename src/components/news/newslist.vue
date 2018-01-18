<!--  -->
<template >
    <!--1.0 template主要是放html元素的(html的页面结构)-->
    <div id="tmpl">
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in list">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" :src="item.images" /> 
                    <div class="mui-media-body">
                        <p class="mui-ellipsis">{{item.title}}</p>
                    </div>
                </a>
            </li>

        </ul>
    
    </div>
</template>

<script>
import axios from "axios";
const API_PROXY = "https://bird.ioliu.cn/v1/?url=";
export default {
  data() {
    return {
      // 新闻列表
      list: []
    };
  },

  mounted() {
    this.getnewList();
  },

  components: {},

  computed: {},

  methods: {
    getnewList() {
        axios.get(API_PROXY +
            "https://news-at.zhihu.com/api/4/news/latest"
        ).then(
          res => {
            console.log(res);
            this.list = res.data.stories;
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
img{
    border: 1px solid #ccc;
}
</style>