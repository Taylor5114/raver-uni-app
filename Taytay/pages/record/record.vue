<template>
	<view>
		<setMsg :height='height' :cont='cont'></setMsg>
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
				cont:[
					{
						title:'消息', 
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
			uni.getSystemInfo({
					success: (res) => {
						this.height = res.windowHeight
						console.log(res.windowHeight)
						
					}
				})
		}
		
	}
</script>

<style>

</style>
