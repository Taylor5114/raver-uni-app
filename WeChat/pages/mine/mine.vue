<template>
	<view class="content" :style="{height:height+'px'}">
		<view class="user">
			<view class="_user">
				<view class="charthead">
					<image src="../../static/charthead/psb.jpeg" mode=""></image>
				</view>
				<view class="info">
					<text class="name">Taylor</text>
					<view class="wxid">
						<text>微信号：TrueStory1989</text>
						<view class="more">
							<image src="../../static/2wm.png" mode=""></image>
							<image src="../../static/next.png" mode=""></image>
						</view>
					</view>
					<view class="state">
						<text>+&nbsp;状态</text>
					</view>
				</view>
			</view>
		</view>
		<view class="pay">
			<view class="_pay">
				<view class="_pl">
					<image src="../../static/pay.png" mode=""></image>
				</view>
				<view class="_pr">
					<text>支付</text>
					<image src="../../static/next.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="pay card-list" v-for="(item,index) in list">
			<navigator class="pay card-list" url="/pages/mine/card/card">
				<view class="_pay" >
					<view class="_pl">
						<image :src="item.img" mode=""></image>
					</view>
					<view class="_pr">
						<text>{{item.title}}</text>
						<image src="../../static/next.png" mode=""></image>
					</view>
				</view>
			</navigator>
		</view>
		<view class="pay">
			<view class="_pay">
				<view class="_pl">
					<image src="../../static/set.png" mode=""></image>
				</view>
				<view class="_pr">
					<text>设置</text>
					<image src="../../static/next.png" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		components:{
			
		},
		data() {
			return {
				height:0,
				list:[
					{title:'收藏',img:'../../static/collect.png'},
					{title:'朋友圈',img:'../../static/circle.png'},
					{title:'视频号',img:'../../static/video.png'},
					{title:'卡包',img:'../../static/card.png'},
					{title:'表情',img:'../../static/face.png'}
				]
			}
		},
		onLoad() {

		},
		methods: {

		},
		onLoad() {
			uni.getSystemInfo({
				success: (res) => {
					this.height = res.windowHeight;
					console.log(this.height)
				}
			})
		}
	}
</script>

<style>
	.content{
		background-color: #ededed;
	}
	.user{
		width: 100%;
		height: 250rpx;
		background-color: #FFFFFF;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	._user{
		width: 90%;
		height: 200rpx;
		display: flex;
	}
	.charthead{
		width: 160rpx;
	}
	.info{
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.charthead image{
		width: 130rpx;
		height: 130rpx;
		border-radius: 15rpx;
	}
	.name{
		font-size: 40rpx;
	}
	.wxid{
		display: flex;
		justify-content: space-between;
		color: #8D8D8D;
		font-size: 30rpx;
	}
	.more{
		width: 100rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.more image{
		width: 30rpx;
		height: 30rpx;
	}
	.state{
		width: 100rpx;
		height: 40rpx;
		border: 1rpx solid #b5b9b9;
		border-radius: 30rpx;
		color: #a0a5a8;
		font-size: 25rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.pay{
		width: 100%;
		height: 100rpx;
		background-color: #FFFFFF;
		margin: 20rpx auto;
		display: flex;
		justify-content: center;
	}
	/* .change{
		background-color: #D5D5D5;
		color: #007AFF;
	} */
	._pay{
		width: 90%;
		height: 100rpx;
		display: flex;
		justify-content: space-between;
	}
	._pl{
		width: 80rpx;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	._pl image{
		width: 50rpx;
		height: 50rpx;
	}
	._pr{
		flex-grow: 1;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1rpx solid #F6F6F6;
	}
	._pr image{
		width: 30rpx;
		height: 30rpx;
	}
	.card-list{
		margin: 0;
	}
</style>
