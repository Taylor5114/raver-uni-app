<template>
	<view class="content">
		<button type="primary" @tap="chooseFile()">选择文件</button>
	</view>
</template>

<script>
	
	const  nChooser = uni.requireNativePlugin("HG-FileChooser");
	
	const  modal = uni.requireNativePlugin("modal");
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			/**
			 * 回调数据格式：{
				 "result":"success";// error:有异常，cancel:取消，success:成功
				 "list":["/mnt/sdcard/ddd/1.doc","/mnt/sdcard/xxx.png"]
			 }
			 */
			chooseFile(){
				nChooser.showFileChoose({
					"types":["mp3","mp4","doc","txt"],//mp3,mp4,png
					"theme":"elec",//Dracula, elec
					"maxCount":5,//最大选择量
					"showType":1,//显示类型，0，1,按后缀显示，其它值，按mimeType显示
					"sortType":1,//排序方式:0->BY_NAME_ASC,1->BY_NAME_DESC,2->BY_TIME_ASC,3->BY_TIME_DESC,
					//4->BY_SIZE_ASC,5->BY_SIZE_DESC,6->BY_EXTENSION_ASC,7->BY_EXTENSION_DESC
					
				},(ret)=>{
					console.log("result:"+ret.result);
					modal.toast({
						message:"result:"+ret.result+","+ret.list,
						duration:1.5
					});
				});
			}
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

</style>
