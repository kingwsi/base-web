import { createStore } from 'vuex'
import { ACCESS_TOKEN } from '@/store/mutation-types'
import user from './modules/user'
import { getters } from './getters'
import storage from 'store'

export const store = createStore({
  modules: {
    user
  },
  state: {
  },
  mutations: {
  },
  actions: {
  },
  getters
})