<!--
 * @Description: 
 * @Author: Steven
 * @Date: 2020-10-28 11:31:56
 * @LastEditors: Steven
 * @LastEditTime: 2020-10-29 15:10:40
-->
<template>
    <view class="bg-white h-full">
        <s-scope></s-scope>
        <s-tab-control
            :tabs="tabs"
            :activeTab="activeTab"
            @onTabClick="onTabClick"
        ></s-tab-control>
        <s-person-cards
            :activeIndex="activeTab"
            :notSignRecords="notSignRecords"
            onLower="onLower"
        ></s-person-cards>
        <!-- <s-button></s-button> -->
    </view>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import SScope from './components/s-scope.vue'
import STabControl from './components/s-tab-control.vue'
import SPersonCards from './components/s-person-cards.vue'

@Component({
    components: {
        SScope,
        STabControl,
        SPersonCards,
    }
})
export default class Stats extends Vue {
    private activeTab = 0
    private notSignRecords = [{name: '张三'}, {name: '李四'}, {name: '王五'}, {name: '麻子'}]


    get tabs() {
        const tabs = this.$store.state.signin.tabs
        console.log(tabs)
        return [{title: tabs[0] || 0, subTitle: '已签到'}, {title: tabs[1] || 0, subTitle: '未签到'}]
    }

    async onLoad() {
        // 1. 获取部门信息
        await this.$store.dispatch('dept/getDeptInfo')
        // 2. 获取部门用户
        await this.$store.dispatch('dept/getDeptUser')
        // 3. 获取部门用户签到信息
        await this.$store.dispatch('signin/getSigninRecord')
    }

    async onShow() {
        // 3. 获取部门用户签到信息
        await this.$store.dispatch('signin/getSigninRecord')
    }

    private onTabClick(e: any) {
        console.log('onTabClick:::', e)
        this.activeTab = e
    }
};
</script>

<style scoped>

</style>