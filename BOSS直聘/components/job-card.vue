<template>
	<view class="job-card" :style='{height:height-topheight+"px",width:width+"px"}'>
		<view v-for="(item,index) in job" class="cc">
			<view class="cards">
				<view class="line01">
					<h3 class='position'>{{item.position}}</h3>
					<h3 class='pay'>{{item.pay}}</h3>
				</view>
				<view class="line02">
					<p>{{item.company}}</p>
					<p>{{item.num}}</p>
					<p>{{item.state}}</p>
				</view>
				<view class="line03">
					<view v-for='i in item.condition'><p>{{i}}</p></view>
				</view>
				<view class="line04">
					<view class="l04-l">
						<image :src="item.img"></image>
						<p class='name'>{{item.name}}</p>
					</view>
					<view class="l04-r">
						<p class='address'>{{item.address}}</p>
					</view>
				</view>
			</view>
			<view class="line">	
		</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"job-card",
		props:{
			job: Array,
			topheight:Number,
			width:Number,
			height:Number
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	.job-card{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.cc{
		width: 100%;
		height: 310rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.line{
		width: 100%;
		height: 10rpx;
		background-color: #F6F6F6;
	}
	.cards{
		width: 90%;
		height: 300rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
	.line01{
		display: flex;
		justify-content: space-between;
	}
	.line02{
		display: flex;
		justify-content: flex-start;
		color: #929292;
	}
	.line02 p{
		font-size: 28rpx;
		margin-right: 20rpx; 
	}
	.line03 view{
		height: 40rpx;
		line-height: 20rpx;
		margin-right: 10rpx;
		border-radius: 8rpx;
		width: auto;
		background-color: #F5F5F5;
	}
	.line03 view p{
		padding: 10rpx;
	}
	.line03{
		display: flex;
		justify-content: flex-start;
		color: #686868;
		font-size: 20rpx;
	}
	.line04{
		display: flex;
		justify-content: space-between;
	}
	.l04-l{
		display: flex;
		align-items: center;
	}
	.l04-l image{
		width: 50rpx;
		height: 50rpx;
		border-radius: 25rpx;
	}
	.name{
		font-size: 20rpx;
		margin-left: 20rpx;
	}
	.address{
		font-size: 20rpx;
		color: #B9B9B9;
	}
	.pay{
		color: #37C2BB; 
	}
</style>
