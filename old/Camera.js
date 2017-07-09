var Camera = function() {
    "use strict";
    var self = this;

    self.x = 0;
    self.y = 0;
    self.w = window.innerWidth;
    self.h = window.innerHeight;

    self.move = function(x, y) {
        self.x = x;
        self.y = y;
    };

    self.fullScreen = function() {
        self.w = window.innerWidth;
        self.h = window.innerHeight;
    };

    self.centerOn = function(entity) {
        self.x = self.w / 2 - entity.GetPosition().x * Physics.scale,
        self.y = self.h / 2 - entity.GetPosition().y * Physics.scale
    };

}

/*var Camera = new Camera();

Camera.fullScreen();
_on(window, 'resize', function() {
    Camera.fullScreen();
});
*/