<template>
  <view>
    <map
      :longitude="location.longitude"
      :latitude="location.latitude"
      :markers="markers"
      :show-location="false"
      style="width:100%;height:60vh;"
    ></map>
    <profile-list
      :userSignVOList="items"
      :Clickable="false"
      v-if="items.length > 0"
    ></profile-list>
  </view>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import ProfileList from "@/components/profile-list/ProfileList.vue"
import { IUserSignVO } from "@/common/interface"
interface queryParam {
  id?: string
  page: string
}
@Component({
  components: {
    ProfileList,
  },
})
export default class Detail extends Vue {
  [x: string]: any
  private id = 0
  private page = "submit"

  onLoad(query: queryParam) {
    console.log("query", query)
    this.id = query.id ? Number.parseInt(query.id) : 0
    this.page = query.page
  }

  get items() {
    console.log(`id:${this.id},page:${this.page}`)
    if (this.page === "submit") {
      const todayRecord = this.$store.state.signin.signinRecordToday
        .userSignVOList[this.id]
      return [todayRecord]
    } else {
      const monthRecord = this.$store.state.signin.signinRecordMonth[0].userSignVOList.filter(
        (item: IUserSignVO) => {
          return Number.parseInt(item.id) === this.id
        }
      )
      return monthRecord
    }
  }
  get location() {
    const location =
      this.items.length > 0
        ? this.items[0]
        : { longitude: 120.12703, latitude: 30.273923 }
    return location
  }
  get markers() {
    return [
      {
        id: 1,
        longitude: this.location.longitude,
        latitude: this.location.latitude,
        iconPath: "/static/images/location.png",
      },
    ]
  }
}
</script>

<style scoped></style>
