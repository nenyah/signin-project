<template>
  <view class="map-bg px-20 h-200 flex flex-col justify-around text-2xl">
    <view class="flex flex-col h-80 justify-between">
      <view
        class="fit flex p-20 my-10 bg-white text-gray-500 rounded-2xl items-center justify-around shadow"
        @tap="choosePerson"
      >
        <view aria-hidden="true" class="fa fa-globe mx-1 flex-shrink"></view>
        <view class="flex-shrink mx-10">
          范围：{{ userNum > 0 ? userNum + "人" : dept[0].name }}
        </view>
        <view
          class="fa fa-angle-down mx-1 flex-shrink"
          aria-hidden="true"
        ></view>
      </view>
      <view
        class="fit flex p-20 my-10 bg-white text-gray-500 rounded-2xl items-center justify-around shadow"
        @tap="chooseDate"
      >
        <view class="fa fa-calendar mx-1" aria-hidden="true"></view>
        <view class="mx-10">{{ today }}</view>
        <view class="fa fa-angle-down mx-1" aria-hidden="true"></view>
      </view>
    </view>
    <view
      class="flex justify-end text-blue-500 items-center"
      @tap="goToHistory"
    >
      <view class="mr-10">签到历史分布</view>
      <view class="fa fa-angle-right" aria-hidden="true"></view>
    </view>
  </view>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component
export default class SScope extends Vue {
  [x: string]: any
  private userNum = 0
  private users!: any[]

  get dept() {
    return this.$store.state.dept.dept || [{ name: "信息中心" }]
  }

  get today() {
    return this.$store.state.signin.selectedDate
  }

  private choosePerson() {
    //#ifdef MP-ALIPAY
    my.complexChoose({
      title: "选择查看对象", //标题
      multiple: true, //是否多选
      limitTips: "超出了", //超过限定人数返回提示
      maxUsers: 1000, //最大可选人数
      responseUserOnly: true, //返回人，或者返回人和部门
      success: (res) => {
        this.userNum = res.selectedCount
        this.users = res.users.length > 0 ? res.users : []
        // 1. 更新users
        const userIds = this.users.map((item) => item.userId)
        this.$store.commit("signin/updateUsers", userIds)
        // 2. 调用获取签到信息
        this.$store.dispatch("signin/getSigninRecord")
      },
    })
    // #endif
  }

  private chooseDate() {
    //#ifdef MP-ALIPAY
    my.datePicker({
      format: "yyyy-MM-dd",
      currentDate: this.today,
      success: (res) => {
        // 1. 更新日期
        this.$store.commit("signin/updateDate", res.date)
        // 2. 调用获取签到信息
        this.$store.dispatch("signin/getSigninRecord")
      },
    })
    // #endif
  }

  private goToHistory() {
    uni.navigateTo({ url: "/pages/history/history" })
  }
}
</script>

<style scoped lang="scss">
.fit {
  width: fit-content;
}
</style>
