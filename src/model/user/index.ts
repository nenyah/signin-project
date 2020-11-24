/*
 * @Description: 
 * @Author: Steven
 * @Date: 2020-10-28 11:21:12
 * @LastEditors: Steven
 * @LastEditTime: 2020-11-23 14:55:17
 */
import {IDept, IUserDetail} from "./../../common/interface"

export class User implements IUserDetail {
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

    constructor(user: IUserDetail = {}) {
        const {
            id, pid, code, name, dept, post, sex, mobile, email, entryTime,
            workPlace, remark, delete: isDelete, enable, hrId, createTime, updateTime
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
    }
}