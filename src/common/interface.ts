// Generated by https://quicktype.io

export interface OrgResponse {
    current: number
    size: number
    data: Org[]
    total: number
}

export interface Org {
    orgGroup: OrgGroup
    customerList: Customer[]
    id: number
    code: string
    name: string
    groupId: number
    address: string
    outId: string
    longitude: number
    latitude: number
}

export interface Customer {
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

export interface OrgGroup {
    id: number
    code: string
    name: string
    remark: string
}

// Generated by https://quicktype.io

export interface Setting {
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

export interface SignHistoryResponse {
    current: number
    size: number
    data: SignHistory[]
    total: number
}

export interface SignHistory {
    startDate?: string
    endDate?: string
    jobNumber: string
    userName: string
    userSignCount: number
    userSignVOList: UserSignVO[]
}

export interface UserSignVO {
    count: number
    org: OrgVO
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

export interface OrgVO {
    id: number
    name: string
}
