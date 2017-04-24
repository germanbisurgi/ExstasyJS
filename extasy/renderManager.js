var RenderManager = function(game, camera) {
    
    "use strict";
    var self = this;

    self.game = game;
    self.canvas = game.canvas;
    self.context = self.canvas.getContext("2d");
    
    self.clear = function() {
        self.context.clearRect(0, 0, self.game.width, self.game.height);
    }

    self.toRadians = function (degrees) {
        return degrees * 0.0174532925199432957;
    }

    self.toDegrees = function (radians) {
        return radians * 57.295779513082320876;
    }

    self.fullScreen = function() {
        self.canvas.width  = self.game.width;
        self.canvas.height = self.game.height;
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

    self.drawPattern = function(image, x1, y1, x2, y2) {
        var pattern = self.context.createPattern(image, 'repeat');
        self.context.fillStyle = pattern;
        self.context.fillRect(x1, y1, x2, y2);
    }

    self.drawCircle = function(centerX, centerY, radius) {
        self.context.beginPath();
        self.context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        self.context.fill();
        self.context.stroke();
    }

    self.draw = function(entities) {
        /*this.game.entities.sort(function(a, b) {
            return (a.position.z) - (b.position.z);
        });  
        self.clear();
        self.context.save();
        self.context.scale(this.game.cameraManager.zoom, this.game.cameraManager.zoom);
        self.context.translate(this.game.cameraManager.x, this.game.cameraManager.y);
        // rotate the camera
        this.game.entities.forEach(function (e) {
            if (e.sprite) {
                self.drawImage(e.sprite.sheet, e.sprite.x, e.sprite.y, e.sprite.w, e.sprite.h, (e.position.x - e.size.w / 2), (e.position.y - e.size.h / 2), e.size.w, e.size.h);
            } else if (e.pattern) {
                self.drawPattern(e.pattern, e.position.x, e.position.y, e.size.w, e.size.h);
            }
        });
        self.context.restore();*/
        entities.forEach(function (entity) {
            self.clear();
            if (entity.type === 'sprite') {
                self.context.save();
                self.drawRectangle(
                    entity.dx,
                    entity.dy,
                    entity.dw,
                    entity.dh
                );
                // move to the middle of where we want to draw our entity.
                self.context.translate(
                    entity.dx + (entity.dw / 2),
                    entity.dy + (entity.dh / 2)
                );
                // move to the middle of where we want to draw our entity.
                self.context.rotate(self.toRadians(entity.angle));
                self.drawImage(
                    entity.image,
                    entity.sx,
                    entity.sy,
                    entity.sw,
                    entity.sh,
                    entity.dw * -0.5,
                    entity.dh * -0.5,
                    entity.dw,
                    entity.dh
                );
                self.context.restore();
                // self.game.stop();

            }
        });
    }

}