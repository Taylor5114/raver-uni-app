<template>
	<view class="content" @click="update()">
		<image :src="img" class="tt" mode="aspectFill" :class="{ttbg:isTrue}"></image>
		<image src="@/components/upload-head/image/camera.png" class="_tt" mode="" v-if="isTrue"></image>
	</view>
</template>

<script>
	export default {
		name:"upload-head",
		props:{
			
		},
		data() {
			return {
				img:'',
				count:1,
				num:0,
				isTrue: true,
				tips: '上传一张图片作为头像'
			};
		},
		methods: {
			tt(){
				uni.chooseImage({
				    count: this.count, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album'], //从相册选择
					success: (res) => {
						this.img = res.tempFilePaths[0];	
						this.isTrue = false;
						this.tips = '重新选择头像',
						getApp().globalData.touxiang = this.img
					},
					fail: () => {
						uni.showToast({
							icon: 'none',
							title: "上传失败"
						})
					},
					complete: () => {
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
			update(){
				if(!this.isshow){
					var that = this;
					uni.showModal({
					    title: '',
					    content: that.tips,
					    success: function (res) {
					        if (res.confirm) {
					            that.tt()
					        } else if (res.cancel) {
								
					        }
					    }
					});
				}
			}
		}
	}
</script>

<style>
	.content{
		width: 160rpx;
		height: 160rpx;
		border-radius: 50%;
		position: relative;
	}
	.tt{
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
	._tt{
		width: 120rpx;
		height: 120rpx;
		position: absolute; left: 50%; top: 50%;   
		transform: translate(-50%, -50%);
		z-index: 1;
	}
	.ttbg{
		background: linear-gradient(to bottom, #4284DB, #29EAC4);
	}
</style>
