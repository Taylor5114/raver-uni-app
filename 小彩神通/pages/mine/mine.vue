<template>
	<view class="content" :style="{height:height+'px'}">
		<!-- <navBar :top="statusBar"></navBar> -->
		<view class="top">
			<uploadHead></uploadHead>
		</view>
		<vipCard></vipCard>
		<view class="main">
			
		</view>
	</view>
</template>

<script>
	import navBar from '../../components/nav-bar/nav-bar.vue'
	import vipCard from '../../components/vip-card/vip-card.vue'
	import uploadHead from '../../components/upload-head/upload-head.vue'
	export default {
		components:{
			navBar,vipCard,uploadHead
		},
		data() {
			return {
				height: Number,
				width: Number,
				statusBar: Number,
				src: '',
			}
		},
		methods: {
			tt(){
				getApp().globalData.text = 'success';
				this.text = getApp().globalData.text;
			}
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
	.content{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.top{
		width: 100%;
		height: 250rpx;
		background: linear-gradient(to bottom, #83a4d4, #b6fbff);
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	.main{
		width: 100%;
		height: 999rpx;
		background-color: #808080;
	}
</style>
