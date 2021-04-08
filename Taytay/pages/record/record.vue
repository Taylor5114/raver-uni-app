<template>
	<view>
		<setVote :cont='cont'></setVote>
	</view>
</template>

<script>
	import setVote from '../../components/set-vote.vue';
	export default {
		components:{
			setVote
		},
		data() {
			return {
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
			
		}
	}
</script>

<style>

</style>
