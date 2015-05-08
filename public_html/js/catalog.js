$(function(){
	$(".filter-menu-category-block-scroll").customScrollbar({
		fixedThumbHeight: 63,
		fixedThumbWidth: 60,
		hScroll: false,
		onCustomScroll: function(event, scrollData){
			var $this = $(this);
			var top = $this.prev(".filter-menu-category-top");
			console.log(top);
			var bottom = $this.next(".filter-menu-category-bottom");
			if(top.length > 0) {
	        	if(scrollData.direction === "down") {
	        		if(scrollData.scrollPercent > 5) {
	        			top.css("height", "30px");
	        		}
	        		if(scrollData.scrollPercent === 100) {
	        			bottom.css("height", "0px");
	        		}
	        	}
	        	if(scrollData.direction === "up") {
	        		if(scrollData.scrollPercent < 3) {
	        			top.css("height", "0px");
	        		}
	        	}
	        	if(scrollData.scrollPercent < 100) {
        			bottom.css("height", "30px");
        		}
        	}
      }
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
});
