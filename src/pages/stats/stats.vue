<!--
 * @Description: 
 * @Author: Steven
 * @Date: 2020-10-28 11:31:56
 * @LastEditors: Steven
 * @LastEditTime: 2020-10-29 15:10:40
-->
<template>
    <view class="bg-white h-full">
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
import {UserSignVO} from "@/common/interface"

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
    private activeTab = 1
    private items: UserSignVO[] = [{
        count: 0,
        jobNumber: "NB1466",
        org: {id: 6853, name: "西岗区悦美雅医疗美容诊所"},
        id: "34",
        userId: 122,
        userName: "谭燕",
        date: "2020-11-04",
        time: "09:06:38",
        place: "杭州市西湖区天目山路248号",
        detailPlace: "杭州市西湖区天目山路248号",
        remark: "",
        imgUrlList: [
            "https://tp.huadongbio.com:9000/weixinapp-vote/product.png",
            "https://tp.huadongbio.com:9000/weixinapp-vote/face.png"
        ],
        longitude: "120.12703000",
        latitude: "30.27392300"
    }]
    private notSignRecords = [{name:'张三'},{name:'李四'},{name:'王五'},{name:'麻子'}]
};
</script>

<style scoped>

</style>