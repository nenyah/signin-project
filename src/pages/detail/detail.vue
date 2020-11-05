<template>
    <view>
        <map
            :longitude="longitude"
            :latitude="latitude"
            :markers="markers"
            :show-location="false"
            style="width:100%;height:60vh;"
        ></map>
        <profile-list :userSignVOList="items[0].userSignVOList"></profile-list>
    </view>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"
import {SignHistory} from "@/common/interface"
import ProfileList from "@/components/profile-list/ProfileList.vue"
@Component({
    components:{
        ProfileList,
    }
})
export default class Detail extends Vue {
    private longitude = 120.12703000
    private latitude = 30.27392300
    private markers = [
        {
            id: 1,
            longitude: "120.127033",
            latitude: "30.273923",
            iconPath: "/static/images/location.png"
        },
        {
            id: 2,
            longitude: "120.127035",
            latitude: "30.273924",
            iconPath: "/static/images/location.png"
        },
    ]
    private items: SignHistory[] = [{
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
            }
        ]
    }]
};
</script>

<style scoped>

</style>