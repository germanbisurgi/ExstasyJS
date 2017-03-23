var Canvas = function(width, height) {
    
    "use strict";
    var self = this;

    self.canvas = _select("#canvas");
    self.context = self.canvas.getContext("2d");
    self.width = width ? width : window.innerWidth;
    self.height = height ? height : window.innerHeight;
    self.centerX = window.innerWidth / 2;
    self.centerY = window.innerHeight / 2;
    
    self.clear = function() {
        self.context.clearRect(0, 0, self.width, self.height);
    }

    self.fullScreen = function() {
        self.width  = window.innerWidth;
        self.height = window.innerHeight;
        self.canvas.width  = window.innerWidth;
        self.canvas.height = window.innerHeight;
        self.centerX = window.innerWidth / 2;
        self.centerY = window.innerHeight / 2;
    };

    self.write = function(text, x, y) {    
        self.context.font = '15px Arial';
        self.context.fillStyle = "white";
        self.context.fillText(text, x, y);
        self.context.restore();
    }

    self.rectangle = function(x1, y1, x2, y2) {
        self.context.beginPath();
        self.context.rect(x1, y1, x2, y2);
        self.context.fill();
        self.context.stroke();
    }

    self.circle = function(centerX, centerY, radius) {
        self.context.beginPath();
        self.context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        self.context.fill();
        self.context.stroke();
    }

    self.image = function(imageObj, sx, sy, sw, sh, dX, dY, dw, dh) {
        if (sw != null && sh != null && dX != null && dY != null && dw != null && dh != null) {
            self.context.drawImage(imageObj, sx, sy, sw, sh, dX, dY, dw, dh);
        } else if (sw != null && sh != null) {
            self.context.drawImage(imageObj, sx, sy, sw, sh);
        } else {
            self.context.drawImage(imageObj, sx, sy);
        }
    }

}

var Canvas = new Canvas();

Canvas.fullScreen();
_on(window, 'resize', function() {
    Canvas.fullScreen();
});
