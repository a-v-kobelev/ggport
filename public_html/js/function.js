function rotateImage(img1, img2) {
	var image1 = $(img1);
	var image2 = $(img2);
	if(image2.length !== 0) {
		image2.show();
		image1.hide();
	}
}
function resizeAndScroll(obj) {
    $(obj).customScrollbar({
      fixedThumbHeight: 63,
      fixedThumbWidth: 60,
      hScroll: false
    });
}
function  getPageSize(){
   var xScroll, yScroll;

   if (window.innerHeight && window.scrollMaxY) {
           xScroll = document.body.scrollWidth;
           yScroll = window.innerHeight + window.scrollMaxY;
   } else if (document.body.scrollHeight > document.body.offsetHeight){ // all but Explorer Mac
           xScroll = document.body.scrollWidth;
           yScroll = document.body.scrollHeight;
   } else if (document.documentElement && document.documentElement.scrollHeight > document.documentElement.offsetHeight){ // Explorer 6 strict mode
           xScroll = document.documentElement.scrollWidth;
           yScroll = document.documentElement.scrollHeight;
   } else { // Explorer Mac...would also work in Mozilla and Safari
           xScroll = document.body.offsetWidth;
           yScroll = document.body.offsetHeight;
   }

   var windowWidth, windowHeight;
   if (self.innerHeight) { // all except Explorer
           windowWidth = self.innerWidth;
           windowHeight = self.innerHeight;
   } else if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict Mode
           windowWidth = document.documentElement.clientWidth;
           windowHeight = document.documentElement.clientHeight;
   } else if (document.body) { // other Explorers
           windowWidth = document.body.clientWidth;
           windowHeight = document.body.clientHeight;
   }

   // for small pages with total height less then height of the viewport
   if(yScroll < windowHeight){
           pageHeight = windowHeight;
   } else {
           pageHeight = yScroll;
   }

   // for small pages with total width less then width of the viewport
   if(xScroll < windowWidth){
           pageWidth = windowWidth;
   } else {
           pageWidth = xScroll;
   }

   return [pageWidth,pageHeight,windowWidth,windowHeight];
}

function showItem(obj) {
	var size = getPageSize();
	var model = $(obj);
  if(model.length > 0) {
    var model_item = model.find("li");
    var width_item = model_item.innerWidth();
    var show = Math.floor(size[0] / width_item);
    var current_width = width_item * show;
    model.css("width", current_width);
  }
}

function showModelItem(obj) {
  var size = getPageSize();
  var model = $(obj);
  if(model.length > 0) {
    var model_item = model.find("li");
    var width_item = model_item.innerWidth() + 30;
    var show = Math.floor(size[0] / width_item - 1);
    var current_width = Math.floor((width_item * (show - 1)) + 40);
    model.css("width", current_width);
  }
}

function showCatalogItem(obj) {
  var container = $(obj);
  var size = container.width();
  var model_item = container.find("li");
  var width_item = model_item.width();
  var show = Math.floor(size / width_item);
  var marginRight = Math.floor((size - show * width_item) / show);
  model_item.css("margin-right", marginRight);
}

function SetHeightFilter() {
  var height = $(".catalog-items").innerHeight();
  var container = $("#filter-container");
  var obj = container.find(".filter-params-content-close");
  if(container.hasClass("filter-container-close")) {
    obj.css("height", height);
  }
  else {
    obj.css("height", "0px");
    resizeAndScroll(".filter-menu-category-block-scroll");
  }
}