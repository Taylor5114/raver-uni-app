<template>
	<view class="body" :style='{height:height+"px",width:width+"px"}'>
		<view class="nav">
			<view @click="change(index)" :class="{change:index==id}" v-for="(item,index) in cont">
				{{item.title}}
			</view>
		</view>
			<scroll-view scroll-y="true" @scrolltolower='ttmsg()' :style='{height:height-35+"px",width:width+"px"}' v-show="index==id" v-for="(cont,index) in cont" class="main">
				<view class="mainin">
					<view v-for="(msage,index) in cont.msage" class="msage">
						<view class="msg-l">
							<image :src="msage.head" mode=""></image>
						</view>
						<view class="msg-c">
							<view class="line01">
								<view class="l01-l">
									<p class='name'>{{msage.name}}</p><p class='position'>{{msage.position}}</p>
								</view>
								<view class="l01-r">
									<p class='date'>{{msage.date}}</p>
									<image src="../static/image/more.png" mode=""></image> 
								</view>
							</view>
							<view class="line02 msg">
								{{msage.msg}}
							</view>
						</view>
						<view class="msg-r">
							
						</view>
					</view>
				</view>
			</scroll-view>
		
	</view>
</template>

<script>
	export default {
		name:"set-msg",
		props:{
			 cont:Array,
			 height:Number,
			 width:Number
			 
		},
		data() {
			return {
				id:0
			};
		},
		methods:{
			change(index){
				this.id = index;
			},
			ttmsg(){
				this.cont[0].msage.push(
					{
						head:'../../static/1x1img/2.jpg',
						name:'宋yue',
						position:'东道智能·HR',
						date:'昨天',
						msg:'等考虑工作的时候 可以优先考虑我们公司'
					}
				);
			}
		}
		
	}
</script>

<style>
	.body{
		background-color: #37C2BB;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.nav{
		width: 90%;
		height: 70rpx;
		display: flex;
		color: #AFE8E2;
	}
	.nav view{
		margin-right: 20rpx;
		height: 50rpx;
		display: flex;
		align-items: center;
		
	}
	.change{
		color: #FFFFFF;
		font-size: 40rpx;
	}
	.main{
		width: 100%;
		background-color: #F8F8F8;
	}
	.mainin{
		width: 90%;
		margin-left: 5%;
		/* background-color: #37C2BB; */
	}
	.msage{
		width: 100%;
		height: 150rpx;
		display: flex;
		justify-content: space-between;
	}
	.msg-l{
		width:150rpx;
		height: 150rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.msg-c{
		/* width: 450rpx; */
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		flex-grow: 1;
	}
	.msg-l image{
		width: 100rpx;
		height: 100rpx;
		border-radius: 60rpx;
	}
	.line01{
		display: flex;
		justify-content: space-between;
		/* background-color: #007AFF; */
	}
	.line02{
		line-height: 50rpx;
	}
	.l01-l{
		display: flex;
	}
	.l01-r{
		display: flex;
		align-items: center;
	}
	.name{		
		margin-right: 20rpx;
	}
	.position,.date{
		font-size: 20rpx;
		color: #AAAAAA;
		display: flex;
		align-items: center;
	}
	.msg{
		font-size: 30rpx;
		color: #AAAAAA;
	}
	.line01 image{
		margin-left: 20rpx;
		width:40rpx;
		height: 40rpx;
	}
</style>
