<!--
 * @Description: 
 * @Author: Steven
 * @Date: 2020-10-27 15:20:07
 * @LastEditors: Steven
 * @LastEditTime: 2020-10-28 09:07:27
-->
<script lang="ts">
import Vue from "vue"

export default Vue.extend({
    mpType: "app",
    onLaunch() {
        console.log("App Launch")
    },
    onShow() {
        console.log("App Show")
    },
    onHide() {
        console.log("App Hide")
    },
})
</script>

<style lang="scss">
/*每个页面公共css */
@tailwind utilities;
@import 'assets/css/font-awesome.css';

.truncate-2 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
}
page {
    font-size: 10px;
}
.map-bg {
    background: url('/static/images/map_bg.png');
    background-size: 100%;
    background-repeat: no-repeat;
}
</style>
