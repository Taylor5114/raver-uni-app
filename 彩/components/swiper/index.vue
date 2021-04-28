<template>
	<view class="u-demo">
		<view class="u-demo-wrap">
			<view class="u-demo-area">
				<u-toast ref="uToast"></u-toast>
				<u-swiper :height="250" :list="list" :title="title" :effect3d="effect3d" 
				:indicator-pos="indicatorPos" :mode="mode" :interval="3000"></u-swiper>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		props:{
			list:Array
		},
		data() {
			return {
				title: false,
				mode: 'round',
				indicatorPos: 'bottomCenter',
				effect3d: false,
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.item {
		margin: 30rpx 0;
	}
</style>
