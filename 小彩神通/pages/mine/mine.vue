<template>
	<view class="content" :style="{height:height+'px'}">
		<!-- <navBar :top="statusBar"></navBar> -->
		<!-- <vipCard></vipCard> -->
		
		<template v-if="src">
			<video :src="src" controls v-if="isTrue"></video>
		</template>
		<uploadHead></uploadHead>
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
				src:'',
				
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
