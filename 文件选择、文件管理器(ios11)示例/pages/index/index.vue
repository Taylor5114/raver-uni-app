<template>
	<view>
		<button type="primary" @click="select">选择文件</button>
		<image :src="filePath">
		<view>文件名：{{fileName}}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				filePath: '',
				fileName: ''
			}
		},
		onLoad() {},
		methods: {
			select() {
				var _this = this;
				const KJFile = uni.requireNativePlugin('KJ-File');

				/**
				 * allowedUTIs如果需要获取更多，访问：https://developer.apple.com/library/archive/documentation/Miscellaneous/Reference/UTIRef/Articles/System-DeclaredUniformTypeIdentifiers.html
				 */
				var dic = {
					"savePath": plus.io.convertLocalFileSystemURL("_doc/KJ-File"), //复制的绝对路径，一定要是_doc目录
					"allowedUTIs": ["public.data",
						"com.microsoft.powerpoint.ppt",
						"com.microsoft.word.doc",
						"com.microsoft.excel.xls",
						"com.microsoft.powerpoint.pptx",
						"com.microsoft.word.docx",
						"com.microsoft.excel.xlsx",
						"public.avi",
						"public.3gpp",
						"public.mpeg-4",
						"com.compuserve.gif",
						"public.jpeg",
						"public.png",
						"public.plain-text",
						"com.adobe.pdf"
					],
				}
				KJFile.select(dic, (res) => {
					console.log("select: " + JSON.stringify(res));
					_this.filePath = "file://" + res.filePath; //以选择的是图片为例
					_this.fileName = res.fileName;
				});
			}
		}
	}
</script>
