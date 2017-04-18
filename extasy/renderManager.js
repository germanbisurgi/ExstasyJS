var RenderManager = function(game, camera) {
    
    "use strict";
    var self = this;

    self.game = game;
    self.canvas = game.canvas;
    self.context = self.canvas.getContext("2d");
    self.width = 400; //window.innerWidth;
    self.height = 200; // window.innerHeight;
    
    self.clear = function() {
        self.context.clearRect(0, 0, self.width, self.height);
    }

    self.fullScreen = function() {
        self.canvas.width  = self.width;
        self.canvas.height = self.height;
    };

    self.fullScreen();

    self.drawImage = function(imageObj, sx, sy, sw, sh, dX, dY, dw, dh) {
        if (sw != null && sh != null && dX != null && dY != null && dw != null && dh != null) {
            self.context.drawImage(imageObj, sx, sy, sw, sh, dX, dY, dw, dh);
        } else if (sw != null && sh != null) {
            self.context.drawImage(imageObj, sx, sy, sw, sh);
        } else {
            self.context.drawImage(imageObj, sx, sy);
        }
    }

    self.drawText = function(text, x, y) {    
        self.context.font = '15px Arial';
        self.context.fillStyle = "white";
        self.context.fillText(text, x, y);
        self.context.restore();
    }

    self.drawRectangle = function(x1, y1, x2, y2) {
        self.context.fillStyle = 'white';
        self.context.beginPath();
        self.context.rect(x1, y1, x2, y2);
        self.context.fill();
        self.context.stroke();
    }

    self.drawCircle = function(centerX, centerY, radius) {
        self.context.beginPath();
        self.context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        self.context.fill();
        self.context.stroke();
    }

    self.draw = function() {
        this.game.entities.sort(function(a, b) {
            return (a.position.z + a.position.y) - (b.position.z + b.position.y);
        });  
        self.clear();
        self.context.save();
        self.context.scale(this.game.cameraManager.zoom, this.game.cameraManager.zoom);
        self.context.translate(this.game.cameraManager.x, this.game.cameraManager.y);
        this.game.entities.forEach(function (e) {
            self.drawImage(e.sprite.sheet, e.sprite.x, e.sprite.y, e.sprite.w, e.sprite.h, e.position.x, e.position.y, e.size.w, e.size.h);
        });
        self.context.restore();
    }

}