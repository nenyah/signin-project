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
        <view
            class="w-full flex flex-col justify-center items-center"
            style="height:40vh;"
        >
            <view
                class="panel rounded-full circle flex flex-col justify-center items-center mb-20"
                style="background:#f8b55e;"
                @tap="goSubmit"
                v-if="user.userName===undefined"
            >
                <view class="scanner"></view>
                <view class="text-gray-300 text-3xl">签到</view>
                <view class="text-white text-5xl">{{ ctime }}</view>
            </view>
            <view
                class="rounded-full w-260 h-260 circle flex flex-col justify-center items-center mb-20"
                style="background:#f8b55e;"
                @tap="goSubmit"
                v-else
            >
                <view class="text-gray-300 text-3xl">签到</view>
                <view class="text-white text-5xl">{{ ctime }}</view>
            </view>
            <view v-if="checkTimes > 0" class="text-gray-700 text-3xl">
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

    get address() {
        console.log(`address:::`, this.$store.getters['user/address'])
        return this.$store.getters['user/address']
    }

    private goSubmit() {
        console.log(`goSubmit:::`, this.address, this.user.selectOrg, this.user.selectOrg)
        //  判断地址定位有没有获取成功
        if (!this.address) {
            uni.showToast({title: `正在获取定位地址，请稍后！`})
            return
        }
        if (!this.user.jobNumber) {
            uni.showToast({title: `正在获取用户信息，请稍后！`})
            return
        }
        // 1. 判断要不要选择客户
        // 2. 要选择客户判断有没有选择
        if (this.user.selectOrg && !this.customer.name) {
            uni.showToast({title: '还没有选择客户哦！'})
            return
        }
        uni.navigateTo({
            url: '/pages/submit/submit',
        })
    }
}
</script>

<style lang="scss">
.panel {
    position: relative;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    box-shadow: inset 0 0 0 99px #f7b662, inset 0 0 0 100px whitesmoke;
    border-radius: 50%;
    transform: rotate(0deg);
    overflow: hidden;
    width: 2.6rem;
    height: 2.6rem;
    border: 1px solid #f7b662;

    .scanner {
        animation: scanning 3s infinite linear;
        background-image: linear-gradient(to top right, #fff 0%, rgba(0, 0, 0, 0) 50%);
        transform-origin: top left;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 2.6rem;
        height: 2.6rem;
        border-left: 1px solid #f7b662;
    }

    .panel:before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 50%;
        width: 1px;
        height: 100%;
        background: #f7b662;
    }

    .panel:after {
        content: '';
        display: block;
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        height: 1px;
        background: #f7b662;
    }

    @keyframes scanning {
        100% {
            -ms-transform: rotate(360deg);
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

}
</style>
