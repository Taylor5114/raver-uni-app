<template>
	<view>
		<button type="default" @click="test()">Tt</button>
		<template v-if="src">
			<video :src="src" controls v-if="isTrue"></video>
		</template>
	</view>
</template>

<script>
	export default {
		name:"upload-video",
		data() {
			return {
				isTrue:false
			};
		},
		methods:{
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
		}
	}
</script>

<style>

</style>
