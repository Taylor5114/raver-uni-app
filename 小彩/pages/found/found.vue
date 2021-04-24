<template>
	<view class="content" :style="{height:height+'px'}">
		<topBar title='发现' class='topBar'></topBar>
		<view class="main" :style="{height:height-40+'px'}">
		
		</view>
		<topStick></topStick>
	</view>
</template>

<script>
	import topStick from '../../components/sticky/top-sticky.vue'
	import topBar from '../../components/top-bar.vue';
	export default {
		components:{
			topBar,
			topStick
		},
		data() {
			return {
				height:0
			}
		},
		onLoad() {

		},
		methods: {

		},
		onLoad() {
			uni.getSystemInfo({
				success: (res) => {
					this.height = res.windowHeight;
					console.log(this.height)
				}
			})
		}
	}
</script>

<style>
	.content{
		background-color: #FFFFFF;
	}
	.topBar{
		height: 40px;
	}
</style>
