<template>
    <view class="bg-helper-gray h-full">
        <!--表头-->
        <uni-list>
            <uni-list-item>
                <!-- 自定义 header -->
                <view slot="header" class="w-46 text-center flex-none">
                    <view class="fa fa-clock-o fa-lg text-gray-400"></view>
                </view>
                <!-- 自定义 body -->
                <text slot="body" class="text-gray-400 flex-none flex-no-wrap mx-10"
                >签到时间:
                </text
                >
                <!-- 自定义 footer-->
                <template slot="footer">
                    {{ ctime }}
                </template>
            </uni-list-item>
            <uni-list-item>
                <!-- 自定义 header -->
                <view slot="header" class="w-46 text-center flex-none">
                    <view class="fa fa-map-marker fa-lg text-gray-400"></view>
                </view>
                <!-- 自定义 body -->
                <text slot="body" class="text-gray-400 flex-none flex-no-wrap mx-10"
                >签到地点:
                </text
                >
                <!-- 自定义 footer-->
                <template slot="footer" class="flex-wrap truncate-2">
                    {{ location.address }}
                </template>
            </uni-list-item>
            <uni-list-item v-if="customer.name">
                <!-- 自定义 header -->
                <view slot="header" class="w-46 text-center flex-none">
                    <view class="fa fa-address-book fa-lg text-gray-400"></view>
                </view>
                <!-- 自定义 body -->
                <text slot="body" class="text-gray-400 flex-none flex-no-wrap mx-10"
                >拜访对象:
                </text
                >
                <!-- 自定义 footer-->
                <template slot="footer" class="text-gray-500">
                    {{ customer.name }}
                </template>
            </uni-list-item>
        </uni-list>
        <!--动画-->
        <view
            v-if="isShow"
            class="sucess-stamp"
            :animation="animationData"
            style="position: absolute; top:50px; left: 220px; z-index: 100;"
        ></view>
        <!--备注-->
        <form @submit="formSubmit">
            <view class="mt-10 bg-white min-h-400 flex flex-col justify-around px-40">
        <textarea
            placeholder="请填写签到备注"
            maxlength="-1"
            :focus="true"
            name="remark"
        ></textarea>

                <view class="flex flex-wrap items-center">
                    <block v-for="(src, index) in picUrls" :key="index">
                        <view style="width:80px;" class="flex m-2">
                            <image
                                mode="aspectFill"
                                :src="src"
                                style="width:80px;height:80px;"
                                @tap="previewPic(index)"
                            />
                            <view
                                class="pin-right-angel fa fa-times fa-base"
                                aria-hidden="true"
                                @tap.stop="removePic(index)"
                            >
                            </view>
                        </view>
                    </block>
                    <view
                        v-if="picUrls.length < 9"
                        style="border:dashed 1px #9c9c9c;"
                        class="p-30 rounded-lg"
                        @tap="useCamera"
                    >
                        <view class="fa fa-camera fa-4x m-auto text-gray-500"></view>
                    </view>
                </view>
            </view>
            <!--企业标识-->
            <view class="mt-10 text-gray-500 min-h-400">
                <view class="w-full bg-white px-40 py-20 flex items-center text-3xl"
                >当前企业：
                    <text class="text-gray-900">
                        华东宁波医药有限公司
                    </text>
                </view>
                <view class="w-full px-40 mt-10 text-2xl">
                    你的签到信息，仅对你的主管和本团队成员可以见
                </view>
            </view>

            <button
                class="border-none bg-white text-blue-900 w-full fixed left-0 bottom-0 shadow"
                :disabled="disabled"
                form-type="submit"
            >
                提交
            </button>
        </form>
    </view>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import uniList from '@/components/uni-list/uni-list.vue'
import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
import api from '@/api'

@Component({
    components: {
        uniList,
        uniListItem,
    },
})
export default class Submit extends Vue {
    private picUrls: any[] = []
    private disabled = false
    private isShow = false
    private animation!: any
    private animationData!: any
    $store: any

    get ctime() {
        const ctime = this.$store.state.user.ctime.format('HH:mm')
        return ctime
    }

    get location() {
        return this.$store.state.user.location
    }

    get customer() {
        console.log('customer:::', this.$store.state.customer.org)

        return this.$store.state.customer.org
    }

    private async useCamera() {
        const [err, res]: any = await uni.chooseImage({
            count: 1, //默认9
            sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
            sourceType: ['camera'], //从相册选择
        })
        console.log('useCamera:::', err, res)
        if (err) {
            uni.showToast({title: err.errMsg})
            return
        }
        if (res.filePaths.length === 0) {
            uni.showToast({title: '拍照错误'})
            return
        }
        // #ifdef MP-ALIPAY
        dd.compressImage({
            filePaths: res.tempFilePaths,
            compressLevel: 1,
            success: (res: { apFilePaths: any[] }) => {
                this.picUrls.push(res.apFilePaths[0])
            },
        })
        // #endif
    }

    private async formSubmit(e: any) {
        if (this.disabled) {
            return
        }
        // 上锁 防止重复点击
        this.disabled = true
        const ctime = this.$store.state.user.ctime.valueOf()
        let signRecord = {
            detailPlace: this.location.address,
            latitude: this.location.latitude,
            longitude: this.location.longitude,
            place: this.location.address,
            org: {
                id: this.customer.id || '',
                name: this.customer.name || '',
            },
            ...e.detail.value,
            timeStamp: ctime,
        }

        // 上传图片
        const upload = this.picUrls.map((img) => {
            return api.signin.uploadImg(img, {
                detailPlace: signRecord.detailPlace,
            })
        })
        try {
            // 上传图片
            const imgRes = await Promise.all(upload)
            signRecord.imageUrlList = imgRes
            // 上传签到信息
            const upRes = await api.signin.addSignRecord(signRecord)

            // 成功动画
            this.sucessAnimation()

            setTimeout(() => {
                // 上传成功后重置客户信息
                this.$store.commit('customer/init')
                this.$store.commit('user/updateCtime')
                // 重新更新当天签到记录
                this.$store.dispatch('signin/getSigninRecordToday')
                // 解锁
                this.disabled = false
                // 返回首页
                uni.redirectTo({url: `/pages/detail/detail?page=submit`})
            }, 1000)
        } catch (e) {
            console.log('数据上传错误:::', e)
        }
    }

    private removePic(index: number) {
        this.picUrls.splice(index, 1)
    }

    private async previewPic(index: number) {
        const img = this.picUrls[index]
        const [err, res]: any = await uni.previewImage({
            urls: [img],
        })
        if (err) {
            console.log('预览图片错误', err)
            uni.showToast({title: '预览图片错误'})
            return
        }
    }

    private sucessAnimation() {
        this.animation = uni.createAnimation({
            duration: 1000,
            timingFunction: 'ease-in-out',
        })
        this.animation
            .translate(-750, -15)
            .rotate(-45)
            .step()
        this.isShow = true
        this.animationData = this.animation.export()
    }

    private async imgSize(file: string) {
        const res = await uni.getImageInfo({
            src: file,
        })
        console.log('res:::', res)
    }
}
</script>

<style scoped lang="scss">
.min-h-400 {
    min-height: 4rem;
}

.pin-right-angel {
    position: relative;
    z-index: 1;
    left: -10rpx;
    top: -10rpx;
    color: red;
}

.sucess-stamp {
    width: 150px;
    height: 150px;
    background: no-repeat url('/static/images/checkinstamp.png');
    background-size: 150px;
}

.canvas {
    position: absolute;
    top: -9999px;
    left: -9999px;
}
</style>
