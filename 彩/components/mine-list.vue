<template>
	<view>
		<view class="" v-for="item in list">
			<view class="left">
				<text v-text="item.title"></text>
				<text v-text="item._title"></text>
			</view>
			<view class="right">
				<text v-text="item.tips"></text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"mine-list",
		props:{
			list: Array
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>

</style>
