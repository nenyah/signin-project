<!--
 * @Description: 
 * @Author: Steven
 * @Date: 2020-10-28 13:53:09
 * @LastEditors: Steven
 * @LastEditTime: 2020-10-29 14:18:22
-->
<template>
    <view class="bg-white w-full border-0 border-b-2 border-gray-300 border-solid mb-2">
        <view class="flex justify-between p-20  items-baseline">
            <view class="text-4xl w-8_12 truncate flex-grow">
                {{ address }}
            </view>
            <view
                class="text-blue-500 text-3xl flex-shrink-0"
                @tap="goLocation"
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
                :latitude="location.latitude"
                :longitude="location.longitude"
                :markers="covers"
                scale="14"
                @tap="goLocation"
            >
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
    $store: any

    get covers() {
        const {latitude, longitude} = this.$store.state.user.location
        return [
            {
                latitude: latitude != null ? latitude : 121.796929,
                longitude: longitude != null ? longitude : 29.903542,
                width: 25,
                height: 25,
                iconPath: "/static/images/location.png",
            },
        ]
    }


    get address() {
        return this.$store.getters["user/address"]
    }

    get location() {
        return this.$store.state.user.location
    }

    private goLocation() {
        uni.navigateTo({
            url: "/pages/location/location"
        })
    }
}
</script>

<style scoped>
</style>
