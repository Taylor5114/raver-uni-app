<template>
	<view class="topbar">
		<text class="title">{{title}}</text>
		<view class="more">
			<image src="/static/topbar/search.png" mode=""></image>
			<image src="/static/topbar/add.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		name:"top-bar",
		props:{
			title:String,
			config:Object
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	.topbar{
		width: 750rpx;
		height: 40px;
		background-color: #EDEDED;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 34rpx;
		position: relative;
	}
	.more{
		width: 20%;
		height: 40px;
		position: absolute;
		right: 0;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.more image{
		width: 20px;
		height: 20px;
	}
</style>
