<template>
  <div>
    account page
  </div>
</template>
<script>
export default {
  name: 'Account',
  created() {
    this.initUserInfo()
  },
  methods: {
    initUserInfo() {
      console.log('init user info')
      this.$router.push('/login')
    }
  }
}
</script>