<!--
 * @Description: 
 * @Author: Steven
 * @Date: 2020-10-28 13:53:09
 * @LastEditors: Steven
 * @LastEditTime: 2020-10-28 15:18:24
-->
<template>
    <view>
        <view class="flex justify-between p-2 bg-gray-100 items-center w-full">
            <view class="text-2xl truncate">
                宁波北仑庐山西路华东医药有限公司西门1289号
            </view>
            <view
                class="text-blue-500 text-sm w-16 text-right flex-shrink-0"
                @click="adjustLocation"
            >
                地点微调
            </view>
        </view>
        <!-- 地图 -->
        <view
            class="px-2 pb-2 bg-gray-100 border-b-2 border-solid border-gray-400"
        >
            <map style="width: 100%; height: 100px;" :latitude="latitude" :longitude="longitude" :markers="covers">
            </map>
        </view>
    </view>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"

@Component({})
export default class Maplocation extends Vue {
    private id = 0 // 使用 marker点击事件 需要填写id
    private title = "map"
    private latitude = 39.909
    private longitude = 116.39742
    private covers = [{
        latitude: 39.909,
        longitude: 116.39742,
        iconPath: "../../../static/location.png"
    }, {
        latitude: 39.90,
        longitude: 116.39,
        iconPath: "../../../static/location.png"
    }]
}
</script>

<style scoped>
.px-2 {
    border-bottom: #e2e2e2 solid 1 rpx;
}
</style>
