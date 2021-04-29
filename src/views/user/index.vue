<template>
  <div class="user">
    <div class="top">
      <div class="left">
        <img
          src="https://img.yzcdn.cn/vant/logo.png"
          alt="photo">
      </div>
      <div class="right">
        <h2>{{ userInfo.nickName }}</h2>
        <p>{{ userInfo.mobile }}</p>
      </div>
    </div>

    <div class="cell-group-bg">
      <van-cell-group>
        <van-cell is-link icon="shop-o">
          <template #title>
            <span class="custom-title">单元格</span>
            <van-tag type="danger">new</van-tag>
          </template>
        </van-cell>
        <van-cell title="单元格" icon="shop-o">
          <template #right-icon>
            <van-icon name="search" class="search-icon" />
          </template>
        </van-cell>
      </van-cell-group>
      <van-cell is-link icon="shop-o">
        <template #title>
          <span class="custom-title">单元格</span>
        </template>
      </van-cell>
      <van-cell is-link icon="shop-o">
        <template #title>
          <span class="custom-title">单元格</span>
        </template>
      </van-cell>
      <van-cell icon="shop-o" @click="handleLogout">
        <template #title>
          <span class="custom-title">登出</span>
        </template>
      </van-cell>
    </div>

  </div>
</template>

<script>
import { useStore } from 'vuex'
import { ref, reactive,toRefs } from 'vue'
import { useRouter } from 'vue-router'
export default {
  setup(){
    const store = useStore()

    const router = useRouter()

    const userInfo = store.getters.userInfo

    const handleLogout = ()=> {
      console.log('logout..')
      store.dispatch('Logout').then(() => {
        router.push({ path: '/login' })
      })
    }

    return{
      userInfo,
      handleLogout
    }
  }
}
</script>

<style lang="less" scoped>
.user {
  position: relative;
  .top {
    height: 117px;
    display: flex;
    overflow: hidden;
    background-size: 100% 100%;
    background: #C9CCD3;
    background-image: linear-gradient(-180deg, rgba(255,255,255,0.50) 0%, rgba(0,0,0,0.50) 100%);
    background-blend-mode: lighten;
    .left {
      width: 58px;
      height: 58px;
      margin-left: 12px;
      margin-top: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 3rem;
        height: 3rem;
      }
    }
    .right {
      height: 58px;
      margin-top: 30px;
      margin-left: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      h2 {
        margin: 0;
        font-size: 1.5rem;
        font-family: PingFang-SC-Medium, PingFang-SC;
        font-weight: 500;
        line-height: 3rem;
        color: rgba(255, 255, 255, 0.9);
      }
      p {
        margin: 0;
        font-size: 14px;
        font-family: PingFang-SC-Medium, PingFang-SC;
        font-weight: 500;
        color: rgba(255, 255, 255, 0.9);
      }
    }
  }
  .cell-group-bg{
      border-radius: 24px;
    .custom-title{
      margin-right: 10px;
    }
  }
}
</style>