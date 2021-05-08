<template>
	<view class="content" :style="{height:height+'px'}">
		<!-- <navBar :top="statusBar"></navBar> -->
		<uploadImg></uploadImg>
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
			
		},
		onLoad() {
			uni.getSystemInfo({
				success: (res) => {
					this.height = res.windowHeight;
					this.width = res.windowWidth;
					this.statusBar = res.statusBarHeight;
				}
			})
		}
	}
</script>

<style>

</style>
