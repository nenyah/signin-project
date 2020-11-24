<template>
    <view class="bg-gray-300 h-full">
        <ProfileScope/>
        <view class="bg-white">
            <ProfileList :items="items" :user-sign-v-o-list="items[0].userSignVOList" v-if="items.length>0"/>
            <image
                v-else
                style="background-color: #ffffff; width: 100%; height:300px;"
                mode="aspectFill"
                src="/static/images/error-view/empty.png"
            />
        </view>
    </view>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"
import ProfileScope from "./components/ProfileScope.vue"
import ProfileList from "@/components/profile-list/ProfileList.vue"
import {ISignHistory} from "@/common/interface"

@Component({
    components: {
        ProfileList,
        ProfileScope,
    },
})
export default class Profile extends Vue {
    private items: ISignHistory[] = [{
        jobNumber: "PO0123",
        userName: "张三",
        userSignCount: 10,
        userSignVOList: [
            {
                count: 0,
                org: {
                    id: 0,
                    name: "浙江省宁波市北仑区第一骨科医院"
                },
                id: "1",
                userId: 1234,
                jobNumber: "PO0123",
                userName: "张三",
                date: "2020-11-15",
                time: "13：50",
                place: "宁波第一医院地址",
                detailPlace: "宁波第一医院详细地址",
                imgUrlList: [
                    "https://tp.huadongbio.com:9000/weixinapp-vote/product.png",
                    "https://tp.huadongbio.com:9000/weixinapp-vote/face.png"
                ],
                remark: "备注",
                longitude: "120.12703000",
                latitude: "30.27392300"
            },
            {
                count: 0,
                org: {
                    id: 0,
                    name: "浙江省宁波市北仑区第二骨科医院"
                },
                id: "1",
                userId: 1234,
                jobNumber: "PO0123",
                userName: "张三",
                date: "2020-11-15",
                time: "13：50",
                place: "宁波第一医院地址",
                detailPlace: "宁波第一医院详细地址",
                imgUrlList: [
                    "https://tp.huadongbio.com:9000/weixinapp-vote/product.png",
                    "https://tp.huadongbio.com:9000/weixinapp-vote/face.png"
                ],
                remark: "备注",
                longitude: "120.12703000",
                latitude: "30.27392300"
            }
        ]
    }]
};
</script>

