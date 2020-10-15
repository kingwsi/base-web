<template>
  <div>
    <van-loading v-if="loadding"/>
    userInfo <br/> 
    {{ userInfo }}<br/>
    <van-button type="warning" @click="handleLogout">登出</van-button>
  </div>
</template>
<script>
export default {
  name: 'Account',
  data() {
    return {
      userInfo: {},
      loadding: false
    }
  },
  methods: {
    initUserInfo() {
      console.log('init user info')
    },
    handleLogout() {
      console.log('logout..')
      this.$store.dispatch('Logout').then(() => {
            this.$router.push({ path: '/login' })
          })
    }
  },
  mounted () {
    this.loadding = true
    setTimeout(() => {
      this.userInfo = this.$store.getters.userInfo
      this.loadding = false
    }, 1500)
  }
}
</script>