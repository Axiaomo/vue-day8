<!--  -->
<template>
    <div>
        <div id="tmpl">
            <!-- 1.0 图片分类 -->
            <div id="cate">
                <ul v-bind="{style:'width:' +ulWidth + 'px'}">
                    <li v-for="(item,index) in cats" :key="index" @click="getImg(item.id)">{{item.name}}</li>
                </ul>
            </div>
            <!-- 2.0图片列表 -->
            <div id="imglist">
                <ul>
                    <li v-for="(item,index) in list" :key="index" >
                        <div v-if="item.images !== undefined">
                            <img v-lazy="item.images[0]">
                            <div id="desc" v-text="item.title">
                        </div>
                        
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import common from "./../../kits/common.js";
const API_PROXY = "https://bird.ioliu.cn/v1/?url=";
export default {
  data() {
    return {
      ulWidth: 375,
      cats: [],
      list: [] //存储图片的数组
    };
  },

  mounted() {
    this.gettitle();
    this.getImg();
  },

  components: {},

  computed: {},

  methods: {
    gettitle() {
      this.axios
        .get(API_PROXY + common.apidomain + "/api/4/themes")
        .then(res => {
          this.cats = res.data.others;
          //   实现当前分类数据url所在的总宽度=分类个数*每个分类数据的宽度
          var w = 75;
          var count = res.data.others.length + 1;
          this.ulWidth = w * count;
        });
    },
    // 获取图片
    getImg(Imgid) {
      Imgid = Imgid || 13;
      this.axios
        .get(API_PROXY + common.apidomain + "/api/4/theme/" + Imgid)
        .then(res => {
          this.list = res.data.stories;
          console.log(res.data);
        });
    }
  }
};
</script>
<style lang='scss' scoped>
ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}
#cate {
  widows: 375px;
  max-width: 375px;
  overflow-x: auto;
  ul {
    margin: 0;
    height: 30px;
    line-height: 30px;

    li {
      display: inline-block;
      float: left;
      padding: 0 5px;
      color: #0094ff;
      font-size: 14px;
      padding-bottom: 5px;
      cursor: pointer;
    }
  }
}
#imglist {
  li {
    position: relative;
    img {
      width: 100%;
      height: 300px;
      display: block;
    }
    image[lazy="loading"] {
      width: 40px;
      height: 300px;
      margin: auto;
    }
  }

  #desc {
    position: absolute;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    color: #fff;
    padding-left: 5px;
  }
}
</style>