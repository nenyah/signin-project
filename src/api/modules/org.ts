import request from '@/utils/request'
import { IOrgResponse } from '@/common/interface'
interface OrgParams {
    current?: number
    size?: number
    userId?: number
    groupId?: number
    orgName?: string
}
export default {
    orgInfo: (data: OrgParams = { current: 1, size: 10 }): Promise<IOrgResponse> => {
        return request.get('ding/org', data)
    }
}
