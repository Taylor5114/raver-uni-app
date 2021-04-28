<template>
	<view class="content">
		<sticky :offsetTop='offsetTop' :enable="enable"></sticky>
	</view>
</template>

<script>
	import uviewSwiper from '../../components/swiper/index.vue'
	import sticky from '../../components/sticky/index.vue'
	export default {
		components:{
			uviewSwiper,
			sticky
		},
		data() {
			return {
				offsetTop:0,
				enable:true
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	
</style>
