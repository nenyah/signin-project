<template>
  <view class="bg-gray-300 h-full">
    <ProfileScope />
    <view class="bg-white">
      <ProfileList
        :items="items"
        :user-sign-v-o-list="items[0].userSignVOList"
        v-if="items.length > 0"
      />
      <image
        v-else
        style="background-color: #ffffff; width: 100%; height:300px;"
        mode="aspectFill"
        src="/static/images/error-view/empty.png"
      />
    </view>
  </view>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import ProfileScope from "./components/ProfileScope.vue"
import ProfileList from "@/components/profile-list/ProfileList.vue"
interface queryParam {
  name: string
  userId: string
}
@Component({
  components: {
    ProfileList,
    ProfileScope,
  },
})
export default class Profile extends Vue {
  [x: string]: any
  private userInfo!: any

  onLoad(query: queryParam) {
    const { name, userId } = query
    this.userInfo = { username: name }
    console.log("profile page:::", query)
  }

  get items() {
    return this.$store.state.signin.signinRecordMonth
  }
}
</script>
