<template>
	<view class="content">
		<view class="top">
			Web前端
		</view>
		<view class="nav" :class="">
			
		</view>
		<view class="card">
			
		</view>
		<view class="card">
			
		</view>
		<view class="card">
			 
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Taylor Swift'
			}
		},
		onLoad() {
			function app (){
				console.log(app)
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		background: #D2D2D4;
		height: 1500rpx;
	}
	.top{
		width: 100%;
		height: 100rpx;
		background-color: #0E9A93;
		color: #D7D7D7;
		display: flex;
		justify-content: space-around;
	}
	.nav{
		width: 100%;
	}
	.card{
		width: 100%;
		height: 300rpx;
		background-color: #FFFFFF;
		margin-bottom: 10rpx;
	}

</style>
