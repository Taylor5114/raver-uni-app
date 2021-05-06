<template>
	<view class="content" :style="{height:height+'px'}">
		<!-- <navBar :top="statusBar"></navBar> -->
	</view>
</template>

<script>
	import navBar from '../../components/nav-bar/nav-bar.vue'
	export default {
		components:{
			navBar
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
