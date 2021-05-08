<template>
	<view>
		<view style="background-color: #F0AD4E">对android文件操作类的封装，可获取内部存储中,某个目录下，某些类型的文件;用户可根据以下方法自定义UI,如只获取内部存储所有图片文件，只获取内部存储中，某个目录下的所有文件等</view>

		<view style="height: 1upx;background-color: #007AFF;margin-top: 10upx;margin-bottom: 10upx;"></view>

		<view>获取内部存储绝对路径，异步方法，方便getFilesAsync方法调用</view>
		<button @tap="getExternalStorageDirectory">获取内部存储绝对路径</button>
		<view style="height: 1upx;background-color: #007AFF;margin-top: 10upx;margin-bottom: 10upx;"></view>

		<view>获取手机所有文件，默认所有参数不传</view>
		<button @tap="getFilesAsync">获取手机所有文件(默认)</button>
		<view style="height: 1upx;background-color: #007AFF;margin-top: 10upx;margin-bottom: 10upx;"></view>

		<view>传参示例，获取手机内部存储DCIM文件夹下的所有图片文件</view>
		<button @tap="getFilesAsyncPicInDCIM">获取DCIM图片</button>
		<view style="height: 1upx;background-color: #007AFF;margin-top: 10upx;margin-bottom: 10upx;"></view>

		<text style="width: auto;word-wrap: break-word;word-break: break-all;padding: 10upx;" selectable="true">{{content}}</text>

	</view>
</template>

<script>
	import config from '../../config.js';
	export default {
		data() {
			return {
				content: '文件路径'
			}
		},
		methods: {
			gotoUrl() {
				uni.openWeb('https://ext.dcloud.net.cn/plugin?id=2715')
			},
			/**
			 * 获取内部存储绝对路径，异步方法,方便getFilesAsync方法调用
			 * 大部分android手机外部存储路径为“/storage/emulated/0”，但也有可能对于深度定制手机，可能不是这个，所以把这个开放出来
			 */
			getExternalStorageDirectory() {
				const plugin = uni.requireNativePlugin(config.fileUtilsModule);
				plugin.getExternalStorageDirectory({}, result => {
					console.log(result);
					this.content = result;
				});
			},
			/**
			 * 获取手机所有文件，即默认所有参数不传
			 * 异步方法，因获取存储中所有文件，比较耗时，请耐心等待
			 */
			getFilesAsync() {
				uni.showLoading({
					title: '请稍后...'
				});
				const plugin = uni.requireNativePlugin(config.fileUtilsModule);
				plugin.getFilesAsync({}, result => {
					uni.hideLoading();
					//这里loading可能会先消失，然后待一段时间才会在ui上显示，原因是数据大多，ui渲染需要时间，这里用户可根据自己情况自行优化，这里建议拿到所有数据后，先渲染前10条，再继续向下渲染
					this.content = JSON.stringify(result);
				});
			},
			/**
			 * 传参示例，获取手机内部存储DCIM文件夹下的所有图片文件
			 * path: 内部存储中某个文件夹的绝对路径，默认不传此参数为，内部存储中所有文件
			 * fileTypes:筛选文件的类型（文件的后缀名），默认不传此参数，为所有文件类型都搜索出来；这里列举出两个样例：
			 * 所有图片：let arrPic = ["jpg", "png", "jpeg", "bmp", "tif", "gif", "pcx", "tga", "exif", "fpx", "svg", "psd"];
			   所有视频：let arrVideo = ["mp4", "rm", "rmvb", "mpeg", "mov", "mtv", "wmv", "avi", "3gp", "amv", "dmv", "flv", "mkv",
						"mpg",
						"mk", "m4v"
					];
			 * isNeedRareFiles：是否筛选出一些少见的文件，如可能会有一些系统文件，这类文件不带后缀名，不常见的文件，默认不传此参数，不搜索出这类文件，如果想要这些文件，请设置为true
			 */
			getFilesAsyncPicInDCIM() {
				uni.showLoading({
					title: '请稍后...'
				});
				const plugin = uni.requireNativePlugin(config.fileUtilsModule);
				//主线程同步方法
				plugin.getExternalStorageDirectory({}, result => {
					let pathSdcard = result;
					//所有图片
					let arrPic = ["jpg", "png", "jpeg", "bmp", "tif", "gif", "pcx", "tga", "exif", "fpx", "svg", "psd"];
					//所有视频
					let arrVideo = ["mp4", "rm", "rmvb", "mpeg", "mov", "mtv", "wmv", "avi", "3gp", "amv", "dmv", "flv", "mkv",
						"mpg",
						"mk", "m4v"
					];
					plugin.getFilesAsync({
						path: pathSdcard + '/DCIM',
						fileTypes: arrPic
					}, result => {
						uni.hideLoading();
						console.log(JSON.stringify(result));
						this.content = JSON.stringify(result);
					});
				});
			}
		}
	}
</script>

<style>

</style>
