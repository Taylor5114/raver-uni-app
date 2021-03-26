<template>
	<view>
		<!-- 调用组件 -->
		<setCount :word='str' :count='x' @raver='click'></setCount>
	</view>
</template>

<script>
	// 引入组件
	import setCount from '../../components/set-count.vue';
	export default {
		// 注册组件
		components:{
			setCount
		},
		data() {
			return {
				str:'增加',
				x: 1
			}
		},
		methods: {                                                 
			click(){
				this.x++;
			}
		}
	}
</script>

<style>

</style>
