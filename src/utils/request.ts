/*
 * @Description:
 * @Author: Steven
 * @Date: 2020-09-11 08:52:11
 * @LastEditors: Steven
 * @LastEditTime: 2020-10-23 15:33:02
 */
import {token} from './token'
import {appConfig} from '@/common/config'

interface IParams {
    url: string
    method?: 'GET' | 'POST' | 'PUT'
    base_url?: string
    data?: any
}

interface Config {
    'Content-Type': string

    [x: string]: string
}

const fetch = (params: IParams): Promise<any> => {
    // 加载中
    uni.showLoading({
        title: '加载中'
    })
    return new Promise((resolve, reject) => {
        let defaultParams = {
            ...params,
            timeout: 10000,
            url: (params.base_url ? params.base_url : appConfig.apiUrl) + params.url
        }
        uni.request({
            ...defaultParams,
            header: (() => {
                const tokenValue = token.get()
                let config: Config = {
                    'Content-Type': 'application/json'
                }
                if (tokenValue) {
                    config[appConfig.tokenKey] = tokenValue
                }
                return config
            })(),
            success(res) {
                console.log(`请求：${defaultParams.url},返回结果：${JSON.stringify(res)}`)
                if (res.statusCode !== 200) {
                    reject(res.data)
                }
                resolve(res.data)
            },
            fail(err) {
                reject(err)
            },
            complete() {
                uni.hideLoading()
            }
        })
    })
}
export default {
    post: (url: string, data: any, base_url: string = '') => {
        return fetch({url, method: 'POST', data, base_url})
    },
    get: (url: string, data: any, base_url: string = '') => {
        return fetch({url, method: 'GET', data, base_url})
    }
}
