<template>
    <view>
        <scroll-view
            scroll-y="true"
            style="height: 100vh;width:100vw;"
            class="p-20 box-border"
            @scrolltoupper="upper"
            @scrolltolower="lower"
            @scroll="scroll"
        >
            <view
                class="bg-white"
                :class="navShow?'nav':''"
            >
                <uni-search-bar
                    placeholder="搜索"
                    radius="50"
                    @confirm="search"
                >
                </uni-search-bar>
            </view>
            <block v-if="numClients>0">
                <view class="ml-2">
                    共 {{ numClients }} 家
                </view>
                <scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scrolltoupper="upper"
                             @scrolltolower="lower"
                             @scroll="scroll">
                    <!-- 左侧显示略缩图、图标 -->
                    <uni-list>
                        <uni-list-item title="宁波第一医院" note="宁波第一医院详细地址北仑区新大路100098号"
                                       thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png"
                                       thumb-size="lg" rightText="查看联系人" @click="expand"></uni-list-item>
                        <uni-list-item title="张医生" note="138****8868" show-arrow="{{false}}"></uni-list-item>
                        <uni-list-item title="李院长" note="130****8868" show-arrow="{{false}}"></uni-list-item>
                        <uni-list-item title="王科长" note="139****8868" show-arrow="{{false}}"></uni-list-item>
                        <uni-list-item title="宁波第一医院" note="宁波第一医院详细地址北仑区新大路100098号"
                                       thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png"
                                       thumb-size="lg" rightText="查看联系人" @click="expand"></uni-list-item>
                        <uni-list-item title="宁波第一医院" note="宁波第一医院详细地址北仑区新大路100098号"
                                       thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png"
                                       thumb-size="lg" rightText="查看联系人" @click="expand"></uni-list-item>
                        <uni-list-item title="宁波第一医院" note="宁波第一医院详细地址北仑区新大路100098号"
                                       thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png"
                                       thumb-size="lg" rightText="查看联系人" @click="expand"></uni-list-item>
                        <uni-list-item title="宁波第一医院" note="宁波第一医院详细地址北仑区新大路100098号"
                                       thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png"
                                       thumb-size="lg" rightText="查看联系人" @click="expand"></uni-list-item>
                        <uni-list-item title="宁波第一医院" note="宁波第一医院详细地址北仑区新大路100098号"
                                       thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png"
                                       thumb-size="lg" rightText="查看联系人" @click="expand"></uni-list-item>
                        <uni-list-item title="宁波第一医院" note="宁波第一医院详细地址北仑区新大路100098号"
                                       thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png"
                                       thumb-size="lg" rightText="查看联系人" @click="expand"></uni-list-item>
                        <uni-list-item title="宁波第一医院" note="宁波第一医院详细地址北仑区新大路100098号"
                                       thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png"
                                       thumb-size="lg" rightText="查看联系人" @click="expand"></uni-list-item>
                        <uni-list-item title="宁波第一医院" note="宁波第一医院详细地址北仑区新大路100098号"
                                       thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png"
                                       thumb-size="lg" rightText="查看联系人" @click="expand"></uni-list-item>
                        <uni-list-item title="宁波第一医院" note="宁波第一医院详细地址北仑区新大路100098号"
                                       thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png"
                                       thumb-size="lg" rightText="查看联系人" @click="expand"></uni-list-item>
                        <uni-list-item title="宁波第一医院" note="宁波第一医院详细地址北仑区新大路100098号"
                                       thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png"
                                       thumb-size="lg" rightText="查看联系人" @click="expand"></uni-list-item>
                        <uni-list-item title="宁波第一医院" note="宁波第一医院详细地址北仑区新大路100098号"
                                       thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png"
                                       thumb-size="lg" rightText="查看联系人" @click="expand"></uni-list-item>
                        <uni-list-item title="宁波第一医院" note="宁波第一医院详细地址北仑区新大路100098号"
                                       thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png"
                                       thumb-size="lg" rightText="查看联系人" @click="expand"></uni-list-item>
                        <uni-list-item title="宁波第一医院" note="宁波第一医院详细地址北仑区新大路100098号"
                                       thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png"
                                       thumb-size="lg" rightText="查看联系人" @click="expand"></uni-list-item>
                        <uni-list-item title="宁波第一医院" note="宁波第一医院详细地址北仑区新大路100098号"
                                       thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png"
                                       thumb-size="lg" rightText="查看联系人" @click="expand"></uni-list-item>
                        <uni-list-item title="宁波第一医院" note="宁波第一医院详细地址北仑区新大路100098号"
                                       thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png"
                                       thumb-size="lg" rightText="查看联系人" @click="expand"></uni-list-item>
                        <uni-list-item title="宁波第一医院" note="宁波第一医院详细地址北仑区新大路100098号"
                                       thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png"
                                       thumb-size="lg" rightText="查看联系人" @click="expand"></uni-list-item>
                    </uni-list>
                </scroll-view>
            </block>
            <uni-load-more :status="more"></uni-load-more>
        </scroll-view>
    </view>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"
import uniSearchBar from "@/components/uni-search-bar/uni-search-bar.vue"
import uniCollapse from "@/components/uni-collapse/uni-collapse.vue"
import uniCollapseItem from "@/components/uni-collapse-item/uni-collapse-item.vue"
import uniList from "@/components/uni-list/uni-list.vue"
import uniListItem from "@/components/uni-list-item/uni-list-item.vue"
import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue"
@Component({
    components: {
        uniSearchBar,
        uniCollapse,
        uniCollapseItem,
        uniList,
        uniListItem,
        uniLoadMore,
    }
})
export default class Customer extends Vue {
    private navShow = true
    private numClients = 8
    private items = []
    private more = "more"

    private upper() {

    }

    private lower() {

    }

    private scroll() {

    }

    private search() {
    }

    private change() {
    }

    private expand() {
        console.log("expand:::")
    }
};
</script>

<style scoped>

</style>