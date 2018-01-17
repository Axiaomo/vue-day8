<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <router-link to="/">返回主页</router-link>
      <router-link to="/login">登陆组件</router-link>
      <router-link to="/register">注册组件</router-link>
      <mt-button type="primary" size="large"  @click="tip">primary</mt-button>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
  name: "App",
  methods:{
    change(){
      alert("你好")
    },
    tip(){
      Toast('你好');
    }
  }
};
</script>

<style>

</style>
