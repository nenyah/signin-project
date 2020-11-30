<!--
 * @Description: 
 * @Author: Steven
 * @Date: 2020-10-27 15:20:07
 * @LastEditors: Steven
 * @LastEditTime: 2020-10-29 14:22:59
-->
<template>
    <view class="font-sans min-h-screen flex flex-col">
        <!-- 头部 -->
        <Header></Header>
        <!-- 地图 -->
        <Maplocation/>
        <!--选择人员-->
        <Org :client="client"></Org>
        <!--签到-->
        <Signin></Signin>
    </view>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import Header from './components/header.vue'
import Org from './components/org.vue'
import Signin from './components/signin.vue'
import Maplocation from './components/maplocation.vue'

@Component({
    components: {
        Maplocation,
        Header,
        Org,
        Signin
    }
})
export default class Index extends Vue {
    $store: any

    get client() {
        return this.$store.state.customer.org
    }
}
</script>
