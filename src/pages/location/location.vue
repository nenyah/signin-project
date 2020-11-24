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
                :longitude="location.longitude"
                :latitude="location.latitude"
                @controltap="controlTap"
                :show-location="hasLocation"
                :controls="controls"
                :markers="covers"
                style="width:100%;height:50vh;"
            ></map>

            <scroll-view
                :scroll-y="true"
                style="height: 40vh;"
                :scroll-top="scrollTop"
                @scroll="scroll"
            >
                <uni-list>
                    <uni-list-item
                        v-for="(item,index) in items"
                        :key="index"
                        @click="onItemClick(index)"
                        :title="item.title"
                        :note="item.address"
                        clickable
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
import amap from "@/libs/amap-dd"

interface Item {
    title: string;
    address: string;
    province: string;
    selected: boolean;
    latitude: number;
    longitude: number
}

@Component({
    components: {
        uniList,
        uniListItem,
        uniSearchBar,
    }
})
export default class Location extends Vue {
    private search = false
    private id = 0 // 使用 marker点击事件 需要填写id
    private title = "map"
    private hasLocation = true
    private items: Item[] = []
    private scrollTop = 0
    private old = {scrollTop: 0}
    private searchItems = [
        {title: "宁波第一医院", address: "宁波北仑大碶房山路289号",},
        {title: "宁波第二医院", address: "宁波北仑大碶房山路289号",},
        {title: "宁波第三医院", address: "宁波北仑大碶房山路289号",},
        {title: "宁波第四医院", address: "宁波北仑大碶房山路289号",},
        {title: "宁波第五医院", address: "宁波北仑大碶房山路289号",},
    ]
    $store: any
    private controls = [
        {
            id: 5,
            iconPath: "/static/images/fix_location.png",
            position: {
                left: 0,
                top: 300 - 50,
                width: 50,
                height: 50,
            },
            clickable: true,
        },
    ]

    async onLoad() {
        const {longitude, latitude} = this.location
        const {pois} = await amap.getAround({longitude, latitude})
        console.log("poi:::", pois)
        this.items = pois.map((el, index) => ({
            title: el.name,
            address: `${el.pname}${el.cityname}${el.address}`,
            selected: index === 0,
            longitude: Number.parseFloat(el.location.split(",")[0]),
            latitude: Number.parseFloat(el.location.split(",")[1]),
            province: el.pname,
        }))
    }

    get covers() {
        const {latitude, longitude} = this.$store.state.user.location
        return [
            {
                latitude: latitude != null ? latitude : 121.796929,
                longitude: longitude != null ? longitude : 29.903542,
                width: 25,
                height: 25,
                iconPath: "/static/images/location.png",
            },
        ]
    }

    get location() {
        return this.$store.state.user.location
    }

    private controlTap() {
        console.log("点击控制点:::")
        this.$store.dispatch("user/getLocation")
        this.chooseItem(0)
        this.goTop()
    }

    private onItemClick(idx: number) {
        console.log("item click:::", idx)
        this.chooseItem(idx)
    }

    private chooseItem(idx: number) {
        this.items.forEach((item, index) => {
            item.selected = index === idx
            return item
        })
        const selectedItem = this.items.find((item) => {
            return item.selected
        })
        this.$store.commit("user/SET_LOCATION", selectedItem)
    }


    private scroll(e: any) {
        this.old.scrollTop = e.detail.scrollTop
    }

    private goTop(e: any) {
        this.scrollTop = this.old.scrollTop
        this.$nextTick(function () {
            this.scrollTop = 0
        })
    }
};
</script>

<style scoped>

</style>