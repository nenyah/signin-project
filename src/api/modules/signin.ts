/*
 * @Description:
 * @Author: Steven
 * @Date: 2020-10-28 11:18:02
 * @LastEditors: Steven
 * @LastEditTime: 2020-11-05 16:11:17
 */
import request from "@/utils/request"
import {IOrgVO, ISignHistory, ISignHistoryResponse} from '@/common/interface'

interface SignRecordParams {
  current?: number
  size?: number
  userIds?: number[]
  startDate?: string
  endDate?: string
}

export interface SignRecordData {
  org: IOrgVO
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
    data?: SignRecordParams
  ): Promise<ISignHistory> => {
    return request.get("ding/sign", data)
  },
  getSignRecordMulti: (
      data?: SignRecordParams
  ): Promise<ISignHistoryResponse> => {
    return request.get("ding/sign/multi", data)
  },
  addSignRecord: (data: SignRecordData): Promise<any> => {
    return request.post("ding/sign", JSON.stringify(data))
  },
  uploadImg: (filePath: string, formData: {}): Promise<string> => {
    return request.upload("ding/sign/uploadImg", filePath, formData)
  },
}
