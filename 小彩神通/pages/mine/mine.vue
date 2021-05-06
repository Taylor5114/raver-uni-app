<template>
	<view class="content" :style="{height:height+'px'}">
		<!-- <navBar :top="statusBar"></navBar> -->
		<vipCard></vipCard>
	</view>
</template>

<script>
	import navBar from '../../components/nav-bar/nav-bar.vue'
	import vipCard from '../../components/vip-card/vip-card.vue'
	export default {
		components:{
			navBar,vipCard
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
