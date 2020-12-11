<!--
 * @Description: 
 * @Author: Steven
 * @Date: 2020-10-28 13:21:13
 * @LastEditors: Steven
 * @LastEditTime: 2020-10-29 14:28:45
-->
<template>
    <view
        class="w-full text-center flex-auto flex flex-col justify-around box-border bg-helper-gray"
    >
        <view class="w-full flex flex-col justify-center items-center" style="height:40vh;">
            <view
                class="rounded-full w-260 h-260 circle flex flex-col justify-center items-center mb-20"
                style="background:#f8b55e;"
                @tap="goSubmit"
            >
                <view class="text-gray-300 text-3xl">签到</view>
                <view class="text-white text-5xl">{{ ctime }}</view>
            </view>
            <view v-if="checkTimes>0" class="text-gray-700 text-3xl">
                <view
                    class="fa fa-check-circle-o text-green-500 mx-1"
                    aria-hidden="true"
                >
                </view>
                今日你已签到
                <text class="text-orange-900">{{ checkTimes }}</text>
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
import {Component, Vue} from 'vue-property-decorator'

@Component({})
export default class Signin extends Vue {
    $store: any

    get ctime() {
        return this.$store.state.user.ctime.format('HH:mm')
    }

    get customer() {
        return this.$store.state.customer.org
    }

    get user() {
        return this.$store.state.user.info
    }

    get checkTimes() {
        const signinRecordToday = this.$store.state.signin.signinRecordToday
        return signinRecordToday.userSignCount || 0
    }


    private goSubmit() {
        // 1. 判断要不要选择客户
        // 2. 要选择客户判断有没有选择
        if (this.user.selectOrg && !this.customer.name) {
            uni.showToast({title: '还没有选择客户哦！'})
            return
        }
        uni.navigateTo({
            url: '/pages/submit/submit'
        })
    }
}
</script>

<style scoped lang="scss">

</style>
