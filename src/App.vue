<template>
  <div id="app">
    <router-view>
    </router-view>
    <van-tabbar route v-if="$route.meta.showBar">
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