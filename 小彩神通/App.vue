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
		},
		globalData: {  
			touxiang: ''
		}
	}
</script>

<style lang="scss">
    @import "uview-ui/index.scss";
	@import './common/animate.css';
	.content{
		background-color: #F8F8F8;
	}
</style>
