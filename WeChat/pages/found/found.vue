<template>
	<view class="content" :style="{height:height+'px'}">
		<topBar title='发现' class='topBar'></topBar>
		<view class="main" :style="{height:height-40+'px'}">
			
		</view>
	</view>
</template>

<script>
	import topBar from '../../components/top-bar.vue';
	export default {
		components:{
			topBar
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
