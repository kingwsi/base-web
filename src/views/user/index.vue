<template>
  <div>
    <!-- <van-cell title="昵称" :value="userInfo.nickName" size="large" />
    <van-cell title="用户名" :value="userInfo.username" size="large" label="描述信息" />
    <van-cell title="手机号" :value="userInfo.mobileName" size="large" label="描述信息" /> -->
    <van-button type="warning" @click="handleLogout">登出</van-button>
  </div>
</template>
<script>
export default {
  name: 'Account',
  data() {
    return {
      userInfo: {}
    }
  },
  methods: {
    initUserInfo() {
      console.log('init user info')
    },
    handleLogout() {
      console.log('logout..')
      this.$store.dispatch('Logout').then(() => {
            this.$router.push({ name: 'login' })
          })
    }
  },
  mounted () {
    this.userInfo = this.$store.getters.userInfo
    console.log(this.userInfo)
  }
}
</script>