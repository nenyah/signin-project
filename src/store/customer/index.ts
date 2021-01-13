/*
 * @Description:
 * @Author: Steven
 * @Date: 2020-11-25 16:11:31
 * @LastEditors: Steven
 * @LastEditTime: 2020-11-26 17:00:10
 */
import {Module} from 'vuex'
import {IOrg} from '@/common/interface'
import {Org} from '@/model/org'
import api from '@/api'

interface State {
    org: IOrg
    orgs: IOrg[]
    total: number
    more: string
    isLoadMore: boolean
    current: number
    size: number
    orgName: string
}

const init: Module<State, any> = {
    namespaced: true,
    state: {
        org: new Org(),
        orgs: [] as IOrg[],
        total: 0,
        isLoadMore: true,
        more: 'more',
        current: 1,
        size: 10,
        orgName: '',
    },
    mutations: {
        init(state) {
            state.isLoadMore = true
            state.more = 'more'
            state.current = 1
            state.orgs = []
            state.org = new Org()
        },
        SUB_CURRENT(state) {
            state.current -= 1
        },
        SET_ORG(state, o) {
            state.org = new Org(o)
        },
        SET_ORGS(state, o) {
            const newData = o.length > 0 ? o : []
            state.orgs = [...state.orgs, ...newData]
        },
        SET_TOTAL(state, o) {
            state.total = o
        },
        NO_MORE(state) {
            state.more = 'nomore'
        },
        SET_LOADMORE_TRUE(state) {
            state.isLoadMore = true
        },
        SET_LOADMORE_FALSE(state) {
            state.isLoadMore = false
        },
        CHANGE_EXPANDED(state, id) {
            state.orgs = state.orgs.map((el) => {
                if (el.id === id) {
                    el.expanded = !el.expanded
                }
                return el
            })
        },
        INCREATE_CURRENT(state) {
            state.current += 1
        },
        SET_ORGNAME(state, orgName) {
            state.orgName = orgName || ''
        },
    },
    getters: {},
    actions: {
        async getCustomer({state, commit}) {
            const {isLoadMore, more, current, size, orgName} = state
            if (!more) {
                return
            }
            if (!isLoadMore) {
                return
            }
            try {
                // 上锁 防止重复刷新
                commit('SET_LOADMORE_FALSE')
                const {data, total} = await api.org.orgInfo({
                    current,
                    size,
                    orgName,
                })
                // 设置总数
                if (current === 1 && total > 0) {
                    commit('SET_TOTAL', total)
                }
                // 没有数据
                if (data.length === 0) {
                    commit('SET_LOADMORE_TRUE')
                    commit('NO_MORE')
                    return
                }
                // 有数据但是少于size
                if (data.length < size) {
                    commit('NO_MORE')
                }
                // 组装数据
                const orgs = data.map((el) => {
                    el.expanded = false
                    return el
                })

                commit('INCREATE_CURRENT')
                commit('SET_ORGS', orgs)
            } catch (e) {
                uni.showToast({title: e, icon: 'none'})
                if (current > 1) {
                    commit('SUB_CURRENT')
                }
            } finally {
                // 解锁
                commit('SET_LOADMORE_TRUE')
            }
        },
    },
}
export default init
