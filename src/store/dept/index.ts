import {Module} from 'vuex'
import api from '@/api'
import {IDeptResponse, IUserDetail} from '@/common/interface'

interface State {
    users: IUserDetail[];
    dept: IDeptResponse[];
}

const init: Module<State, any> = {
    namespaced: true,
    state: {
        users: [] as IUserDetail[],
        dept: [] as IDeptResponse[]
    },
    mutations: {
        SET_USERS(state, o) {
            state.users = o
        },
        SET_DEPT(state, o) {
            state.dept = o
        }
    },
    getters: {},
    actions: {
        async getDeptInfo({state, commit}) {
            try {
                const deptRes = await api.dept.deptInfo()
                if (deptRes.length > 0) {
                    commit('SET_DEPT', deptRes)
                }
            } catch (e) {
                uni.showToast({title: `获取部门信息出错` + JSON.stringify(e)})
                console.error('获取部门信息出错', e)
            }
        },
        async getDeptUser({state, commit}) {
            try {
                const deptUsers = await api.user.infoByDept()
                if (deptUsers.length < 1) {
                    uni.showToast({title: `获取部门内用户信息出错`})
                    console.error('获取部门内用户信息出错')
                    return
                }
                commit('SET_USERS', deptUsers)
            } catch (e) {
                uni.showToast({title: `获取部门内用户信息出错` + JSON.stringify(e)})
                console.error('获取部门内用户信息出错', e)
            }
        }
    }
}
export default init
