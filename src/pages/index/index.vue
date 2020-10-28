<!--
 * @Description: 
 * @Author: Steven
 * @Date: 2020-10-27 15:20:07
 * @LastEditors: Steven
 * @LastEditTime: 2020-10-28 14:06:02
-->
<template>
    <view>
        <Header></Header>
        <Maplocation/>
        <!--选择人员-->
        <Org></Org>
        <!--签到-->
        <signin></signin>
    </view>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"
import Header from "./header/header.vue"
import Org from "./org/org.vue"
import Signin from "./signin/signin.vue"
import Maplocation from "./maplocation/maplocation.vue"

@Component({
    components: {
        Maplocation,
        Header,
        Org,
        Signin,
    },
})
export default class Index extends Vue {
}
</script>
