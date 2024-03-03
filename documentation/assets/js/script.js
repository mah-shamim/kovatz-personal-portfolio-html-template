(function($){
	'use script';


	// Menu Responsive
	// $(document).ready(function(){
	// 	$('.mobile-menu').click(function(){
	// 		$('.menu ul').slideToggle();
	// 	});
	// });

	// Scroll Area
	$(document).ready(function(){
	    $('.scroll-area').click(function(){
	      	$('html').animate({
	        	'scrollTop' : 0,
	      	},700);
	      	return false;
	    });
	    $(window).on('scroll',function(){
	      	var a = $(window).scrollTop();
	      	if(a>400){
	            $('.scroll-area').slideDown(300);
	        }else{
	            $('.scroll-area').slideUp(200);
	        }
	    });
	});


	


	$('.menu ul').onePageNav({
		currentClass: 'current',
		changeHash: false,
		scrollSpeed: 150,
		scrollThreshold: 0.2,
	});



}(jQuery));