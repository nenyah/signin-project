/*
 * @Description: 
 * @Author: Steven
 * @Date: 2020-10-28 11:21:12
 * @LastEditors: Steven
 * @LastEditTime: 2020-11-23 14:55:17
 */
import {IDept, IUserBrief, IUserDetail} from './../../common/interface'
type IUser = IUserDetail&IUserBrief
export class User implements IUser {
    id?: number
    pid?: number
    code?: string
    name?: string
    dept?: IDept
    post?: string
    sex?: string
    mobile?: string
    email?: string
    entryTime?: string
    workPlace?: string
    remark?: string
    delete?: boolean
    enable?: boolean
    hrId?: number
    createTime?: string
    updateTime?: string
    dingUserId?: string
    dingDeptId?: string[]
    avatar?: string
    jobNumber?: string
    userName?: string
    selectOrg?: boolean

    constructor(user: IUser = {}) {
        const {
            id, pid, code, name, dept, post, sex, mobile, email, entryTime,
            workPlace, remark, delete: isDelete, enable, hrId, createTime, updateTime,
            dingUserId,
            dingDeptId,
            avatar,
            jobNumber,
            userName,
            selectOrg,
        } = user
        this.id = id
        this.pid = pid
        this.code = code
        this.name = name
        this.dept = dept
        this.post = post
        this.sex = sex
        this.mobile = mobile
        this.email = email
        this.entryTime = entryTime
        this.workPlace = workPlace
        this.remark = remark
        this.delete = isDelete
        this.enable = enable
        this.hrId = hrId
        this.createTime = createTime
        this.updateTime = updateTime
        this.dingUserId = dingUserId
        this.dingDeptId = dingDeptId
        this.avatar = avatar
        this.jobNumber = jobNumber
        this.userName = userName
        this.selectOrg = selectOrg
    }
}