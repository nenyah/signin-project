import Vue from "vue"
import Vuex from "vuex"

import user from "./user"
import customer from "./customer"
import signin from "./signin"
import dept from "./dept"

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    customer,
    signin,
    dept,
  },
  state: {
    isLogin: false,
  },
  mutations: {
    SET_IS_LOGIN(state, b) {
      state.isLogin = b
    },
  },
  actions: {
    async initApp({ dispatch, commit }) {
      try {
        // 1. 获取定位
        await dispatch("user/getLocation")
        // 2. 用户登录
        await dispatch("user/login")
        // 3. 获取签到记录
        await dispatch("signin/getSigninRecordToday")
        // 4. 更新时间
        commit("user/updateCtime")
      } catch (e) {
        console.log("登录失败", e)
      }
    },
  },
})

export default store
