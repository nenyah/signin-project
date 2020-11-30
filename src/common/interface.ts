// Generated by https://quicktype.io

export interface IOrgResponse {
    current: number
    size: number
    data: IOrg[]
    total: number
}

export interface IOrg {
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
    expanded?: boolean
}

export interface ICustomer {
    id: number
    orgId: number
    code: string
    name: string
    sex: string
    position: string
    post: string
    mobile: string
    mobile2: string
    email: string
    dept: string
    qq: string
    wechat: string
    birthday: string
    outId: string
    createTime: string
    updateTime: string
}

export interface IOrgGroup {
    id: number
    code: string
    name: string
    remark: string
}

// Generated by https://quicktype.io

export interface ISetting {
    id: number
    name: string
    value: string
    value2: string
    value3: string
    description: string
    createBy: number
    createTime: string
    updateBy: number
    updateTime: string
}

// Generated by https://quicktype.io

export interface ISignHistoryResponse {
    current: number
    size: number
    data: ISignHistory[]
    total: number
}

export interface ISignHistory {
    startDate?: string
    endDate?: string
    jobNumber: string
    userName: string
    userSignCount: number
    userSignVOList: IUserSignVO[]
}

export interface IUserSignVO {
    count: number
    org: IOrgVO
    id: string
    userId: number
    jobNumber: string
    userName: string
    date: string
    time: string
    place: string
    detailPlace: string
    imgUrlList: string[]
    remark: string
    longitude: string
    latitude: string
}

export interface IOrgVO {
    id: number
    name: string
}

// Generated by https://quicktype.io
// 用户详细信息
export interface IUserDetail {
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
}

export interface IDept {
    id: number
    pid: number
    code: string
    name: string
}

// Generated by https://quicktype.io

export interface IDeptResponse {
    id: number
    pid: number
    code: string
    name: string
    delete: boolean
    enable: boolean
    hrId: number
    createTime: string
    updateTime: string
}

// 用户基本信息
export interface IUserResponse {
    user: IUserBrief
    token: string
}

export interface IUserBrief {
    dingUserId: string
    dingDeptId: string[]
    avatar: string
    jobNumber: string
    userName: string
    selectOrg: boolean
}
