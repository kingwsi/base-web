import storage from 'store'
import { login, logout } from '@/api/login'
import { GetUserInfo } from '@/api/user'
import { ACCESS_TOKEN } from '@/store/mutation-types'

export const user = {
  state: {
    token: '',
    name: '',
    nickName: '',
    avatar: '',
    userInfo: {}
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, { name, nickName }) => {
      state.name = name
      state.nickName = nickName
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_INFO: (state, userInfo) => {
      state.userInfo = userInfo
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        console.log(userInfo)
        setTimeout(() => {
          console.log('login successfully!')
          storage.set(ACCESS_TOKEN, 'token-6666666', 7 * 24 * 60 * 60 * 1000)
          commit('SET_TOKEN', '6666666')
          resolve()
        }, 1000)
        // login(userInfo).then(response => {
        //   set(ACCESS_TOKEN, response.data, 7 * 24 * 60 * 60 * 1000)
        //   commit('SET_TOKEN', response.data)
        //   resolve()
        // }).catch(error => {
        //   reject(error)
        // })
      })
    },

    // 获取用户信息
    GetInfo({ commit }) {
      return new Promise((resolve, reject) => {
        GetUserInfo().then(response => {
          const { data } = response
          if (!data) {
            reject(new Error('getInfo: roles must be a non-null array !'))
          }
          const { username, avatar, nickName } = data
          console.log('存储用户信息', data)
          commit('SET_INFO', data)
          commit('SET_NAME', { name: username, nickName: nickName })
          commit('SET_AVATAR', avatar)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 登出
    Logout({ commit, state }) {
      return new Promise((resolve) => {
        storage.remove(ACCESS_TOKEN)
        commit('SET_TOKEN', '')
        commit('SET_INFO', '')
        commit('SET_NAME', {})
        commit('SET_AVATAR', '')
        resolve()
      })
    }

  }
}