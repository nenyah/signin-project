import {Module} from "vuex"
import {IUserDetail} from "@/common/interface"
import {User} from "@/model/user"
import api from "@/api"
import {token} from "@/utils/token"
// import isEmpty from 'lodash/isEmpty'

const SET_SYNOPSIS = "SET_SYNOPSIS"
const SET_LOCATION = "SET_LOCATION"

interface State {
    info: IUserDetail
    location: LocationResponse
}

interface LocationResponse {
    accuracy?: number
    address?: string
    city?: string
    errMsg?: string
    latitude?: number
    longitude?: number
    province?: string
}

const init: Module<State, any> = {
    namespaced: true,
    state: {
        info: new User(),
        location: {},
    },
    mutations: {
        [SET_SYNOPSIS](state, o) {
            state.info = new User(o)
        },
        [SET_LOCATION](state, o) {
            state.location = o
        }
    },
    getters: {},
    actions: {
        login: ({state, commit}) => {
            console.log("enter login")
            return new Promise((resolve, reject) => {
                uni.login({
                    success: async res => {
                        if (!res.authCode) {
                            uni.showToast({title: "登录失败"})
                            return
                        }
                        // 认证成功
                        const {user, token: tokenmsg} = await api.user.ddLogin({authCode: res.authCode})
                        console.log("login:::", user, tokenmsg)
                        if (tokenmsg == null) {
                            uni.showToast({title: "登录失败"})
                            return
                        }
                        token.set(tokenmsg)
                        commit("SET_IS_LOGIN", true, {root: true})
                        commit(SET_SYNOPSIS, user)
                        resolve(res)
                    }
                })
            })
        },
        getLocation: async ({state, commit}) => {
            const [err, res]: any = await uni.getLocation({})
            if (!err) {
                uni.showToast({title: "获取地址错误"})
                return
            }
            commit(SET_LOCATION, res)
            console.log("res:::", res)
        }
    }
}
export default init
