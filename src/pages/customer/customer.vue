<template>
    <view>
        <scroll-view
            scroll-y="true"
            style="height: 100vh;width:100vw;"
            class="p-20 box-border"
            @scrolltoupper="upper"
            @scrolltolower="lower"
            @scroll="scroll"
        >
            <view class="bg-white" :class="navShow ? 'nav' : ''">
                <uni-search-bar
                    placeholder="搜索"
                    radius="50"
                    @confirm="search"
                >
                </uni-search-bar>
            </view>
            <block v-if="items.length > 0">
                <view class="ml-2"> 共 {{ total }} 家</view>
                <scroll-view
                    :scroll-top="scrollTop"
                    scroll-y="true"
                    class="scroll-Y"
                    @scrolltoupper="upper"
                    @scrolltolower="lower"
                    @scroll="scroll"
                >
                    <view v-for="(item, index) in items" :key="index">
                        <t-list-item
                            :title="item.name"
                            :note="item.address"
                            :tag="item.orgGroup.name"
                            @click="goIndex(item.id)"
                        >
                            <template slot="header">
                                <view
                                    class="flex bg-blue-500 w-100 h-100 rounded-full justify-center items-center text-white mr-1">
                                    {{ item.name.substr(0, 3) }}
                                </view>
                            </template>
                            <template slot="footer" @click="expand(item.id)">
                                <view v-if="item.expanded" class="fa fa-chevron-up">
                                </view>
                                <view v-else class="fa fa-chevron-down">
                                </view>
                            </template>
                        </t-list-item>
                        <view v-if="item.expanded">
                            <t-list-item
                                v-for="(customer, idx) in item.customerList"
                                :key="idx"
                                :title="customer.name"
                                :note="customer.mobile"
                                @click="goIndex(item.id)"
                            >
                            </t-list-item>
                        </view>
                    </view>
                </scroll-view>
            </block>
            <uni-load-more :status="more"></uni-load-more>
        </scroll-view>
    </view>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
import uniCollapse from '@/components/uni-collapse/uni-collapse.vue'
import uniCollapseItem from '@/components/uni-collapse-item/uni-collapse-item.vue'
import uniList from '@/components/uni-list/uni-list.vue'
import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue'
import TListItem from '@/components/t-list-item/t-list-item.vue'
import {IOrg} from '@/common/interface'

@Component({
    components: {
        uniSearchBar,
        uniCollapse,
        uniCollapseItem,
        uniList,
        uniListItem,
        uniLoadMore,
        TListItem,
    },
})
export default class Customer extends Vue {
    private navShow = true
    private expanded = false
    $store: any

    get more() {
        return this.$store.state.customer.more
    }

    get items() {
        return this.$store.state.customer.orgs
    }

    get total() {
        return this.$store.state.customer.total
    }


    onLoad() {
        this.$store.dispatch('customer/getCustomer')
    }

    private goIndex(id: number) {
        console.log('goIndex:::', id)
        const item = this.items.find((item: IOrg) => {
            return item.id === id
        })
        this.$store.commit('customer/SET_ORG', item)
        uni.navigateBack({})
    }

    private expand(id: number) {
        console.log('expand:::')
        this.$store.commit('customer/CHANGE_EXPANDED', id)
    }

    private upper() {
    }

    private lower() {
        console.log('lower:::')
        this.$store.dispatch('customer/getCustomer')
    }

    private scroll() {
    }

    private search(val: any) {
        console.log('search', val)
    }

    private change() {
    }
}
</script>

<style scoped></style>
