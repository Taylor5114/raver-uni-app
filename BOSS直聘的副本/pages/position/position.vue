<template>
	<view class="position">
		<view class="top">
			<view class="topin">
				<navigator  url="search/search" class="search">
					<view class="searchin">
						<image src="../../static/image/search.png" mode=""></image>
					</view>
					<p>搜索职位、公司</p>
				</navigator> 
			</view>
		</view>
		<forList :navs='navs'></forList>
		<view style="width: 100%;height: 10rpx;background: #F5F5F5;"></view>
		<forDiscussion :nape='nape'></forDiscussion>
	</view>
</template>

<script>
	import forList from '../../components/for-list.vue';
	import forDiscussion from '../../components/for-discussion.vue'
	export default {
		components:{
			forList,
			forDiscussion
		},
		data() {
			return {
				navs:[
					{title:'薪酬查询',img:'../../static/image/chaxun.png'},
					{title:'职业评测',img:'../../static/image/pingce.png'},
					{title:'热门问答',img:'../../static/image/wenda.png'},
					{title:'求值攻略',img:'../../static/image/gonglue.png'},
					{title:'直播招聘',img:'../../static/image/zhibo.png'},
				],
				nape:[
					{title:'推荐',
						content:[
							{cont:'今日热议',card:[{title:'财务那些事儿',heat:23869,ht:'讨论',matter:['财务总监是否应该参与企业管理'],vote:true}]},
							{cont:'大家在看',
								card:[
									{title:'多学一点销售技巧',heat:59303,ht:'关注',matter:['·财务总监是否应该参与企业管理','·财务总监是否应该参与企业管理']},
									{title:'多学一点销售技巧',heat:59303,ht:'关注',matter:['·财务总监是否应该参与企业管理','·财务总监是否应该参与企业管理']},
									{title:'多学一点销售技巧',heat:59303,ht:'关注',matter:['·财务总监是否应该参与企业管理','·财务总监是否应该参与企业管理']},
									{title:'多学一点销售技巧',heat:59303,ht:'关注',matter:['·财务总监是否应该参与企业管理','·财务总监是否应该参与企业管理']},
									{title:'多学一点销售技巧',heat:59303,ht:'关注',matter:['·财务总监是否应该参与企业管理','·财务总监是否应该参与企业管理']},
									{title:'多学一点销售技巧',heat:59303,ht:'关注',matter:['·财务总监是否应该参与企业管理','·财务总监是否应该参与企业管理']},
									{title:'多学一点销售技巧',heat:59303,ht:'关注',matter:['·财务总监是否应该参与企业管理','·财务总监是否应该参与企业管理']},
									{title:'多学一点销售技巧8',heat:59303,ht:'关注',matter:['·财务总监是否应该参与企业管理','·财务总监是否应该参与企业管理']},
								],
							},
						]
					},
					{title:'学生',
						content:[{cont:'专属推荐',isShow:true,
							imgcard:[
								{title:'在线求助',imgUrl:'../../static/raver/bg01.png'},
								{title:'实时热议',imgUrl:'../../static/raver/bg02.png'},
							],
					}]},
					{title:'人事/财务/行政',
						content:[
							{	all:true,
								card:[
									{title:'多学一点销售技巧',heat:59303,ht:'关注',matter:['·财务总监是否应该参与企业管理','·财务总监是否应该参与企业管理']},
									{title:'多学一点销售技巧',heat:59303,ht:'关注',matter:['·财务总监是否应该参与企业管理','·财务总监是否应该参与企业管理']},
									{title:'多学一点销售技巧',heat:59303,ht:'关注',matter:['·财务总监是否应该参与企业管理','·财务总监是否应该参与企业管理']},
									{title:'多学一点销售技巧',heat:59303,ht:'关注',matter:['·财务总监是否应该参与企业管理','·财务总监是否应该参与企业管理']},
									{title:'多学一点销售技巧',heat:59303,ht:'关注',matter:['·财务总监是否应该参与企业管理','·财务总监是否应该参与企业管理']},
								]
							}
						],
					},
					{title:'销售',
						content:[
							{	all:true,
								card:[
									{title:'多学一点销售技巧',heat:59303,ht:'关注',matter:['·财务总监是否应该参与企业管理','·财务总监是否应该参与企业管理']},
								]
							}
						],
					},
					{title:'服务业',
						content:[
							{	all:true,
								card:[
									{title:'多学一点销售技巧',heat:59303,ht:'关注',matter:['·财务总监是否应该参与企业管理','·财务总监是否应该参与企业管理']},
								]
							}
						],
					},
					{title:'教育培训',
						content:[
							{	all:true,
								card:[
									{title:'多学一点销售技巧',heat:59303,ht:'关注',matter:['·财务总监是否应该参与企业管理','·财务总监是否应该参与企业管理']},
								]
							}
						],
					},
					{title:'生产制造',
						content:[
							{	all:true,
								card:[
									{title:'多学一点销售技巧',heat:59303,ht:'关注',matter:['·财务总监是否应该参与企业管理','·财务总监是否应该参与企业管理']},
								]
							}
						],
					},
					{title:'运营',
						content:[
							{	all:true,
								card:[
									{title:'多学一点销售技巧',heat:59303,ht:'关注',matter:['·财务总监是否应该参与企业管理','·财务总监是否应该参与企业管理']},
								]
							}
						],
					},
					{title:'传媒',
						content:[
							{	all:true,
								card:[
									{title:'多学一点销售技巧',heat:59303,ht:'关注',matter:['·财务总监是否应该参与企业管理','·财务总监是否应该参与企业管理']},
								]
							}
						],
					},
					{title:'技术',
						content:[
							{	all:true,
								card:[
									{title:'多学一点销售技巧',heat:59303,ht:'关注',matter:['·财务总监是否应该参与企业管理','·财务总监是否应该参与企业管理']},
								]
							}
						],
					},
					{title:'供应链/物流',
						content:[
							{	all:true,
								card:[
									{title:'多学一点销售技巧',heat:59303,ht:'关注',matter:['·财务总监是否应该参与企业管理','·财务总监是否应该参与企业管理']},
								]
							}
						],
					},
					{title:'医疗健康',
						content:[
							{	all:true,
								card:[
									{title:'多学一点销售技巧',heat:59303,ht:'关注',matter:['·财务总监是否应该参与企业管理','·财务总监是否应该参与企业管理']},
								]
							}
						],
					},
					{title:'设计',
						content:[
							{	all:true,
								card:[
									{title:'多学一点销售技巧',heat:59303,ht:'关注',matter:['·财务总监是否应该参与企业管理','·财务总监是否应该参与企业管理']},
								]
							}
						],
					},
					{title:'房地产/建筑',
						content:[
							{	all:true,
								card:[
									{title:'多学一点销售技巧',heat:59303,ht:'关注',matter:['·财务总监是否应该参与企业管理','·财务总监是否应该参与企业管理']},
								]
							}
						],
					},
					{title:'金融',
						content:[
							{	all:true,
								card:[
									{title:'多学一点销售技巧',heat:59303,ht:'关注',matter:['·财务总监是否应该参与企业管理','·财务总监是否应该参与企业管理']},
								]
							}
						],
					},
					{title:'市场',
						content:[
							{	all:true,
								card:[
									{title:'多学一点销售技巧',heat:59303,ht:'关注',matter:['·财务总监是否应该参与企业管理','·财务总监是否应该参与企业管理']},
								]
							}
						],
					},
					{title:'高级管理',
						content:[
							{	all:true,
								card:[
									{title:'多学一点销售技巧',heat:59303,ht:'关注',matter:['·财务总监是否应该参与企业管理','·财务总监是否应该参与企业管理']},
								]
							}
						],
					},
					{title:'采购/贸易',
						content:[
							{	all:true,
								card:[
									{title:'多学一点销售技巧',heat:59303,ht:'关注',matter:['·财务总监是否应该参与企业管理','·财务总监是否应该参与企业管理']},
								]
							}
						],
					},
					{title:'旅游',
						content:[
							{	all:true,
								card:[
									{title:'多学一点销售技巧',heat:59303,ht:'关注',matter:['·财务总监是否应该参与企业管理','·财务总监是否应该参与企业管理']},
								]
							}
						],
					},
					{title:'咨询/翻译/法律',
						content:[
							{	all:true,
								card:[
									{title:'多学一点销售技巧',heat:59303,ht:'关注',matter:['·财务总监是否应该参与企业管理','·财务总监是否应该参与企业管理']},
								]
							}
						],
					}
				]
			}
		},
		methods: {
		
		}
	}
</script>

<style>
	.position{
		display: flex;
		flex-direction: column;
	}
	.top{
		width: 100%;
		height: 100rpx;
		background-color: #37C2BB;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.topin{
		width: 90%;
		height: 100rpx;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	.search{
		width: 65%;
		height: 60rpx;
		background-color: #5ACDC8;
		border-radius: 30rpx;
		color: #F6FDFD;
		font-size: 25rpx;
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
	
</style>
