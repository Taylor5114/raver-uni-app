<template>
	<view class="content">
		<view class="card">
			<view class="card_left">
				<image src="/static/icons/vip.png" mode=""></image>
				<view class="c_l_title">
					<text>开通VIP</text>
					<text>享AI预测......功能</text>
				</view>
			</view>
			<view class="card_right">
				<text>了解特权</text>
				<image src="/static/icons/next.png" mode=""></image>
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
		display: flex;
		justify-content: center;
		align-items: center;
		width: 750rpx;
		height: 200rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.card{
		width: 700rpx;
		height: 150rpx;
		background: linear-gradient(to bottom, #ffe259, #ffa751);
		border-radius: 20rpx;
		box-shadow: 5px 5px 5px #888888;
		display: flex;
		justify-content: space-around;
	}
	.card image{
		width: 60rpx;
		height: 60rpx;
	}
	.card_left{
		display: flex;
		align-items: center;
	}
	.card_right{
		display: flex;
		align-items: center;
	}
	.c_l_title{
		display: flex;
		flex-direction: column;
	}
</style>
