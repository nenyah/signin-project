<!--
 * @Description: 
 * @Author: Steven
 * @Date: 2020-10-27 15:20:07
 * @LastEditors: Steven
 * @LastEditTime: 2020-10-27 16:41:43
-->
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    mpType: 'app',
    onLaunch() {
        console.log('App Launch')
    },
    onShow() {
        console.log('App Show')
    },
    onHide() {
        console.log('App Hide')
    },
})
</script>

<style lang='scss'>

/*每个页面公共css */
@tailwind base;

@tailwind components;

@tailwind utilities;
</style>
