<template>
	<view class="content">
		<sticky :indexData='indexData' :offsetTop='offsetTop' :enable="enable"></sticky>
		<!-- <sticky :list="indexData.slideshow" :nav_list='indexData.nav_list' :offsetTop='offsetTop' :enable="enable"></sticky> -->
		
		
	</view>
</template>

<script>
	import sticky from '@/components/sticky/index.vue'
	export default {
		components:{
			sticky
		},
		data() {
			return {
				indexData: {},
				offsetTop:0,
				enable:true,
				
			}
		},
		onLoad() {
			uni.request({
				url:"https://mock.mengxuegu.com/mock/608f846e1d10f86a7bd6adad/tay/index_data",
				success: (res) => {
					this.indexData = res.data;
					console.log(this.indexData)
				}
			})
		},
		methods: {

		}
	}
</script>

<style>
	
</style>
