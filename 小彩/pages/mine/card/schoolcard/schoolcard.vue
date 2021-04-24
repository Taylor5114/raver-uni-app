<template>
	<view class="content">
		<view class="sdqg">
			<image src="/static/sdqg.png" mode=""></image>
		</view>
		<view class="btn">刷校园码</view>
		<view class="tt">
			<view class="t1">
				<text>服务大厅</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.content{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.sdqg{
		width: 750rpx;
		height: 500rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.sdqg image{
		width: 90%;
		height: 400rpx;
		border-radius: 20rpx;
	}
	.btn{
		width: 280rpx;
		height: 80rpx;
		border: 1px solid #67A5C5;
		color: #67A5C5;
		border-radius: 6rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.tt{
		width: 750rpx;
		border-top: 1rpx solid #cdd2d2;
		display: flex;
		justify-content: center;
	}
	.t1{
		width: 700rpx;
		height: 100rpx;
		border-bottom: 1rpx solid #cdd2d2;
		display: flex;
		align-items: center;
	}
</style>
