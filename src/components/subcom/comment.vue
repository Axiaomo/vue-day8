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
        <div v-for="(item,index) in list" :key="item.id">
            <div class="title">
                <span>第{{index+1}}楼:</span>
                <span>用户:{{item.author}}</span>
                <span>发表时间:{{item.time*1000 | changetime}}</span>
            </div>
            <ul class="mui-table-view">
                <li class="mui-table-view-cell">{{item.content}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from "axios";
const API_PROXY = "https://bird.ioliu.cn/v1/?url=";
import common from "../../kits/common";
import { Toast } from "mint-ui";
export default {
  props: ["id"],
  data() {
    return {
      postconent: "", //用来自动获取用户填写的评论内容
      list: [
        {
          author: "朔方之月",
          content:
            "18岁时觉得30岁的人老得半截进了土，现在37了，反而觉得越活越通透，心态越来越淡定，越明白什么重要什么不重要。目前正在努力在职业生涯上一个台阶，照顾好家人和孩子，生活充满希望",
          avatar: "http://pic1.zhimg.com/da8e974dc_im.jpg",
          time: 1516346925,
          id: 31015285,
          likes: 2
        },
        {
          author: "王二锤",
          content: "26岁症状全有怎么办",
          avatar:
            "http://pic1.zhimg.com/v2-4a72e1ff20f083057d61dc3338ae1d94_im.jpg",
          time: 1516346241,
          id: 31015241,
          likes: 4
        },
        {
          author: "蒋龙峰",
          content:
            "焦虑症大家或多或少都有，可能是亲情，爱情，友情，权利，金钱等。刚刚工作的时候的领导送了我三句话，当我茫然失措的时候我就问自己，现在送给你们：你有什么？你想得到什么？你能放弃什么？",
          avatar:
            "http://pic4.zhimg.com/5846d0a1d77880557133cb18ab1dcc1b_im.jpg",
          time: 1516345990,
          id: 31015230,
          likes: 3
        }
      ]
    };
  },

  mounted() {
    this.getlist();
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
    // 获取数据
    getlist() {
      axios
        .get(
          API_PROXY +
            common.apidomain +
            "/api/4/story/" +
            this.id +
            "/short-comments"
        )
        .then(res => {
          console.log(this.id);
          console.log(res.data);
        });
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