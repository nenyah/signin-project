import request from "@/utils/request"
import { IUserResponse, IUserDetail } from "@/common/interface"
interface infoParams {
  userIds?: number[]
}
interface infoByCodeParams {
  userJobNumbers?: string[]
}
interface infoByDeptParams {
  deptIds?: number[]
}
export default {
  ddLogin: (data: { authCode: string }): Promise<IUserResponse> => {
    return request.get("ding/auth", data)
  },
  infoByUserIds: (data: infoParams = {}): Promise<IUserDetail[]> => {
    return request.get("user", data)
  },
  infoByCode: (data: infoByCodeParams = {}): Promise<IUserDetail[]> => {
    return request.get("user/bycode", data)
  },
  infoByDept: (data: infoByDeptParams = {}): Promise<IUserDetail[]> => {
    return request.get("user/dept", data)
  },
  infoWithSub: (data: infoParams = {}): Promise<IUserDetail[]> => {
    return request.get("user/sub", data)
  },
}
