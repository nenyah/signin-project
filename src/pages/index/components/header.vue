<!--
 * @Description: 
 * @Author: Steven
 * @Date: 2020-10-28 13:10:33
 * @LastEditors: Steven
 * @LastEditTime: 2020-10-29 11:28:09
-->
<template>
    <view
        class="flex w-full text-gray-500 bg-white px-20 py-30 items-center justify-between text-2lg border-0 border-b-2 border-gray-500 border-solid"
    >
        <view class="flex items-center flex-shrink">
            <view class="fa-stack text-lg mr-10">
                <view class="fa fa-circle fa-stack-2x"></view>
                <view class="fa fa-chevron-down fa-stack-1x fa-rotate-270 fa-inverse"></view>
            </view>
            <view class="">{{ today }}</view>
        </view>
        <view class="flex items-center ml-20 flex-1">
            <view class="fa-stack text-lg mr-10">
                <view class="fa fa-circle fa-stack-2x"></view>
                <view class="fa fa-sitemap fa-stack-1x fa-inverse"></view>
            </view>
            <view class="w-260 truncate">当前企业：{{ company }}</view>
        </view>
    </view>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class Header extends Vue {
    private company = '华东宁波医药有限公司'
    private today = new Date().toLocaleDateString()
}
</script>

<style scoped></style>
