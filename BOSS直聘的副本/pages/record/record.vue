<template>
	<view>
		<setMsg :width='width' :height='height' :cont='cont'></setMsg>
	</view>
</template>

<script>
	import setMsg from '../../components/set-msg.vue';
	export default {
		components:{
			setMsg
		},
		data() {
			return {
				height:0,
				height:0,
				cont:[
					{
						title:'消息', 
						msage:[
							{
								head:'../../static/1x1img/7.jpg',
								name:'宋阳阳',
								position:'东道智能·HR',
								date:'昨天',
								msg:'你好，方便聊聊吗？'
							},
							{
								head:'../../static/1x1img/1.jpg',
								name:'宋阳阳',
								position:'东道智能·HR',
								date:'昨天',
								msg:'你好，方便聊聊吗？'
							},
							{
								head:'../../static/1x1img/2.jpg',
								name:'宋阳阳',
								position:'东道智能·HR',
								date:'昨天',
								msg:'你好，方便聊聊吗？'
							},
							{
								head:'../../static/1x1img/4.jpg',
								name:'宋阳阳',
								position:'东道智能·HR',
								date:'昨天',
								msg:'你好，方便聊聊吗？'
							},
							{
								head:'../../static/1x1img/5.jpg',
								name:'宋阳阳',
								position:'东道智能·HR',
								date:'昨天',
								msg:'你好，方便聊聊吗？'
							},
							{
								head:'../../static/1x1img/6.jpg',
								name:'宋阳阳',
								position:'东道智能·HR',
								date:'昨天',
								msg:'你好，方便聊聊吗？'
							},
							{
								head:'../../static/1x1img/7.jpg',
								name:'宋阳阳',
								position:'东道智能·HR',
								date:'昨天',
								msg:'你好，方便聊聊吗？'
							},
							{
								head:'../../static/1x1img/1.jpg',
								name:'宋阳阳',
								position:'东道智能·HR',
								date:'昨天',
								msg:'你好，方便聊聊吗？'
							},
							{
								head:'../../static/1x1img/1.jpg',
								name:'宋阳阳',
								position:'东道智能·HR',
								date:'昨天',
								msg:'你好，方便聊聊吗？'
							},
							{
								head:'../../static/1x1img/1.jpg',
								name:'宋阳阳',
								position:'东道智能·HR',
								date:'昨天',
								msg:'你好，方便聊聊吗？'
							},
							{
								head:'../../static/1x1img/1.jpg',
								name:'宋阳阳',
								position:'东道智能·HR',
								date:'昨天',
								msg:'你好，方便聊聊吗？'
							}
						]
					},
					{title:'看过我'},
					{title:'新职位'},
					{title:'对我感兴趣'},
					
				]
			}
		},
		methods: {
			ttmsg(){
				this.cont[0].msage.push(
					{
						head:'../../static/1x1img/1.jpg',
						name:'宋yue',
						position:'东道智能·HR',
						date:'昨天',
						msg:'等考虑工作的时候 可以优先考虑我们公司'
					}
				);
			}
		},onLoad() {
			//	获取屏幕尺寸
			uni.getSystemInfo({
					success: (res) => {
						this.height = res.windowHeight;
						this.width = res.windowWidth;
						console.log(res.windowWidth);
						
					}
				})
		}
		
	}
</script>

<style>

</style>
