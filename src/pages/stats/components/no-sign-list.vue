<template>
  <view
    v-if="notSignRecords.length > 0"
    class="flex flex-wrap justify-between px-50 text-4xl"
  >
    <view v-for="(item, index) in notSignRecords" :key="index">
      <view class="w-150 m-20 flex flex-col items-center">
        <view
          class="w-100 h-100 rounded-full bg-blue-500 text-gray-100 flex justify-center items-center mb-20"
        >
          {{ item.length > 2 ? item.slice(-2) : item }}
        </view>

        <text>{{ item }}</text>
      </view>
    </view>
  </view>
  <view v-else>
    <image
      style="background-color: #ffffff; width: 100%; height:300px;"
      mode="aspectFill"
      src="/static/images/error-view/empty.png"
    />
  </view>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"

@Component
export default class NoSignList extends Vue {
  [x: string]: any
  get notSignRecords() {
    return this.$store.state.signin.unSigninRecord
  }
}
</script>
