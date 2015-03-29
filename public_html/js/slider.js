$(function(){
	$("#slides a").mouseover(function(){
		var image1 = $(this).children(".header-slider-one");
		var image2 = $(this).children(".header-slider-two");
		if(image2.length !== 0) {
			image2.show();
			image1.hide();
		}
	});
	$("#slides a").mouseout(function(){
		var image1 = $(this).children(".header-slider-one");
		var image2 = $(this).children(".header-slider-two");
		if(image2.length !== 0) {
			image1.show();
			image2.hide();
		}
	});
	$("#slides").slidesjs({
        width: 1600,
    	height: 548,
    	navigation: false,
    	play: {
    		auto: true,
    		pauseOnHover: true,
    		interval: 5000
    	},
    	effect: {
    		slide: {
    			speed: 2000
    		}
    	},
    	pagination: {
    		active: true
    	}
    });
 //    $('#category-slide').slick({
	// 	  responsive: [
	// 	    {
	// 	      breakpoint: 1024,
	// 	      settings: {
	// 	        slidesToShow: 6,
	// 	        slidesToScroll: 1,
	// 	        infinite: false,
	// 	        dots: true
	// 	      }
	// 	    },
	// 	    {
	// 	    	breakpoint: 1280,
	// 	    	settings: "unslick"
	// 	    }
	// 	    // You can unslick at a given breakpoint now by adding:
	// 	    // settings: "unslick"
	// 	    // instead of a settings object
	// 	]
	// });
});