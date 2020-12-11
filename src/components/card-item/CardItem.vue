<template>
    <view class="my-20">
        <view class="text-2xl my-20"
              :class="primary?`text-blue-500`:`text-gray-500`"
              v-if="value.length>0 || picList.length>0"
        >{{ title }}
        </view>
        <view class="text-2xl"
              :class="primary?`text-blue-500 font-bold`:`text-gray-900`"
              v-if="value.length>0">{{ value }}
        </view>
        <view class="flex" v-if="picList.length>0">
            <image :src="pic" mode="aspectFill" class="w-100 h-100 mr-20"
                   :data-src="pic"
                   @tap.stop="previewImg" v-for="(pic,index) in picList" :key="index"/>
        </view>
    </view>
</template>
<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'

@Component
export default class CardItem extends Vue {
    @Prop() private title!: string
    @Prop() private value!: string
    @Prop() private picList!: Array<string>
    @Prop({default: false}) private primary!: boolean
}
</script>