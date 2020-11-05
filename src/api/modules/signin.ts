/*
 * @Description:
 * @Author: Steven
 * @Date: 2020-10-28 11:18:02
 * @LastEditors: Steven
 * @LastEditTime: 2020-11-05 16:11:17
 */
import request from "@/utils/request"
import {OrgVO, SignHistoryResponse} from "@/common/interface"

interface SignRecordParams {
    current?: number
    size?: number
    userIds?: number[]
    startDate?: string
    endDate?: string
}

export interface SignRecordData {
    org: OrgVO
    timeStamp: number
    imageUrlList: string[]
    place: string
    detailPlace: string
    remark: string
    longitude: number
    latitude: number
}

export default {
    getSignRecord: (
        data: SignRecordParams = {}
    ): Promise<SignHistoryResponse> => {
        return request.get("/ding/sign", data)
    },
    addSignRecord: (data: SignRecordData): Promise<any> => {
        return request.post("/ding/sign", data)
    },
    uploadImg: (data: { file: string }): Promise<string> => {
        return request.post("/ding/sign/uploadImg", data)
    },
}
