import axios from 'axios'
import store from '@/store'
import storage from 'store'
import { Toast } from 'vant'
import { VueAxios } from './axios'
import { ACCESS_TOKEN } from '@/store/mutation-types'

// 创建 axios 实例
const request = axios.create({
  // API 请求的默认前缀
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 6000 // 请求超时时间
})

// 异常拦截处理器
const errorHandler = (error) => {
  if (error.response) {
    const data = error.response.data
    if (error.response.status === 500) {
      Toast('服务器错误')
    } else if (error.response.status === 404) {
      Toast('404')
    } else if ((error.response.status === 403)) {
      Toast('Forbidden')
    } else if (error.response.status === 401 && !(data.result && data.result.isLogin)) {
      Toast('Authorization verification failed')
      // 从 localstorage 获取 token
      const token = storage.get(ACCESS_TOKEN)
      if (token) {
        store.dispatch('Logout').then(() => {
          setTimeout(() => {
            window.location.reload()
          }, 1500)
        })
      }
    } else {
      Toast('请求错误')
    }
  }
  return Promise.reject(error)
}

// request interceptor
request.interceptors.request.use(config => {
  const token = storage.get(ACCESS_TOKEN)
  if (token) {
    config.headers['Authorization'] = token
  }
  return config
}, errorHandler)

// response interceptor
request.interceptors.response.use((response) => {
  const data = response.data
  // 解析自定义返回参数
  // {'code':200,'data':Object}
  if (data.code && data.code !== 200) {
    Toast(data.message || '错误')
    // return Promise.reject(new Error(data.message || 'Error'))
  }
  return data
}, errorHandler)

const installer = {
  vm: {},
  install (Vue) {
    Vue.use(VueAxios, request)
  }
}

export default request

export {
  installer as VueAxios,
  request as axios
}
