<template>
    <view>
        <view class="bg-white h-full">
            <view class="text-center text-xl py-20">
                <view
                    class="fa fa-shield text-green-500 mx-20"
                    aria-hidden="true"
                ></view>
                以下定位信息均为员工签到时候主动上传
            </view>
            <view>
                <map
                    id="map"
                    :longitude="longitude"
                    :latitude="latitude"
                    :show-location="false"
                    :markers="markers"
                    style="width:100%;height:80vh;"
                ></map>
            </view>
            <view
                v-if="history"
                class="flex flex-wrap"
            >
                <scroll-view
                    v-if="!pageProfile"
                    class="flex"
                    scroll-x="true"
                    @scroll="scroll"
                    scroll-left="120"
                    enable-flex
                >
                    <view class="text-center m-20" v-for="(item,index) in items" :key="index">
                        <view
                            class="w-50 h-50 rounded-full bg-blue-500 text-gray-100 my-10 flex justify-center items-center"
                        >
                            {{ item.userName.length > 2 ? item.userName.substr(0, 2) : item.userName }}
                        </view>
                        <view>{{ item.userName }}</view>
                    </view>
                </scroll-view>
                <view v-else class="text-center m-2">
                    <view
                        class="w-50 h-50 rounded-full bg-blue-500 text-gray-100 my-10 flex justify-center items-center"
                    >
                        {{
                            items[0].userName.length > 2 ? items[0].userName.substr(0, 2) : items[0].userName
                        }}
                    </view>
                    <view>{{ items[0].userName }}</view>
                </view>

            </view>
            <view
                v-else
                class="bg-gray-300 p-20 text-2xl"
            >没有签到记录哦
            </view>
        </view>
    </view>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"
import {ISignHistory} from "@/common/interface"

@Component({})
export default class History extends Vue {
    private longitude = 120.12703000
    private latitude = 30.27392300
    private markers = [
        {
            id: 1,
            longitude: "120.127033",
            latitude: "30.273923",
            iconPath: "/static/images/location.png"
        },
        {
            id: 2,
            longitude: "120.127035",
            latitude: "30.273924",
            iconPath: "/static/images/location.png"
        },
    ]
    private history = true
    private pageProfile = false
    private items: ISignHistory[] = [
        {
            jobNumber: "PO0123",
            userName: "张三",
            userSignCount: 10,
            userSignVOList: [
                {
                    count: 0,
                    org: {
                        id: 0,
                        name: "浙江省宁波市北仑区第一骨科医院"
                    },
                    id: "1",
                    userId: 1234,
                    jobNumber: "PO0123",
                    userName: "张三",
                    date: "2020-11-15",
                    time: "13：50",
                    place: "宁波第一医院地址",
                    detailPlace: "宁波第一医院详细地址",
                    imgUrlList: [
                        "https://tp.huadongbio.com:9000/weixinapp-vote/product.png",
                        "https://tp.huadongbio.com:9000/weixinapp-vote/face.png"
                    ],
                    remark: "备注",
                    longitude: "120.12703000",
                    latitude: "30.27392300"
                },
                {
                    count: 0,
                    org: {
                        id: 0,
                        name: "浙江省宁波市北仑区第二骨科医院"
                    },
                    id: "1",
                    userId: 1234,
                    jobNumber: "PO0123",
                    userName: "张三",
                    date: "2020-11-15",
                    time: "13：50",
                    place: "宁波第一医院地址",
                    detailPlace: "宁波第一医院详细地址",
                    imgUrlList: [
                        "https://tp.huadongbio.com:9000/weixinapp-vote/product.png",
                        "https://tp.huadongbio.com:9000/weixinapp-vote/face.png"
                    ],
                    remark: "备注",
                    longitude: "120.12703000",
                    latitude: "30.27392300"
                }
            ]
        },
        {
            jobNumber: "PO0124",
            userName: "李四",
            userSignCount: 10,
            userSignVOList: [
                {
                    count: 0,
                    org: {
                        id: 0,
                        name: "浙江省宁波市北仑区第一骨科医院"
                    },
                    id: "1",
                    userId: 1234,
                    jobNumber: "PO0123",
                    userName: "张三",
                    date: "2020-11-15",
                    time: "13：50",
                    place: "宁波第一医院地址",
                    detailPlace: "宁波第一医院详细地址",
                    imgUrlList: [
                        "https://tp.huadongbio.com:9000/weixinapp-vote/product.png",
                        "https://tp.huadongbio.com:9000/weixinapp-vote/face.png"
                    ],
                    remark: "备注",
                    longitude: "120.12703000",
                    latitude: "30.27392300"
                },
                {
                    count: 0,
                    org: {
                        id: 0,
                        name: "浙江省宁波市北仑区第二骨科医院"
                    },
                    id: "1",
                    userId: 1234,
                    jobNumber: "PO0123",
                    userName: "张三",
                    date: "2020-11-15",
                    time: "13：50",
                    place: "宁波第一医院地址",
                    detailPlace: "宁波第一医院详细地址",
                    imgUrlList: [
                        "https://tp.huadongbio.com:9000/weixinapp-vote/product.png",
                        "https://tp.huadongbio.com:9000/weixinapp-vote/face.png"
                    ],
                    remark: "备注",
                    longitude: "120.12703000",
                    latitude: "30.27392300"
                }
            ]
        },
        {
            jobNumber: "PO0123",
            userName: "张三",
            userSignCount: 10,
            userSignVOList: [
                {
                    count: 0,
                    org: {
                        id: 0,
                        name: "浙江省宁波市北仑区第一骨科医院"
                    },
                    id: "1",
                    userId: 1234,
                    jobNumber: "PO0123",
                    userName: "张三",
                    date: "2020-11-15",
                    time: "13：50",
                    place: "宁波第一医院地址",
                    detailPlace: "宁波第一医院详细地址",
                    imgUrlList: [
                        "https://tp.huadongbio.com:9000/weixinapp-vote/product.png",
                        "https://tp.huadongbio.com:9000/weixinapp-vote/face.png"
                    ],
                    remark: "备注",
                    longitude: "120.12703000",
                    latitude: "30.27392300"
                },
                {
                    count: 0,
                    org: {
                        id: 0,
                        name: "浙江省宁波市北仑区第二骨科医院"
                    },
                    id: "1",
                    userId: 1234,
                    jobNumber: "PO0123",
                    userName: "张三",
                    date: "2020-11-15",
                    time: "13：50",
                    place: "宁波第一医院地址",
                    detailPlace: "宁波第一医院详细地址",
                    imgUrlList: [
                        "https://tp.huadongbio.com:9000/weixinapp-vote/product.png",
                        "https://tp.huadongbio.com:9000/weixinapp-vote/face.png"
                    ],
                    remark: "备注",
                    longitude: "120.12703000",
                    latitude: "30.27392300"
                }
            ]
        },
        {
            jobNumber: "PO0124",
            userName: "李四",
            userSignCount: 10,
            userSignVOList: [
                {
                    count: 0,
                    org: {
                        id: 0,
                        name: "浙江省宁波市北仑区第一骨科医院"
                    },
                    id: "1",
                    userId: 1234,
                    jobNumber: "PO0123",
                    userName: "张三",
                    date: "2020-11-15",
                    time: "13：50",
                    place: "宁波第一医院地址",
                    detailPlace: "宁波第一医院详细地址",
                    imgUrlList: [
                        "https://tp.huadongbio.com:9000/weixinapp-vote/product.png",
                        "https://tp.huadongbio.com:9000/weixinapp-vote/face.png"
                    ],
                    remark: "备注",
                    longitude: "120.12703000",
                    latitude: "30.27392300"
                },
                {
                    count: 0,
                    org: {
                        id: 0,
                        name: "浙江省宁波市北仑区第二骨科医院"
                    },
                    id: "1",
                    userId: 1234,
                    jobNumber: "PO0123",
                    userName: "张三",
                    date: "2020-11-15",
                    time: "13：50",
                    place: "宁波第一医院地址",
                    detailPlace: "宁波第一医院详细地址",
                    imgUrlList: [
                        "https://tp.huadongbio.com:9000/weixinapp-vote/product.png",
                        "https://tp.huadongbio.com:9000/weixinapp-vote/face.png"
                    ],
                    remark: "备注",
                    longitude: "120.12703000",
                    latitude: "30.27392300"
                }
            ]
        },
        {
            jobNumber: "PO0123",
            userName: "张三",
            userSignCount: 10,
            userSignVOList: [
                {
                    count: 0,
                    org: {
                        id: 0,
                        name: "浙江省宁波市北仑区第一骨科医院"
                    },
                    id: "1",
                    userId: 1234,
                    jobNumber: "PO0123",
                    userName: "张三",
                    date: "2020-11-15",
                    time: "13：50",
                    place: "宁波第一医院地址",
                    detailPlace: "宁波第一医院详细地址",
                    imgUrlList: [
                        "https://tp.huadongbio.com:9000/weixinapp-vote/product.png",
                        "https://tp.huadongbio.com:9000/weixinapp-vote/face.png"
                    ],
                    remark: "备注",
                    longitude: "120.12703000",
                    latitude: "30.27392300"
                },
                {
                    count: 0,
                    org: {
                        id: 0,
                        name: "浙江省宁波市北仑区第二骨科医院"
                    },
                    id: "1",
                    userId: 1234,
                    jobNumber: "PO0123",
                    userName: "张三",
                    date: "2020-11-15",
                    time: "13：50",
                    place: "宁波第一医院地址",
                    detailPlace: "宁波第一医院详细地址",
                    imgUrlList: [
                        "https://tp.huadongbio.com:9000/weixinapp-vote/product.png",
                        "https://tp.huadongbio.com:9000/weixinapp-vote/face.png"
                    ],
                    remark: "备注",
                    longitude: "120.12703000",
                    latitude: "30.27392300"
                }
            ]
        },
        {
            jobNumber: "PO0124",
            userName: "李四",
            userSignCount: 10,
            userSignVOList: [
                {
                    count: 0,
                    org: {
                        id: 0,
                        name: "浙江省宁波市北仑区第一骨科医院"
                    },
                    id: "1",
                    userId: 1234,
                    jobNumber: "PO0123",
                    userName: "张三",
                    date: "2020-11-15",
                    time: "13：50",
                    place: "宁波第一医院地址",
                    detailPlace: "宁波第一医院详细地址",
                    imgUrlList: [
                        "https://tp.huadongbio.com:9000/weixinapp-vote/product.png",
                        "https://tp.huadongbio.com:9000/weixinapp-vote/face.png"
                    ],
                    remark: "备注",
                    longitude: "120.12703000",
                    latitude: "30.27392300"
                },
                {
                    count: 0,
                    org: {
                        id: 0,
                        name: "浙江省宁波市北仑区第二骨科医院"
                    },
                    id: "1",
                    userId: 1234,
                    jobNumber: "PO0123",
                    userName: "张三",
                    date: "2020-11-15",
                    time: "13：50",
                    place: "宁波第一医院地址",
                    detailPlace: "宁波第一医院详细地址",
                    imgUrlList: [
                        "https://tp.huadongbio.com:9000/weixinapp-vote/product.png",
                        "https://tp.huadongbio.com:9000/weixinapp-vote/face.png"
                    ],
                    remark: "备注",
                    longitude: "120.12703000",
                    latitude: "30.27392300"
                }
            ]
        },
        {
            jobNumber: "PO0123",
            userName: "张三",
            userSignCount: 10,
            userSignVOList: [
                {
                    count: 0,
                    org: {
                        id: 0,
                        name: "浙江省宁波市北仑区第一骨科医院"
                    },
                    id: "1",
                    userId: 1234,
                    jobNumber: "PO0123",
                    userName: "张三",
                    date: "2020-11-15",
                    time: "13：50",
                    place: "宁波第一医院地址",
                    detailPlace: "宁波第一医院详细地址",
                    imgUrlList: [
                        "https://tp.huadongbio.com:9000/weixinapp-vote/product.png",
                        "https://tp.huadongbio.com:9000/weixinapp-vote/face.png"
                    ],
                    remark: "备注",
                    longitude: "120.12703000",
                    latitude: "30.27392300"
                },
                {
                    count: 0,
                    org: {
                        id: 0,
                        name: "浙江省宁波市北仑区第二骨科医院"
                    },
                    id: "1",
                    userId: 1234,
                    jobNumber: "PO0123",
                    userName: "张三",
                    date: "2020-11-15",
                    time: "13：50",
                    place: "宁波第一医院地址",
                    detailPlace: "宁波第一医院详细地址",
                    imgUrlList: [
                        "https://tp.huadongbio.com:9000/weixinapp-vote/product.png",
                        "https://tp.huadongbio.com:9000/weixinapp-vote/face.png"
                    ],
                    remark: "备注",
                    longitude: "120.12703000",
                    latitude: "30.27392300"
                }
            ]
        },
        {
            jobNumber: "PO0124",
            userName: "李四",
            userSignCount: 10,
            userSignVOList: [
                {
                    count: 0,
                    org: {
                        id: 0,
                        name: "浙江省宁波市北仑区第一骨科医院"
                    },
                    id: "1",
                    userId: 1234,
                    jobNumber: "PO0123",
                    userName: "张三",
                    date: "2020-11-15",
                    time: "13：50",
                    place: "宁波第一医院地址",
                    detailPlace: "宁波第一医院详细地址",
                    imgUrlList: [
                        "https://tp.huadongbio.com:9000/weixinapp-vote/product.png",
                        "https://tp.huadongbio.com:9000/weixinapp-vote/face.png"
                    ],
                    remark: "备注",
                    longitude: "120.12703000",
                    latitude: "30.27392300"
                },
                {
                    count: 0,
                    org: {
                        id: 0,
                        name: "浙江省宁波市北仑区第二骨科医院"
                    },
                    id: "1",
                    userId: 1234,
                    jobNumber: "PO0123",
                    userName: "张三",
                    date: "2020-11-15",
                    time: "13：50",
                    place: "宁波第一医院地址",
                    detailPlace: "宁波第一医院详细地址",
                    imgUrlList: [
                        "https://tp.huadongbio.com:9000/weixinapp-vote/product.png",
                        "https://tp.huadongbio.com:9000/weixinapp-vote/face.png"
                    ],
                    remark: "备注",
                    longitude: "120.12703000",
                    latitude: "30.27392300"
                }
            ]
        },
        {
            jobNumber: "PO0123",
            userName: "张三",
            userSignCount: 10,
            userSignVOList: [
                {
                    count: 0,
                    org: {
                        id: 0,
                        name: "浙江省宁波市北仑区第一骨科医院"
                    },
                    id: "1",
                    userId: 1234,
                    jobNumber: "PO0123",
                    userName: "张三",
                    date: "2020-11-15",
                    time: "13：50",
                    place: "宁波第一医院地址",
                    detailPlace: "宁波第一医院详细地址",
                    imgUrlList: [
                        "https://tp.huadongbio.com:9000/weixinapp-vote/product.png",
                        "https://tp.huadongbio.com:9000/weixinapp-vote/face.png"
                    ],
                    remark: "备注",
                    longitude: "120.12703000",
                    latitude: "30.27392300"
                },
                {
                    count: 0,
                    org: {
                        id: 0,
                        name: "浙江省宁波市北仑区第二骨科医院"
                    },
                    id: "1",
                    userId: 1234,
                    jobNumber: "PO0123",
                    userName: "张三",
                    date: "2020-11-15",
                    time: "13：50",
                    place: "宁波第一医院地址",
                    detailPlace: "宁波第一医院详细地址",
                    imgUrlList: [
                        "https://tp.huadongbio.com:9000/weixinapp-vote/product.png",
                        "https://tp.huadongbio.com:9000/weixinapp-vote/face.png"
                    ],
                    remark: "备注",
                    longitude: "120.12703000",
                    latitude: "30.27392300"
                }
            ]
        },
        {
            jobNumber: "PO0124",
            userName: "李四",
            userSignCount: 10,
            userSignVOList: [
                {
                    count: 0,
                    org: {
                        id: 0,
                        name: "浙江省宁波市北仑区第一骨科医院"
                    },
                    id: "1",
                    userId: 1234,
                    jobNumber: "PO0123",
                    userName: "张三",
                    date: "2020-11-15",
                    time: "13：50",
                    place: "宁波第一医院地址",
                    detailPlace: "宁波第一医院详细地址",
                    imgUrlList: [
                        "https://tp.huadongbio.com:9000/weixinapp-vote/product.png",
                        "https://tp.huadongbio.com:9000/weixinapp-vote/face.png"
                    ],
                    remark: "备注",
                    longitude: "120.12703000",
                    latitude: "30.27392300"
                },
                {
                    count: 0,
                    org: {
                        id: 0,
                        name: "浙江省宁波市北仑区第二骨科医院"
                    },
                    id: "1",
                    userId: 1234,
                    jobNumber: "PO0123",
                    userName: "张三",
                    date: "2020-11-15",
                    time: "13：50",
                    place: "宁波第一医院地址",
                    detailPlace: "宁波第一医院详细地址",
                    imgUrlList: [
                        "https://tp.huadongbio.com:9000/weixinapp-vote/product.png",
                        "https://tp.huadongbio.com:9000/weixinapp-vote/face.png"
                    ],
                    remark: "备注",
                    longitude: "120.12703000",
                    latitude: "30.27392300"
                }
            ]
        },
        {
            jobNumber: "PO0123",
            userName: "张三",
            userSignCount: 10,
            userSignVOList: [
                {
                    count: 0,
                    org: {
                        id: 0,
                        name: "浙江省宁波市北仑区第一骨科医院"
                    },
                    id: "1",
                    userId: 1234,
                    jobNumber: "PO0123",
                    userName: "张三",
                    date: "2020-11-15",
                    time: "13：50",
                    place: "宁波第一医院地址",
                    detailPlace: "宁波第一医院详细地址",
                    imgUrlList: [
                        "https://tp.huadongbio.com:9000/weixinapp-vote/product.png",
                        "https://tp.huadongbio.com:9000/weixinapp-vote/face.png"
                    ],
                    remark: "备注",
                    longitude: "120.12703000",
                    latitude: "30.27392300"
                },
                {
                    count: 0,
                    org: {
                        id: 0,
                        name: "浙江省宁波市北仑区第二骨科医院"
                    },
                    id: "1",
                    userId: 1234,
                    jobNumber: "PO0123",
                    userName: "张三",
                    date: "2020-11-15",
                    time: "13：50",
                    place: "宁波第一医院地址",
                    detailPlace: "宁波第一医院详细地址",
                    imgUrlList: [
                        "https://tp.huadongbio.com:9000/weixinapp-vote/product.png",
                        "https://tp.huadongbio.com:9000/weixinapp-vote/face.png"
                    ],
                    remark: "备注",
                    longitude: "120.12703000",
                    latitude: "30.27392300"
                }
            ]
        },
        {
            jobNumber: "PO0124",
            userName: "李四",
            userSignCount: 10,
            userSignVOList: [
                {
                    count: 0,
                    org: {
                        id: 0,
                        name: "浙江省宁波市北仑区第一骨科医院"
                    },
                    id: "1",
                    userId: 1234,
                    jobNumber: "PO0123",
                    userName: "张三",
                    date: "2020-11-15",
                    time: "13：50",
                    place: "宁波第一医院地址",
                    detailPlace: "宁波第一医院详细地址",
                    imgUrlList: [
                        "https://tp.huadongbio.com:9000/weixinapp-vote/product.png",
                        "https://tp.huadongbio.com:9000/weixinapp-vote/face.png"
                    ],
                    remark: "备注",
                    longitude: "120.12703000",
                    latitude: "30.27392300"
                },
                {
                    count: 0,
                    org: {
                        id: 0,
                        name: "浙江省宁波市北仑区第二骨科医院"
                    },
                    id: "1",
                    userId: 1234,
                    jobNumber: "PO0123",
                    userName: "张三",
                    date: "2020-11-15",
                    time: "13：50",
                    place: "宁波第一医院地址",
                    detailPlace: "宁波第一医院详细地址",
                    imgUrlList: [
                        "https://tp.huadongbio.com:9000/weixinapp-vote/product.png",
                        "https://tp.huadongbio.com:9000/weixinapp-vote/face.png"
                    ],
                    remark: "备注",
                    longitude: "120.12703000",
                    latitude: "30.27392300"
                }
            ]
        },
        {
            jobNumber: "PO0123",
            userName: "张三",
            userSignCount: 10,
            userSignVOList: [
                {
                    count: 0,
                    org: {
                        id: 0,
                        name: "浙江省宁波市北仑区第一骨科医院"
                    },
                    id: "1",
                    userId: 1234,
                    jobNumber: "PO0123",
                    userName: "张三",
                    date: "2020-11-15",
                    time: "13：50",
                    place: "宁波第一医院地址",
                    detailPlace: "宁波第一医院详细地址",
                    imgUrlList: [
                        "https://tp.huadongbio.com:9000/weixinapp-vote/product.png",
                        "https://tp.huadongbio.com:9000/weixinapp-vote/face.png"
                    ],
                    remark: "备注",
                    longitude: "120.12703000",
                    latitude: "30.27392300"
                },
                {
                    count: 0,
                    org: {
                        id: 0,
                        name: "浙江省宁波市北仑区第二骨科医院"
                    },
                    id: "1",
                    userId: 1234,
                    jobNumber: "PO0123",
                    userName: "张三",
                    date: "2020-11-15",
                    time: "13：50",
                    place: "宁波第一医院地址",
                    detailPlace: "宁波第一医院详细地址",
                    imgUrlList: [
                        "https://tp.huadongbio.com:9000/weixinapp-vote/product.png",
                        "https://tp.huadongbio.com:9000/weixinapp-vote/face.png"
                    ],
                    remark: "备注",
                    longitude: "120.12703000",
                    latitude: "30.27392300"
                }
            ]
        },
        {
            jobNumber: "PO0124",
            userName: "李四",
            userSignCount: 10,
            userSignVOList: [
                {
                    count: 0,
                    org: {
                        id: 0,
                        name: "浙江省宁波市北仑区第一骨科医院"
                    },
                    id: "1",
                    userId: 1234,
                    jobNumber: "PO0123",
                    userName: "张三",
                    date: "2020-11-15",
                    time: "13：50",
                    place: "宁波第一医院地址",
                    detailPlace: "宁波第一医院详细地址",
                    imgUrlList: [
                        "https://tp.huadongbio.com:9000/weixinapp-vote/product.png",
                        "https://tp.huadongbio.com:9000/weixinapp-vote/face.png"
                    ],
                    remark: "备注",
                    longitude: "120.12703000",
                    latitude: "30.27392300"
                },
                {
                    count: 0,
                    org: {
                        id: 0,
                        name: "浙江省宁波市北仑区第二骨科医院"
                    },
                    id: "1",
                    userId: 1234,
                    jobNumber: "PO0123",
                    userName: "张三",
                    date: "2020-11-15",
                    time: "13：50",
                    place: "宁波第一医院地址",
                    detailPlace: "宁波第一医院详细地址",
                    imgUrlList: [
                        "https://tp.huadongbio.com:9000/weixinapp-vote/product.png",
                        "https://tp.huadongbio.com:9000/weixinapp-vote/face.png"
                    ],
                    remark: "备注",
                    longitude: "120.12703000",
                    latitude: "30.27392300"
                }
            ]
        },
        {
            jobNumber: "PO0123",
            userName: "张三",
            userSignCount: 10,
            userSignVOList: [
                {
                    count: 0,
                    org: {
                        id: 0,
                        name: "浙江省宁波市北仑区第一骨科医院"
                    },
                    id: "1",
                    userId: 1234,
                    jobNumber: "PO0123",
                    userName: "张三",
                    date: "2020-11-15",
                    time: "13：50",
                    place: "宁波第一医院地址",
                    detailPlace: "宁波第一医院详细地址",
                    imgUrlList: [
                        "https://tp.huadongbio.com:9000/weixinapp-vote/product.png",
                        "https://tp.huadongbio.com:9000/weixinapp-vote/face.png"
                    ],
                    remark: "备注",
                    longitude: "120.12703000",
                    latitude: "30.27392300"
                },
                {
                    count: 0,
                    org: {
                        id: 0,
                        name: "浙江省宁波市北仑区第二骨科医院"
                    },
                    id: "1",
                    userId: 1234,
                    jobNumber: "PO0123",
                    userName: "张三",
                    date: "2020-11-15",
                    time: "13：50",
                    place: "宁波第一医院地址",
                    detailPlace: "宁波第一医院详细地址",
                    imgUrlList: [
                        "https://tp.huadongbio.com:9000/weixinapp-vote/product.png",
                        "https://tp.huadongbio.com:9000/weixinapp-vote/face.png"
                    ],
                    remark: "备注",
                    longitude: "120.12703000",
                    latitude: "30.27392300"
                }
            ]
        },
        {
            jobNumber: "PO0124",
            userName: "李四",
            userSignCount: 10,
            userSignVOList: [
                {
                    count: 0,
                    org: {
                        id: 0,
                        name: "浙江省宁波市北仑区第一骨科医院"
                    },
                    id: "1",
                    userId: 1234,
                    jobNumber: "PO0123",
                    userName: "张三",
                    date: "2020-11-15",
                    time: "13：50",
                    place: "宁波第一医院地址",
                    detailPlace: "宁波第一医院详细地址",
                    imgUrlList: [
                        "https://tp.huadongbio.com:9000/weixinapp-vote/product.png",
                        "https://tp.huadongbio.com:9000/weixinapp-vote/face.png"
                    ],
                    remark: "备注",
                    longitude: "120.12703000",
                    latitude: "30.27392300"
                },
                {
                    count: 0,
                    org: {
                        id: 0,
                        name: "浙江省宁波市北仑区第二骨科医院"
                    },
                    id: "1",
                    userId: 1234,
                    jobNumber: "PO0123",
                    userName: "张三",
                    date: "2020-11-15",
                    time: "13：50",
                    place: "宁波第一医院地址",
                    detailPlace: "宁波第一医院详细地址",
                    imgUrlList: [
                        "https://tp.huadongbio.com:9000/weixinapp-vote/product.png",
                        "https://tp.huadongbio.com:9000/weixinapp-vote/face.png"
                    ],
                    remark: "备注",
                    longitude: "120.12703000",
                    latitude: "30.27392300"
                }
            ]
        },
        {
            jobNumber: "PO0123",
            userName: "张三",
            userSignCount: 10,
            userSignVOList: [
                {
                    count: 0,
                    org: {
                        id: 0,
                        name: "浙江省宁波市北仑区第一骨科医院"
                    },
                    id: "1",
                    userId: 1234,
                    jobNumber: "PO0123",
                    userName: "张三",
                    date: "2020-11-15",
                    time: "13：50",
                    place: "宁波第一医院地址",
                    detailPlace: "宁波第一医院详细地址",
                    imgUrlList: [
                        "https://tp.huadongbio.com:9000/weixinapp-vote/product.png",
                        "https://tp.huadongbio.com:9000/weixinapp-vote/face.png"
                    ],
                    remark: "备注",
                    longitude: "120.12703000",
                    latitude: "30.27392300"
                },
                {
                    count: 0,
                    org: {
                        id: 0,
                        name: "浙江省宁波市北仑区第二骨科医院"
                    },
                    id: "1",
                    userId: 1234,
                    jobNumber: "PO0123",
                    userName: "张三",
                    date: "2020-11-15",
                    time: "13：50",
                    place: "宁波第一医院地址",
                    detailPlace: "宁波第一医院详细地址",
                    imgUrlList: [
                        "https://tp.huadongbio.com:9000/weixinapp-vote/product.png",
                        "https://tp.huadongbio.com:9000/weixinapp-vote/face.png"
                    ],
                    remark: "备注",
                    longitude: "120.12703000",
                    latitude: "30.27392300"
                }
            ]
        },
        {
            jobNumber: "PO0124",
            userName: "李四",
            userSignCount: 10,
            userSignVOList: [
                {
                    count: 0,
                    org: {
                        id: 0,
                        name: "浙江省宁波市北仑区第一骨科医院"
                    },
                    id: "1",
                    userId: 1234,
                    jobNumber: "PO0123",
                    userName: "张三",
                    date: "2020-11-15",
                    time: "13：50",
                    place: "宁波第一医院地址",
                    detailPlace: "宁波第一医院详细地址",
                    imgUrlList: [
                        "https://tp.huadongbio.com:9000/weixinapp-vote/product.png",
                        "https://tp.huadongbio.com:9000/weixinapp-vote/face.png"
                    ],
                    remark: "备注",
                    longitude: "120.12703000",
                    latitude: "30.27392300"
                },
                {
                    count: 0,
                    org: {
                        id: 0,
                        name: "浙江省宁波市北仑区第二骨科医院"
                    },
                    id: "1",
                    userId: 1234,
                    jobNumber: "PO0123",
                    userName: "张三",
                    date: "2020-11-15",
                    time: "13：50",
                    place: "宁波第一医院地址",
                    detailPlace: "宁波第一医院详细地址",
                    imgUrlList: [
                        "https://tp.huadongbio.com:9000/weixinapp-vote/product.png",
                        "https://tp.huadongbio.com:9000/weixinapp-vote/face.png"
                    ],
                    remark: "备注",
                    longitude: "120.12703000",
                    latitude: "30.27392300"
                }
            ]
        },
        {
            jobNumber: "PO0123",
            userName: "张三",
            userSignCount: 10,
            userSignVOList: [
                {
                    count: 0,
                    org: {
                        id: 0,
                        name: "浙江省宁波市北仑区第一骨科医院"
                    },
                    id: "1",
                    userId: 1234,
                    jobNumber: "PO0123",
                    userName: "张三",
                    date: "2020-11-15",
                    time: "13：50",
                    place: "宁波第一医院地址",
                    detailPlace: "宁波第一医院详细地址",
                    imgUrlList: [
                        "https://tp.huadongbio.com:9000/weixinapp-vote/product.png",
                        "https://tp.huadongbio.com:9000/weixinapp-vote/face.png"
                    ],
                    remark: "备注",
                    longitude: "120.12703000",
                    latitude: "30.27392300"
                },
                {
                    count: 0,
                    org: {
                        id: 0,
                        name: "浙江省宁波市北仑区第二骨科医院"
                    },
                    id: "1",
                    userId: 1234,
                    jobNumber: "PO0123",
                    userName: "张三",
                    date: "2020-11-15",
                    time: "13：50",
                    place: "宁波第一医院地址",
                    detailPlace: "宁波第一医院详细地址",
                    imgUrlList: [
                        "https://tp.huadongbio.com:9000/weixinapp-vote/product.png",
                        "https://tp.huadongbio.com:9000/weixinapp-vote/face.png"
                    ],
                    remark: "备注",
                    longitude: "120.12703000",
                    latitude: "30.27392300"
                }
            ]
        },
        {
            jobNumber: "PO0124",
            userName: "李四",
            userSignCount: 10,
            userSignVOList: [
                {
                    count: 0,
                    org: {
                        id: 0,
                        name: "浙江省宁波市北仑区第一骨科医院"
                    },
                    id: "1",
                    userId: 1234,
                    jobNumber: "PO0123",
                    userName: "张三",
                    date: "2020-11-15",
                    time: "13：50",
                    place: "宁波第一医院地址",
                    detailPlace: "宁波第一医院详细地址",
                    imgUrlList: [
                        "https://tp.huadongbio.com:9000/weixinapp-vote/product.png",
                        "https://tp.huadongbio.com:9000/weixinapp-vote/face.png"
                    ],
                    remark: "备注",
                    longitude: "120.12703000",
                    latitude: "30.27392300"
                },
                {
                    count: 0,
                    org: {
                        id: 0,
                        name: "浙江省宁波市北仑区第二骨科医院"
                    },
                    id: "1",
                    userId: 1234,
                    jobNumber: "PO0123",
                    userName: "张三",
                    date: "2020-11-15",
                    time: "13：50",
                    place: "宁波第一医院地址",
                    detailPlace: "宁波第一医院详细地址",
                    imgUrlList: [
                        "https://tp.huadongbio.com:9000/weixinapp-vote/product.png",
                        "https://tp.huadongbio.com:9000/weixinapp-vote/face.png"
                    ],
                    remark: "备注",
                    longitude: "120.12703000",
                    latitude: "30.27392300"
                }
            ]
        },
        {
            jobNumber: "PO0123",
            userName: "张三",
            userSignCount: 10,
            userSignVOList: [
                {
                    count: 0,
                    org: {
                        id: 0,
                        name: "浙江省宁波市北仑区第一骨科医院"
                    },
                    id: "1",
                    userId: 1234,
                    jobNumber: "PO0123",
                    userName: "张三",
                    date: "2020-11-15",
                    time: "13：50",
                    place: "宁波第一医院地址",
                    detailPlace: "宁波第一医院详细地址",
                    imgUrlList: [
                        "https://tp.huadongbio.com:9000/weixinapp-vote/product.png",
                        "https://tp.huadongbio.com:9000/weixinapp-vote/face.png"
                    ],
                    remark: "备注",
                    longitude: "120.12703000",
                    latitude: "30.27392300"
                },
                {
                    count: 0,
                    org: {
                        id: 0,
                        name: "浙江省宁波市北仑区第二骨科医院"
                    },
                    id: "1",
                    userId: 1234,
                    jobNumber: "PO0123",
                    userName: "张三",
                    date: "2020-11-15",
                    time: "13：50",
                    place: "宁波第一医院地址",
                    detailPlace: "宁波第一医院详细地址",
                    imgUrlList: [
                        "https://tp.huadongbio.com:9000/weixinapp-vote/product.png",
                        "https://tp.huadongbio.com:9000/weixinapp-vote/face.png"
                    ],
                    remark: "备注",
                    longitude: "120.12703000",
                    latitude: "30.27392300"
                }
            ]
        },
        {
            jobNumber: "PO0124",
            userName: "李四",
            userSignCount: 10,
            userSignVOList: [
                {
                    count: 0,
                    org: {
                        id: 0,
                        name: "浙江省宁波市北仑区第一骨科医院"
                    },
                    id: "1",
                    userId: 1234,
                    jobNumber: "PO0123",
                    userName: "张三",
                    date: "2020-11-15",
                    time: "13：50",
                    place: "宁波第一医院地址",
                    detailPlace: "宁波第一医院详细地址",
                    imgUrlList: [
                        "https://tp.huadongbio.com:9000/weixinapp-vote/product.png",
                        "https://tp.huadongbio.com:9000/weixinapp-vote/face.png"
                    ],
                    remark: "备注",
                    longitude: "120.12703000",
                    latitude: "30.27392300"
                },
                {
                    count: 0,
                    org: {
                        id: 0,
                        name: "浙江省宁波市北仑区第二骨科医院"
                    },
                    id: "1",
                    userId: 1234,
                    jobNumber: "PO0123",
                    userName: "张三",
                    date: "2020-11-15",
                    time: "13：50",
                    place: "宁波第一医院地址",
                    detailPlace: "宁波第一医院详细地址",
                    imgUrlList: [
                        "https://tp.huadongbio.com:9000/weixinapp-vote/product.png",
                        "https://tp.huadongbio.com:9000/weixinapp-vote/face.png"
                    ],
                    remark: "备注",
                    longitude: "120.12703000",
                    latitude: "30.27392300"
                }
            ]
        },
        {
            jobNumber: "PO0123",
            userName: "张三",
            userSignCount: 10,
            userSignVOList: [
                {
                    count: 0,
                    org: {
                        id: 0,
                        name: "浙江省宁波市北仑区第一骨科医院"
                    },
                    id: "1",
                    userId: 1234,
                    jobNumber: "PO0123",
                    userName: "张三",
                    date: "2020-11-15",
                    time: "13：50",
                    place: "宁波第一医院地址",
                    detailPlace: "宁波第一医院详细地址",
                    imgUrlList: [
                        "https://tp.huadongbio.com:9000/weixinapp-vote/product.png",
                        "https://tp.huadongbio.com:9000/weixinapp-vote/face.png"
                    ],
                    remark: "备注",
                    longitude: "120.12703000",
                    latitude: "30.27392300"
                },
                {
                    count: 0,
                    org: {
                        id: 0,
                        name: "浙江省宁波市北仑区第二骨科医院"
                    },
                    id: "1",
                    userId: 1234,
                    jobNumber: "PO0123",
                    userName: "张三",
                    date: "2020-11-15",
                    time: "13：50",
                    place: "宁波第一医院地址",
                    detailPlace: "宁波第一医院详细地址",
                    imgUrlList: [
                        "https://tp.huadongbio.com:9000/weixinapp-vote/product.png",
                        "https://tp.huadongbio.com:9000/weixinapp-vote/face.png"
                    ],
                    remark: "备注",
                    longitude: "120.12703000",
                    latitude: "30.27392300"
                }
            ]
        },
        {
            jobNumber: "PO0124",
            userName: "李四",
            userSignCount: 10,
            userSignVOList: [
                {
                    count: 0,
                    org: {
                        id: 0,
                        name: "浙江省宁波市北仑区第一骨科医院"
                    },
                    id: "1",
                    userId: 1234,
                    jobNumber: "PO0123",
                    userName: "张三",
                    date: "2020-11-15",
                    time: "13：50",
                    place: "宁波第一医院地址",
                    detailPlace: "宁波第一医院详细地址",
                    imgUrlList: [
                        "https://tp.huadongbio.com:9000/weixinapp-vote/product.png",
                        "https://tp.huadongbio.com:9000/weixinapp-vote/face.png"
                    ],
                    remark: "备注",
                    longitude: "120.12703000",
                    latitude: "30.27392300"
                },
                {
                    count: 0,
                    org: {
                        id: 0,
                        name: "浙江省宁波市北仑区第二骨科医院"
                    },
                    id: "1",
                    userId: 1234,
                    jobNumber: "PO0123",
                    userName: "张三",
                    date: "2020-11-15",
                    time: "13：50",
                    place: "宁波第一医院地址",
                    detailPlace: "宁波第一医院详细地址",
                    imgUrlList: [
                        "https://tp.huadongbio.com:9000/weixinapp-vote/product.png",
                        "https://tp.huadongbio.com:9000/weixinapp-vote/face.png"
                    ],
                    remark: "备注",
                    longitude: "120.12703000",
                    latitude: "30.27392300"
                }
            ]
        },
    ]

    private scroll() {
        console.log("scroll:::")
    }
};
</script>
<style>

</style>