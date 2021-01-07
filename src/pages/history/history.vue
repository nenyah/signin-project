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
                    :longitude="midLocation.longitude"
                    :latitude="midLocation.latitude"
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
import {Component, Vue} from 'vue-property-decorator'
import {IUserSignVO} from '../../common/interface'

@Component({})
export default class History extends Vue {
    private history = true
    private pageProfile = false
    $store: any

    get items() {
        return this.$store.state.signin.signinRecord
    }

    get midLocation() {
        const locations = this.items.map((item: IUserSignVO) => {
            return [Number.parseFloat(item.latitude), Number.parseFloat(item.longitude)]
        })
        const num = locations.length
        let latitude = 0, longitude = 0
        for (let coord of locations) {
            const lat = coord[0]
            const lon = coord[1]
            latitude += lat
            longitude += lon
        }
        console.log('midLocation:::', locations, num, latitude, longitude)
        latitude /= num
        longitude /= num
        return {latitude, longitude}
    }

    get markers() {
        return this.items.map((item, index) => {
            return {
                id: index,
                longitude: item.longitude,
                latitude: item.latitude,
                iconPath: '/static/images/location.png'
            }
        })
    }

    private scroll() {
        console.log('scroll:::')
    }
};
</script>
<style>

</style>