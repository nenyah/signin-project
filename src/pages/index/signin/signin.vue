<!--
 * @Description: 
 * @Author: Steven
 * @Date: 2020-10-28 13:21:13
 * @LastEditors: Steven
 * @LastEditTime: 2020-10-28 14:47:07
-->
<template>
    <view
        style="background-color:#f0eff5;"
        class="w-full min-h-2-3 text-center"
    >
        <view
            class="w-full h-64 flex flex-col justify-center items-center py-10"
        >
            <view
                class="rounded-full bg-orange-500 w-32 h-32 circle flex flex-col justify-center items-center"
                @click="goSubmit"
            >
                <view class="text-white text-xl">签到</view>
                <view class="text-white text-3xl">{{ ctime }}</view>
            </view>
            <view v-if="checkTimes" class="mt-5 text-gray-500">
                <view
                    class="fa fa-check-circle-o color-green mx-1"
                    aria-hidden="true"
                >
                </view>
                今日你已签到
                <text class="color-warning">{{ checkTimes }}
                </text
                >
                次
            </view>
            <view v-else class="mt-5 text-gray-500">今日你还没有签到</view>
        </view>
        <view class="text-gray-500 mt-10" @click="goTest"
        >钉钉只会在你主动签到时获取位置信息
        </view
        >
    </view>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"
import moment from "moment"
@Component({})
export default class Signin extends Vue {
    private checkTimes = 0
    private ctime = moment().format('HH:mm')
    private onSubmit() {
        
    }
}
</script>

<style scoped lang="scss">

</style>
