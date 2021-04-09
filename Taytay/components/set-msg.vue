<template>
	<view class="body">
		<view class="nav">
			<view @click="change(index)" :class="{change:index==id}" v-for="(item,index) in cont">
				{{item.title}}
			</view>
		</view>
		<view class="mainout">
			<scroll-view scroll-y="true" @scrolltolower='ttmsg()' :style='{height:height+"px"}' v-show="index==id" v-for="(cont,index) in cont" class="main">
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
							</view>
						</view>
						<view class="line02 msg">
							{{msage.msg}}
						</view>
					</view>
					<view class="msg-r">
						<image src="../static/image/more.png" mode=""></image>
					</view>
				</view>
			</scroll-view>
		</view>
		
	</view>
</template>

<script>
	export default {
		name:"set-msg",
		props:{
			 cont:Array,
			 // ttmsg:Function
			 height:String
		},
		data() {
			return {
				id:0
			};
		},
		methods:{
			change(index){
				this.id = index; 
				alert(this.height)
			},
			ttmsg(){
				this.cont[0].msage.push(
					{
						head:'../../static/1x1img/1.jpg',
						name:'宋yue',
						position:'东道智能·HR',
						date:'昨天',
						msg:'等考虑工作的时候 可以优先考虑我们公司'
					}
				);}
			// },
			// created(){
			// 	onsole.log(111);
			// 	uni.getSystemInfo({
			// 		success: (res) => {
			// 			this.height = res.windowHeight
			// 			console.log(111)
			// 		}
			// 	})
			// }
			
		}
		// onShow() {
		// 	console.log(111);
		// 	uni.getSystemInfo({
		// 		success: (res) => {
		// 			this.height = res.windowHeight
		// 			console.log(111)
		// 		}
		// 	})
		// }
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
	.mainout {
		width: 100%;
		background-color: #F8F8F8;
		display: flex;
		justify-content: center;
	}
	.main{
		width: 90%;
		height: 400rpx;
		background-color: #0E9A93;
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
		width: 450rpx;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.msg-r{
		width: 60rpx;
		height: 100%;
		
	}
	.msg-l image{
		width: 120rpx;
		height: 120rpx;
		border-radius: 60rpx;
	}
	.line01{
		display: flex;
		justify-content: space-between;
	}
	.line02{
		display: flex;
	}
	.l01-l{
		display: flex;
	}
	.name{		
		
	}
	.position,.date{
		font-size: 20rpx;
		color: #AAAAAA;
	}
	.msg{
		font-size: 25rpx;
		color: #AAAAAA;
	}
	.msg-r image{
		width:40rpx;
		height: 40rpx;
	}
</style>
