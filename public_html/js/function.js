function rotateImage(img1, img2) {
	var image1 = $(img1);
	var image2 = $(img2);
	if(image2.length !== 0) {
		image2.show();
		image1.hide();
	}
}