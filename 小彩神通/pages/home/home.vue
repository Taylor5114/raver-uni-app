<template>
	<view class="content" :style="{height:height+'px'}">
	<!-- <navBar :top="statusBar"></navBar> -->
	<ttSlide :list="homeData.slideshow"></ttSlide>
	</view>
</template>

<script>
	import navBar from '../../components/nav-bar/nav-bar.vue'
	import ttSlide from '../../components/tt-slide/tt-slide.vue'
	export default {
		components:{
			navBar,ttSlide
		},
		data() {
			return {
				height: Number,
				width: Number,
				statusBar: Number,
				homeData: Object
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
					console.log(this.statusBar)
				}
			}),
			uni.request({
				url:'https://mock.mengxuegu.com/mock/6093ccdb1d10f86a7bd6b305/lottery/home',
				success: (res) => {
					this.homeData = res.data;
					console.log(this.homeData)
				}
			})
		}
	}
</script>

<style>

</style>
