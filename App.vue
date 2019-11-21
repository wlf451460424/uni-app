<script>
	export default {
		onLaunch: function () {
			console.log('App Launch')
			
			setTimeout(() => {
				uni.setTabBarBadge({
					index: 1,
					text: '8'
				});
				uni.showTabBarRedDot({
					index: 3
				});
			}, 1000);
		},
		onShow: function () {
			console.log('App Show')
		},
		onHide: function () {
			console.log('App Hide')
		}
	}
</script>

<style>
	/* uni.css - 通用组件、模板样式库，可以当作一套ui库应用 */
	@import './common/uni.css';
	
	view,
	scroll-view,
	swiper,
	swiper-item,
	cover-view,
	cover-image,
	icon,
	text,
	rich-text,
	progress,
	button,
	checkbox,
	form,
	input,
	label,
	radio,
	slider,
	switch,
	textarea,
	navigator,
	audio,
	camera,
	image,
	video {
		box-sizing: border-box;
	}
	
	
</style>
