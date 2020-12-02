import {Module} from 'vuex'
import api from '@/api'
import {ISignHistory} from '@/common/interface'


interface State {
    signinRecordToday: ISignHistory[]
}


const init: Module<State, any> = {
    namespaced: true,
    state: {
        signinRecordToday: [] as ISignHistory[]
    },
    mutations: {
        SET_SIGNINRECORDTODAY(state, o) {
            console.log('SET_SIGNINRECORDTODAY:::', o)
            state.signinRecordToday = o
        }
    },
    getters: {},
    actions: {
        async getSigninRecordToday({state, commit}) {
            try {
                const res = await api.signin.getSignRecord()
                console.log('getSigninRecordToday:::', res)
                const signinRecord = res.data.length > 0 ? res.data[0] : []
                commit('SET_SIGNINRECORDTODAY', signinRecord)
            } catch (e) {
                console.log('获取当天签到记录失败', e)
            }
        }
    }
}
export default init
