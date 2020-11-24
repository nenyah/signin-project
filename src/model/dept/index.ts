/*
 * @Description:
 * @Author: Steven
 * @Date: 2020-10-28 11:20:18
 * @LastEditors: Steven
 * @LastEditTime: 2020-11-23 14:36:24
 */
import { IDept } from './../../common/interface'
export class Dept implements IDept {
    id: number
    pid: number
    code: string
    name: string
    constructor(dept: IDept) {
        const { id, pid, code, name } = dept
        this.id = id
        this.pid = pid
        this.code = code
        this.name = name
    }
}
