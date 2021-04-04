<template>
	<view class="tt">
		<view class="nav">
				<li @click='change(index)' v-for='(item,index) in singer'>{{item.name}}</li>	
		</view>
		<view v-show='ids==index' class="body" v-for='(item,index) in singer'>
			<h1>{{item.name}}</h1>
		</view>
		
	</view>
</template>

<script>
	export default {
		name:"set-table",
		props:{
			singer: Array
		},
		data() {
			return {
				ids:0
			};
		},
		methods:{
			change(index){
				this.ids = index;	
			}
		}
	}
</script>

<style>
	.tt{
		display: flex;
		flex-direction: column;
	}
	.nav{
		height: 70rpx;
		list-style: none;
		display: flex;
		align-items: center;
		background-color: #007AFF;	
		overflow-x: auto;
	}
	.nav li{
		width: 300rpx;
		height: 70rpx;
		margin: 0 30rpx;
		display: flex;
		align-items: center;
	}
	.nav li:hover{
		color: #FFFFFF;
	}
	.body{
		width: 750rpx;
		height: 1232rpx;
		background-color: #0E9A93;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
