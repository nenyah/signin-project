<!--
 * @Description: 
 * @Author: Steven
 * @Date: 2020-10-28 11:31:56
 * @LastEditors: Steven
 * @LastEditTime: 2020-10-29 15:10:40
-->
<template>
    <view class="bg-color-white h-full">
        <s-scope
            :dept="dept"
            onGetNewDate="onGetNewDate"
            onToHistory="onToHistory"
            onGetNewUser="onGetNewUser"
        ></s-scope>
        <s-tab-control
            :tabs="tabs"
            :activeTab="activeTab"
            onTabClick="onTabClick"
        ></s-tab-control>
        <s-person-cards
            :signRecords="items"
            :activeIndex="activeTab"
            :notSignRecords="notSignRecords"
            onLower="onLower"
        ></s-person-cards>
        <!-- <s-button></s-button> -->
    </view>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"
import SScope from "./components/s-scope.vue"
import STabControl from "./components/s-tab-control.vue"
import SPersonCards from "./components/s-person-cards.vue"
import {SignHistory} from "@/common/interface"

@Component({
    components: {
        SScope,
        STabControl,
        SPersonCards,
    }
})
export default class Stats extends Vue {
    private dept = "信息管理中心"
    private tabs = [{title: 7, subTitle: "已签到"}, {title: 0, subTitle: "未签到"}]
    private activeTab = 0
    // private items: SignHistory = []
};
</script>

<style scoped>

</style>