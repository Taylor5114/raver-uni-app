<template>
	<view class="u-demo">
		<view class="u-demo-wrap">
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
	import uviewTabs from '../tabs/index.vue'
	export default {
		components:{
			uviewTabs
		},
		props:{
			offsetTop: Number,
			enable: Boolean,
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
		background-color: $u-type-primary;
		color: #fff;
		margin: auto;
		font-size: 28rpx;
		line-height: 1;
	}
</style>
