// https://github.com/vueComponent/ant-design-vue-pro
function isIE () {
    const bw = window.navigator.userAgent
    const compare = (s) => bw.indexOf(s) >= 0
    const ie11 = (() => 'ActiveXObject' in window)()
    return compare('MSIE') || ie11
}
// 判断环境不是 prod 或者 preview 是 true 时，加载 mock 服务
if (process.env.NODE_ENV !== 'production') {
    if (isIE()) {
      console.error('mock->不支持当前浏览器')
    }
    // 使用同步加载依赖
    // 防止 vuex 中的 GetInfo 早于 mock 运行，导致无法 mock 请求返回结果
    const Mock = require('mockjs')
    require('./services/user')
    Mock.setup({
      timeout: 1000 // setter delay time
    })
  }