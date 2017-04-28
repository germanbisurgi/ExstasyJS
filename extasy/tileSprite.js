var TileSprite = function (game, dx, dy, dw, dh, image) {

    "use strict";
    var self = this;

    // to achiev a scroller background we pre-render in a off screen canvas,
    // a new image and then it paint it content to the real canvas.
    var tmpCanvas = document.createElement('canvas');
    var tmpContext = tmpCanvas.getContext('2d');
    tmpCanvas.width = image.width * 2;
    tmpCanvas.height = image.height * 2;
    tmpContext.drawImage(image, 0, 0, image.width / 2, image.height / 2);
    tmpContext.drawImage(image, image.width / 2, 0, image.width / 2, image.height / 2);
    tmpContext.drawImage(image, 0, image.height / 2, image.width / 2, image.height / 2);
    tmpContext.drawImage(image, image.width / 2, image.height / 2, image.width / 2, image.height / 2);

    self.id = (Math.random() * 100000000 | 0).toString(16);
    self.type = 'tileSprite';
    self.name = null;
    self.image = tmpCanvas;
    self.sx = 0;
    self.sy = 0;
    self.sw = image.width / 2;
    self.sh = image.height / 2;
    self.dx = dx;
    self.dy = dy;
    self.dw = dw;
    self.dh = dh;

    self.scroll = function (direction, velocity) {
        if (direction ==='left') {
            self.sx += velocity;
            if (self.sx + self.sw >= self.sw * 2) {
                self.sx = 0;
            }
        }
        if (direction ==='right') {
            self.sx -= velocity;
            if (self.sx <= 0) {
                self.sx = self.sw;
            }
        }
        if (direction ==='up') {
            self.sy += velocity;
            if (self.sy + self.sh >= self.sh * 2) {
                self.sy = 0;
            }
        }
        if (direction ==='down') {
            self.sy -= velocity;
            if (self.sy <= 0) {
                self.sy = self.sh;
            }
        }
    }

}