<template>
	<view class="body">
		<view class="inform1">
			<view class="inform">
				<p class='title'>
					您还未开启新职位发布通知
				</p>
				<p class='pp'>
					开启通知后，我们将于每周二上午10点推送最新、最精准的职位信息至您的微信，让您不再错过好工作！
				</p>
			</view>
		</view>
		<view class="demo">
			<p class='d-pp'>职位意向</p>
			<input type="text" value="请选择(必填)" />
		</view>
		<view class="demo">
			<p class='d-pp'>工作城市</p>
			<input type="text" value="请选择(必填)" />
		</view>
		<view class="demo">
			<p class='d-pp'>其他要求</p>
			<input type="text" value="不限" />
		</view>
		<button class="btn" type="default">开启职位通知</button>
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
	.body{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.inform1{
		width: 90%;
		height: 200rpx;
		background-color: #F3FCFB;
		border-radius: 10rpx;
	}
	.inform{
		width: 100%;
		height: 200rpx;
		background: url(../../../static/image/inform.png) right top no-repeat;
		background-size: 32%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}
	.title{
		font-size: 30rpx;
		font-weight: 500;
	}
	.pp{
		width: 90%;
		height: 100rpx;
		text-align: center;
		font-size: 25rpx;
		line-height: 40rpx;
		color: #797C7B;
	}
	.demo{
		width: 90%;
		height: 200rpx;
		border-bottom: 1px solid #ECECEC;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: space-around;
	}
	.d-pp{
		font-size: 28rpx;
		line-height: 80rpx;
	}
	.demo input{
		width: 100%;
		background: url(../../../static/image/nnext.png)center right no-repeat;
		background-size: 5%;
		font-size: 32rpx;
		color: #CCCCCC;
	}
	.btn{
		position: absolute;
		bottom: 20rpx;
		width: 90%;
		background-color: #37C2BB;
		color: #FFFFFF;
	}
</style>
