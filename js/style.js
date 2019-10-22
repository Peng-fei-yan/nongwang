$(function(){
	// 首页展开--收起
	$('.ours_list span').on('click', function(){
		if ($(this).text() == '展开') {
			$(this).siblings('p').css('height', 'auto')
			$(this).text('收起')
		} else{
			$(this).siblings('p').css('height', '96px')
			$(this).text('展开')
		}
	})
	// 365商城轮播
	// $('#carousel-ad').carousel({
	//     pause: true,
	//     interval: false
	// });
	$(function(){
		$("#slidershow").carousel({
			// interval:1000
		});
		$("#slidershow a.left").click(function(){
			$(".carousel").carousel("prev");
		});
		$("#slidershow a.right").click(function(){
			$(".carousel").carousel("next");
		});
	});
})