/**
  * Nivo Slider初始化脚本
  * Nivo Slider的详细设置参考http://nivo.dev7studios.com/support/jquery-plugin-usage/
  */

<!-- .slider-wrapper -->
jQuery(document).ready(function($)  {
	// nivoslider init
	if( $('#slider').length > 0 ) {
		$('#slider').nivoSlider({
			effect: 'random',/*可选效果有sliceDow,random等，参考设置文档 */
			animSpeed:800,
			pauseTime:3000,
			directionNav:true, /* 设置为false关闭方向导航 */
			controlNav:true, /* 设置为false关闭按钮导航 */
			captionOpacity:0.8 
		});
	}
});

