$(function(){
	$("#slides a").mouseover(function(){
		rotateImage($(this).children(".header-slider-one"), $(this).children(".header-slider-two"));
	});
	$("#slides a").mouseout(function(){
		rotateImage($(this).children(".header-slider-two"), $(this).children(".header-slider-one"));
	});

	$(".banner-middle.banner-middle-left a").
	mouseover(function(){
		rotateImage($(this).children(".banner-left-one"), $(this).children(".banner-left-two"));
	}).
	mouseout(function(){
		rotateImage($(this).children(".banner-left-two"), $(this).children(".banner-left-one"));
	});

	$(".banner-middle.banner-middle-right a").
	mouseover(function(){
		rotateImage($(this).children(".banner-right-one"), $(this).children(".banner-right-two"));
	}).
	mouseout(function(){
		rotateImage($(this).children(".banner-right-two"), $(this).children(".banner-right-one"));
	});
	
	$("#slides").slidesjs({
        width: 1600,
    	height: 548,
    	navigation: false,
    	play: {
    		auto: true,
    		pauseOnHover: true,
    		interval: 8000
    	},
    	effect: {
    		slide: {
    			speed: 4000
    		}
    	},
    	pagination: {
    		active: true
    	}
    });
	var mql = window.matchMedia('screen and (max-width: 1270px)');
	window.matchMedia('screen and (max-width: 1270px)')
        .addListener(function(mql) {
            if (mql.matches) {
                var owl = $("#category-slide");
		    	owl.owlCarousel({
			    	items : 6,
			    	responsive: false
			  	});
			  	$(".category-container .next").click(function(){
				    owl.trigger('owl.next');
				}).removeClass("hidden");
				  $(".category-container .prev").show().click(function(){
				    owl.trigger('owl.prev');
				}).removeClass("hidden");
            } else {
                var owl = $("#category-slide");
		    	owl.data('owlCarousel').destroy();
			  	$(".category-container .next").unbind("click").addClass("hidden");
			  	$(".category-container .prev").unbind("click").addClass("hidden");
        	}
    });
    $("#header_change_lang, #header_select_info").styler({
    	selectPlaceholder: ''
    });
});