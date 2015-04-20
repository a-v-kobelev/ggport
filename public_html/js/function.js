function rotateImage(img1, img2) {
	var image1 = $(img1);
	var image2 = $(img2);
	if(image2.length !== 0) {
		image2.show();
		image1.hide();
	}
}
function resizeAndScroll(obj) {
    $(obj).customScrollbar({fixedThumbHeight: 63, fixedThumbWidth: 60});
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
    var model_item = model.find("li");
    var width_item = model_item.width() + 30;
    var show = Math.floor(size[0] / width_item);
    var current_width = width_item * show;
    model.width(current_width);
}