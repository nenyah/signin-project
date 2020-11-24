/*
 * @Description:
 * @Author: Steven
 * @Date: 2020-10-28 11:20:32
 * @LastEditors: Steven
 * @LastEditTime: 2020-11-23 14:35:03
 */
import { ICustomer, IOrg, IOrgGroup } from '@/common/interface'

export class Org implements IOrg {
    orgGroup: IOrgGroup
    customerList: ICustomer[]
    id: number
    code: string
    name: string
    groupId: number
    address: string
    outId: string
    longitude: number
    latitude: number
    constructor(org: IOrg) {
        const {
            orgGroup,
            customerList,
            id,
            code,
            name,
            groupId,
            address,
            outId,
            longitude,
            latitude
        } = org
        this.orgGroup = orgGroup
        this.customerList = customerList
        this.id = id
        this.code = code
        this.name = name
        this.groupId = groupId
        this.address = address
        this.outId = outId
        this.longitude = longitude
        this.latitude = latitude
    }
}
