<template>
	<view>
		 	 <scroll-view scroll-y="true" @scrolltolower="a"  class="s">
				 <block v-for="(item,index) in list" :key="index">
					    <view class="item">{{item.title}}</view>
						
				 </block>
					<view class="load">加载中....</view>
		 	 </scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[]
			}
		},
		onLoad() {
			// uni.onTabBarMidButtonTap(()=>{
			// 	 console.log(22)
			// })
			uni.request({
			    url: 'https://mock.mengxuegu.com/mock/6073a51f56076a4a764844f5/job/indexlist', //仅为示例，并非真实接口地址。
			   
			    success: (res) => {
			        console.log(res.data);
			        this.list =res.data;
			    }
			});
			
		},
		
		onNavigationBarSearchInputClicked(){
			uni.navigateTo({
				url:"../test/test"
				})
		 },
		 onNavigationBarButtonTap(e){
			 // console.log(e);
			 switch(e.index){
				 case 0 :
				 console.log("这是左边");
				 break;
				 case 1:
				 console.log("这是右边");
				 break;
			 }
		 },
	
		methods: {
			a(){
				this.list.push({title:"4"});
			}
		}
	}
</script>

<style>
	.s{
		width: 100%;
		height: 800px;
	}
	 .item{
		 width: 300px;
		 height: 300px;
		 background-color: #4CD964;
	 }
	 .load{
		 text-align: center;
		 padding: 15px;
	 }
</style>
