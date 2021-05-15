<template>
	<view class="content">
		<view class="card">
			<view class="above">
				<view class="ab-left">
					<image src="/components/vip-card/image/vip.png" mode=""></image>
					<text>VIP会员，每天至少可省58元</text>
				</view>
				<view class="ab-right">
					
				</view>
			</view>
			<view class="below">
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"vip-card",
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	.content{
		width: 100%;
		height: 300rpx;
		
	}
	.card{
		width: 90%;
		height: 250rpx;
		margin-top: 50rpx;
		border-top-left-radius: 30rpx;
		border-top-right-radius: 30rpx;
		background: linear-gradient(to bottom, #485563, #29323c);
	}
	.above{
		width: 100%;
		height: 100rpx;
		background-color: #007AFF;
	}
	.below{
		
	}
	.ab-left{
		width: 70%;
		height: 100%;
		background-color: #18B566;
	}
	.ab-left image{
		width: 60rpx;
		height: 60rpx;
	}
</style>
