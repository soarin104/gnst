$(function(){

//SITE CHANGE
$(".header .inner .site h5").on("click",function(){
	$(".header .inner .site p").stop().slideToggle("fast");
})

//GNB HOVER (PC/MB)
if($("body").width() > 1000){
	$(".header .inner nav .depLi1").on("mouseenter",function(){
		$(this).find(".depUl2").stop().slideDown("fast");
		$(this).addClass("on");
	})

	$(".header .inner nav .depLi1").on("mouseleave",function(){
		$(this).find(".depUl2").stop().slideUp("fast");
		$(this).removeClass("on");
	})
}else{
	$(".header .inner nav .depLi1 > a").on("click",function(){
		$(this).siblings(".depUl2").stop().slideToggle("fast");
		$(this).closest("li").siblings().find(".depUl2").stop().slideUp("fast");
		$(this).closest("li").toggleClass("on");
		$(this).closest("li").siblings().removeClass("on");
		return false;
	})
}

//MOBILE MENU
$(".allMenuBtn").on("click",function(){
	$(this).toggleClass("on");
	$(".header nav").fadeToggle("fast");
	$(".header nav").toggleClass("on");
})

//MAIN VISUAL
$(".visual .slideUl").slick({
	arrows: true,
	dots: true,
})

//SOLUTION SLIDE
$(".solution .imgUl").slick({
	dots: true,
	autoplay: true,
	arrows: false,
})



})