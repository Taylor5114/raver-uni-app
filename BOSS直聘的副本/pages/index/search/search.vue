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
			<view class="bb">123123</view>
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
				alert('success')
			}
		},
		onLoad(){
			// uni.getSystemInfo({
			// 	success: (res) => {
			// 		this.height = res.windowHeight
			// 		console.log(res.windowHeight)
			// 	}
			// })
		}
	}
</script>

<style>
	.aa{
		width: 1000rpx;
		height: 2500rpx;
		background-color: #007AFF;
	}
	.bb{
		width: 1000rpx;
		height: 2600rpx;
	}
</style>
