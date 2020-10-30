<!--
 * @Description: 
 * @Author: Steven
 * @Date: 2020-10-28 13:21:13
 * @LastEditors: Steven
 * @LastEditTime: 2020-10-29 14:28:45
-->
<template>
    <view
        style="background-color:#f0eff5;"
        class="w-full text-center flex-auto flex flex-col justify-around box-border"
    >
        <view class="w-full flex flex-col justify-center items-center" style="height:40vh;">
            <view
                class="rounded-full w-260 h-260 circle flex flex-col justify-center items-center mb-20"
                style="background:#f8b55e;"
                @click="goSubmit"
            >
                <view class="text-gray-300 text-3xl">签到</view>
                <view class="text-white text-5xl">{{ ctime }}</view>
            </view>
            <view v-if="checkTimes" class="text-gray-700 text-3xl">
                <view
                    class="fa fa-check-circle-o color-green mx-1"
                    aria-hidden="true"
                >
                </view>
                今日你已签到
                <text class="color-warning">{{ checkTimes }} </text>
                次
            </view>
            <view v-else class="text-gray-700 text-3xl">今日你还没有签到</view>
        </view>
        <view class="text-gray-500">
            钉钉只会在你主动签到时获取位置信息
        </view>
    </view>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import moment from 'moment'
@Component({})
export default class Signin extends Vue {
    private checkTimes = 0
    private ctime = moment().format('HH:mm')
    private goSubmit() {
        uni.navigateTo({
            url:"/pages/submit/submit"
        })
    }
}
</script>

<style scoped lang="scss"></style>
