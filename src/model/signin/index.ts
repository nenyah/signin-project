/*
 * @Description:
 * @Author: Steven
 * @Date: 2020-10-28 11:21:24
 * @LastEditors: Steven
 * @LastEditTime: 2020-11-23 14:52:41
 */
import { IOrgVO, IUserSignVO } from '@/common/interface'

export class SignRecord implements IUserSignVO {
    count!: number
    org!: IOrgVO
    id!: string
    userId!: number
    jobNumber!: string
    userName!: string
    date!: string
    time!: string
    place!: string
    detailPlace!: string
    imgUrlList!: string[]
    remark!: string
    longitude!: string
    latitude!: string
    constructor(userSignVO: IUserSignVO) {
        const {
            count,
            org,
            id,
            userId,
            jobNumber,
            userName,
            date,
            time,
            place,
            detailPlace,
            imgUrlList,
            remark,
            longitude,
            latitude
        } = userSignVO
        this.count = count
        this.org = org
        this.id = id
        this.userId = userId
        this.jobNumber = jobNumber
        this.userName = userName
        this.date = date
        this.time = time
        this.place = place
        this.detailPlace = detailPlace
        this.imgUrlList = imgUrlList
        this.remark = remark
        this.longitude = longitude
        this.latitude = latitude
    }
}
