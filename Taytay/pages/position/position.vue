<template>
	<view>
		<setTable :singer='singer'></setTable>
	</view>
</template>

<script>
	import setTable from '../../components/set-table.vue';
	export default {
		components:{
			setTable
		},
		data() {
			return {
				singer:[
					{name:'Queens',photo:''},
					{name:'Taylor'},
					{name:'Avicii'},
					{name:'Tim'},
					{name:'Marshmello'},
					{name:'Avicii'},
					{name:'Tim'},
					{name:'Marshmello'}
				]
			}
		},
		methods: {
		
		}
	}
</script>

<style>

</style>
