//Initialize carousel
$('.carousel').carousel({
  	interval: 10000	
})
//Add and remove class to animate hamburger on click
$('.hamburger_menu').click(function(){
	$(this).toggleClass('hamburger_open');
});
//Lazy load employee images when they appear in vieport
$("img.lazy").lazyload({
	effect : "fadeIn"
});
