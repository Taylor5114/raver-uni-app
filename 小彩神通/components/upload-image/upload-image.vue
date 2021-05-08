<template>
	<view class="content">
		<view class="title">
			<text class="tips">点击加号选择图片</text>
			<text class="count">{{num}}/{{count}}</text>
		</view>
		<view class="box">
			<view v-for="(item,index) in img" class="_box">
				<view class="tts" @click="showTips(index)">
					<view class="_tts"></view>
				</view>
				<image class="_img" @click='yulan(index)' :src="item" mode="aspectFill"></image>
			</view>
			<view class="_box" v-if="num!=count">
				<view class="_img addimg" @click="tt()">
					<view class="_addimg">
						<image src="./image/add.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"upload-image",
		props:{
			
		},
		data() {
			return {
				img:[],
				count:3,
				num:0
			};
		},
		methods: {
			tt(){
				uni.chooseImage({
				    count: this.count, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album'], //从相册选择
					success: (res) => {
						this.img = this.img.concat(res.tempFilePaths);
						this.num = this.img.length; // 已上传的图片数量
						if(this.num-this.count>0){ 
							uni.showToast({
								icon: 'none',
								title: "最多只能上传"+this.count+"张图片"
							})
							console.log("最多只能上传"+this.count+"张图片");
							this.img.splice(this.count,this.num-this.count); // 删除超出的图片
							this.num = this.img.length; // 刷新num（已上传的数量）数值
						}else{
							uni.showToast({
								title:'图片上传成功'
							})
						}
					},
					fail: () => {
						uni.showToast({
							icon: 'none',
							title: "上传失败"
						})
					},
					complete: () => {}
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
				this.img.splice(id,1);
				this.num = this.img.length;
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
		}
	}
</script>

<style>
	.content{
		height: 790rpx;
		width: 750rpx;
	}
	.title{
		width: 750rpx;
		height: 40rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.tips{
		height: 40rpx;
		margin-left: 10rpx;
		display: flex;
		align-items: flex-end;
		font-size: 25rpx;
		color: #808080;
	}
	.count{
		margin-right: 10rpx;
		font-size: 25rpx;
		color: #808080;
	}
	.box{
		width: 750rpx;
		height: 750rpx;
		display: flex;
		align-content: flex-start;
		flex-wrap: wrap;
		overflow: hidden;
		/* background-color: #1890FF; */
	}
	._box{
		width: 250rpx;
		height: 250rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		/* background-color: #18B566; */
	}
	.addimg{
		border: 3rpx solid #8a8a8a;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	._addimg{
		width: 64px;
		height: 64px;
		background: url(/components/upload-image/image/add.png) //微信小程序兼容
	}
	._addimg image{
		width: 64px;
		height: 64px;
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
		background-color: #fb3008;
		border-radius: 8px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	._tts{
		width: 12px;
		height: 2px;
		background-color: #f6f7e4;
	}
</style>
