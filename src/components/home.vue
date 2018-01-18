<template>
  <div id="tmpl">
    <!-- 滚动条minu-ui -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in list">
        <a :href="item.linkUrl"><img :src="item.picUrl" /> </a>
      </mt-swipe-item>
    </mt-swipe>
    <!-- 九宫格 mui-->
    <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" v-for="item in listView">
          <router-link :to="item.link">
            <span class="mui-icon" :class="item.classaname"></span>
            <div class="mui-media-body">{{item.title}}</div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      list: [
        {
          linkUrl: "http://y.qq.com/m/act/sfhd/120.html?ADTAG=banner",
          picUrl:
            "http://y.gtimg.cn/music/photo_new/T003R720x288M000001N51ji4925o5.jpg",
          id: 13907
        },
        {
          linkUrl: "http://y.qq.com/w/album.html?albummid=001qaDgp1J3vYm",
          picUrl:
            "http://y.gtimg.cn/music/photo_new/T003R720x288M000002ukmJ510nDTx.jpg",
          id: 13906
        },
        {
          linkUrl: "http://y.qq.com/w/album.html?albummid=000DXw404SYlo3",
          picUrl:
            "http://y.gtimg.cn/music/photo_new/T003R720x288M000000i0tLT1WbOGY.jpg",
          id: 13118
        },
        {
          linkUrl: "http://y.qq.com/w/album.html?albummid=0022o1Wf0KBYKq",
          picUrl:
            "http://y.gtimg.cn/music/photo_new/T003R720x288M000001hQosw190axa.jpg",
          id: 13905
        },
        {
          linkUrl: "https://c.y.qq.com/r/aLnS?objuin=13&ADTAG=jiaodianbb",
          picUrl:
            "http://y.gtimg.cn/music/photo_new/T003R720x288M000002zMIA810v42P.jpg",
          id: 13861
        }
      ],
      listView: [
        {
          link: "/news/newslist",
          title: "新闻咨询",
          classaname: "mui-icon-home"
        },
        {
          link: "/photo/photolist",
          title: "图片分享",
          classaname: "mui-icon-email"
        },
        {
          link: "/goods/goodslist",
          title: "商品购买",
          classaname: "mui-icon-chatbubble"
        },
        {
          link: "/feedback",
          title: "留言反馈",
          classaname: "mui-icon-location"
        },
        {
          link: "/vide",
          title: "视频专区",
          classaname: "mui-icon-search"
        },
        {
          link: "/callme",
          title: "联系我们",
          classaname: "mui-icon-phone"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.mint-swipe {
  height: 150px;
  .mint-swipe-item {
    width: 100%;
    height: 100%;
    background: #f00;
    img {
      width: 100%;
    }
  }
}
.mui-grid-view.mui-grid-9 {
  background: #fff;
  border: 0;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: none;
}
.mui-icon-home:before,
.mui-icon-email:before,
.mui-icon-chatbubble:before,
.mui-icon-location:before,
.mui-icon-search:before,
.mui-icon-phone:before {
  background-repeat: round;
  display: block;
  width: 50px;
  height: 50px;
}
.mui-icon-home:before {
  content: "";
  background-image: url(../../static/imgs/1.png);
}
.mui-icon-email:before {
  content: "";
  background-image: url(../../static/imgs/2.png);
}
.mui-icon-chatbubble:before {
  content: "";
  background-image: url(../../static/imgs/3.png);
}
.mui-icon-location:before {
  content: "";
  background-image: url(../../static/imgs/4.png);
}
.mui-icon-search:before {
  content: "";
  background-image: url(../../static/imgs/5.png);
}
.mui-icon-phone:before {
  content: "";
  background-image: url(../../static/imgs/6.png);
}
</style>
