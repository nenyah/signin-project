import {Module} from 'vuex'
import api from '@/api'
import {ISignHistory, IUserDetail} from '@/common/interface'
import moment from 'moment/moment'
import {differenceBy} from 'lodash'

interface State {
    signinRecordToday: ISignHistory[]
    signinRecord: ISignHistory[]
    unSigninRecord: string[]
    tabs: number[]
    selectedUsers: string[]
    selectedDate: string
}


const init: Module<State, any> = {
    namespaced: true,
    state: {
        signinRecordToday: [],
        signinRecord: [],
        unSigninRecord: [],
        tabs: [],
        selectedUsers: [],
        selectedDate: moment().format('YYYY-MM-DD'),
    },
    mutations: {
        SET_SIGNINRECORDTODAY(state, o) {
            console.log('SET_SIGNINRECORDTODAY:::', o)
            state.signinRecordToday = o
        },
        SET_SIGNINRECORD(state, o) {
            console.log('SET_SIGNINRECORD:::', o)
            state.signinRecord = o
        },
        SET_UNSIGNINRECORD(state, o) {
            console.log('SET_UNSIGNINRECORD:::', o)
            state.unSigninRecord = o
        },
        changeTabs(state, o) {
            console.log('changeTabs:::', o)
            state.tabs = o
        },
        updateUsers(state, o) {
            console.log('updateUsers:::', o)
            state.selectedUsers = o
        },
        updateDate(state, o) {
            console.log('updateDate:::', o)
            state.selectedDate = o
        },

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
        },
        async getSigninRecord({state, commit, rootState}) {
            const {selectedUsers, selectedDate} = state
            console.log('调用getSigninRecord:::', selectedUsers, selectedDate)
            try {
                let res
                if (state.selectedUsers.length > 0) {
                    res = await api.user.infoByCode({userJobNumbers: selectedUsers})
                } else {
                    res = rootState.dept.users as IUserDetail[]
                }
                if (res.length < 1) {
                    console.error('没有用户工号')
                    return
                }
                const userIds = res.map(item => item.id) as number[]
                console.log('jobnumber换用户信息:::', res)
                const signRecord = await api.signin.getSignRecord({
                    userIds,
                    startDate: selectedDate,
                    endDate: selectedDate
                })
                console.log('选定用户签到信息:::', signRecord)
                const signNum = signRecord.data.length > 0 ? signRecord.data.length : 0
                const unSignNum = userIds.length - signNum
                commit('changeTabs', [signNum, unSignNum])
                const signinRecord = signRecord.data.length > 0 ? signRecord.data.map(item => {
                    if (item.userSignVOList.length > 0) {
                        item.userSignVOList[0].count = item.userSignCount
                        return item.userSignVOList[0]
                    }
                    return []
                }) : []
                const unSigned = differenceBy(res.map(item => {
                    item.userId = item.id
                    return item
                }), signinRecord, 'userId')
                console.log('signinRecord:::', signinRecord)
                console.log('unsigninRecord:::', unSigned)
                commit('SET_SIGNINRECORD', signinRecord)
                commit('SET_UNSIGNINRECORD', unSigned)
            } catch (e) {
                console.error('获取签到信息出错', e)
            }
        }
    }
}
export default init
