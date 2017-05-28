var RenderManager = function (game, camera) {
    
    "use strict";
    var self = this;

    self.game = game;
    self.canvas = game.canvas;
    self.ctx = self.canvas.getContext("2d");
    
    
    self.clear = function () {
        self.ctx.clearRect(0, 0, self.game.width, self.game.height);
    };

    self.createPattern = function (image, repeat) {
        return self.ctx.createPattern(image, repeat);
    };

    self.draw = function (entities) {
        camera = game.cameraManager.active;
        
        self.clear();

        self.ctx.save();

        // camera rotation
        self.ctx.translate((camera.w * camera.ax), (camera.h * camera.ay));
        self.ctx.rotate(self.toRadians(camera.angle));
        self.ctx.translate(-(camera.w * camera.ax), -(camera.h * camera.ay));

        //camera position
        self.ctx.translate(camera.x, camera.y);

        // camera zoom.
        self.ctx.scale(camera.zoom, camera.zoom);        

        // render entities
        entities.forEach(function (e) {
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

            // entity transforms.
            self.ctx.restore();
        });
        // camera transforms.
        self.ctx.restore();

        // camera opacity
        self.ctx.fillStyle = camera.lens;
        self.drawRectangle(camera.x, camera.y, camera.w, camera.h);
    };

    self.drawCircle = function (centerX, centerY, radius) {
        self.ctx.beginPath();
        self.ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        self.ctx.fill();
        self.ctx.stroke();
    };

    self.drawImage = function (imageObj, sx, sy, sw, sh, dX, dY, dw, dh) {
        if (sw !== null && sh !== null && dX !== null && dY !== null && dw !== null && dh !== null) {
            self.ctx.drawImage(imageObj, sx, sy, sw, sh, dX, dY, dw, dh);
        } else if (sw !== null && sh !== null) {
            self.ctx.drawImage(imageObj, sx, sy, sw, sh);
        } else {
            self.ctx.drawImage(imageObj, sx, sy);
        }
    };

    self.drawRectangle = function(x, y, w, h) {
        self.ctx.beginPath();
        self.ctx.rect(x, y, w, h);
        self.ctx.fill();
    };

    self.drawText = function(text, x, y) {
        self.ctx.font = '16px Helvetica';
        self.ctx.fillStyle = "black";
        self.ctx.fillText(text, x, y);
        self.ctx.restore();
    };

    self.fullScreen = function () {
        self.canvas.width  = self.game.width;
        self.canvas.height = self.game.height;
    };

    self.fullScreen();

    self.toRadians = function (degrees) {
        return degrees * 0.0174532925199432957;
    };

    self.toDegrees = function (radians) {
        return radians * 57.295779513082320876;
    };

};