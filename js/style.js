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
	// 导航切换
	// $('.navbar-nav li').on('click',function(){
	// 	console.log(1233)
	// 	$(this).attr('class', 'actives').siblings().attr('class', '')
	// 	// $(this).addClass('actives')
	// })
	var pageName = window.location.pathname
	var pageNews = pageName.split('/')[2]
	var tag = pageNews.split('.')[0]
	if (tag == 'housekeep') {
		$(".navbar-nav li[name='teamwork']").attr('class','actives')
		$(".navbar-nav li[name='teamwork']").find(".dropdown-menu li[name='housekeep'] a").css('color', 'rgba(0,162,62,1)')
	} else if (tag == 'teamwork') {
		$(".navbar-nav li[name='teamwork']").attr('class','actives')
		$(".navbar-nav li[name='teamwork']").find(".dropdown-menu li[name='teamworks'] a").css('color', 'rgba(0,162,62,1)')
	}
	$(".navbar-nav li[name='"+tag+"']").attr('class','actives')
	
	
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
	var pathname = window.location.pathname
	var news = pathname.split('/')[2]
	if(news == 'news.html'){
		var mobile_flag = isMobile()
		if(mobile_flag){
			$('.footer').hide()
		} else {
			$('.footer').show()
		}
		window.addEventListener('resize', function(){
			mobile_flag = isMobile()
			if(mobile_flag){
				$('.footer').hide()
			} else {
				$('.footer').show()
			}
		})
		console.log(mobile_flag)
		var page_count = 0
		var pageAll = 100
		var ispage = false
		window.addEventListener('scroll', function(){
			mobile_flag = isMobile()
			if(mobile_flag){
				let sHeight = $(document).height()
				let cHeight = $(window).height()
				let height = $(window).scrollTop()
				
				if (height + cHeight === sHeight) {
					if (page_count < pageAll) {
						page_count = page_count + 10
						if (page_count > pageAll) {
							ispage = false
						}
						// 加载数据
						console.log(page_count)
						this.ispage = true
					} else if (page_count === pageAll) {
					} else if (page_count > pageAll) {
						page_count = pageAll
						// this.SelectCity(this.city_id, this.type_id)
						ispage = false
					}
				}
			}
		})
	}
	// 判断移动还是pc
	function isMobile() {
		var userAgentInfo = navigator.userAgent;
		var mobileAgents = [ "Android", "iPhone", "SymbianOS", "Windows Phone", "iPad","iPod"];
		var mobile_flag = false;
		//根据userAgent判断是否是手机
		for (var v = 0; v < mobileAgents.length; v++) {
			if (userAgentInfo.indexOf(mobileAgents[v]) > 0) {
				mobile_flag = true;
				break;
			}
		}
		 var screen_width = window.screen.width;
		 var screen_height = window.screen.height;   
		 //根据屏幕分辨率判断是否是手机
		 if(screen_width < 500 && screen_height < 800){
			 mobile_flag = true;
		 }
		 return mobile_flag;
	}
	
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
	// var mySwiper = new Swiper('.swiper-container', {
	// 	autoplay: false,//可选选项，自动滑动
	// 	loop: true,
	// 	pagination: {
	// 		el: '.swiper-pagination',//自动隐藏
	// 		clickable :true,
	// 	},
	// 	navigation: {
	// 		nextEl: '.swiper-button-next',
	// 		prevEl: '.swiper-button-prev',
	// 	}
	// })
	// 锚点连接
	$('.abouts1').on('click', function () {
		window.scrollTo({
			top: 50,
			behavior: 'smooth'
		})
	})
	$('.abouts2').on('click', function () {
		window.scrollTo({
			top: 300,
			behavior: 'smooth'
		})
	})
	$('.abouts3').on('click', function () {
		window.scrollTo({
			top: 850,
			behavior: 'smooth'
		})
	})
	$('.abouts4').on('click', function () {
		window.scrollTo({
			top: 1300,
			behavior: 'smooth'
		})
	})
	$('.eles1').on('click', function () {
		window.scrollTo({
			top: 50,
			behavior: 'smooth'
		})
	})
	$('.eles2').on('click', function () {
		window.scrollTo({
			top: 500,
			behavior: 'smooth'
		})
	})
})