<!--
 * @Description: 
 * @Author: Steven
 * @Date: 2020-10-28 13:19:16
 * @LastEditors: Steven
 * @LastEditTime: 2020-10-28 15:01:42
-->
<template>
    <view class="flex bg-gray-100 items-center shadow justify-around px-2">
        <view class="text-lg text-gray-900 font-bold w-24">拜访对象</view>
        <view
            class="p-2 text-sm flex-grow"
            :class="
                    client.name.length === 0 ? 'color-label' : 'color-big-title'
                "
            @click="handleTap"
        >
            {{ client.name.length > 0 ? client.name : "请选择拜访客户" }}
        </view>
        <view
            @click="handleTap"
            class="w-10 flex flex-col items-center justify-center"
        >
            <view
                class="fa fa-address-book-o fa-lg text-blue-500 my-2"
                aria-hidden="true"
            ></view>
            <view class="text-xs text-blue-500">选择</view>
        </view>
    </view>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"

@Component({})
export default class Org extends Vue {
    private client = {
        name: "",
    }
}
</script>

<style scoped></style>
