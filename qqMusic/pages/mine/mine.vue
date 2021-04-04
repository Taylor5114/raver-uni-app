<template>
	<view class="content">
		<indexBar :items='items'></indexBar>
	</view>
</template>

<script>
	import indexBar from '../../components/index-bar.vue'
	export default {
		components:{
			indexBar
		},
		data() {
			return {
				items:[
					{name:'推荐'}
				]
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