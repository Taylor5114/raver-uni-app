<template>
	<view>
		<view id="app">
			<span @click="sub">-</span><span id="s1">{{count}}</span><span @click="add">{{word}}</span>
		</view>
	</view>
</template>

<script>
	export default {
		name:"set-count",
		// 组件传值
		props:{
			word: String,
			count: Number
		},
		data() {
			return {
			};
		},
		methods:{
			add(){
				this.$emit('raver')
			}
		}
	}
</script>

<style>
	#app{
		width: 300px;
		height: 50px;
		border-radius: 10px;
		border: 1px solid #999999;
		display: flex;
		overflow: hidden;
		background: rgb(201, 195, 195);
	}
	span{
		width: 100px;
		height: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 40px;
		color: aliceblue;
	}
	#s1{
		background: rgb(255, 255, 255);
		color: #999999;
	}
</style>
