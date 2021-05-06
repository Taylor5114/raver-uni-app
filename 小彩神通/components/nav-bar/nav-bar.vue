<template>
	<view class="content">
		<view class="tt" :style="{height:top+'px'}">
			
		</view>
		<view class="navBar">
			Taylor Swift
		</view>
	</view>
</template>

<script>
	export default {
		name:"nav-bar",
		props:{
			top: Number
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	.content{
		background-color: #ff6b81;
	}
	.tt{
		border-bottom: 1rpx solid #007AFF;
	}
	.navBar{
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
