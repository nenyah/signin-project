<template>
    <view class="w-full h-100 border-0 border-b-2 border-gray-300 border-solid">
        <view class='flex justify-start px-20'>
            <view
                class='flex flex-col justify-around items-center mx-20'
                :class='index === activeTab?"text-blue-500": ""'
                @click="itemClick(index)"
                :data-index="index"
                v-for="(item,index) in tabs"
                :key="index"
            >
                <view class="text-5xl mb-10">{{ item.title }}</view>
                <view class="text-2xl">
                    {{ item.subTitle }}
                </view>
                <view :class='index === activeTab?"arrow-up": ""'>
                </view>
            </view>
        </view>
    </view>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator"


@Component
export default class STabControl extends Vue {
    @Prop()
    private item!: []
    @Prop()
    private activeTab = 0

    private itemClick(index: number) {
        console.log("change index:::", index)
    }
};
</script>

<style scoped lang="scss">
</style>