import {Module} from 'vuex'
import api from '@/api'
import {ISignHistory, IUserDetail} from '@/common/interface'
import moment from 'moment/moment'
import {differenceBy} from 'lodash'

interface State {
    signinRecordToday: ISignHistory[]
    signinRecord: ISignHistory[]
    signinRecordMonth: ISignHistory[]
    unSigninRecord: string[]
    tabs: number[]
    selectedUsers: string[]
    selectedDate: string
    selectedMonth: string
    userIds: number[]
    userName: string
}

const init: Module<State, any> = {
    namespaced: true,
    state: {
        signinRecordToday: [],
        signinRecord: [],
        signinRecordMonth: [],
        unSigninRecord: [],
        tabs: [],
        selectedUsers: [],
        selectedDate: moment().format('YYYY-MM-DD'),
        selectedMonth: moment().format('YYYY-MM'),
        userIds: [],
        userName: '',
    },
    mutations: {
        SET_SIGNINRECORDTODAY(state, o) {
            state.signinRecordToday = o
        },
        SET_SIGNINRECORD(state, o) {
            state.signinRecord = o
        },
        SET_UNSIGNINRECORD(state, o) {
            state.unSigninRecord = o
        },
        SET_SIGNINRECORDMONTH(state, o) {
            state.signinRecordMonth = o
        },
        SET_USERNAME(state, o) {
            state.userName = o
        },
        changeTabs(state, o) {
            state.tabs = o
        },
        updateUsers(state, o) {
            state.selectedUsers = o
        },
        updateDate(state, o) {
            state.selectedDate = o
        },
        updateMonth(state, o) {
            state.selectedMonth = o
        },
        changeUserIds(state, o) {
            state.userIds = o
        },
    },
    getters: {},
    actions: {
        async getSigninRecordToday({state, commit}) {
            try {
                const res = await api.signin.getSignRecord()
                const signinRecord = res.userSignVOList.length > 0 ? res : []
                commit('SET_SIGNINRECORDTODAY', signinRecord)
            } catch (e) {
                console.log('获取当天签到记录失败', e)
            }
        },
        async getSigninRecord({state, commit, rootState}) {
            const {selectedUsers, selectedDate, userIds} = state
            try {
                let res
                if (state.selectedUsers.length > 0) {
                    res = await api.user.infoByCode({userJobNumbers: selectedUsers})
                } else {
                    res = rootState.dept.users as IUserDetail[]
                }
                if (res.length < 1) {
                    console.log('没有用户工号')
                    return
                }
                const userIds = res.map((item) => item.id) as number[]

                const signRecord = await api.signin.getSignRecordMulti({
                    userIds,
                    startDate: selectedDate,
                    endDate: selectedDate,
                })
                const signNum = signRecord.signCount || 0
                const unSignNum = signRecord.notSignUsers.length || 0
                commit('changeTabs', [signNum, unSignNum])
                const signinRecord =
                    signRecord.signData.length > 0
                    ? signRecord.signData.map((item) => {
                        if (item.userSignVOList.length > 0) {
                            item.userSignVOList[0].count = item.userSignCount
                            return item.userSignVOList[0]
                        }
                        return []
                    })
                    : []
                const unSigned = signRecord.notSignUsers
                commit('SET_SIGNINRECORD', signinRecord)
                commit('SET_UNSIGNINRECORD', unSigned)
            } catch (e) {
                console.error('获取签到信息出错', e)
            }
        },
        async getSigninRecordMonth({state, commit}) {
            const {selectedMonth, userIds} = state
            console.log('selectedMonth', selectedMonth, 'userIds', userIds)
            const firstDate = moment(selectedMonth, 'YYYY-MM')
                .startOf('month')
                .format('YYYY-MM-DD')
            const lastDate = moment(selectedMonth, 'YYYY-MM')
                .endOf('month')
                .format('YYYY-MM-DD')
            try {
                const signRecord = await api.signin.getSignRecord({
                    userIds,
                    startDate: firstDate,
                    endDate: lastDate,
                })
                const signinRecord = signRecord.userSignVOList.length > 0 ? signRecord: []
                console.log('signinRecord:::', signinRecord)
                commit('SET_SIGNINRECORDMONTH', signinRecord)
            } catch (e) {
                console.error('获取签到信息出错', e)
            }
        },
    },
}
export default init
