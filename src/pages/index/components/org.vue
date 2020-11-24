<!--
 * @Description: 
 * @Author: Steven
 * @Date: 2020-10-28 13:19:16
 * @LastEditors: Steven
 * @LastEditTime: 2020-10-29 13:38:31
-->
<template>
    <view
        class="flex bg-white w-full box-border items-center shadow justify-between px-20 py-10 border-0 border-b-2 border-gray-300 border-solid"
    >
        <view class="text-4xl text-gray-900 font-bold flex-shrink-0"
            >拜访对象</view
        >
        <view
            class="text-3xl"
            :class="
                client.name.length === 0 ? 'text-gray-400' : 'text-gray-900'
            "
            @click="goCustomer"
        >
            {{ client.name.length > 0 ? client.name : '请选择拜访客户' }}
        </view>
        <view
            @click="goCustomer"
            class="flex flex-col items-center justify-center"
        >
            <view
                class="fa fa-address-book-o fa-lg text-blue-500 my-10"
                aria-hidden="true"
            ></view>
            <view class="text-bash text-blue-500">选择</view>
        </view>
    </view>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class Org extends Vue {
    private client = {
        name: '',
    }
    private goCustomer(){
        uni.navigateTo({
            url:"/pages/customer/customer"
        })
    }
}
</script>

<style scoped></style>
