<template>
  <scroll-view
    :scroll-y="true"
    style="height: 70vh;"
    @scrolltolower="lower"
    v-if="signRecords.length > 0"
  >
    <view v-for="(item, index) in signRecords" :key="index">
      <view
        class="border-2 border-gray-300 border-solid mt-10 mx-auto w-700 rounded bg-white shadow"
        @tap="goToPorfile(item)"
      >
        <view
          class="border-0 border-b-2 border-gray-300 border-solid flex items-center px-20"
        >
          <view
            class="bg-blue-500 rounded-full w-60 h-60 flex flex-col justify-center items-center m-20 text-gray-100"
          >
            {{
              item.userName.length > 2 ? item.userName.slice(-2) : item.userName
            }}
          </view>
          <view class="flex flex-col justify-around">
            <view class="text-5xl text-gray-900 font-bold">
              {{ item.userName }}
            </view>
            <view class="text-2xl text-gray-500">
              {{ item.time.substr(0, 5) }} 今日已签到{{ item.count }}次
            </view>
          </view>
        </view>
        <view class="my-20 px-50 text-gray-500 text-3xl">
          <view v-if="item.detailPlace.length > 0" class="my-20">
            <view class="font-bold">签到地点</view>
            <view class="text-gray-900 font-bold">
              {{ item.detailPlace }}
            </view>
          </view>
          <view v-if="item.remark.length > 0" class="my-20">
            <view class="font-bold">签到备注</view>
            <view class="text-gray-900 font-bold">
              {{ item.remark }}
            </view>
          </view>
          <view v-if="item.imgUrlList.length > 0" class="my-20">
            <view class="font-bold">签到图片</view>
            <view class="flex my-10">
              <view v-for="(pic, idx) in item.imgUrlList" :key="idx">
                <image
                  :src="pic"
                  mode="aspectFill"
                  class="w-100 h-100 mx-10"
                  @tap.stop="previewImg(pic)"
                />
              </view>
            </view>
          </view>
          <view v-if="item.org.name.length > 0" class="my-20">
            <view class="font-bold">拜访对象</view>
            <view class="flex text-blue-400 font-bold">
              {{ item.org.name }}
            </view>
          </view>
        </view>
      </view>
    </view>
    <uni-popup ref="popup">
      <image :src="img" mode="widthFix"></image>
    </uni-popup>
  </scroll-view>
  <view v-else>
    <image
      style="background-color: #ffffff; width: 100%; height:300px;"
      mode="aspectFill"
      src="/static/images/error-view/empty.png"
    />
  </view>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import UniPopup from "@/components/uni-popup/uni-popup.vue"
@Component({
  components: {
    UniPopup,
  },
})
export default class SignList extends Vue {
  [x: string]: any
  private img = ""
  get signRecords() {
    return this.$store.state.signin.signinRecord
  }
  private goToPorfile(item: any) {
    // 1. 改变userId
    this.$store.commit("signin/changeUserIds", [item.userId])
    this.$store.commit("signin/SET_USERNAME", item.userName)
    // 2. 获取用户当月签到记录
    this.$store.dispatch("signin/getSigninRecordMonth")
    //2. 跳转页面
    uni.navigateTo({
      url: `/pages/profile/profile?userId=${item.userId}&name=${item.userName}`,
    })
  }
  private lower() {}
  private previewImg(pic: string) {
    this.$refs.popup.open()
    this.img = pic
  }
}
</script>
