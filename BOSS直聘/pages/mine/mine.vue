<template>
	<view class="body">
		<view class="top">
			<view class="name">
				<h1>{{user.name}}</h1>
				<p>Infinite Progress</p>
			</view>
			<view class="touxiang">
				<image :src="user.headPortrait" mode=""></image>
			</view>
		</view>
		<view class="fun">
			<li>
				<navigator url='resume/resume'>
					<image src="../../static/image/jiannli.png" mode=""></image>
					<p>在线简历</p>
				</navigator>
			</li>
			<li>
				<navigator url="accessory/accessory">
					<image src="../../static/image/fujian.png" mode=""></image>
					<p>附件简历</p>
				</navigator>
			</li>
			<li>
				<navigator url="interview/interview">
					<image src="../../static/image/mianshi.png" mode=""></image>
					<p>我的面试</p>
				</navigator>
			</li>
			<li>
				<navigator url="subscription/subscription">
					<image src="../../static/image/dingyue.png" mode=""></image>
					<p>职位订阅</p>
				</navigator>
			</li>
		</view>
		<view class="tt tt1">
			<li>
				<image src="../../static/image/shoucang.png" mode=""></image>
				<p>我的收藏</p>
			</li>
			<li>
				<image src="../../static/image/bixin.png" mode=""></image>
				<p>我的发现</p>
			</li>
			<li>
				<image src="../../static/image/privacy.png" mode=""></image>
				<p>隐私设置</p>
			</li>
			<view class='line'></view>
			<li>
				<image src="../../static/image/shoucang.png" mode=""></image>
				<p>我要招聘</p>
			</li>
			<li>
				<image src="../../static/image/bixin.png" mode=""></image>
				<p>直直公益</p>
			</li>
			<li>
				<image src="../../static/image/privacy.png" mode=""></image>
				<p>意见反馈</p>
			</li>
		</view>
		<view class="footer">
			<button class="btn-quit" type="default">退出登录</button>
		</view>
	</view>
</template>

<script>
	// 引入组件
	import setCount from '../../components/set-count.vue';
	export default {
		// 注册组件
		components:{
			setCount
		},
		data() {
			return {
				height:0,
				width:0,
				user:{
					name:'Taylor Swift',
					gender:'女',
					headPortrait:'../../static/raver/taylor.jpeg',
					birthTime:'1989-12-13',
					entryTime:'2006-04-20',
					isStudent:false	
				}
			}
		},
		methods: { 
		
		}
	}
</script>

<style>
	.body{
		width:100%;
		background-color: #F5F5F5;
		font-family: "等线";
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.top{
		width: 100%;
		height: 300rpx;
		background-color: #37C2BB;
		font-weight: 100;
		display: flex;
		align-items: flex-end;
		justify-content: space-around;
	}
	.name{
		width:500rpx;
		height: 200rpx;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
	}
	.top h1{
		font-weight: 100;
		color: #FBFFFF;
		line-height: 20rpx;
	}
	.top p{
		color: #E5FAFA;
		font-size: 30rpx;
		line-height: 90rpx;
	}
	.touxiang{
		width: auto;
		height: 200rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.touxiang image {
		width: 162rpx;
		height: 162rpx;
		border-radius: 81rpx;
	}
	.fun{
		width: 100%;
		height: 200rpx;
		background-color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	.fun li{
		list-style: none;
		width: 150rpx;
		height: 130rpx;
	}
	.fun li navigator{
		display: flex;
		width: 150rpx;
		height: 130rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
	}
	.fun li image{
		width: 70rpx;
		height: 70rpx;
	}
	.fun li p{
		font-size: 25rpx;
	}
	.tt1{
		margin-top: 10rpx;
	}
	.line{
		width: 90%;
		height: 0;
		border: 1rpx solid #EFEFEF;
		margin: 30rpx auto;
	}
	.tt{
		width: 100%;
		background-color: #FFFFFF;
		color: #3F3F3F;
		font-size: 32rpx;
		font-weight: bold;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.tt li{
		list-style: none;
		width: 90%;
		height: 100rpx;
		background-color: #007AFF;
		display: flex;
		align-items: center;
		background: url(../../static/image/nnext.png) right center no-repeat;
		background-size: 5%;
	}
	.tt li image{
		width: 40rpx;
		height: 40rpx;
		margin: auto 20rpx;
	}
	.footer{
		width: 100%;
		flex-grow: 1;
		background-color: #FFFFFF;
		display: flex;
		justify-content: center;
		background-color: #000000;
	}
	.btn-quit{
		position: absolute;
		bottom: 30rpx;
		width: 90%;
		height: 80rpx;
		background-color: #F7F7F7;
		border: none;
		color: #797979;
		font-size: 25rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
