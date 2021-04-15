<template>
	<view>
		<view class="content" :style='{height:height+"px"}'>
			<view class="top">
				<view class="navlist">
					<text @click="change(index)" :class="{change:id==index}" 
					v-for="(nav,index) in navlist" v-text="nav"></text>
				</view>
			</view>
			<scroll-view class="main" scroll-y='true' :style='{height:height-topheight+"px",width:width+"px"}'>
				<swiper duration=200 disable-touch='true' :current="id" :style='{height:height+"px",width:width+"px"}'>
					<swiper-item>
						<scroll-view scroll-y="true" :style='{height:height-topheight+"px"}' @scrolltolower='ttmsg()'>
							<setMsg :topheight='topheight' :width='width' :height='height' :msage='msage'></setMsg>
						</scroll-view>
					</swiper-item>
					<swiper-item>
						<scroll-view scroll-y="true" :style='{height:height-topheight+"px"}' @scrolltolower='ttjob()'>
							<jobCard :topheight='topheight' :width='width' :height='height' :job='job'></jobCard>
						</scroll-view>
					</swiper-item>
					<swiper-item>
						<scroll-view scroll-y="true" :style='{height:height-topheight+"px"}' @scrolltolower='ttjob()'>
							<jobCard :topheight='topheight' :width='width' :height='height' :job='job'></jobCard>
						</scroll-view>
					</swiper-item>
					<swiper-item>
						<scroll-view scroll-y="true" :style='{height:height-topheight+"px"}' @scrolltolower='ttjob()'>
							<jobCard :topheight='topheight' :width='width' :height='height' :job='job'></jobCard>
						</scroll-view>
					</swiper-item>
				</swiper>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import setMsg from '../../components/set-msg.vue';
	import jobCard from '../../components/job-card.vue';
	export default {
		components:{
			setMsg,
			jobCard
		},
		data() {
			return {
				height:0,
				width:0,
				topheight:0,
				id: 0,
				navlist:['消息','看过我','新职位','对我感兴趣'],
				job:[
					{position:'运维工程师',pay:'3-6K·13薪',company:'广联云志',num:'0-20人',condition:['1年以内','大专','音视频 技术支持 调试'],
					img:'../../static/1x1img/1.jpg',name:'张彩云 经理',address:'张店区 尚美第三城',state:'未融资'},
					
					{position:'Web前端开发工程师',pay:'7-10K·13薪',company:'北京锐安科技',num:'1000-9999人',condition:['在校/应届','本科','前端开发','HTML','CSS'],img:'../../static/1x1img/2.jpg',name:'于志欣 部门经理',address:'北京',state:'未融资'},
					
					{position:'运维工程师',pay:'3-6K·13薪',company:'广联云志',num:'0-20人',condition:['1年以内','大专','音视频 技术支持 调试'],img:'../../static/1x1img/4.jpg',name:'张彩云 经理',address:'张店区 尚美第三城',state:'未融资'},
					
					{position:'运维工程师',pay:'3-6K·13薪',company:'广联云志',num:'0-20人',condition:['1年以内','大专','音视频 技术支持 调试'],
					img:'../../static/1x1img/5.jpg',name:'张彩云 经理',address:'张店区 尚美第三城',state:'未融资'},
					{position:'运维工程师',pay:'3-6K·13薪',company:'广联云志',num:'0-20人',condition:['1年以内','大专','音视频 技术支持 调试'],
					img:'../../static/1x1img/6.jpg',name:'张彩云 经理',address:'张店区 尚美第三城',state:'未融资'},
					{position:'运维工程师',pay:'3-6K·13薪',company:'广联云志',num:'0-20人',condition:['1年以内','大专','音视频 技术支持 调试'],
					img:'../../static/1x1img/7.jpg',name:'张彩云 经理',address:'张店区 尚美第三城',state:'未融资'},
					{position:'运维工程师',pay:'3-6K·13薪',company:'广联云志',num:'0-20人',condition:['1年以内','大专','音视频 技术支持 调试'],
					img:'../../static/1x1img/8.jpg',name:'张彩云 经理',address:'张店区 尚美第三城',state:'未融资'},
					{position:'运维工程师',pay:'3-6K·13薪',company:'广联云志',num:'0-20人',condition:['1年以内','大专','音视频 技术支持 调试'],
					img:'../../static/1x1img/9.jpg',name:'张彩云 经理',address:'张店区 尚美第三城',state:'未融资'},
					{position:'运维工程师',pay:'3-6K·13薪',company:'广联云志',num:'0-20人',condition:['1年以内','大专','音视频 技术支持 调试'],
					img:'../../static/1x1img/10.jpg',name:'张彩云 经理',address:'张店区 尚美第三城',state:'未融资'},
				],
				msage:[
					{
						head:'../../static/1x1img/1.jpg',
						name:'宋阳阳',
						position:'东道智能·HR',
						date:'昨天',
						msg:'等考虑工作的时候 可以优先考虑我们公司'
					},
					{
						head:'../../static/1x1img/1.jpg',
						name:'宋阳阳',
						position:'东道智能·HR',
						date:'昨天',
						msg:'等考虑工作的时候 可以优先考虑我们公司'
					},
					{
						head:'../../static/1x1img/1.jpg',
						name:'宋阳阳',
						position:'东道智能·HR',
						date:'昨天',
						msg:'等考虑工作的时候 可以优先考虑我们公司'
					},
					{
						head:'../../static/1x1img/1.jpg',
						name:'宋阳阳',
						position:'东道智能·HR',
						date:'昨天',
						msg:'等考虑工作的时候 可以优先考虑我们公司'
					},
					{
						head:'../../static/1x1img/1.jpg',
						name:'宋阳阳',
						position:'东道智能·HR',
						date:'昨天',
						msg:'等考虑工作的时候 可以优先考虑我们公司'
					},
					{
						head:'../../static/1x1img/1.jpg',
						name:'宋阳阳',
						position:'东道智能·HR',
						date:'昨天',
						msg:'等考虑工作的时候 可以优先考虑我们公司'
					},
					{
						head:'../../static/1x1img/1.jpg',
						name:'宋阳阳',
						position:'东道智能·HR',
						date:'昨天',
						msg:'等考虑工作的时候 可以优先考虑我们公司'
					},
					{
						head:'../../static/1x1img/1.jpg',
						name:'宋阳阳',
						position:'东道智能·HR',
						date:'昨天',
						msg:'等考虑工作的时候 可以优先考虑我们公司'
					},
					{
						head:'../../static/1x1img/1.jpg',
						name:'宋阳阳',
						position:'东道智能·HR',
						date:'昨天',
						msg:'等考虑工作的时候 可以优先考虑我们公司'
					},
					
				]
			}
		},
		methods: {
			change(index){
				this.id = index;
			},
			ttmsg(){
				console.log("msg+1")
				this.msage.push(
					{
						head:'../../static/1x1img/1.jpg',
						name:'宋yue',
						position:'东道智能·HR',
						date:'昨天',
						msg:'等考虑工作的时候 可以优先考虑我们公司'
					}
				);
			},
			ttjob(){
				console.log("job+1")
				this.job.push(
					{position:'运维工程师',pay:'3-6K·13薪',company:'广联云志',num:'0-20人',condition:['1年以内','大专','音视频 技术支持 调试'],
					img:'../../static/1x1img/11.jpg',name:'张彩云 经理',address:'张店区 尚美第三城',state:'未融资'}
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
		onReady() {  //需要注意的是放在onload中是不行的
			const query = uni.createSelectorQuery().in(this);     //这样写就只会选择本页面组件的类名box的
			query.selectAll('.top').boundingClientRect(data => {   //回调函数，data中存储的是这些元素节点（每个节点的信息存为一个对象）的位置信息
			  console.log("得到布局位置信息" + JSON.stringify(data));
			  console.log("节点的高度为" + data[0].height);  //打印元素
			  this.topheight = data[0].height;
			}).exec();
		}
		
	}
</script>

<style>
	.content{
		display: flex;
		flex-direction: column;
	}
	.top{
		width: 100%;
		height: 100rpx;
		background-color: #37C2BB;
		display: flex;
		justify-content: center;
		color: #8DD8D5;
	}
	.main{
		flex-grow: 1;
	}
	.navlist{
		width: 90%;
		height: 100%;
		margin-left: 5%;
		display: flex;
		align-items: center;
	}
	.navlist text{
		margin-right: 20rpx;
	}
	.change{
		font-size: 40rpx;
		color: #FFFFFF;
	}
</style>
