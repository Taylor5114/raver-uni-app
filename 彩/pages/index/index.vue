<template>
	<view class="content">
		<sticky :list="indexData.slideshow" :offsetTop='offsetTop' :enable="enable"></sticky>
		
		<view class="" v-for="(item,index) in indexData">
			{{item.name}}
		</view>
		
	</view>
</template>

<script>
	import indexData from '@/common/data/index.data.js'
	import sticky from '@/components/sticky/index.vue'
	export default {
		components:{
			sticky
		},
		data() {
			return {
				indexData:indexData,
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
