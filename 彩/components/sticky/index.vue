<template>
	<view class="u-demo">
		<view class="u-demo-wrap">
			<uviewSwiper :list="list"></uviewSwiper>
			<view class="u-demo-area">
				<u-toast ref="uToast"></u-toast>
				<u-sticky :offset-top="offsetTop" :enable="enable">
					<view class="sticky">
						<uviewTabs></uviewTabs>
					</view>
				</u-sticky>
			</view>
		</view>
		<view class="tt">
			
		</view>
	</view>
</template>

<script>
	import uviewSwiper from '../swiper/index.vue'
	import uviewTabs from '../tabs/index.vue'
	export default {
		components:{
			uviewSwiper,
			uviewTabs
		},
		props:{
			offsetTop: Number,
			enable: Boolean,
			list: Array
		},
		data() {
			return {
				
			}
		},
		methods: {
		
		}
	}
</script>

<style lang="scss" scoped>
	.tt{
		height: 2000rpx;
	}
	.u-demo-area {
		overflow: hidden;
	}
	
	.u-config-wrap {
		height: 200vh;
	}
	
	.u-demo-title {
		margin-bottom: 140rpx;
	}
	.sticky {
		// background-color: $u-type-primary;
		color: #fff;
		margin: auto;
		font-size: 28rpx;
		line-height: 1;
	}
</style>
