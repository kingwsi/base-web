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
        <van-button round block type="primary" :loading="loginBtnLoading" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
import { Toast } from 'vant'
import { useStore } from 'vuex'
import { ref, reactive,toRefs } from 'vue'
import { router } from '@/router'
export default {
  setup() {
    const store = useStore()
    const state = reactive({
      username:'15555555555',
      password: '123456'
    })

    const loginBtnLoading = ref(false)

    const handleSubmit = async () => {
      loginBtnLoading.value = true
      store.dispatch('Login', state).then((res) => {
        console.log(res)
        if(res.code === 200) {
          loginSuccess()
        }
        loginBtnLoading.value = false
      })
    }
    const loginSuccess = () => {
      router.push({ path: '/home' })
      Toast('login successfully')
    }
    return {
      ...toRefs(state),
      loginBtnLoading,
      handleSubmit
    }
  }
}
</script>

<style lang="less" scoped>
.login-header {
  width: 100%;
  text-align: center;
  img {
    width: 100px;
  }
}
</style>