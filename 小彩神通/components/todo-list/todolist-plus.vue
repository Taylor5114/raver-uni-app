<template>
	<view class="content">
		<text class="tips" v-if="doing+done==0 && !rotate">点击下方加号添加记事本</text>
		<view class="list animated fadeInDown" v-if="doing+done!=0">
			<view class="nav">
				<view class="left">
					<text>{{num}}</text>
				</view>
				<view class="right">
					<text v-for="(item,index) in navs" @click="updateView(index)" :class="{_nav:id==index}">{{item}}</text>
				</view>
			</view>
			<view class="item animated fadeInLeft" v-for="(item,index) in list" v-if='true && A'> 
				<checkbox value="" :checked="item.finish" @click="finish(index)" :disabled="item.finish" />
				<text v-if="!item.finish">{{item.cont}}</text>
				<del v-if="item.finish">{{item.cont}}</del>
			</view>
			<view class="item animated fadeInLeft" v-for="(item,index) in list" v-if='!item.finish && B'>
				<checkbox value="" :checked="item.finish" @click="finish(index)" :disabled="item.finish" />
				<text v-if="!item.finish">{{item.cont}}</text>
				<del v-if="item.finish">{{item.cont}}</del>
			</view>
			<view class="item animated fadeInLeft" v-for="(item,index) in list" v-if='item.finish && C'>
				<checkbox value="" :checked="item.finish" @click="finish(index)" :disabled="item.finish" />
				<text v-if="!item.finish">{{item.cont}}</text>
				<del v-if="item.finish">{{item.cont}}</del>
			</view>
		</view>
		
		<view class="add" @click="showInput()">
			<image src="./image/add.png" mode="" :class="{rotate:rotate}"></image>
		</view>
		<view class="header animated fadeInDown" v-if="rotate" >
			<input class="inp" type="text" placeholder="请输入要做的事" v-model="tt" @confirm="add()" />
			<view class="push" @click="add()">
				添加
			</view>
		</view>
	</view>
</template>

<script>

	export default {
		name:"todo-list",
		data() {
			return {
				list:[],
				tt:'',
				doing: 0,
				done: 0,
				num: 0,
				A: true,
				B: false,
				C: false,
				rotate: false,
				navs:[
					'全部','进行中','已完成'
				],
				id: 0,
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
					this.updateNum();
					
				}else{
					uni.showToast({
						title:"不可上传空事件",
						icon: 'none'
					})
				}
			},
			finish(index){
				if(!this.list[index].finish){
					this.list[index].finish = true;
					this.doing--;
					this.done++;
					this.updateNum();
					setTimeout(() => {
						this.updateSort(index);
					}, 50);
				};
			},
			showInput(){
				this.rotate = !this.rotate; 
			},
			updateView(index){
				this.rotate = false;
				this.id = index;
				this.updateNum();
				switch(index){
					case 0:
					this.A = true;
					this.B = false;
					this.C = false;
					break;
					case 1:
					this.A = false;
					this.B = true;
					this.C = false;
					break;
					case 2:
					this.A = false;
					this.B = false;
					this.C = true;
					break;
				}
			},
			updateNum(){
				switch(this.id){
					case 0:
					this.num = this.doing+this.done;
					break;
					case 1:
					this.num = this.doing;
					break;
					case 2:
					this.num = this.done
				}
			},
			updateSort(index){
				var ts = this.list[index];
				this.list.splice(index,1);
				this.list.push(ts);
			}
		}
	}
</script>

<style>
	.content{
		width: 100%;
	}
	.tips{
		position: absolute;
		top: 20%;
		color: #888888;
	}
	.nav{
		width: 100%;
		height: 70rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.left{
		width: 40rpx;
		height: 40rpx;
		border-radius: 50%;
		background-color: #007AFF;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.left text{
		color: #FFFFFF;
	}
	._nav{
		color: #007AFF;
	}
	.right text{
		margin-left: 30rpx;
	}
	.add{
		width: 100rpx;
		height: 100rpx;
		background-color: #FFFFFF;
		box-shadow: 0px 0px 10px #888888;;
		border-radius: 50%;
		position: absolute; left: 50%; bottom: 0;
		transform: translate(-50%, -50%);
	}
	.add image{
		width: 100%;
		height: 100%;
		transition: 0.2s;
	}
	.rotate{
		transform:rotate(45deg);
		transition: 0.2s;
	}
	.header{
		width: 90%;
		height: 80rpx;
		background-color: #FFFFFF;
		border-radius: 20rpx;
		box-shadow: 5px 5px 10px #888888;
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute; left: 5%; bottom: 15%;
	}
	.push{
		width: 20%;
		height: 70rpx;
		border-radius: 20rpx;
		box-shadow: 0px 0px 10px #888888;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 35rpx;
		color: #888888;
	}
	.inp{
		width: 80%;
		height: 80rpx;
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
		border-bottom: 1rpx solid #808080;
	}
	checkbox{
		margin-right:20rpx;
	}
</style>
