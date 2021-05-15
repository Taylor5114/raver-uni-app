<template>
	<view class="content">
		<view class="header">
			<input class="inp" type="text" placeholder="请输入要做的事" v-model="tt" @confirm="add()" />
		</view>
		<view class="tt_0">
			<text class="title">正在进行</text>
			<view class="count">
				{{doing}}
			</view>
		</view>
		<view class="list">
			<view class="item" v-for="(item,index) in list" v-if="!item.finish"> 
				<checkbox value="" :checked="item.finish" @click="finish(index)" />
				{{item.cont}}
			</view>
		</view>
		<view class="tt_0">
			<text class="title">已完成</text>
			<view class="count">
				{{done}}
			</view>
		</view>
		<view class="list">
			<view class="item" v-for="(item,index) in list" v-if="item.finish"> 
				<checkbox value="" :checked="item.finish" disabled/>
				<del>{{item.cont}}</del>
			</view>
		</view>
	</view>
</template>

<script>

	export default {
		name:"todo-list",
		data() {
			return {
				list:[
					{cont:'Queen',finish:false},
					{cont:'Queen',finish:true},
					{cont:'Queen',finish:false},
				],
				tt:'',
				doing: 2,
				done: 1
			};
		},
		methods:{
			add(){
				if(this.tt.trim().length >0){
					this.list.push(
						{
							cont:this.tt,
							finish:false
						}
					);	
					this.tt = '';
					this.doing++;
				}else{
					uni.showToast({
						title:"不可上传空事件",
						icon: 'none'
					})
				}
			},
			finish(index){
				this.list[index].finish = true;
				this.doing--;
				this.done++;
			}
		}
	}
</script>

<style>
	.content{
		width: 100%;
	}
	.header{
		width: 100%;
		height: 120rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.inp{
		width: 90%;
		height: 80rpx;
		/* background-color: #007AFF; */
		border-radius: 20rpx;
		box-shadow: 5px 5px 10px #888888;
		text-align: center;
		color: #888888;
	}
	.tt_0{
		width: 90%;
		height: 70rpx;
		border-bottom: 1rpx solid #888888;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.tt_0 text{
		font-size: 40rpx;
		color: #909090;
	}
	.count{
		width: 40rpx;
		height: 40rpx;
		box-shadow: 0px 0px 10px #888888;
		font-size: 30rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
	}
	.list{
		width: 90%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around
	}
	.item{
		width: 100%;
		height: 70rpx;
		margin: 10rpx auto;
		display: flex;
		align-items: center;
	}
	del{
		color: #888888;
	}
	checkbox{
		margin-right:20rpx;
	}
</style>
