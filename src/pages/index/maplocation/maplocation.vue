<!--
 * @Description: 
 * @Author: Steven
 * @Date: 2020-10-28 13:53:09
 * @LastEditors: Steven
 * @LastEditTime: 2020-10-28 14:05:07
-->
<template>
    <view>
        <view class="flex justify-between p-2 bg-color-white items-center">
            <view class="text-2xl w-3-4 no-wrap">
                宁波北仑华东医药门口
            </view>
            <view
                class="color-primary text-sm w-1-4 text-right"
                onTap="adjustLocation"
            >
                地点微调
            </view>
        </view>
        <!-- 地图 -->
        <view
            style="border-bottom:#e2e2e2 solid 1rpx;"
            class="px-2 pb-2 bg-color-white"
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

<style scoped></style>
