<template>
	<view class="content">
		<view class="box">
			<view class="_box">
				<view class="addimg" @click="update()">
					<view class="_addimg">
						<image :src="img" mode=""></image>
					</view>
					<view class="tt" @click="tt()" v-if="isshow">
						<text>上传头像</text>
					</view>
				</view>
			</view>
		</view>
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
				isshow: true
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
						this.isshow = false
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
				console.log('!!!!!!!!!!!!!!!!!!!!1')
				if(!this.isshow){
					var that = this;
					uni.showModal({
					    title: '',
					    content: '重新选择头像',
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
	._box{
		width: 200rpx;
		height: 200rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		border-radius: 100rpx;
		overflow: hidden;
	}
	.tt{
		width: 100rpx;
	}
	.addimg{
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #007AFF;
		
	}
	._addimg{
		width: 100%;
		height: 100%;
		background: url(/components/upload-image/image/add.png) center no-repeat; //微信小程序兼容
	}
	._addimg image{
		width: 100%;
		height: 100%;
	}
	.tt{
		width: 100%;
		height: 24px;
		position: absolute;
		bottom: 0;
		background-color: #18B566;
		display: flex;
		justify-content: center;
	}
</style>
