<template>
  <div id="app">
    <!-- 1.0 利用mint-ui中的header组件实现整个系统的头部 -->
    <mt-header fixed title="传智播客.黑马程序员vue商城系统"></mt-header>
    <!-- 2.0 利用vue-router的 router-view进行占位-->
    <router-view></router-view>
    <!-- 3.0 利用mui中的tabbar组件实现系统的底部-->
    	<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/tabbar-with-chat">
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-contact">
          <span class="mui-badge">0</span>
        </span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
  </div>
</template>

<script>
</script>

<style>

</style>
