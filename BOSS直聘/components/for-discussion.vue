<template>
	<view class="for-discussion">
		<view class="nape">
			<view class="title">
				<!-- 渲染标题 -->
				<view :class="{changebg:index==id}" @click="change(index)" class="nape-tt" v-for="(item,index) in nape">
					<p>{{item.title}}</p>
				</view>
			</view>
			<view class="content">
				<!-- 渲染内容 -->
				<view class="cont" v-for="(item,index) in nape" v-show="id==index">
					<view class="conts" v-for="conts in item.content">
						<h3>{{conts.cont}}</h3>
						<view v-show='conts.all' class="all">
							<p>全部</p>
						</view>
						<view class="imgCardout">
							<view v-for="imgCard in conts.imgcard" class="imgCard">
								<p>{{imgCard.title}}</p>
								<image :src="imgCard.imgUrl" mode=""></image>
							</view>
						</view>
						<view v-for="card in conts.card" class="contCard">
							<view class="cardin">
								<view class="line01">
									<h4><span class='jinghao'>#</span>{{' '+card.title}}</h4> <p>{{card.heat+' '+card.ht}}</p>
								</view>
								<li class='matter' v-for='matter in card.matter'>{{matter}}</li>
								<view v-show="card.vote" class="vote">
									<view class="yes">yes</view><view class="bias"></view><view class="nope">nope</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	// import setVote from 'set-vote.vue'
	export default {
		components:{
			// setVote
		},
		name:"for-discussion",
		props:{
			nape: Array
		},
		data() {
			return {
				id: 0
			};
		},
		methods:{
			change(index){
				this.id = index;
			}
		}
	}
</script>

<style>
	.nape{
		display: flex;
		width: 100%;
		height: 1500rpx;
	}
	.nape-tt p{
		width: 70rpx;
		padding: 20rpx 0;
	}
	h3{
		width: 100%;
		line-height: 100rpx;
	}
	.title{
		width: 13%;
		height: auto;  //修改
		background-color: #F5F5F5;
		overflow-y: auto;
		font-size: 26rpx;
		color: #979797;
	}
	.title view{
		width: 100%;
		height: auto;
		display: flex;
		justify-content: center;
		align-items: center;
		
	}
	.changebg{
		background-color: #FFFFFF;
		font-size: 28rpx;
		color: #000000;
	}
	.content{
		width:87%; 
		overflow-y: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.all{
		width: 100rpx;
		height: 60rpx;
		margin: 20rpx 0 50rpx 0;
		background-color: #E8F8F7;
		border-radius: 10rpx;
		color: #37C2BB;
		font-size: 25rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.imgCardout{
		width: 600rpx;
		display: flex;
		justify-content: space-between;
	}
	.imgCard{
		width: 280rpx;
		height: 355rpx;
		border-radius: 10rpx;
		overflow: hidden;
		position: relative;
	}
	.imgCard p{
		color: #FFFFFF;
		bottom: 20rpx;
		left: 20rpx;
		font-weight: bold;
		position: absolute;
		z-index: 1;
	}
	.imgCard image{
		width: 100%;
		height: 100%;
	}
	.contCard{
		width: 600rpx;
		height: 300rpx;
		border-radius: 20rpx;
		box-shadow: 0rpx 0rpx 30rpx #ececec;
		margin-bottom: 30rpx;
		display: flex;
		justify-content: center;
	}
	.cardin{
		width: 90%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
	}
	.line01{
		display: flex;
		justify-content: space-between;
	}
	.line01 p{
		color: #B0B0B0;
		font-size: 25rpx;
	}
	.jinghao{
		color: #37C2BB;
	}
	.vote{
		width: 100%;
		height: 60rpx;
		border-radius: 30rpx;
		overflow: hidden;
		display: flex;
		justify-content: space-between;
		position: relative;
	}
	.bias{
		width: 12rpx;
		height: 100rpx;
		background-color: #FFFFFF;
		transform: rotate(7deg);
		position: absolute;
		left: 49%;
		top: -30%;
		z-index: 2;
	}
	.yes{
		width: 50%;
		background-color: #007AFF;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #FFFFFF;
	}
	.nope{
		width: 50%;
		background-color: #37C2BB;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #FFFFFF;
	}
	.matter{
		color: #949494;
		list-style: none;
	}
</style>
