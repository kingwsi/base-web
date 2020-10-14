<template>
  <div style="margin-top: 40%">
    <!-- <div class="login-header">
      <img src="https://img.yzcdn.cn/vant/logo.png"/>
    </div> -->
    <van-form @submit="handleSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
import { Toast } from 'vant'
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      state: {
        time: 60,
        loginBtn: false,
        // login type: 0 email, 1 username, 2 telephone
        loginType: 0,
        smsSendBtn: false
      }
    }
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values)
    },
    handleSubmit(values){
      const loginParams = {}
      this.$store.dispatch('Login').then((res) => this.loginSuccess(res))
    },
    loginSuccess() {
      this.$router.push({ path: '/home' })
      console.log(Toast('login successfully'))
      
    },
    requestFailed(err) {
      console.log(Toast('request failed'))
    }
  },
}
</script>

<style lang="less" scoped>
.login-header{
  width: 100%;
  text-align: center;
  img{
    width: 100px;
  }
}
</style>