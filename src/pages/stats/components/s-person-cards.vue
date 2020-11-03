<template>
    <view v-if="activeIndex==0">
        <view v-if="signRecords.length>0">
            <scroll-view
                :scroll-y="true"
                style="height: 60vh;"
                onScrollToLower="lower"
            >
                <view
                    v-for="(item,index) in signRecords"
                    :key="index"
                >
                    <view
                        class="border-1 mt-5 mx-auto w-5-6 radius-5 bg-color-white shadow"
                        @click="goToPorfile"
                        :data-item="item"
                    >
                        <view class="sep-line flex items-center px-2">
                            <view
                                class="bg-color-primary circle w-10 h-10 flex flex-col justify-center items-center m-2"
                            >
                                <view
                                    v-if="item.thumbAvatar.length>0"
                                    class="flex"
                                >
                                    <image
                                        mode="scaleToFill"
                                        src="item.thumbAvatar"
                                        class="w-10 h-10 circle m-auto"
                                    />
                                </view>
                                <view
                                    v-else
                                    class="color-white"
                                >
                                    {{ item.userName.length > 2 ? item.userName.slice(-2) : item.userName }}
                                </view>
                            </view>
                            <view class="">
                                <view class="text-base color-big-title">
                                    {{ item.userName }}
                                </view>
                                <view class="mt-2 color-label text-xs">
                                    {{ item.time.substr(0, 5) }} 今日已签到{{ item.quantity }}次
                                </view>
                            </view>
                        </view>
                        <view class="my-2 px-5">
                            <view class="color-label font-bold my-2">签到地点</view>
                            <view class="color-big-title font-bold">
                                {{ item.detailPlace }}
                            </view>
                            <view v-if="item.remark.length>0">
                                <view class="color-label font-bold my-2">签到备注</view>
                                <view class="color-big-title font-bold">
                                    {{ item.remark }}
                                </view>
                            </view>
                            <view v-if="item.imgUrlList.length>0">
                                <view class="color-label font-bold my-2">签到图片</view>
                                <view class="flex">
                                    <view
                                        v-for="(pic,index) in item.imgUrlList"
                                    >
                                        <image
                                            :src="pic"
                                            mode="aspectFill"
                                            class="w-16 h-16 mx-1"
                                            :data-src="pic"
                                            @click.stop="previewImg"
                                            :key="index"
                                        />
                                    </view>
                                </view>
                            </view>
                            <view v-if="item.org.name.length>0">
                                <view class="color-label font-bold my-2">拜访对象</view>
                                <view class="flex">
                                    {{ item.org.name }}
                                </view>
                            </view>
                        </view>
                    </view>
                </view>
            </scroll-view>
        </view>
        <view v-else>
            <image
                style="background-color: #ffffff; width: 100%; height:300px;"
                mode="aspectFill"
                src="/assets/images/error-view/empty.png"
            />
        </view>

    </view>
    <view v-elif="activeIndex==1">
        <view class="flex flex-wrap justify-between px-5">
            <view
                v-for="(item,index) in notSignRecords"
                :key="index"
            >
                <view class="w-16 m-2 flex flex-col items-center">
                    <view
                        v-if="item.thumbAvatar.length>0"
                        class="flex justify-center items-center mb-2"
                    >
                        <image
                            mode="scaleToFill"
                            :src="item.thumbAvatar"
                            class="w-10 h-10 circle"
                        />
                    </view>
                    <view
                        v-else
                        class="w-10 h-10 circle bg-color-primary color-white flex justify-center items-center mb-2"
                    >
                        {{ item.name.length > 2 ? item.name.slice(-2) : item.name }}
                    </view>
                    <text>{{ item.name }}</text>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
import {Component, Vue} from "vue-property-decorator"

@Component
export default class SPersonCards extends Vue {
}
</script>

<style scoped>

</style>