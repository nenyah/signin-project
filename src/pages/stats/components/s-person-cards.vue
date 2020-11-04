<template>
    <view v-if="activeIndex==0">
        <sign-list :sign-records="signRecords"/>

    </view>
    <view v-else-if="activeIndex===1">
        <nosign-list :not-sign-records="notSignRecords"/>
    </view>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator"
import {UserSignVO} from "@/common/interface"
import SignList from "@/pages/stats/components/SignList.vue"
import NosignList from "@/pages/stats/components/NosignList.vue"
@Component({
    components: {NosignList, SignList}
})
export default class SPersonCards extends Vue {
    @Prop() private signRecords!: UserSignVO[]
    @Prop() private activeIndex!: number
    @Prop() private notSignRecords!: []
}
</script>

