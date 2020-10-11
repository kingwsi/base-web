<template>
  <div>
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
export default {
  name: 'Nav',
}
</script>

<style scoped>

</style>