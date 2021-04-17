<template>
	<view class="body">
		<view class="top">
			<navigator  url="search/search" class="search">
				<view class="searchin">
					<image src="../../static/image/search.png" mode=""></image>
				</view>
				<p>搜索职位、公司</p>
			</navigator>
		</view>
		<view class="main">
			<forList :navs='navs'></forList>
			<view class="today">
				<view class="today-l">
					<view class="date">
						<view class="week">
							周六
						</view>
						<view class="day">
							3
						</view>
					</view>
				</view>
				<view class="today-c">
					<p class='tc-tt'>淄博今日招聘</p>
					<p class='tc-pp'>淄川区、张店区等8个区县正在招...</p>
				</view>
				<view class="today-r">
					<button type="default">去看看</button>
				</view>
			</view>
			<view class="job">
				<view class="job-top">
					<h3>推荐职位</h3>
					<image src="../../static/image/bixin.png" mode=""></image>
				</view>
				<scroll-view scroll-y="true" :style='{height:height-topheight+"px"}' @scrolltolower='ttjob()'>
					<jobCard :topheight='topheight' :width='width' :height='height' :job='job'></jobCard>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	import forList from '../../components/for-list.vue';
	import jobCard from '../../components/job-card.vue';
	export default {
		components:{
			forList,
			jobCard
		},
		data() {
			return {
				width:0,
				height:0,
				topheight:0,
				navs:[
					{title:'附近工作',img:'/static/image/fujin.png'},
					{title:'找兼职',img:'/static/image/jianzhi.png'},
					{title:'最新发布',img:'/static/image/fabu.png'},
					{title:'找实习',img:'/static/image/shixi.png'},
					{title:'职位分类',img:'/static/image/fenlei.png'},
					{title:'热门公司',img:'/static/image/gongsi.png'},
					{title:'查工资',img:'/static/image/gongzi.png'},
					{title:'高薪优选',img:'/static/image/shoucang00.png'}
				],
				job:[
					{position:'运维工程师',pay:'3-6K·13薪',company:'广联云志',num:'0-20人',condition:['1年以内','大专','音视频 技术支持 调试'],
					img:'/static/1x1img/1.jpg',name:'张彩云 经理',address:'张店区 尚美第三城',state:'未融资'},
					
					{position:'Web前端开发工程师',pay:'7-10K·13薪',company:'北京锐安科技',num:'1000-9999人',condition:['在校/应届','本科','前端开发','HTML','CSS'],img:'/static/1x1img/2.jpg',name:'于志欣 部门经理',address:'北京',state:'未融资'},
					
					{position:'运维工程师',pay:'3-6K·13薪',company:'广联云志',num:'0-20人',condition:['1年以内','大专','音视频 技术支持 调试'],img:'/static/1x1img/4.jpg',name:'张彩云 经理',address:'张店区 尚美第三城',state:'未融资'},
					
					{position:'运维工程师',pay:'3-6K·13薪',company:'广联云志',num:'0-20人',condition:['1年以内','大专','音视频 技术支持 调试'],
					img:'/static/1x1img/5.jpg',name:'张彩云 经理',address:'张店区 尚美第三城',state:'未融资'},
					{position:'运维工程师',pay:'3-6K·13薪',company:'广联云志',num:'0-20人',condition:['1年以内','大专','音视频 技术支持 调试'],
					img:'/static/1x1img/6.jpg',name:'张彩云 经理',address:'张店区 尚美第三城',state:'未融资'},
					{position:'运维工程师',pay:'3-6K·13薪',company:'广联云志',num:'0-20人',condition:['1年以内','大专','音视频 技术支持 调试'],
					img:'/static/1x1img/7.jpg',name:'张彩云 经理',address:'张店区 尚美第三城',state:'未融资'},
					{position:'运维工程师',pay:'3-6K·13薪',company:'广联云志',num:'0-20人',condition:['1年以内','大专','音视频 技术支持 调试'],
					img:'/static/1x1img/8.jpg',name:'张彩云 经理',address:'张店区 尚美第三城',state:'未融资'},
					{position:'运维工程师',pay:'3-6K·13薪',company:'广联云志',num:'0-20人',condition:['1年以内','大专','音视频 技术支持 调试'],
					img:'/static/1x1img/9.jpg',name:'张彩云 经理',address:'张店区 尚美第三城',state:'未融资'},
					{position:'运维工程师',pay:'3-6K·13薪',company:'广联云志',num:'0-20人',condition:['1年以内','大专','音视频 技术支持 调试'],
					img:'/static/1x1img/.jpg',name:'张彩云 经理',address:'张店区 尚美第三城',state:'未融资'},
				]
			}
		},
		methods: {
			ttjob(){
				console.log("job+1")
				this.job.push(
					{position:'运维工程师++',pay:'3-6K·13薪',company:'广联云志',num:'0-20人',condition:['1年以内','大专','音视频 技术支持 调试'],
					img:'/static/1x1img/11.jpg',name:'张彩云 经理',address:'张店区 尚美第三城',state:'未融资'}
				);
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success:(res)=> {
					this.height = res.windowHeight;
					this.width = res.windowWidth;
				}
			});
		},
		onReady() {
			const query = uni.createSelectorQuery().in(this);     
			query.selectAll('.top').boundingClientRect(data => {   
			  console.log("得到布局位置信息" + JSON.stringify(data));
			  console.log("节点高度为" + data[0].height);  
			  this.topheight = data[0].height;
			}).exec();
		}
	}
</script>

<style>
	.body{
		overflow: auto;
		display: flex;
		flex-direction: column;
		background-color: #37C2BB;
	}
	.top{
		width: 100%;
		height: 150rpx;
		background-color: #37C2BB;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.search{
		width: 90%;
		height: 70rpx;
		background-color: #FFFFFF;
		border-radius: 35rpx;
		color: #AAAAAA;
		font-size: 30rpx;
		font-weight: bolder;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	.searchin{
		width: 15%;
		height: 70rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.search image{
		width: 35rpx;
		height: 35rpx;
	}
	.main{
		height: auto;
		background-color: #FFFFFF;
		border-top-right-radius: 30rpx;
		border-top-left-radius: 30rpx;
		overflow: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.today{
		width: 90%;
		height: 160rpx;
		display: flex;
		justify-content: space-around;
		align-items: center;
		background-color:#F3FCFB;
		border-radius: 10rpx;
	}
	.date{
		width: 80rpx;
		height: 80rpx;
		border-radius: 10rpx;
		overflow: hidden;
		border: 1rpx solid #EAEBEB;
	}
	.week{
		width: 100%;
		height: 25rpx;
		color: #FFFFFF;
		font-size: 16rpx;
		background-color: #37C2BB;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.day{
		width: 100%;
		height: 55rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.today-c{
		height: 90rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
	.tc-tt{
		font-size: 30rpx;
		font-weight: bold;
	}
	.tc-pp{
		font-size: 25rpx;
		color: #37C2BB;
	}
	.today-r button{
		width: 150rpx;
		height: 60rpx;
		border-radius: 30rpx;
		line-height: 60rpx;
		font-size: 26rpx;
		background-color: #37C2BB;
		color: #FFFFFF;
	}
	.job{
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.job-top{
		width: 90%;
		height: 130rpx;
		border-bottom: 1rpx solid #F6F6F6;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.job-top image{
		width: 50rpx;
		height: 50rpx;
	}
</style>
