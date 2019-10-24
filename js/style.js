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
	// 导航箭头切换
	$('.dropdown').on('click',function(){
		var status = $(this).find('.dropdown-menu').css('display')
		if(status == 'none'){
			$(this).find('a>img').css('transform', 'rotate(180deg)')
		} else {
			$(this).find('a>img').css('transform', 'rotate(0deg)')
		}
	})
	// 新闻切换
	// 动态传值
	var tabIndex = 1
	var len = $('.ele_news_title li').length
	for(var i = 0; i<len; i++){
		if(tabIndex == 1) {
			$('.ele_news_title li').eq(0).addClass('actives').siblings().removeClass('actives')
		} else if(tabIndex == 2){
			$('.ele_news_title li').eq(1).addClass('actives').siblings().removeClass('actives')
		}
	}
	if(tabIndex == 1){
		$('.news_status').css('display', 'block')
		$('.news_zixun').css('display', 'none')
	} else{
		$('.news_status').css('display', 'none')
		$('.news_zixun').css('display', 'block')
	}
	//新闻下拉加载
	 // let sHeight = $(document).height()
	 // let cHeight = $(window).height()
	 // let height = $(window).scrollTop()
	 // var page_count = 0
	 // var pageAll = 100
	 // var ispage = false
	 // if (height + cHeight === sHeight) {
	 //   if (page_count < pageAll) {
	 //     page_count = page_count + 10
	 //     if (page_count > pageAll) {
	 //       ispage = false
	 //     }
	 //     // 加载数据
	 //     this.ispage = true
	 //   } else if (page_count === pageAll) {
	 //   } else if (page_count > pageAll) {
	 //     page_count = pageAll
	 //     // this.SelectCity(this.city_id, this.type_id)
	 //     ispage = false
	 //   }
	 // }
	
	
	$('.ele_news_title li').on('click', function(){
		$(this).addClass('actives').siblings().removeClass('actives')
		tabIndex = $(this).attr('tabindex')
		if(tabIndex == 1){
			$('.news_status').css('display', 'block')
			$('.news_zixun').css('display', 'none')
		} else{
			$('.news_status').css('display', 'none')
			$('.news_zixun').css('display', 'block')
		}
	})
	// 电商页面
	$('.city_content_left li').on('click', function(){
		$(this).addClass('actives').siblings().removeClass('actives')
	})
	// 轮播
	$(function(){
		$("#slidershow").carousel({
			interval:false
		});
		$("#slidershow a.left").click(function(){
			$(".carousel").carousel("prev");
		});
		$("#slidershow a.right").click(function(){
			$(".carousel").carousel("next");
		});
	});
})