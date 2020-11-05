<template>

    <view class="map-bg px-20 h-200 flex flex-col justify-around text-2xl">
        <view class="flex flex-col h-80 justify-between">
            <view
                class="w-300 flex p-20 my-10 bg-white text-gray-500 rounded-2xl items-center justify-around shadow"
                @click="choosePerson"
            >
                <view
                    aria-hidden="true"
                    class="fa fa-globe mx-1 flex-shrink"
                ></view>
                <view class="flex-shrink">范围：{{ userNum > 0 ? userNum + "人" : dept[0].name }}</view>
                <view
                    class="fa fa-angle-down mx-1 flex-shrink"
                    aria-hidden="true"
                ></view>
            </view>
            <view
                class="w-200 flex p-20 my-10 bg-white text-gray-500 rounded-2xl items-center justify-around shadow"
                @click="chooseDate"
            >
                <view
                    class="fa fa-calendar mx-1"
                    aria-hidden="true"
                ></view>
                <view>{{ today }}</view>
                <view
                    class="fa fa-angle-down mx-1"
                    aria-hidden="true"
                ></view>
            </view>
        </view>
        <view
            class="flex justify-end text-blue-500 items-center"
            @click="goToHistory"
        >
            <view class="mr-10">
                签到历史分布
            </view>
            <view
                class="fa fa-angle-right"
                aria-hidden="true"
            ></view>
        </view>
    </view>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"

@Component
export default class SScope extends Vue {
    private userNum = 0
    private dept = [{
        name:"信息管理中心"
    }]
    private today = new Date().toLocaleDateString()
    private choosePerson(){
        console.log("选择部门:::")
    }
    private chooseDate(){
        console.log("选择日期:::")
    }
    private goToHistory(){
        console.log("跳转历史页面:::")
    }
}
</script>

<style scoped lang="scss">

</style>