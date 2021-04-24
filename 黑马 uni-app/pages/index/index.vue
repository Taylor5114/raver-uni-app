<template>
	<view class="content">
		<navigator url="../text/text">text</navigator>
		<navigator url="../view/view">view</navigator>
		<navigator url="../button/button">button</navigator>
		<navigator url="../image/image">image</navigator>
		<navigator url="../style/style">style</navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	
</style>
