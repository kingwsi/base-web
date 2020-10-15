<template>
  <div id="app">
    <meta content="yes" name="apple-mobile-web-app-capable">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <router-view/>
    <van-tabbar route>
      <van-tabbar-item replace to="/home" icon="home-o">
        主页
      </van-tabbar-item>
      <van-tabbar-item replace to="/activity" icon="fire">
        活动
      </van-tabbar-item>
      <van-tabbar-item replace to="/user" icon="friends">
        个人
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import {Tabbar, TabbarItem} from 'vant'
export default {
  name: 'App',
  components: {
        [Tabbar.name]: Tabbar,
        [TabbarItem.name]: TabbarItem
    }
}
</script>

<style scoped>
body {
  font-size: 16px;
  background-color: #f8f8f8;
  -webkit-font-smoothing: antialiased;
}
</style>