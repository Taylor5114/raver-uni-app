<template>
	<view class="content" >
	<ttSlide :list="ttData.slideshow"></ttSlide>
	<!-- <image :src="url" mode=""></image> -->
	<view class="nav">
		<text v-for="(nav,index) in navList" @tap="change(index)" :class="{change:id==index}">{{nav}}</text>
		<button class="btn" v-show="id==0" type="default" @tap="refresh()">刷新</button>
	</view>
	<swiper class="ttsw" duration=200 disable-touch='true' :current="id">
		<swiper-item>
			<view class="swiper-item">
				<scroll-view scroll-y="true" class="scview">
					<takeCode class='_scview' :takecode="ttData.takecode"></takeCode>
				</scroll-view>
				
			</view>
		</swiper-item>
		<swiper-item>
			<view class="swiper-item">
				<QRcode></QRcode>
				
			</view>
		</swiper-item>
	</swiper>
	
	</view>
</template>

<script>
	import takeCode from '../../components/take-code/take-code.vue'
	import QRcode from '../../components/QR-code/QR-code.vue'
	import ttSlide from '../../components/tt-slide/tt-slide.vue'
	export default {
		components:{
			takeCode,
			QRcode,
			ttSlide
		},
		data() {
			return {
				height:0,
				width:0,
				ttData:'',
				navList: ['取件','收款'],
				id:0,
				homeData:{}
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success: (res) => {
					this.height = res.windowHeight;
					this.width = res.windowWidth;
					console.log(this.height+' '+this.width)
				}
			});
			uni.request({
			    url: 'https://mock.mengxuegu.com/mock/60912e6c1d10f86a7bd6af4e/tt/cainiao', 
			    success: (res) => {
			        console.log(res.data);
			        this.ttData = res.data;
			    }
			});
			uni.request({
				url:'https://mock.mengxuegu.com/mock/6093ccdb1d10f86a7bd6b305/lottery/home',
				success: (res) => {
					this.homeData = res.data;
					// console.log(this.homeData)
				}
			});
		},
		methods: {
			change(index){
				this.id = index;
			},
			refresh(){
				uni.request({
				    url: 'https://mock.mengxuegu.com/mock/60912e6c1d10f86a7bd6af4e/tt/cainiao', 
				    success: (res) => {
				        console.log(res.data);
				        this.ttData = res.data;
						uni.showToast({
							title: '刷新成功'
						});
				    }
				});
			}
		}
	}
</script>

<style>
	.content {
		height: 753px;
		display: flex;
		flex-direction: column;
		
	}
	.nav{
		width: 750rpx;
		height: 50px;
		font-size: 25px;
		display: flex;
		align-items: center;
	}
	.nav text{
		width: 150rpx;
		height: 50px;
		margin: 0 30rpx;
		line-height: 50px;
		transition:0.3s;
	}
	.change{
		font-size: 35px;
		line-height: 50px;
		color: #F0AD4E;
		transition:0.3s;
	}
	.nav button{
		width: 100px;
		height: 40px;
		background-color:#F0AD4E;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.swiper-item{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.ttsw{
		height: 1000rpx;
		flex-grow: 1;
	}
	.scview{
		width: 750rpx;
		height: 1050rpx;
	}
	._scview{
		width: 750rpx;
		height: 1100rpx;
	}
</style>
