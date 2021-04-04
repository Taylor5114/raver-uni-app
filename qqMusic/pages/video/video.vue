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
					{name:'推荐'},
					{name:'音乐现场'},
					{name:'MV'},
					{name:'TME live'},
					{name:'大牌直播'},
					{name:'翻唱'},
					{name:'影视剧'},
					{name:'舞蹈'},
					{name:'二次元'}
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
