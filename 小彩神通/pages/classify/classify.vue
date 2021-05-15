<template>
	<view class="content" :style="{height:height+'px'}">
		<!-- <navBar :top="statusBar"></navBar> -->
		<!-- <uploadImg></uploadImg> -->
		
	</view>
</template>

<script>
	import navBar from '../../components/nav-bar/nav-bar.vue'
	import uploadImg from '../../components/upload-image/upload-image.vue'
	export default {
		components:{
			navBar,uploadImg
		},
		data() {
			return {
				height: Number,
				width: Number,
				statusBar: Number
			}
		},
		methods: {
			getInfo(){
				uni.getSystemInfo({
					success: (res) => {
						this.height = res.windowHeight;
						this.width = res.windowWidth;
						this.statusBar = res.statusBarHeight;
					}
				});
			},
			getData(){
				uni.request({
					url:'/6093ccdb1d10f86a7bd6b305/lottery/person',
					success: (res) => {
						// console.log(res.data)
					}
				})
			},
			getIntercept(){
				uni.addInterceptor('request', {
				  invoke(args) {
				    // request 触发前拼接 url 
				    args.url = 'https://mock.mengxuegu.com/mock'+args.url;
					
				  },
				  success(args) {
				    // 请求成功后，修改code值为1
				    args.data.code = 1
					console.log(args.data)
				  }, 
				  fail(err) {
				    // console.log('interceptor-fail',err)
				  }, 
				  complete(res) {
				    // console.log('interceptor-complete',res)
				  }
				})
			}
			
		},
		onLoad() {
			this.getInfo();
			this.getIntercept();
			this.getData();
			
			
			
		}
	}
</script>

<style>

</style>
