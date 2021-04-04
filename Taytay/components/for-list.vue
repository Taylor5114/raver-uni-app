<template>
	<view class="list-body">
		<li v-for='(item,index) in navs'>
			<image :src="item.img" mode=""></image>
			{{item.title}}
		</li>
	</view>
</template>

<script>
	export default {
		name:"for-list",
		props:{
			navs:Array
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	.list-body{
		width: 750rpx;
		height: 200rpx;
		list-style: none;
		overflow-x: auto;
		overflow-y: hidden;
		display: flex;
		align-items: center;
	}
	li{
		min-width: 20%;
		height: 150rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		font-size: 25rpx;
		color: #A5A5A5;
	}
	.list-body image{
		width: 65rpx;
		height: 65rpx; 
	}
</style>
