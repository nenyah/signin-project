<!--
 * @Description: 
 * @Author: Steven
 * @Date: 2020-10-28 13:10:33
 * @LastEditors: Steven
 * @LastEditTime: 2020-10-28 15:15:32
-->
<template>
    <view
        class="flex w-full text-gray-400 bg-gray-100 p-2 text-xs items-center justify-between"
    >
        <view class="flex items-baseline">
            <view class="fa fa-clock-o mx-1" aria-hidden="true"></view>
            <view class="">{{ today }}</view>
        </view>
        <view class="flex items-baseline">
            <view class="fa fa-sitemap mx-1" aria-hidden="true"></view>
            <view class=" w-full no-wrap">当前企业：{{ company }}</view>
        </view>
    </view>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"

@Component({})
export default class Header extends Vue {
    private company = "宁波华东医药有限公司"
    private today = new Date().toLocaleDateString()
}
</script>

<style scoped></style>
