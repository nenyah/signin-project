<template>
    <view>
        <uni-search-bar @confirm="search" @input="input"></uni-search-bar>
        <uni-list v-if="search">
            <uni-list-item
                v-for="(item,index) in searchItems"
                @click="onSearchItemClick"
                :key="index"
                :title="item.title"
                :note="item.address"
            >
            </uni-list-item>
        </uni-list>

        <view v-else>
            <map
                :id="id"
                :longitude="longitude"
                :latitude="latitude"
                @controltap="controltap"
                :show-location="hasLocation"
                :controls="controls"
                :markers="markers"
                style="width:100%;height:50vh;"
            ></map>

            <scroll-view
                :scroll-y="true"
                style="height: 40vh;"
            >
                <uni-list>
                    <uni-list-item
                        v-for="(item,index) in items"
                        :key="index"
                        @click="onItemClick"
                        :title="item.title"
                        :note="item.address"
                    >
                        <!-- 自定义 footer-->
                        <template slot="footer">
                            <view v-if="item.selected" class="fa fa-hand-o-left"></view>
                        </template>
                    </uni-list-item>
                </uni-list>
            </scroll-view>

        </view>
    </view>

</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"
import uniList from "@/components/uni-list/uni-list.vue"
import uniListItem from "@/components/uni-list-item/uni-list-item.vue"
import uniSearchBar from "@/components/uni-search-bar/uni-search-bar.vue"

@Component({
    components: {
        uniList,
        uniListItem,
        uniSearchBar,
    }
})
export default class Location extends Vue {
    private search = true
    private id = 0 // 使用 marker点击事件 需要填写id
    private title = "map"
    private latitude = 39.909
    private longitude = 116.39742
    private covers = [{
        latitude: 39.909,
        longitude: 116.39742,
        iconPath: "../../../static/location.png"
    }, {
        latitude: 39.90,
        longitude: 116.39,
        iconPath: "../../../static/location.png"
    }]
    private items = [
        {title: "宁波第一医院", address: "宁波北仑大碶房山路289号", selected: true},
        {title: "宁波第二医院", address: "宁波北仑大碶房山路289号", selected: false},
        {title: "宁波第三医院", address: "宁波北仑大碶房山路289号", selected: false},
        {title: "宁波第四医院", address: "宁波北仑大碶房山路289号", selected: false},
        {title: "宁波第五医院", address: "宁波北仑大碶房山路289号", selected: false},
    ]
    private searchItems = [
        {title: "宁波第一医院", address: "宁波北仑大碶房山路289号",},
        {title: "宁波第二医院", address: "宁波北仑大碶房山路289号",},
        {title: "宁波第三医院", address: "宁波北仑大碶房山路289号",},
        {title: "宁波第四医院", address: "宁波北仑大碶房山路289号",},
        {title: "宁波第五医院", address: "宁波北仑大碶房山路289号",},
    ]
};
</script>

<style scoped>

</style>