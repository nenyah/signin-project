<template>
    <view
        class="flex p-20 my-1 text-3xl bg-white box-border justify-between"
        hover-class="bg-gray-100"
        @click.stop="onClick"
    >
        <view class="flex flex-col flex-1">
            <view>{{ title }}</view>
            <view class="text-gray-500 text-2xl">{{ note }}</view>
        </view>
        <view class="w-50 flex items-center">
            <slot name="footer"></slot>
        </view>
    </view>
</template>

<script lang="ts">
import {Component, Emit, Prop, Vue} from "vue-property-decorator"

@Component({})
export default class TListItem extends Vue {
    @Prop() private title = ""
    @Prop() private note = ""

    @Emit("click")
    private onClick() {
        return ""
    }
}
</script>

<style scoped>

</style>