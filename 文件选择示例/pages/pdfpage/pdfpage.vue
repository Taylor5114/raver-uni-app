<template>
	<view>
		<view>竖向浏览;显示导航标题;导航标题为文件名字，若文件名字大于10，显示式为“xx...xx.pdf”</view>
		<button @tap="pdfDefault">pdf查看(默认)</button>
		<view style="height: 1upx;background-color: #007AFF;margin-top: 10upx;margin-bottom: 10upx;"></view>

		<view>单选，只允许选择1个文件；选择文件，不允许选择文件夹；搜索全部类型的文件；右下角按钮为“发送”</view>
		<button @tap="chooseFileOnlyOne">文件选择(单选，其它默认)</button>
		<view style="height: 1upx;background-color: #007AFF;margin-top: 10upx;margin-bottom: 10upx;"></view>

		<view>多选；允许选择最大数量文件30个；选择文件，不允许选择文件夹；筛选文件类型为'png','jpg'，'txt', 'doc'的文件；右下角按钮为“发送”</view>
		<button @tap="chooseFileFileTypes">文件选择(筛选文件类型，其它默认)</button>
		<view style="height: 1upx;background-color: #007AFF;margin-top: 10upx;margin-bottom: 10upx;"></view>

		<view>多选；允许选择最大数量文件30个；选择文件，不允许选择文件夹；搜索全部类型的文件；右下角按钮为“我是自定义按钮”</view>
		<button @tap="chooseFileBtnTxt">文件选择(自定义右下角按钮标题，其它默认)</button>
		<view style="height: 1upx;background-color: #007AFF;margin-top: 10upx;margin-bottom: 10upx;"></view>

		<view style="background-color: #F0AD4E">以上为代码示例，可根据需要，自定义参数组合，实现自己想要的效果，这里不再一一列举</view>

		<view style="height: 1upx;background-color: #007AFF;margin-top: 10upx;margin-bottom: 10upx;"></view>

		<view style="background-color: #F0AD4E">以下介绍，不带UI的，获取内部存储中的文件操作封装方法;以下方法是在完成上述功能的过程中，对文件操作的封装，用户可根据以下方法自定义UI了</view>

		<view style="height: 1upx;background-color: #007AFF;margin-top: 10upx;margin-bottom: 10upx;"></view>

		<view>获取内部存储绝对路径，主UI线程同步方法，方便getFilesWithoutUiAsync方法调用</view>
		<button @tap="getExternalStorageDirectory">获取内部存储绝对路径</button>
		<view style="height: 1upx;background-color: #007AFF;margin-top: 10upx;margin-bottom: 10upx;"></view>

		<view>获取手机所有文件，默认所有参数不传</view>
		<button @tap="getFilesWithoutUiAsync">获取手机所有文件(默认)</button>
		<view style="height: 1upx;background-color: #007AFF;margin-top: 10upx;margin-bottom: 10upx;"></view>

		<view>传参示例，获取手机内部存储DCIM文件夹下的所有图片文件</view>
		<button @tap="getFilesWithoutUiAsyncPicInDCIM">获取DCIM图片</button>
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
			 *
			 */
			pdfDefault() {
				//由于uni的文件路径可能为uni自己的路径，所以最好是用plus.io.convertLocalFileSystemURL()的api，将路径转化为android原生路径
				let pathPlat = plus.io.convertLocalFileSystemURL(filePath);
				const plugin = uni.requireNativePlugin('K-PdfViewerModule');
				plugin.pdfViewAction({ path: pathPlat }, result => {
				if (result && result.code != '0') {
				    //调用本插件，若result.code不为'0'的话，说明调用插件没有成功，会有错误信息回调,具体可查看返回参数说明
				}
				});
			},
			/**
			 * 单选，只允许选择1个文件；选择文件，不允许选择文件夹；搜索全部类型的文件；右下角按钮为“发送”
			 */
			chooseFileOnlyOne() {
				const plugin = uni.requireNativePlugin(config.chooseFileModule);
				plugin.chooseFileAction({
					maxNum: 1
				}, result => {
					console.log(JSON.stringify(result));
					this.content = JSON.stringify(result);
				});
			},
			/**
			 * 多选；允许选择最大数量文件30个；选择文件，不允许选择文件夹；筛选文件类型为'png','jpg'，'txt', 'doc'的文件；右下角按钮为“发送”
			 */
			chooseFileFileTypes() {
				const plugin = uni.requireNativePlugin(config.chooseFileModule);
				plugin.chooseFileAction({
					fileTypes: ['png', 'jpg', 'txt', 'doc']
				}, result => {
					console.log(JSON.stringify(result));
					this.content = JSON.stringify(result);
				});
			},
			/**
			 * 多选；允许选择最大数量文件30个；选择文件，不允许选择文件夹；搜索全部类型的文件；右下角按钮为“我是自定义按钮”
			 */
			chooseFileBtnTxt() {
				const plugin = uni.requireNativePlugin(config.chooseFileModule);
				plugin.chooseFileAction({
					btnText: '我是自定义按钮'
				}, result => {
					console.log(JSON.stringify(result));
					this.content = JSON.stringify(result);
				});
			},
			/**
			 * 获取内部存储绝对路径，异步方法,方便getFilesWithoutUiAsync方法调用
			 * 大部分android手机外部存储路径为“/storage/emulated/0”，但也有可能对于深度定制手机，可能不是这个，所以把这个开放出来
			 */
			getExternalStorageDirectory() {
				const plugin = uni.requireNativePlugin(config.chooseFileModule);
				plugin.getExternalStorageDirectory({}, result => {
					console.log(result);
					this.content = result;
				});
			},
			/**
			 * 获取手机所有文件，即默认所有参数不传
			 * 异步方法，因获取存储中所有文件，比较耗时，请耐心等待
			 */
			getFilesWithoutUiAsync() {
				uni.showLoading({
					title: '请稍后...'
				})
				const plugin = uni.requireNativePlugin(config.chooseFileModule);
				plugin.getFilesWithoutUiAsync({}, result => {
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
			getFilesWithoutUiAsyncPicInDCIM() {
				uni.showLoading({
					title: '请稍后...'
				})
				const plugin = uni.requireNativePlugin(config.chooseFileModule);
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
					plugin.getFilesWithoutUiAsync({
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
