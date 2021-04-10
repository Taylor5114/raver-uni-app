<template>
	<view class="body">
		<view class="interview">
			<view class="nothing">
				<image src="../../../static/image/nothing01.png" mode=""></image>
				<p>暂无数据</p>
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
	.body{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.nothing{
		width: 90%;
		height: 1000rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: #808080;
		font-size: 28rpx;
	}
	.nothing image{
		width: 400rpx;
		height: 300rpx;
	}
</style>
