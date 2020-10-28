<!--
 * @Description: 
 * @Author: Steven
 * @Date: 2020-10-27 15:20:07
 * @LastEditors: Steven
 * @LastEditTime: 2020-10-28 09:08:00
-->
<template>
	<view class="flex flex-col items-center justify-center">
        <image class="w-32 h-32 mt-10 mb-5 mx-auto" src="../../static/logo.png"></image>
		<view>
            <text class="title text-blue-500 border border-solid border-grey-500 p-2 bg-red-500 rounded-lg">{{title}}</text>
			<view class="fa fa-circle-o text-red-500"></view>
        </view>
	</view>
</template>

<script lang="ts">
    import Vue from 'vue';
	export default Vue.extend({
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	});
</script>

<style lang='scss'>
</style>
