<template>
	<view class="content">
		<button style="width: 100%;background: #007AFF;color: #FFFFFF;margin-bottom: 10upx;" @tap="goToChooseFile">文件选择插件</button>
		<button style="width: 100%;background: #007AFF;color: #FFFFFF;margin-bottom: 10upx;" @tap="goToFileUtil">文件封装插件</button>
		<button v-if="false" style="width: 100%;background: #007AFF;color: #FFFFFF;margin-bottom: 10upx;" @tap="goToPdf">pdf浏览插件</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		onLoad() {},
		methods: {
			goToChooseFile() {
				uni.navigateTo({
					url: '../choosefilepage/choosefilepage'
				})
			},
			goToFileUtil(){
				uni.navigateTo({
					url: '../fileutilspage/fileutilspage'
				})
			},
			goToPdf(){
				uni.navigateTo({
					url: '../pdfpage/pdfpage'
				})
			}
		}
	};
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
