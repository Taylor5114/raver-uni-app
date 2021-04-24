<template>
	<view>
		<view class="box01" hover-class="box01-active" hover-stay-time="3000">
			<view class="box00" hover-class="box00-active" hover-start-time="1000" hover-stop-propagation="true">
				<!-- 
					hover-stop-propagation 取消冒泡 
					hover-stay-time 效果保留时间
					hover-start-time 效果延迟触发
				-->
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
	.box00{
		width: 200rpx;
		height: 200rpx;
		background-color: #DD524D;
	}
	.box00-active{
		background-color: #4CD964;
	}
	.box01{
		width: 250rpx;
		height: 250rpx;
		background-color: #F0AD4E;
	}
	.box01-active{
		background-color: #007AFF;
	}
</style>
