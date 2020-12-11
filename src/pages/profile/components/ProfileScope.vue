<template>
    <view
        class="border-0 border-b-2 border-gray-300 border-solid py-20 map-bg"
    >
        <view
            class="flex shadow rounded-full w-200 justify-around p-10 m-20 text-gray-700 text-3xl bg-white"
            @tap="pickMonth"
        >
            <view class="fa fa-calendar mx-10" aria-hidden="true">
            </view>
            <view>
                {{ month }}
            </view>
            <view class="fa fa-angle-down" aria-hidden="true">
            </view>
        </view>
        <view class="flex justify-between p-20">
            <view class="flex items-center ">
                <view
                    class="w-140 h-140 rounded-full m-10 bg-blue-500 text-gray-100 font-black text-4xl flex justify-center items-center">
                    {{
                        userInfo.username.length > 2 ? userInfo.username.substr(0, 2)
                                                     : userInfo.username
                    }}
                </view>
                <view>
                    <view class="text-5xl font-bold">
                        {{ userInfo.username }}
                    </view>
                    <view class="my-10">
                        本月签到
                        <text class="text-blue-500">{{ userSignCount }}</text>
                        次
                    </view>
                    <view class="text-gray-500 text-2xl">
                        {{ company }}
                    </view>
                </view>
            </view>
            <view class="text-blue-500 self-end" @tap="goToHistory">
                签到历史分布 >
            </view>
        </view>
    </view>
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'

@Component
export default class ProfileScope extends Vue {
    private company = '华东宁波医药有限公司'

    get userInfo() {
        return {username: this.$store.state.signin.userName}
    }

    get userSignCount() {
        console.log('signinRecordMonth:::', this.$store.state.signin.signinRecordMonth)
        const recordMonth = this.$store.state.signin.signinRecordMonth
        return recordMonth.length > 0 ? recordMonth[0].userSignCount : 0

    }

    get month() {
        return this['$store'].state.signin.selectedMonth
    }

    private pickMonth() {
        //#ifdef MP-ALIPAY
        my.datePicker({
            format: 'yyyy-MM',
            currentDate: this.month,
            success: (res) => {
                console.log('选择日期:::', res)
                // 1. 更新日期
                this['$store'].commit('signin/updateMonth', res.date)
                // 2. 调用获取签到信息
                this['$store'].dispatch('signin/getSigninRecordMonth')
            },
        })
        // #endif
    }

    private goToHistory() {
        console.log('goToHistory')
        uni.navigateTo({url: `/pages/history/history`})
    }
}
</script>
