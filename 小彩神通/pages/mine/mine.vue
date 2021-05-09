<template>
	<view class="content" :style="{height:height+'px'}">
		<!-- <navBar :top="statusBar"></navBar> -->
		<!-- <vipCard></vipCard> -->
		<button type="default" @click="test()">Tt</button>
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
			test() {
				uni.chooseVideo({
					count: 1,
					sourceType: ['camera', 'album'],
					success: (res) => {
						this.isTrue = true;
						this.src = res.tempFilePath;
					}
				});
				// uni.chooseFile({
				//   count: 6, //默认100
				//   // extension:['.zip','.doc','mp4'],
				//   type:'all',
				//     success: function (res) {
				//         console.log(JSON.stringify(res.tempFilePaths));
				//     }
				// });
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

</style>
