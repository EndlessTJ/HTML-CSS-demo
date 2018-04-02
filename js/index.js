$(function(){
	
	//初始化尺寸
	function resize(originSize,type){
		var type=type || "x";
		var clientW=$(window).width();
		var clientH=$(window).height();
		if(type=="x"){
			$("html").css({
				fontSize:clientW/originSize*100+"px"
			})
		}else if(type=="y"){
			$("html").css({
				fontSize:clientH/originSize*100+"px"
			})
		}
	}
	resize(750)
	
	
//	swiper动画

	var myswiper=new Swiper(".swiper-container",{
		freeMode : true,
		direction : 'vertical',
		slidesPerView : "auto"
	})
	
	var myswiperBanner=new Swiper(".swiper-container-banner",{
		effect:"fade",
		freeMode : true,
		autoplay:5000
		
	})
	var myswiperNav=new Swiper(".swiper-container-nav",{
		freeMode : true
	})
	
	var myswiperRecommend=new Swiper(".swiper-container-recommend",{
		freeMode : true,
		spaceBetween : 10
	})
	
	var myswiperComments=new Swiper(".swiper-container-comments",{
		freeMode : true,
		spaceBetween : 16,
		slidesPerView : "auto"
	})
	var myswiperMenu=new Swiper(".swiper-container-menu",{
		freeMode : true,
		direction : 'vertical',
//		slidesPerView : "auto"
	})
	//导航栏透明度
	$('.swiper-container').on('touchmove', function(e) {
   	var col=myswiper.translate/-270;
   	if(col>1){
   		col=1
   	}
   	console.log(col)
   	$(".nav").css({
   		background:"-webkit-linear-gradient(left, rgba(24,141,164,"+col+") 28%, rgba(58,6,123,"+col+") 100%);"
   	})

	})
	
	
//	侧边菜单

	$(".menu").click(function(){
		$(".menu-box").css({
			left:0
		})
	})
	$(".menu-box").on("touchstart",function(e){
		alert(e.offsetX)
		
		
	})
})
