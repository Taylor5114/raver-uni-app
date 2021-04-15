<template>
	<view>
		<view class="con_con con_first">
			<view class="con_core">
				<view class="con_core">
					<P class="con_p1">
						头像：
					</P>
					<view v-if="no_had_upload" class="con_item_person" @click="changePhoto"><image src="https://img.meidaojia.vip/shop/my_touxiangnan.png"></image></view>
					<view v-if="had_upload" class="con_item_person" @click="changePhoto"><image :src="'https://api.meidaojia.vip'+new_person_photo"></image></view>
					<view class="con_item_next"><image src="https://img.meidaojia.vip/shop/member_right_01.png"></image></view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		components: {
			
		},
		data() {
				return {
					had_upload:false,
					no_had_upload:true,
					new_person_photo:'',
				}
		},
		methods:{
			// 上传 更换 图片
				changePhoto(){
					var _this = this;
					// 选择图片 获取图片路径
					uni.chooseImage({
					    count: 1, //默认9
					    sizeType: [ 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					    sourceType: ['album'], //从相册选择
					    success: function (res) {
						// console.log(res.tempFilePaths)
						uni.showLoading({
							title: '上传图片',
							mask: false
						});
						// 从本地获取图片完毕 上传
						uni.uploadFile({
							url: 'https://api.meidaojia.vip/api/manager/customer/upload', 
							filePath: res.tempFilePaths.toString(),
							name: 'avatar',
							formData: {
								token : uni.getStorageSync('token'),
						},
						success: (res) => {
							let datas = JSON.parse(res.data);
							_this.new_person_photo = datas.data.path
							_this.no_had_upload = false;
							_this.had_upload = true;
						},
						fail: (e) => {
							console.log("网络请求fail");
						},
						complete: () => {
							console.log("网络请求complete");
							uni.hideLoading();
							uni.showToast({
								title: '上传成功！',
								icon: 'none'
							});
						}
						});
					}
				});
			},
		}
,
		onLoad(){
			
		}
	}
</script>

<style>
	
</style>
