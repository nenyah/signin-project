import {Module} from 'vuex'
import {IUserBrief, IUserDetail} from '@/common/interface'
import {User} from '@/model/user'
import api from '@/api'
import {token} from '@/utils/token'
import moment, {Moment} from 'moment'
// import isEmpty from 'lodash/isEmpty'

const SET_SYNOPSIS = 'SET_SYNOPSIS'
const SET_LOCATION = 'SET_LOCATION'

interface State {
    info: IUserDetail & IUserBrief
    location: LocationResponse
    ctime: Moment
}

export interface LocationResponse {
    accuracy?: number
    address?: string
    city?: string
    errMsg?: string
    latitude?: number
    longitude?: number
    province?: string
    name?: string
}

function welcome(name: string) {
    let routes = getCurrentPages() // 获取当前打开过的页面路由数组
    let curRoute = routes[routes.length - 1].route // 获取当前页面路由，也就是最后一个打开的页面路由
    console.log('curRoute:::', curRoute)
    if (!curRoute?.includes('index') || !name || name.length < 1) {
        return
    }
    let welcome = ''
    let time = new Date().getHours()
    if (time <= 11) welcome = '上午好'
    else if (time > 11 && time <= 13) welcome = '中午好'
    else if (time > 13 && time <= 17) welcome = '下午好'
    else if (time > 17) welcome = '晚上好'
    uni.showToast({
        title: `亲爱的${name}，${welcome}`,
    })
}

const init: Module<State, any> = {
    namespaced: true,
    state: {
        info: new User(),
        location: {} as LocationResponse,
        ctime: moment(),
    },
    mutations: {
        updateCtime(state) {
            state.ctime = moment()
        },
        [SET_SYNOPSIS](state, o) {
            state.info = new User(o)
        },
        [SET_LOCATION](state, o) {
            state.location = o
        },
    },
    getters: {
        address: (state): string => {
            const {province, address} = state.location
            return province != undefined ? province + address : ''
        },
    },
    actions: {
        login: ({state, commit}) => {
            return new Promise((resolve, reject) => {
                uni.login({
                    success: async (res) => {
                        if (!res.authCode) {
                            uni.showToast({title: '登录失败'})
                            return
                        }
                        // 认证成功
                        const {user, token: tokenmsg} = await api.user.ddLogin({
                            authCode: res.authCode,
                        })
                        if (tokenmsg == null) {
                            uni.showToast({title: '登录失败'})
                            return
                        }
                        token.set(tokenmsg)
                        commit('SET_IS_LOGIN', true, {root: true})
                        commit(SET_SYNOPSIS, user)
                        if (user && user.userName) {
                            welcome(user.userName)
                        }
                        resolve(res)
                    },
                    fail: err => {
                        uni.showToast({title: JSON.stringify(err)})
                    }
                })
            })
        },
        getLocation: async ({state, commit}) => {
            const [err, res]: any = await uni.getLocation({})
            if (!!err) {
                uni.showModal({
                    title: '钉钉无法获取你的定位',
                    content: JSON.stringify(err.errMsg),
                    cancelText: `不签到`,
                    confirmText: `去设置`
                })
                return
            }
            commit(SET_LOCATION, res)
        },
    },
}
export default init
