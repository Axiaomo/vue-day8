<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- 使用mui九宫格样式 -->
    <div class="mui-content">
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="http://img.cdn.qiniu.dcloud.net.cn/shuijiao.jpg">
          <div class="mui-media-body">
            幸福
            <p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="http://img.cdn.qiniu.dcloud.net.cn/muwu.jpg">
          <div class="mui-media-body">
            木屋
            <p class='mui-ellipsis'>想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="http://img.cdn.qiniu.dcloud.net.cn/cbd.jpg">
          <div class="mui-media-body">
            CBD
            <p class='mui-ellipsis'>烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
          </div>
        </a>
      </li>

    </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
