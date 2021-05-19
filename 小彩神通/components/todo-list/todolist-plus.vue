<template>
	<view class="content" :style="{height:height+'px'}">
		<text class="tips" v-if="doing+done==0 && !rotate">点击下方加号添加记事本</text>
		<view class="list animated fadeInDown" v-if="doing+done!=0">
			<view class="nav" @click="hideInput()">
				<view class="left">
					<text>{{num}}</text>
				</view>
				<view class="right">
					<text v-for="(item,index) in navs" @click="updateView(index)" :class="{_nav:id==index}">{{item}}</text>
				</view>
			</view>
			<scroll-view scroll-y="true" :style="{height:height-35+'px'}" @click="hideInput()">
				<view :style="{height:height-30+'px'}">
					<!-- <view class="item " v-for="(item,index) in list" v-if='true && A'>
						<checkbox value="" :checked="item.finish" @click="finish(index)" :disabled="item.finish" />
						<text v-if="!item.finish">{{item.cont}}</text>
						<del v-if="item.finish">{{item.cont}}</del>
						<view class="del"><view></view></view>
					</view> -->
					
					
					<view class="item " v-for="(item,index) in list" v-if='true && A'>
						<scroll-view scroll-x="true" class="item">
							<view class="_item">
								<checkbox value="" :checked="item.finish" @click="finish(index)" :disabled="item.finish" />
								<text v-if="!item.finish">{{item.cont}}</text>
								<del v-if="item.finish">{{item.cont}}</del>
								<view class="del" @click="remove(index)"><view></view></view>
							</view>
						</scroll-view>
					</view>
					
					
					<view class="item" v-for="(item,index) in list" v-if='!item.finish && B'>
						<checkbox value="" :checked="item.finish" @click="finish(index)" :disabled="item.finish" />
						<text v-if="!item.finish">{{item.cont}}</text>
						<del v-if="item.finish">{{item.cont}}</del>
					</view>
					<view class="item" v-for="(item,index) in list" v-if='item.finish && C'>
						<checkbox value="" :checked="item.finish" @click="finish(index)" :disabled="item.finish" />
						<text v-if="!item.finish">{{item.cont}}</text>
						<del v-if="item.finish">{{item.cont}}</del>
					</view>
				</view>
			</scroll-view>
		</view>
		
		<view class="add" @click="showInput()">
			<image src="./image/add.png" mode="" :class="{rotate:rotate}"></image>
		</view>
		<view class="header animated fadeIn" v-if="rotate" >
			<input class="inp" type="text" placeholder="请输入要做的事" v-model="tt" :focus="rotate" @confirm="add()" />
			<view class="push" @click="add()">
				添加
			</view>
		</view>
	</view>
</template>

<script>

	export default {
		name:"todo-list",
			props:{
				list:Array,
				height:Number
			},
		data() {
			return {
				tt:'',
				doing: 1,
				done: 0,
				num: 1,
				A: true,
				B: false,
				C: false,
				rotate: false,
				navs:[
					'全部','进行中','已完成'
				],
				id: 0
			};
		},
		methods:{
			// 添加事件
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
					this.upSort();
				}else{
					uni.showToast({
						title:"不可上传空事件",
						icon: 'none'
					})
				};
			},
			//完成事件
			finish(index){
				if(!this.list[index].finish){
					this.list[index].finish = true;
					this.doing--;
					this.done++;
					this.updateNum();
					this.updateSort(index);
				};
			},
			// 显示输入框
			showInput(){
				this.rotate = !this.rotate; 
			},
			// 隐藏输入框
			hideInput(){
				this.rotate = false;
			},
			// 点击导航栏更新数量以及列表显示
			updateView(index){
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
			// 更新左上角数量
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
			// 更新列表排序
			updateSort(i){
				setTimeout(() => {
					var ts = this.list[i];
					this.list.splice(i,1);
					this.list.push(ts);
				}, 200);
			},
			// 更新全部列表
			upSort(){
				// for(var i=0;i<this.list.length;i++){
				// 	if(this.list[i].finish){
				// 		var ts = this.list[i];
				// 		this.list.splice(i,1);
				// 		this.list.push(ts);
				// 	}
				// };
				for(var x=0;x<this.list.length;x++){
					for(var i=0;i<this.list.length;i++){
						if(this.list[i].finish){
							var ts = this.list[i];
							this.list.splice(i,1);
							this.list.push(ts);
						}
					};
				};
			},
			// 滚动
			scroll(){
				uni.createSelectorQuery().select(".app").boundingClientRect(data=>{//目标节点
				　　uni.createSelectorQuery().select(".al").boundingClientRect((res)=>{//最外层盒子节点
				　　　　uni.pageScrollTo({
				　　　　　　duration:0,//过渡时间必须为0，uniapp bug，否则运行到手机会报错
				　　　　　　scrollTop:res.top - data.top,//滚动到实际距离是元素距离顶部的距离减去最外层盒子的滚动距离
				　　　　})
				　　}).exec()
				}).exec();
			},
			// 删除
			remove(i){
				this.list.splice(i,1);
				this.num = this.doing+this.done;
			}
		}
	}
</script>

<style>
	
	/* 解决小程序和app滚动条的问题 */
	/* #ifdef MP-WEIXIN || APP-PLUS */
	::-webkit-scrollbar {
	display: none;
	width: 0 !important;
	height: 0 !important;
	-webkit-appearance: none;
	background: transparent;
	color: transparent;
	}
	/* #endif */
	
	/* 解决H5 的问题 */
	/* #ifdef H5 */
	uni-scroll-view .uni-scroll-view::-webkit-scrollbar {
	/* 隐藏滚动条，但依旧具备可以滚动的功能 */
	display: none;
	width: 0 !important;
	height: 0 !important;
	-webkit-appearance: none;
	background: transparent;
	color: transparent;
	}
	/* #endif */
	
	
	
	.content{
		width: 750rpx;
		overflow: hidden;
	}
	.tips{
		position: absolute;
		top: 20%;
		color: #888888;
	}
	.nav{
		width: 100%;
		height: 35px;
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
		position: absolute; left: 50%; top: 90%;
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
		position: absolute; left: 5%; top: 78%;
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
		width: 675rpx;
		height: 70rpx;
		margin: 10rpx auto;
		display: flex;
		align-items: center;
		border-bottom: 1rpx solid #808080;
	}
	._item{
		width: 755rpx;
		/* height: 70rpx; */
		/* background-color: #007AFF; */
		display: flex;
		align-items: center;
		/* justify-content: space-between; */
		position: relative;
	}
	checkbox{
		margin-right:20rpx;
	}
	.del{
		width: 40rpx;
		height: 40rpx;
		background-color: #EE6666;
		border-radius: 50%;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		right: 0;
	}
	.del view{
		width: 30rpx;
		height: 8rpx;
		border-radius: 4rpx;
		background-color: #FFFFFF;
	}
</style>
