<template>
	<view class="content">
		<view class="main">
			<view class="card" v-for="(takecode,index) in takecode">
				<view class="left">
					<image :src="takecode.img" mode=""></image>
				</view>
				<view class="right">
					<text class="express">{{takecode.title}}</text>
					<text class="code">{{takecode.code}}</text>
					<text class="name" v-if="takecode.name">收件人：{{takecode.name}}</text>
					<text class="phone" v-if="takecode.phone">电话：{{takecode.phone}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"take-code",
		props:{
			takecode: Array
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	.content{
		display: flex;
		flex-direction: column;
	}
	.title{
		
	}
	.main{
		width: 750rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.card{
		width: 700rpx;
		height: 280rpx;
		display: flex;
		align-items: center;
		background-color: #f1f2f6;
		border-radius: 30rpx;
		overflow: hidden;
		margin-top: 10rpx;
	}
	.left{
		width: 250rpx;
		height: 280rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.left image{
		width: 200rpx;
		height: 200rpx;
		border-radius: 30rpx;
	}
	.right{
		height: 250rpx;
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		
	}
	.code{
		font-size: 60rpx;
		color: #DD524D;
		font-weight: bolder;
	}
</style>
