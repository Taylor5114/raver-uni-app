<template>
	<view class="tt">
		<view class="nav">
				<view class="nav-list">
					<li @click='change(index)' v-for='(item,index) in items'>{{item.name}}</li>
				</view>
				<li class='nav-right' v-for='(item,index) in itemsRight'>
					<image src="../static/image/shibie.png" mode=""></image>
				</li>
		</view>
		<view class="tt-search">
			<view class="search">
				<input type="button" id="search-btn" />
				<input type="text" value="" />
			</view>
		</view>
		<view v-show='ids==index' class="body" v-for='(item,index) in items'>
			<h1>{{item.name}}</h1>
			<p>{{item.introduce}}</p>
		</view>
	</view>
</template>

<script>
	export default {
		name:"index-bar",
		props:{
			items: Array,
			itemsRight: Array
		},
		data() {
			return {
				ids:0,
				ttc:true
				
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
		font-family: "等线";
		display: flex;
		flex-direction: column;
		background-color: #fafafa;	
	}
	.nav{
		height: 70rpx;
		list-style: none;
		display: flex;
		align-items: center;
		/* justify-content: space-around; */
		/* overflow-x: auto; */
	}
	.nav-list{
		height: 70rpx;
		list-style: none;
		display: flex;
		align-items: center;
		/* overflow-x: auto; */
	}
	.nav-list li{
		height: 40rpx;
		color: #757575;
		margin: 0 20rpx;
		display: flex;
		align-items: center;
	}
	.nav-list li:hover{
		color: #272727;
		font-size: 40rpx;
		border-bottom: 6rpx solid #38E6AF;
	}
	.nav-right{
		width: 50rpx;
		height: 50rpx;
		background-color: #007AFF;
	}
	.nav-right image{
		width: 100%;
		height: 100%;
	}
	.tt-search{
		width: 750rpx;
		height: 80rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.search{
		width: 680rpx;
		height: 60rpx;
		background-color: #e8e8e8;
		border-radius: 30rpx;
	}
	#search-btn{
		width: 60rpx;
		height: 60rpx;
		background: url(../static/image/sousuo.png) no-repeat center;
		background-size: 60%;
	}
	.body{
		width: 750rpx;
		height: 1232rpx;
		background-color: #fafafa;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
