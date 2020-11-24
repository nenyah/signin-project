import request from "@/utils/request"
import {appConfig as Config} from "@/common/config"
import {key} from "./secret"

const gaodeUrl = "https://restapi.amap.com/v3/"

interface geoParams {
    longitude: number
    latitude: number
    radius?: number
}

interface PoiResponce {
    suggestion: Suggestion
    count: string
    infocode: string
    pois: Pois[]
    status: string
    info: string
}

export interface Pois {
    parent: any[]
    distance: string
    pcode: string
    importance: any[]
    biz_ext: BizEXT
    recommend: string
    type: string
    photos: Photo[]
    discount_num: string
    gridcode: string
    typecode: string
    shopinfo: string
    poiweight: any[]
    citycode: string
    adname: string
    children: any[]
    alias: any[]
    tel: any[] | string
    id: string
    tag: any[]
    event: any[]
    entr_location: any[] | string
    indoor_map: string
    email: any[]
    timestamp: string
    website: any[]
    address: any[] | string
    adcode: string
    pname: string
    biz_type: any[]
    cityname: string
    postcode: any[]
    match: string
    business_area: any[]
    indoor_data: IndoorData
    childtype: any[]
    exit_location: any[]
    name: string
    location: string
    shopid: any[]
    navi_poiid: any[] | string
    groupbuy_num: string
}

interface BizEXT {
    cost: any[]
    rating: any[] | string
}

interface IndoorData {
    cmsid: any[]
    truefloor: any[]
    cpid: any[]
    floor: any[]
}

interface Photo {
    title: any[]
    url: string
}

interface Suggestion {
    keywords: any[]
    cities: any[]
}

/**
 *逆地址解析
 *
 * @author Steven
 * @date 2020-06-24
 * @param {object} opt 定位信息
 * @returns Promise
 */
function reGeo(opt: geoParams) {
    return request.get(
        "geocode/regeo",
        {
            key: key,
            location: `${opt.longitude},${opt.latitude}`,
            radius: opt.radius || Config.limitRange,
            extensions: "all",
            batch: false,
            homeorcorp: 2,
            poitype: "090000|170000|190000",
        },
        gaodeUrl
    )
}

/**
 *根据定位获取周边地址
 *
 * @author Steven
 * @date 2020-06-24
 * @param {object} opt 定位
 * @returns Promise
 */
function getAround(opt: geoParams): Promise<PoiResponce> {
    return request.get(
        "place/around",
        {
            key: key,
            location: `${opt.longitude},${opt.latitude}`,
            radius: opt.radius || Config.limitRange,
            extensions: "all",
            types: "090000|170000|190000",
            offset: 100,
            page: 1,
        },
        gaodeUrl,
    )
}

export default {
    getAround,
    reGeo,
}

