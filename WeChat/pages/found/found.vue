<template>
	<view class="content" :style="{height:height+'px'}">
		<!-- <topBar title='发现' class='topBar'></topBar> -->
		
		<!-- <view class="main" :style="{height:height-40+'px'}">
			
		</view> -->
		<scroll-view :style="{height:height+'px'}" class="ttlist" scroll-y="true" @scrolltolower='add()'>
			<view class="tt" v-for="(item,index) in list" :style="{background:item.color}">
				<h1>{{index}}--{{item.tt}}</h1>
				<image :src="item.src" mode=""></image>
			</view>
			<view class="load">
				<text>加载中...</text>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import topBar from '../../components/top-bar.vue';
	export default {
		components:{
			topBar
		},
		data() {
			return {
				height:0,
				list:[
					{tt:'queen',src:'https://www.ysjf.com/img/%E5%A4%B4%E5%9B%BE.54857e59.png',color:'#2ecc71'},
					{tt:'queen',src:'https://www.ysjf.com/img/%E5%A4%B4%E5%9B%BE.54857e59.png',color:'#3498db'},
					{tt:'queen',src:'https://www.ysjf.com/img/%E5%A4%B4%E5%9B%BE.54857e59.png',color:'#9b59b6'},
					{tt:'queen',src:'https://www.ysjf.com/img/%E5%A4%B4%E5%9B%BE.54857e59.png',color:'#34495e'},
					
				]
			}
		},
		onNavigationBarSearchInputClicked() {
			uni.navigateTo({
				url:"/pages/test/test"
			})
		},
		onNavigationBarButtonTap(e) {
			switch(e.index){
				case 0:
					uni.switchTab({
						url:'/pages/index/index'
					});
				break;
				case 1:
					console.log("right");
				break;
			}
		},
		methods: {
			add(){
				this.list.push({tt:'queen',src:'https://www.ysjf.com/img/%E5%A4%B4%E5%9B%BE.54857e59.png'});
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success: (res) => {
					this.height = res.windowHeight;
					console.log(this.height)
				}
			}),
			uni.request({
			    url: 'https://mock.mengxuegu.com/mock/608bb11d1d10f86a7bd6aae6/raver233/wechat/found_list', //仅为示例，并非真实接口地址。
			    success: (res) => {
			        console.log(res.data);
			        this.text = 'request success';
			    }
			});
		}
	}
</script>

<style>
	.content{
		background-color: #FFFFFF;
	}
	.topBar{
		height: 40px;
	}
	.ttlist{
		/* height: 1000rpx; */
		width: 750rpx;
	}
	.tt{
		width: 750rpx;
		height: 400rpx;
		border: 1rpx solid #007AFF;
		background-color: #808080;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
	}
	.tt image{
		width: 300rpx;
		height: 100rpx;
	}
	.load{
		width: 750rpx;
		height: 50rpx;
		background-color: #18B566;
	}
	h1{
		color: #FFFFFF;
	}
</style>
