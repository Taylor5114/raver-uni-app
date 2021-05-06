<template>
	<view>
		<image :src="url" mode=""></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url:''
			}
		},
		onLoad() {
		uni.request({
			url:"https://mock.mengxuegu.com/mock/60912e6c1d10f86a7bd6af4e/tt/test",
			success: (res) => {
				this.url = res.data.tt.url;
			}
		})
		},
		methods: {

		}
	}
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
