import request from '@/utils/request'
import { IDeptResponse } from '@/common/interface'

interface DeptInfoParams {
    deptIds?: number[]
}
export default {
    deptInfo: (data: DeptInfoParams = {}): Promise<IDeptResponse> => {
        return request.get('dept', data)
    }
}
