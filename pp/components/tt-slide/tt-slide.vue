<template>
	<view class="content">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(item,index) in list">
				<view class="swiper-item">
					<image :src="item.image" mode=""></image>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		name:"tt-slide",
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
	.content{
		width: 750rpx;
		height: 300rpx;
	}
	swiper{
		width: 750rpx;
		height: 300rpx;
	}
	swiper image{
		width: 750rpx;
		height: 300rpx;
	}
</style>
