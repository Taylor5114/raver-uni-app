<template>
	<view class="body">
		<view class="title">
			<view class="title1">
				<h1>填写基本信息</h1>
				<p>向BOSS介绍一下自己吧</p>
			</view>
		</view>
		<view class="touxiang">
			<view class="t-left">
				<h4>头像</h4>
				<p class='pp'>上传求值照片被BOSS回复的几率翻倍</p>
			</view>
			<view class="t-right">
				<view class="">
					<image src="../../../static/image/camera.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class='line'></view>
		<view class="gender demo">
			<h4>性别</h4>
			<view class="demo01">
				<view class='d00' :class='{change:man}' @click="changeMan()">男</view>
				<view class='d01' :class="{change:woman}" @click="changeWoman()">女</view>
			</view>
		</view>
		<view class='line'></view>
		<view class="identity demo">
			<span class="">
				<h4>求职身份</h4>
				<p class='pp'  v-show='workplace'>有正式工作经历</p>
				<p class='pp' v-show='student'>应届生/实习生</p>
			</span>
			<view class="demo01">
				<view class='d00' :class='{change:workplace}' @click='changeWork()'>职场人</view>
				<view class='d01' :class='{change:student}' @click='changeStu()'>学生</view>
			</view>
		</view>
		<view class='line'></view>
		<view class="name demo02">
			<h4>姓名</h4>
			<input placeholder="请填写姓名">
		</view>
		<view class='line'></view>
		<view class="name demo02">
			<h4>出生年月</h4>
			<input placeholder="请选择出生年月">
		</view>
		<view class='line'></view>
		<view class="name demo02">
			<h4>参加工作时间</h4>
			<input placeholder="请选择参加工作时间">
		</view>
		<view class='line'></view>
		<view class="confirm">
			<button>确定</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				man: false,
				woman: false,
				workplace: true,
				student:false
			}
		},
		methods: {
			changeMan(){
				this.man = true;
				this.woman = false;
			},
			changeWoman(){
				this.woman = true;
				this.man = false
			},
			changeWork(){
				this.workplace = true;
				this.student = false;
			},
			changeStu(){
				this.student = true;
				this.workplace = false;
			}
		}
	}
</script>

<style>
	.body{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	h4{
		font-size: 29rpx;
		font-weight: 500;
		line-height: 70rpx;
	}
	.line{
		width: 90%;
		height: 0;
		border: 1rpx solid #EFEFEF;
		margin: 0rpx auto;
	}
	.title{
		width: 100%;
		height: 250rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.title1{
		width: 90%;
	}
	.title1 h1{
		font-weight: 540;
		font-size: 60rpx;
	}
	.title1 p{
		font-size: 30rpx;
		line-height: 60rpx;
		color: #6B6B6B;
	}
	.demo{
		width: 90%;
		height: 160rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.touxiang{
		width: 90%;
		height: 160rpx;
		display: flex;
		justify-content: space-between;
	}
	.pp{
		color: #6B6B6B;
		font-size: 16rpx;
	}
	.t-left{
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.t-right{
		display: flex;
		align-items: center;
	}
	.t-right view{
		width: 130rpx;
		height: 130rpx;
		border-radius: 75rpx;
		background-color: #37C2BB;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.t-right image{
		width: 55rpx;
		height: 55rpx;
	}
	.demo01{
		width: 260rpx;
		height: 60rpx;
		border: 3rpx solid #37C2BB;
		border-radius: 10rpx;
		overflow: hidden;
		display: flex;
		justify-content: space-evenly;
	}
	.d00,.d01{
		width: 130rpx;
		height: 60rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.d00{
		color: #37C2BB;
	}
	.d01{
		color: #37C2BB;
		border-left: 3rpx solid #37C2BB;
	}
	.change{
		background-color: #37C2BB;
		color: #FFFFFF;
	}
	.demo02{
		width: 90%;
		height: 160rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.confirm{
		width: 90%;
		height: 160rpx;
		border-top: 1rpx solid #EFEFEF;
		display: flex;
		align-items: center;
		position: absolute;
		bottom: 0;
	}
	.confirm button{
		width: 100%;
		height: 80rpx;
		background-color: #37C2BB;
		color: #FFFFFF;
	}
</style>
