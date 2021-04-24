<template>
	<view class="content" :style="{height: height+'px'}">
		<view class="pay card-list" v-for="(item,index) in list">
			<navigator class="pay card-list" url="/pages/mine/card/card">
				<view class="_pay" >
					<view class="_pl">
						<image :src="item.img" mode=""></image>
					</view>
					<view class="_pr">
						<text>{{item.title}}</text>
						<image src="/static/next.png" mode=""></image>
					</view>
				</view>
			</navigator>
		</view>
		<view class="line">
			
		</view>
		<view class="pay card-list" v-for="(item,index) in list1">
			<navigator class="pay card-list" url="/pages/mine/card/card">
				<view class="_pay" >
					<view class="_pl">
						<image :src="item.img" mode=""></image>
					</view>
					<view class="_pr">
						<text>{{item.title}}</text>
						<image src="/static/next.png" mode=""></image>
					</view>
				</view>
			</navigator>
		</view>
		<view class="line"></view>
		<view class="ttt">
			<text class="_text">最近使用</text>
		</view>
		<view class="schoolcard">
			<navigator class="schoolcard" url="schoolcard/schoolcard">
				<image src="../../../static/schoolcard.png" mode=""></image>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				height:999,
				list:[
					{title:'会员卡',img:'/static/vip.png'},
					{title:'公交卡',img:'/static/bus.png'}
				],
				list1:[
					{title:'券和礼品卡',img:'/static/gift.png'},
					{title:'票证',img:'/static/ticket.png'}
				]
			}
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
	._text{
		color: #A7A7A7;
		font-size: 25rpx;
	}
	.schoolcard{
		width: 750rpx;
		height: 230rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.schoolcard image{
		width: 90%;
		height: 180rpx;
	}
	.ttt{
		width: 675rpx;
		display: flex;
		justify-content: flex-start;
	}
	.content{
		background-color: #EDEDED;
	}
	.line{
		width: 750rpx;
		height: 20rpx;
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
