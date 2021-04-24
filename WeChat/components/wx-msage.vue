<template>
	<view>
		<view class="msage" v-for="(msage,index) in msage">
			<view class="charthead">
				<image :src="msage.charthead" mode=""></image>
			</view>
			<view class="msg">
				<view class="line01">
					<text class="name">{{msage.name}}</text>
					<text class="time">{{msage.time}}</text>
				</view>
				<view class="line02">
					<text class="_msg">{{msage.msg}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"wx-msage",
		props:{
			msage:Array
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	.msage{
		display: flex;
		width: 750rpx;
		height: 130rpx;
	}
	.charthead{
		width: 130rpx;
		height: 130rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.msg{
		flex-grow: 1;
		border-bottom: 1rpx solid #F6F6F6;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.charthead image{
		width: 100rpx;
		height: 100rpx;
		border-radius: 15rpx;
	}
	.line01{
		display: flex;
		justify-content: space-between;
	}
	.time{
		margin-right: 20rpx;
		font-size: 25rpx;
		color: #C4C4C4;
	}
	._msg{
		font-size: 28rpx;
		color: #C4C4C4;
	}
</style>
