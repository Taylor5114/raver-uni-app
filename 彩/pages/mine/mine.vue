<template>
	<view>
		<view class="top">
			<view class="_top">
				<navigator url="">
					<image src="/static/icons/setting.png" mode=""></image>
				</navigator>
				<navigator url="">
					<image src="/static/icons/inform.png" mode=""></image>
				</navigator>
			</view>
			<view class="_top1">
				<uviewAvatar></uviewAvatar>
				<text>点击登录</text>
			</view>
		</view>
		<vipCard></vipCard>
		<mineList :list='mineData.mineList'></mineList>
	</view>
</template>

<script>
	import mineData from '@/common/data/mine.data.js'
	import uviewAvatar from '@/components/avatar/index.vue'
	import vipCard from '@/components/vip-card.vue'
	import mineList from '@/components/mine-list.vue'
	export default {
		components:{
			uviewAvatar,
			vipCard,
			mineList,
			
		},																																																											
		data() { 
			return {
				mineList: mineData.mineList,
				mineData: Object
			}
		},
		methods: {
			
		},
		onLoad() {
			uni.request({
				url:'https://mock.mengxuegu.com/mock/608f846e1d10f86a7bd6adad/tay/mine_data',
				success: (res) => {
					this.mineData = res.data;
				}
				
			})
		}
	}
</script>

<style>
	.top{
		background: linear-gradient(to bottom, #c84e89, #F15F79);
		width: 750rpx;
		height: 400rpx;
		display: flex;
		flex-direction: column;
	}
	._top{
		width: 750rpx;
		height: 60rpx;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}
	._top image{
		width: 40rpx;
		height: 40rpx;
	}
	._top navigator{
		margin-right: 30rpx;
	}
	._top1{
		width: 750rpx;
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
	}
</style>
