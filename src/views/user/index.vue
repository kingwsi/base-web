<template>
  <div>
    <van-loading v-if="loadding"/>
    userInfo <br/> 
    {{ userInfo }}<br/>
    <van-cell-group>
      <van-cell value="内容" is-link icon="shop-o">
        <!-- 使用 title 插槽来自定义标题 -->
        <template #title>
          <span class="custom-title">单元格</span>
          <van-tag type="danger">标签</van-tag>
        </template>
      </van-cell>
      <van-cell title="单元格" icon="shop-o">
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #right-icon>
          <van-icon name="search" class="search-icon" />
        </template>
      </van-cell>
    </van-cell-group>
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
    this.userInfo = this.$store.getters.userInfo
  }
}
</script>