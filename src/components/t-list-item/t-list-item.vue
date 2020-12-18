<template>
  <view
    class="flex p-20 my-1 text-3xl bg-white box-border justify-between items-center"
    hover-class="bg-gray-100"
    @tap.stop="onClick"
  >
    <slot name="header"></slot>
    <view class="flex flex-col flex-1 ml-10">
      <view>{{ title }}</view>
      <view class="text-gray-500 text-2xl my-10 w-500 truncate">
        {{ note }}
      </view>
      <view>
        <text
          v-if="tag"
          class="p-0-5 bg-green-200 text-green-500 rounded text-lg"
          >{{ tag }}</text
        >
      </view>
    </view>
    <view class="w-50 flex items-center">
      <slot name="footer"></slot>
    </view>
  </view>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator"

@Component({})
export default class TListItem extends Vue {
  @Prop() private title = ""
  @Prop() private note = ""
  @Prop() private tag = ""

  @Emit("tap")
  private onClick() {
    return ""
  }
}
</script>

<style scoped>
.p-0-5 {
  padding: 0.1rem;
}
</style>
