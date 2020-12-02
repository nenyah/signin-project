import Vue from 'vue'
import Vuex from 'vuex'

import user from './user'
import customer from './customer'
import signin from './signin'


Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        user,
        customer,
        signin,
    },
    state: {
        isLogin: false
    },
    mutations: {
        SET_IS_LOGIN(state, b) {
            state.isLogin = b
        }
    },
    actions: {
        async initApp({dispatch, commit}) {
            console.log('enter initApp')
            try {
                // 1. 用户登录
                await dispatch('user/login')
                // 2. 获取定位
                await dispatch('user/getLocation')
                // 3. 获取签到记录
                await dispatch('signin/getSigninRecordToday')
                // 4. 更新时间
                commit('user/updateCtime')
            } catch (e) {
                console.log('登录失败', e)
            }
        }
    }
})

export default store