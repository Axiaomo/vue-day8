<!-- 评论组件 -->
<template>
  <div id="postcomment">
    <!-- 1.0实现提交评论数据到服务的静态结构 -->
    <div id="postcomment">

      <h3>提交评论</h3>
      <hr>
      <textarea placeholder="请输入您要评论的内容" v-model="postconent"></textarea>
      <mt-button type="primary" size="large" @click="postcomment()">发表</mt-button>
    </div>
    <!-- 2.0评论数据列表 -->
    <h3>评论列表</h3>
    <hr>
    <div v-for="(item,index) in list" :key="index">
      <div class="title">
        <span>第{{index+1}}楼:</span>
        <span>用户:{{item.author}}</span>
        <span>发表时间:{{item.time*1000 | changetime}}</span>
      </div>
      <ul class="mui-table-view">
        <li class="mui-table-view-cell">{{item.content}}</li>
      </ul>
    </div>
    <!-- 3.0 获取更多按钮 -->
    <mt-button type="danger" size="large" plain @click="getmore">加载更多</mt-button>
  </div>
</template>

<script>
const API_PROXY = "https://bird.ioliu.cn/v1/?url=";
import common from "../../kits/common";
import { Toast } from "mint-ui";
export default {
  props: ["newsid"],
  data() {
    return {
      pageindex: 1,
      postconent: "", //用来自动获取用户填写的评论内容
      list: [] //评论获取
    };
  },

  mounted() {
    this.getlist(this.pageindex);
  },

  components: {},

  computed: {},
  filters: {
    changetime: function(time) {
      function add0(m) {
        return m < 10 ? "0" + m : m;
      }
      var timea = new Date(parseInt(time));
      var y = timea.getFullYear();
      var m = timea.getMonth() + 1;
      var d = timea.getDate();

      return y + "-" + add0(m) + "-" + add0(d);
    }
  },
  methods: {
    //   评论数据的提交
    postcomment() {
      //   判断是否填入内容
      if (this.postconent.trim().length <= 0) {
        Toast("请输入您要评论的内容");
        return;
      }
      Toast(this.postconent + "提交成功");
      // 提交内容后清空内容
      this.postconent = "";
    },
    // 获取数据pageindex当前获取的是那一页的数据，默认值为1
    getlist() {
      this.axios
        .get(
          API_PROXY +
            common.apidomain +
            "/api/4/story/" +
            this.newsid +
            "/short-comments?pageindex=" + this.pageindex
        )
        .then(res => {
          this.list =this.list.concat(res.data.comments);
        });
    },
    getmore() {
      // 1.0 this.pageindex增加1
      this.pageindex++;
      // 2.0 获取当前this.pageindex值对应的分页数据
      this.getlist(this.pageindex);
    }
  }
};
</script>
<style lang='scss' scoped>
.title {
  height: 30px;
  background: #f1f1f1;
  padding: 0 5px;
  line-height: 30px;
}
#postcomment {
  padding: 5px;
}
.title {
  margin: 20px 0px;
  color: #6d6d72;
  font-size: 15px;
}
</style>