$(function(){
		$(window).resize(function(){
			document.documentElement.style.fontSize=document.documentElement.clientWidth/3.75+'px';
		});
		document.documentElement.style.fontSize=document.documentElement.clientWidth/3.75+'px';
		$('.dian ul li').click(function(){
			$(this).addClass('act').siblings('.dian li').removeClass('act');
			var iNow=$(this).index();
			swiper.slideTo(iNow, 1000, false);
		})
		
		$('.btn').click(function(){
        $('.l_big').css('display','block')
		});
		$('.btn2').click(function(){
			$('.l_big').css('display','none')
		});
		$('.l_big ul li').eq(0).click(function(){
			$('.l_big').css('display','none')
		});
		$('.l_big ul li').eq(2).click(function(){
			$('.l_big').css('display','none')
		});
		var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
		onSlideChangeEnd: function(swiper){
	  		$('.dian ul li').eq(swiper.activeIndex).addClass('act').siblings('.dian li').removeClass('act');
   		}
		
    });
	});