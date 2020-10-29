<!--
 * @Description: 
 * @Author: Steven
 * @Date: 2020-10-28 13:53:09
 * @LastEditors: Steven
 * @LastEditTime: 2020-10-29 14:18:22
-->
<template>
    <view class="bg-white w-full border-0 border-b-2 border-gray-500 border-solid mb-2">
        <view class="flex justify-between p-20  items-center">
            <view class="text-4xl font-bold w-8_12 truncate flex-grow">
                {{ address }}
            </view>
            <view
                class="text-blue-500 text-2xl font-bold flex-shrink-0"
                @click="adjustLocation"
            >
                地点微调
            </view>
        </view>
        <!-- 地图 -->
        <view
            class="p-20"
        >
            <map
                style="width: 100%; height: 100px;"
                :latitude="latitude"
                :longitude="longitude"
                :markers="covers"
            >
            </map>
        </view>
    </view>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class Maplocation extends Vue {
    private id = 0 // 使用 marker点击事件 需要填写id
    private title = 'map'
    private latitude = 39.909
    private longitude = 116.39742
    private covers = [
        {
            latitude: 39.909,
            longitude: 116.39742,
            iconPath: '../../../static/location.png',
        },
        {
            latitude: 39.9,
            longitude: 116.39,
            iconPath: '../../../static/location.png',
        },
    ]
    private address =
        '宁波市公安局北仑分局交通警察北仑庐山西路华东医药有限公司西门1289号'
}
</script>

<style scoped>
.px-2 {
    border-bottom: #e2e2e2 solid 1 rpx;
}
</style>
