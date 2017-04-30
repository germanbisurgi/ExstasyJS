var RenderManager = function (game, camera) {
    
    "use strict";
    var self = this;

    self.game = game;
    self.canvas = game.canvas;
    self.ctx = self.canvas.getContext("2d");
    
    self.clear = function () {
        self.ctx.clearRect(0, 0, self.game.width, self.game.height);
    }

    self.draw = function (entities) {
        self.clear();
        entities.forEach(function (e) {
            if (e.renderable) {
                if (e.type === 'sprite') {self.drawSprite(e);}
                if (e.type === 'tileSprite') {self.drawTileSprite(e);}
            }
        });
    }

    self.drawCircle = function (centerX, centerY, radius) {
        self.ctx.beginPath();
        self.ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        self.ctx.fill();
        self.ctx.stroke();
    }

    self.drawImage = function (imageObj, sx, sy, sw, sh, dX, dY, dw, dh) {
        if (sw != null && sh != null && dX != null && dY != null && dw != null && dh != null) {
            self.ctx.drawImage(imageObj, sx, sy, sw, sh, dX, dY, dw, dh);
        } else if (sw != null && sh != null) {
            self.ctx.drawImage(imageObj, sx, sy, sw, sh);
        } else {
            self.ctx.drawImage(imageObj, sx, sy);
        }
    }

    self.drawPattern = function (image, x1, y1, x2, y2) {
        var pattern = self.ctx.createPattern(image, 'repeat');
        self.ctx.fillStyle = pattern;
        self.ctx.fillRect(x1, y1, x2, y2);
    }

    self.drawRectangle = function(x1, y1, x2, y2) {
        self.ctx.fillStyle = 'white';
        self.ctx.beginPath();
        self.ctx.rect(x1, y1, x2, y2);
        self.ctx.fill();
        self.ctx.stroke();
    }

    self.drawSprite = function (e) {
        // self.drawRectangle(e.dx, e.dy, e.dw, e.dh);

        // save the state of the ctx.
        self.ctx.save();

        // move to the anchor point (origin) of the entity entity.
        self.ctx.translate(e.dx + (e.dw * e.ax), e.dy + (e.dh * e.ay));

        // rotate the canvas.
        self.ctx.rotate(self.toRadians(e.angle));

        // opacity
        self.ctx.globalAlpha = e.opacity;

        // shadows.
        self.ctx.shadowOffsetX = e.shadow.x;
        self.ctx.shadowOffsetY = e.shadow.y;
        self.ctx.shadowBlur = e.shadow.blur;
        self.ctx.shadowColor = e.shadow.color;

        self.drawText = function(text, x, y) {
        self.ctx.font = '16px Helvetica';
        self.ctx.fillStyle = "black";
        self.ctx.fillText(text, x, y);
        self.ctx.restore();
    }

        self.drawImage(
            e.image,
            e.sx,
            e.sy,
            e.sw,
            e.sh,
            e.dw * -e.ax,
            e.dh * -e.ay,
            e.dw,
            e.dh
        );

        // restore the state of the ctx.
        self.ctx.restore();
    }

    self.drawTileSprite = function(e) {    
        self.drawImage(
            e.image,
            e.sx,
            e.sy,
            e.sw,
            e.sh,
            e.dx,
            e.dy,
            e.dw,
            e.dh
        );
    }

    self.fullScreen = function () {
        self.canvas.width  = self.game.width;
        self.canvas.height = self.game.height;
    };

    self.fullScreen();

    self.toRadians = function (degrees) {
        return degrees * 0.0174532925199432957;
    }

    self.toDegrees = function (radians) {
        return radians * 57.295779513082320876;
    }

}