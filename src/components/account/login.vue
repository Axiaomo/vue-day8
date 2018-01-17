<!--  -->
<template>
  <!--1.0 template主要是放html元素的(html的页面结构)-->
  <div>
    <h1>登陆组件</h1>
    <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-home"></span>
            <div class="mui-media-body">Home</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-email">
              <span class="mui-badge">5</span>
            </span>
            <div class="mui-media-body">Email</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-chatbubble"></span>
            <div class="mui-media-body">Chat</div>
          </a>
        </li>
        <!-- <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">location</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">Search</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">Phone</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-gear"></span>
		                    <div class="mui-media-body">Setting</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-info"></span>
		                    <div class="mui-media-body">about</div></a></li>
		           <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-more"></span>
		                    <div class="mui-media-body">more</div></a></li> -->
      </ul>
    </div>
  </div>
</template>

<script>
//负责到处.vue这个组件对象(它本质上是一个vue对象，
//所以vue中该定义的元素都可以使用)
export default {
  data() {
    return {};
  },

  mounted() {},

  components: {},

  computed: {},

  methods: {}
};
</script>
<style lang='scss' scoped>
/*当前页面的css样式写到这里，其中scoped表示这个里面写的scss*/
/*代码只是在当前页面中有效，不会影响到其他组件页面*/
</style>