<template>
	<view class="content">
		<view class="main">
			<view v-for="(msage,index) in msage" class="msage">
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
	</view>
</template>

<script>
	export default {
		name:"set-msg",
		props:{
			msage:Array,
			topheight:Number
		},
		data() {
			return {
				
			};
		},
		methods:{
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
	.content{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.main{
		width: 90%;
	}
	.msage{
		width: 100%;
		height: 150rpx;
		display: flex;
		justify-content: space-between;
	}
	.msg-l{
		width:120rpx;
		height: 150rpx;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	.msg-c{
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
