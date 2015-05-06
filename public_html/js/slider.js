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
    	height: 520,
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

    var size = getPageSize();
    if(size[0] <= 1275) {
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
    }    

	window.matchMedia('screen and (min-width: 1024px) and (max-width: 1270px)')
        .addListener(function(mql) {
        	var owl = $("#category-slide");
            if (mql.matches) {
            	if(owl.length !== 0) {
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
				}
            } else {
            	if(owl.length !== 0) {
			    	owl.data('owlCarousel').destroy();
				  	$(".category-container .next").unbind("click").addClass("hidden");
				  	$(".category-container .prev").unbind("click").addClass("hidden");
			  	}
        	}
    });
    $("#header_select_info").styler({
    	selectPlaceholder: ''
    });

    $(".filter-icon a").mouseover(function(){
    	$(this).addClass("icon-hover")
    })
	.mouseout(function(){
		$(this).removeClass("icon-hover");
	})
	.click(function(event){
		$(this).toggleClass("icon-active");
		event.preventDefault();
	});

	
	$(".project-list .project-item.active").mouseover(function(){
		$(this).addClass("project-active-hover");
	})
	.mouseout(function(){
		$(this).removeClass("project-active-hover");	
	});
	$(".project-list .project-item.active .project-block-right").mouseover(function(){
		$(this).addClass("project-block-right-hover");
	})
	.mouseout(function(){
		$(this).removeClass("project-block-right-hover");	
	});


	$(".project-list li span.active").click(function(){
		$(".project-list ul").toggleClass("project-all");
	});


	$(document).mouseup(function (e) {
	    var container = $(".project-list");
	    if (container.has(e.target).length === 0){
	        $(".project-list ul").removeClass("project-all");
	    }
	});

	$(".filter-menu-category-choice li a").click(function(event){
		$(this).toggleClass("active");
		event.preventDefault();
	});

	$(".filter-item-parent-scroll").click(function(event){
		var items = $(".filter-item-parent-scroll").not(this);
		items.each(function(){
			$(this).removeClass("active-item");
		});
		$(this).toggleClass("active-item");
		var ul = $(this).next();
		ul.toggleClass("active-item");
		var scroll = ul.find(".filter-menu-category-block-scroll");
		resizeAndScroll(scroll);
		event.preventDefault();
	});

	$(window).resize(function(){
		showItem(".model-container ul");
		showItem(".model-list-block ul");
		showModelItem(".catalog-block ul");
	});
	showItem(".model-container ul");
	showItem(".model-list-block ul");
	showModelItem(".catalog-block ul");

	$(".filter-item-parent-noscroll").click(function(event){
		var items = $(".filter-item-parent").not(this);
		$(this).toggleClass("active-item");
		var ul = $(this).next();
		ul.toggleClass("active-item");
		$("#change-pagination, #change-pagination-two, #change-pagination-three").styler({
	    	selectPlaceholder: ''
	    });
		event.preventDefault();
	});

	$(".filter-submenu-block-choice_letter span").click(function(event){
		var items = $(".filter-submenu-block-choice_letter span").not(this);
		items.each(function(){
			$(this).removeClass("active");
		});
		$(this).toggleClass("active");
		event.preventDefault();
	});

	$(".filter-menu-brands li .filter-submenu-block a").click(function(event){
		$(this).toggleClass("active");
		event.preventDefault();
	});

	$(".filter-options-icon span").click(function(){
		var items = $(".filter-options-icon span").not(this);
		items.each(function(){
			$(this).removeClass("active");
		});
		$(this).toggleClass("active");
	});

	$('.show_title[title!=""]').qtip({
		position: {
			my: 'bottom left',
	        at: 'top center'
    	}
	});
	$('.show_title_horizontal[title!=""]').qtip({
		position: {
			my: 'center left',
	        at: 'center right'
    	}
	});
	$('.show_title_html').qtip({
		position: {
			my: 'bottom left',
	        at: 'top center'
    	},
    	content: {
    		text: function(api) {
    			return $(this).next().html();
    		},
    	},
	});

	$("#filter-params-toggle").click(function(event){
		var container = $("#filter-container");
		container.toggleClass("filter-container-close");
		$("#catalog-container").toggleClass("catalog-container-full");
		showModelItem(".catalog-block ul");
		var height = $(".catalog-items").innerHeight();
		console.log(height);
		if(container.hasClass("filter-container-close")) {
			container.find(".filter-params-content-close").css("height", height);
		}
		else {
			container.find(".filter-params-content-close").css("height", "0px");
		}
		event.preventDefault();
	});

	$("#detail-catalog-slider ul").owlCarousel({
    	items : 5,
    	responsive: false
  	});

	var owl = $(".detail-catalog-slider ul");
   	owl.owlCarousel({
    	items : 5,
    	responsive: false
  	});
  	$(".detail-catalog-slider .next").click(function(event){
	    owl.trigger('owl.next');
	    event.preventDefault();
	});
	$(".detail-catalog-slider .prev").show().click(function(){
	    owl.trigger('owl.prev');
	    event.preventDefault();
	});

	$(".detail-catalog-slider a.detail-catalog-item").click(function(event){
		var detail = $("#catalog-detail-img img");
		var a = detail.parent("a");
		detail.attr("src", $(this).attr("href"));
		a.attr("href", $(this).attr("href"));
		event.preventDefault();
	});

	$(".fancybox").fancybox({
		padding: 30,
		wrapCSS: 'detail-photo',
		helpers : {
	        overlay : {
	            css : {
	                'background' : 'rgba(255, 255, 255, 0.5)'
	            }
	        }
	    }
	});

	$(".modal").fancybox({
		padding: 30,
		type: 'inline',
		wrapCSS: 'detail-photo',
		scrolling: 'no',
		autoSize : false,
		minHeight: 640,
		onUpdate: function(){
			var height = $(".fancybox-wrap").find(".help-list-item-content").height();
			$(".fancybox-inner").height(height);
		},
		helpers : {
	        overlay : {
	            css : {
	                'background' : 'rgba(255, 255, 255, 0.5)'
	            }
	        }
	    }
	});

	$(".fancybox-detail").click(function(event){
		var item = $(".detail-catalog-item");
		var f = [];
		f[0] = $(this).attr("href");
		item.each(function(i, val){
			if($.inArray($(this).attr("href"), f) === -1 ) {
				f[i + 1] = $(this).attr("href");
			}
		});
		var width = $(".catalog-detail-info").width();
		$.fancybox.open(f, {
        	padding : 30,
        	wrapCSS: 'detail-photo',
        	helpers : {
		        overlay : {
		            css : {
		                'background' : 'rgba(255, 255, 255, 0.5)'
		            }
		        }
		    }
    	});
		event.preventDefault();
	});

    $('#tab a').click(function(event) {
	    if ($(this).attr('class') != $('#tab').attr('class') ) {
	        $('#tab').attr('class',$(this).attr('class'));
	    }
	    event.preventDefault();
    });

    $(".select").styler({
    	selectPlaceholder: ''
    });

    $(".tarif-block .tarif-list tr").mouseover(function(){
    	$(this).addClass("tarif-list-hover");
    }).
    mouseout(function(){
    	$(this).removeClass("tarif-list-hover");
    });

    $(".personal-comment-sort").click(function(event){
    	$(this).toggleClass("up");
    	event.preventDefault();
    });
});