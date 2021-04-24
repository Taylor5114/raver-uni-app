<template>
	<view class="content" :style="{height:height+'px'}">
		<topBar title='微信' class='topBar'></topBar>
		<view class="main" :style="{height:height-40+'px'}">
			<wxMsage :msage='msage'></wxMsage>
			<navigator url="/pages/mallMenu/index2">菜单</navigator>
		</view>
	</view>
</template>

<script>
	import topBar from '../../components/top-bar.vue';
	import wxMsage from '../../components/wx-msage.vue';
	export default {
		components:{
			topBar,wxMsage
		},
		data() {
			return {
				height:0,
				msage:[
					{	charthead:'/static/charthead/psb.jpeg',
						name:'Tim',
						time:'昨天',
						msg:'送你一台red要不要'
					},
					{	charthead:'/static/charthead/psb.jpeg',
						name:'Tim',
						time:'昨天',
						msg:'送你一台red要不要'
					},
					{	charthead:'/static/charthead/psb.jpeg',
						name:'Tim',
						time:'昨天',
						msg:'送你一台red要不要'
					},
					{	charthead:'/static/charthead/psb.jpeg',
						name:'Tim',
						time:'昨天',
						msg:'送你一台red要不要'
					},
					{	charthead:'/static/charthead/psb.jpeg',
						name:'Tim',
						time:'昨天',
						msg:'送你一台red要不要'
					},
					{	charthead:'/static/charthead/psb.jpeg',
						name:'Tim',
						time:'昨天',
						msg:'送你一台red要不要'
					},
				]
			}
		},
		onLoad() {

		},
		methods: {

		},
		onLoad() {
			uni.getSystemInfo({
				success: (res) => {
					this.height = res.windowHeight;
					console.log(this.height)
				}
			})
		}
	}
</script>

<style>
	.content{
		background-color: #FFFFFF;
	}
	.topBar{
		height: 40px;
	}
</style>
