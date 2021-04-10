<template>
	<view class="body">
		<view class="accessory">
			<view v-if='true' class="nothing">
				<image src="../../../static/image/nothing.png" mode=""></image>
				<p>暂无附件简历</p>
			</view>
		</view>
		<view class="footer">
			<p>附件简历在BOSS向你索取且经你统一。或你主动发送才会提供给对方。BOSS将你转发给同事时，可能会将附件简历一并转发</p>
			<button type="default">上传新附件</button>
		</view>
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
	.nothing{
		width: 90%;
		height: 1000rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: #808080;
		font-size: 28rpx;
	}
	.nothing image{
		width: 300rpx;
		height: 300rpx;
	}
	.footer{
		width: 100%;
		height: 200rpx;
		position: absolute;
		bottom: 10rpx;
		color: #ADADAD;
		font-size: 24rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
	}
	.footer p{
		width: 90%;
	}
	.footer button{
		width: 90%;
		height: 80rpx;
		color: #FFFFFF;
		background-color: #37C2BB;
	}
</style>
