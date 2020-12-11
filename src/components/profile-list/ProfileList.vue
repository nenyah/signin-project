<template>
    <view>
        <view v-for="(item,index) in userSignVOList" :key="item.id"
              class="w-full bg-color-white py-20 flex flex-col items-center">
            <view class="text-2xl text-gray-500 mx-50 self-start">
                {{ item.date }}
            </view>
            <view @tap="handleItemClick(item.id)"
                  class="w-500 border border-gray-300 border-solid my-20 rounded px-50 shadow-lg">
                <view
                    class="flex border-0 border-b-2 border-gray-300 border-solid py-20 my-20 text-bold text-3xl">
                    <view class="flex-none w-100">{{ item.time.substr(0, 5) }}</view>
                    <view class="">{{ item.org.name }}</view>
                </view>
                <CardItem :value="item.detailPlace" title="签到地点"/>
                <CardItem :value="item.remark" title="签到备注"/>
                <CardItem title="签到图片" :pic-list="item.imgUrlList"/>
                <CardItem :value="item.org.name" title="拜访对象" :primary="true"/>
            </view>
        </view>
    </view>
</template>
<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'
import CardItem from '@/components/card-item/CardItem.vue'
import {IUserSignVO} from '@/common/interface'

@Component({
    components: {CardItem}
})
export default class ProfileList extends Vue {
    @Prop() private userSignVOList!: IUserSignVO[]

    private handleItemClick(id: number) {
        console.log('跳转详情页:::', id)
        uni.navigateTo({url: `/pages/detail/detail?id=${id}`})

    }
}
</script>