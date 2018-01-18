<template>
  <div id="tmpl">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in list">
        <a :href="item.linkUrl"><img :src="item.picUrl" /> </a>
      </mt-swipe-item>

    </mt-swipe>
  </div>
</template>

<script>
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
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.mint-swipe {
  height: 300px;
  .mint-swipe-item {
    width: 100%;
    height: 100%;
    background: #f00;
    img {
      width: 100%;
    }
  }
}
</style>
