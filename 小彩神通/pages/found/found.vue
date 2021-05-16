<template>
	<view class="content" :style="{height:height+'px'}">
		<!-- <navBar :top="statusBar"></navBar> -->
		<todoList :list='list' :height='height'></todoList>
	</view>
</template>

<script>
	import todoList from '../../components/todo-list/todolist-plus.vue'
	import navBar from '../../components/nav-bar/nav-bar.vue'
	export default {
		components:{
			navBar,
			todoList
		},
		data() {
			return {
				height: 0,
				width: 0,
				statusBar: 0,
				list:[]
			}
		},
		methods: {  

		},
		onLoad() {
			uni.getSystemInfo({
				success: (res) => {
					this.height = res.windowHeight;
					this.width = res.windowWidth;
					this.statusBar = res.statusBarHeight;
				}
			})
		}
	}
</script>

<style>
	.content{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.box{
		width: 750rpx;
		height: 500rpx;
		/* border: 1rpx solid #000000; */
		display: flex;
		flex-wrap: wrap;
		overflow: hidden;
	}
	._box{
		width: 250rpx;
		height: 250rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
	}
	.addimg{
		background: url(/static/image/add.png) center no-repeat;
		border: 3rpx solid #8a8a8a;
	}
	._img{
		width: 230rpx;
		height: 230rpx;
		border-radius: 10rpx;
	}
	.tts{
		width: 16px;
		height: 16px;
		position: absolute;
		top: 15rpx;
		right: 15rpx;
		z-index: 1;
	}	
</style>
