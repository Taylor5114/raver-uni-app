<template>
	<view class="content" :style="{height:height+'px'}">
		<!-- <navBar :top="statusBar"></navBar> -->
		<view class="box">
			<view v-for="(item,index) in img" class="_box">
				<image class="tts" src="/static/image/del.png" mode="" @click="showTips(index)"></image>
				<image class="_img" @click='yulan(index)' :src="item" mode="aspectFill"></image>
			</view>
			<view class="_box">
				<view class="_img addimg" @click="tt()"></view>
			</view>
		</view>
	</view>
</template>

<script>
	import navBar from '../../components/nav-bar/nav-bar.vue'
	export default {
		components:{
			navBar
		},
		data() {
			return {
				height: Number,
				width: Number,
				statusBar: Number,
				img:[]
			}
		},
		methods: {
			tt(){
				uni.chooseImage({
				    count: 6, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album'], //从相册选择
					success: (res)=>  {
						// console.log(res.tempFilePaths),
						console.log(res);
						this.img = this.img.concat(res.tempFilePaths);

					},
					fail: () => {
						console.log('tt()_error')
					},
					complete: () => {
						console.log("tt()_has been called")
					}
				});
			},
			yulan(index){
				console.log(index),
				uni.previewImage({
					current: index,
					urls:this.img
				});
			},
			del(id){
				this.img.splice(id,1)
				// 使用@tap.stop="方法" 或者 方法里使用 e.stopPropagation();
			},
			showTips(id){
				uni.showModal({
				    title: '提示',
				    content: '确定要删除这张图片吗？',
				    success: (res) => {
				        if (res.confirm) {
				            console.log('用户点击确定');
							this.del(id);
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
			}
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
