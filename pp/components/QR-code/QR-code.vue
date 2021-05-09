<template>
	<view class="content">
		<swiper duration=200 disable-touch='true' :current="id">
			<swiper-item>
				<view class="swiper-item">
					<view class="box">
						<image src="../../static/wx.png" mode="aspectFill"></image>
					</view>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<view class="box">
						<image src="../../static/zfb.jpg" mode="aspectFill"></image>
					</view>
				</view>
			</swiper-item>
		</swiper>
		<view class="_nav">
			<text v-for="(nav,index) in navList" @tap="change(index)" :class="{_change:id==index}">{{nav}}</text>
		</view>
		<view class="msg">
			<text>有问题请联系:</text>
			<text>17560745114</text>
		</view>
	</view>
</template>

<script>
	export default {
		name:"QR-code",
		props:{
			
		},
		data() {
			return {
				navList:['微信','支付宝'],
				id:0
			};
		},
		methods: {
			change(index){
				this.id = index;
			}
		}
	}
</script>

<style>
	.content{
		width: 750rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	._nav{
		width: 750rpx;
		height: 50px;
		font-size: 25px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	._nav text{
		height: 50px;
		margin: 0 30rpx;
		/* line-height: 50px; */
		transition:0.3s;
	}
	._change{
		color: #F0AD4E;
		transition:0.3s;
	}
	swiper{
		width: 750rpx;
		height: 700rpx;
	}
	.swiper-item{
		height: 700rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.box{
		width: 400rpx;
		height: 600rpx;
		border-radius: 10rpx;
		overflow: hidden;
		box-shadow: 0px 0px 20px #d4d4d4;
	}
	.box image{
		width: 100%;
		height: 100%;
	}
	.msg{
		width: 500rpx;
		height: 150rpx;
		background-color: #f3eed3;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;
		border-radius: 20rpx;
	}
	.msg text{
		font-size: 40rpx;
	}
</style>
