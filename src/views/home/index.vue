<template>
  <div>
    <form action="/">
      <van-search
        v-model="swipeValue"
        show-action
        placeholder="请输入搜索关键词"
        @search="searchHandler"
      />
    </form>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <van-grid :gutter="10" square >
      <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="文字" />
    </van-grid>
    <van-grid :gutter="20" :column-num="2">
      <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="文字" />
    </van-grid>
  </div>
</template>
<script>
export default {
    name: 'Home',
    data() {
      return {
        swipeValue: null
      }
    },
    methods: {
      searchHandler(){
        console.log('checked search')
      }
    }
}
</script>
<style lang="less" scoped>
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 260px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>