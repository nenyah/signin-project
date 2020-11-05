import request from "@/utils/request"

export default {
    ddLogin: (data: { authCode: string }) => {
        return request.get("ding/auth", data)
    },
    // info: (params = {}, data = {}) => {
    //     return request.post('portal/member/info', params, data)
    // },
    // cart: (params = {}, data = {}) => {
    //     return request.post('portal/member/getCart', params, data)
    // },
    // addCart: (params = {}, data = {}) => {
    //     return request.post('portal/member/addCart', params, data)
    // },
    // deleteCart: (params = {}, data = {}) => {
    //     return request.post('portal/member/deleteCart', params, data)
    // },
    // addOrder: (params = {}, data = {}) => {
    //     return request.post('portal/member/addOrder', params, data)
    // },
    // getOrderPage: (params = {}, data = {}) => {
    //     return request.post('portal/member/getOrderPage', params, data)
    // }
}