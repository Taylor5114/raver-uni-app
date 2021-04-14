<template>
	<view>
		<!-- <view class="aa" :style='{height:height+"px"}'>
			1231
		</view> -->
		<!-- <swiper class="aa" :style='{height:height+"px"}'>
			<swiper-item>
				<view class="swiper-item">Queen</view> 
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">Taylor</view>
			</swiper-item>
		</swiper> -->
		<scroll-view class="aa" scroll-y="true" @scroll='aa'>
			<view class="dd">
				<view class="bb"></view>
				<view class="cc"></view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		components: {
			
		},
		data() {
			return {
				height:0
			} 
		},
		methods: {
			aa(){
				console.log('11111111111')
				// alert('success')
			}
		},
		onLoad(){
			
		}
	}
</script>

<style>
	.aa{
		width: 750rpx;
		height: 1250rpx;
		background-color: #007AFF;
		
	}
	.bb{
		width:375rpx;
		height: 200rpx;
		background-color: #0E9A93;
	}
	.cc{
		width:375rpx;
		height: 100px;
		background-color: #4CD964;
	}
	.dd{
		display: flex;
	}
</style>
