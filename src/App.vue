<!--
 * @Description: 
 * @Author: Steven
 * @Date: 2020-10-27 15:20:07
 * @LastEditors: Steven
 * @LastEditTime: 2020-10-28 09:07:27
-->
<script lang="ts">
import Vue from 'vue'
import {mapActions} from 'vuex'

export default Vue.extend({
    mpType: 'app',
    methods: {
        ...mapActions(['initApp'])
    },
    onLaunch() {
        console.log('App Launch')
    },
    onShow() {
        this.initApp()
        console.log('App Show')
    },
    onHide() {
        console.log('App Hide')
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

.bg-theme-blue {
    background-color: #3296fa;
}

.bg-helper-red {
    background-color: #f25643;
}

.bg-helper-yellow {
    background-color: #fee151;
}

.bg-helper-green {
    background-color: #15bc83;
}

.bg-helper-orange {
    background-color: #ff943e;
}

.bg-helper-purple {
    background-color: #576a95;
}

.bg-helper-white {
    background-color: #fff;
}

.bg-helper-white-40 {
    background-color: rgba(255, 255, 255, 40);
}

.bg-helper-gray-28 {
    background-color: rgba(25, 31, 37, 28);
}

.bg-helper-gray-40 {
    background-color: rgba(25, 31, 37, 40);
}

.bg-helper-gray-56 {
    background-color: rgba(25, 31, 37, 56);
}

.bg-helper-gray-72 {
    background-color: rgba(25, 31, 37, 72);
}

.bg-helper-black {
    background-color: rgba(25, 31, 37, 100);
}

.bg-helper-gray {
    background-color: #f0eff5;
}
</style>
