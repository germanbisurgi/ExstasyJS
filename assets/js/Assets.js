var Assets = function() {

	"use strict";
	var self = this;

	self.images = {};
	self.ready = false;

	self.loadImages = function(images) {
		self.ready = false;
		var totImages = _count(images);
		var loadedImages = 0;
		images.forEach(function(image, i) {
			self.images[image.name] = new Image();
			self.images[image.name].onload = function() { 
				loadedImages++;
				if (loadedImages === totImages) {
					self.ready = true;
				}
			}
			self.images[image.name].src = image.path;
		});
	}

}

var Assets = new Assets();


