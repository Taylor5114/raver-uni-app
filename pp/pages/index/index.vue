<template>
	<view class="content">
		<view class="tt">
			<view class="_tt">
				<text>紧急联系人：17560745114</text>
			</view>
			
		</view>
		<view class="ss">
			<image src="../../static/wx.png" mode=""></image>
			<image src="../../static/zfb.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				height:0,
				width:0
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success: (res) => {
					this.height = res.windowHeight;
					this.width = res.windowWidth;
					console.log(this.height+' '+this.width)
				}
			}),
			uni.request({
			    url: 'https://mock.mengxuegu.com/mock/608bb11d1d10f86a7bd6aae6/raver233/wechat', //仅为示例，并非真实接口地址。
			    success: (res) => {
			        console.log(res.data);
			        this.text = 'request success';
			    }
			});
		},
		methods: {

		}
	}
</script>

<style>
	.content {
		width: 393px;
		height: 708px;
		/* background-color: #00ff6f; */
		display: flex;
		/* align-items: center; */
		/* justify-content: space-around; */
	}
	.content image{
		width: 380rpx;
		height: 450rpx;
		border-radius: 20rpx;
		box-shadow: 5px 5px 5px #a4a2a6;
		transform:rotate(90deg);
	}
	.tt{
		width: 120px;
		height: 703px;
		/* background-color: #ff3191; */
		display: flex;
		align-items: center;
		justify-content: center;
	}
	._tt{
		width: 600px;
		height: 100px;
		/* background-color: #e4fb2a; */
		transform:rotate(90deg);
	}
	._tt text{
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 24px;
		/* color: #ff0000; */
	}
	.ss{
		flex-grow: 1;
		height: 703px;
		width: 343px;
		/* background-color: #007AFF; */
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
