<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import "uview-ui/index.scss";
	.content{
		display: flex;
		flex-direction: column;
		align-items: center;
		background: linear-gradient(to bottom, #ec008c, #fc6767);
	}
</style>
