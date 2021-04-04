<template>
	<view class="content">
		<indexBar :items='items' :itemsRight='itemsRight'></indexBar>
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
					{name:'推荐'},
					{name:'音乐馆'},
					{name:'电台'},
					{name:'播客'}
				],
				itemsRight:[
					{
						
					}
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
