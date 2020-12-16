<template>
  <view>
    <view class="flex">
      <uni-search-bar
        @confirm="search"
        @input="input"
        @cancel="cancel"
        cancelButton="none"
        ref="searchBar"
      ></uni-search-bar>
      <view class="p-0-5" v-if="!searching">
        <view
          class="w-100 bg-blue-500 text-white rounded-lg text-center my-2 p-1 text-2xl"
          @tap="confirm"
          >确定</view
        >
      </view>
    </view>
    <scroll-view
      v-if="searched"
      :scroll-y="true"
      style="height: 100vh;"
      :scroll-top="scrollTop"
      @scroll="scroll"
    >
      <t-list-item
        v-for="(item, index) in searchItems"
        :key="index"
        @tap="onItemClick(index)"
        :title="item.title"
        :note="item.address"
        clickable
      >
        <template slot="footer">
          <view
            v-if="item.selected"
            class="fa fa-check fa-lg text-blue-400"
          ></view>
        </template>
      </t-list-item>
    </scroll-view>
    <view v-else>
      <map
        :id="id"
        :longitude="location.longitude"
        :latitude="location.latitude"
        @controltap="controlTap"
        :show-location="hasLocation"
        :controls="controls"
        :markers="covers"
        style="width:100%;height:300px;"
      ></map>

      <scroll-view
        :scroll-y="true"
        style="height: 40vh;"
        :scroll-top="scrollTop"
        @scroll="scroll"
      >
        <view class="bg-gray-300">
          <t-list-item
            v-for="(item, index) in items"
            :key="index"
            @tap="onItemClick(index)"
            :title="item.title"
            :note="item.address"
            clickable
          >
            <template slot="footer">
              <view
                v-if="item.selected"
                class="fa fa-check fa-lg text-blue-400"
              ></view>
            </template>
          </t-list-item>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import uniList from "@/components/uni-list/uni-list.vue"
import uniListItem from "@/components/uni-list-item/uni-list-item.vue"
import uniSearchBar from "@/components/uni-search-bar/uni-search-bar.vue"
import TListItem from "@/components/t-list-item/t-list-item.vue"
import amap from "@/libs/amap-dd"

interface Item {
  title: string
  address: string
  province: string
  selected: boolean
  latitude: number
  longitude: number
}

@Component({
  components: {
    uniList,
    uniListItem,
    uniSearchBar,
    TListItem,
  },
})
export default class Location extends Vue {
  private searched = false
  private searching = false
  private id = 0 // 使用 marker点击事件 需要填写id
  private title = "map"
  private hasLocation = true
  private items: Item[] = []
  private scrollTop = 0
  private old = { scrollTop: 0 }
  private searchItems = []
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
    const { longitude, latitude } = this.location
    const { pois } = await amap.getAround({ longitude, latitude })
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
    const { latitude, longitude } = this.$store.state.user.location
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

  private input() {
    this.searching = true
  }

  private controlTap() {
    console.log("点击控制点:::")
    this.$store.dispatch("user/getLocation")
    this.chooseItem(0)
    this.goTop()
  }

  private onItemClick(idx: number) {
    console.log("item click:::", idx)
    this.cancel()
    this.searching = false
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

  private goTop() {
    this.scrollTop = this.old.scrollTop
    this.$nextTick(function() {
      this.scrollTop = 0
    })
  }

  private search(value: any) {
    console.log("search:::", value)
    this.searched = true
    this.searchItems = this.items.filter((item) => {
      return (
        item.title.includes(value.value) ||
        item.address.includes(value.value) ||
        item.province.includes(value.value)
      )
    })
  }

  private cancel() {
    this.searched = false
  }

  private confirm() {
    uni.navigateBack({})
  }
}
</script>

<style scoped>
.p-0-5 {
  padding: 0.15rem;
}

.p-1 {
  padding: 0.15rem;
}
</style>
