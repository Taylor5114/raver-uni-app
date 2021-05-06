<template>
	<view>
		<view class="item" v-for="item in list">
			<view class="left">
				<text v-text="item.title"></text>
				<text v-text="item._title"></text>
			</view>
			<view class="right">
				<text v-text="item.tips"></text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"mine-list",
		props:{
			list: Array
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	.item{
		border-bottom: 1rpx solid #808080;
		width: 750rpx;
		height: 100rpx;
		display: flex;
		align-items: center;
		font-size: 30rpx;
	}
</style>
