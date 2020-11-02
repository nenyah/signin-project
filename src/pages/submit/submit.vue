<template>
    <view class="bg-gray-300 h-full">
        <uni-list>
            <uni-list-item>
                <!-- 自定义 header -->
                <view slot="header" class="w-46 text-center flex-none">
                    <view class="fa fa-clock-o fa-lg text-gray-400"></view>
                </view>
                <!-- 自定义 body -->
                <text slot="body" class="text-gray-400 flex-none flex-no-wrap mx-10">签到时间:</text>
                <!-- 自定义 footer-->
                <template slot="footer">
                    12:30
                </template>
            </uni-list-item>
            <uni-list-item>
                <!-- 自定义 header -->
                <view slot="header" class="w-46 text-center flex-none">
                    <view class="fa fa-map-marker fa-lg text-gray-400"></view>
                </view>
                <!-- 自定义 body -->
                <text slot="body" class="text-gray-400 flex-none flex-no-wrap mx-10">签到地点:</text>
                <!-- 自定义 footer-->
                <template slot="footer" class="flex-wrap truncate-2">
                    宁波市公安局北仑分局交通警察大队大碶中队，浙江省宁波市北仑区大碶庐山中路2号
                </template>
            </uni-list-item>
            <uni-list-item>
                <!-- 自定义 header -->
                <view slot="header" class="w-46 text-center flex-none">
                    <view class="fa fa-address-book fa-lg text-gray-400"></view>
                </view>
                <!-- 自定义 body -->
                <text slot="body" class="text-gray-400 flex-none flex-no-wrap mx-10">拜访对象:</text>
                <!-- 自定义 footer-->
                <template slot="footer" class="text-gray-500">
                    宁波市公安局北仑分局交通警察大队大碶中队
                </template>
            </uni-list-item>
        </uni-list>
        <view
            v-if="isShow"
            class="sucess-stamp"
            :animation="animationInfo"
            style="position: absolute; top:100rpx; left: 100rpx; z-index: 100;"
        ></view>
        <view class="mt-10 bg-white h-400 flex flex-col justify-around px-40">
              <textarea
                  placeholder="请填写签到备注"
                  maxlength="-1"
                  :focus="true"
                  @input="handleTextAreaInput"
                  @confirm="handComfirm"
              ></textarea>

            <view class="flex flex-wrap">
                <block v-for="(src,index) in picUrls" :key="index">
                    <view
                        class="w-24 h-16 flex m-2"
                        :key="index"
                    >
                        <image
                            mode="aspectFill"
                            :src="src"
                            :data-src="src"
                            class="w-24 h-16"
                            @click="previewPic"
                        />
                        <view
                            class="pin-right-angel fa fa-minus-circle fa-base color-danger"
                            aria-hidden="true"
                            :data-index="index"
                            @click.stop="removePic"
                        >
                        </view>
                    </view>
                </block>
                <view
                    v-if="picUrls.length<9"
                    style="border:dashed 2rpx #9c9c9c;"
                    class="p-30 rounded-lg"
                    @click="useCamera"
                >
                    <view class="fa fa-camera fa-4x m-auto text-gray-500">
                    </view>
                </view>
            </view>

        </view>
        <view class="mt-10 text-gray-500">
            <view
                class="w-full bg-white px-40 py-20 flex items-center text-3xl"
            >当前企业：
                <text class="text-gray-900">
                    华东宁波医药有限公司
                </text>
            </view>
            <view class="w-full px-40 mt-10 text-2xl">
                你的签到信息，仅对你的主管和本团队成员可以见
            </view>
        </view>
        <canvas
            id="canvas"
            :width="imageSize.imageWidth"
            :height="imageSize.imageHeight"
            class="canvas"
        />

        <button
            class="border-none bg-white text-blue-500 w-full fixed left-0 bottom-0 shadow"
            :disabled="disabled"
            @click="createRecord"
        >提交
        </button>
    </view>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"
import uniList from "@/components/uni-list/uni-list.vue"
import uniListItem from "@/components/uni-list-item/uni-list-item.vue"

@Component({
    components: {
        uniList,
        uniListItem,
    }
})
export default class Submit extends Vue {
    private picUrls = []
    private disabled = false

    private createRecord() {
        console.log("createRecord:::")
    }

    private useCamera() {
        console.log("useCamera:::")
    }
};
</script>

<style scoped>

</style>